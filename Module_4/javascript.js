const search = document.querySelector("form");
const showCm = document.querySelector("#shows");
const dialoog = document.querySelector("dialog");
const closeM = document.querySelector("#closeModel");
const titleE = document.querySelector("#modalTitle");

closeM.addEventListener("click", () => dialoog.close());

search.addEventListener("submit", async function(submitEvent) {
  submitEvent.preventDefault();
  const formData = new FormData(this);
  const search = new URLSearchParams(formData).toString();
  const fetchData = await fetch(this.action + search);
  const jsonData = await fetchData.json();

  if(jsonData.length) showCm.innerHTML = "";
  else showCm.innerHTML = "<p>No results</p>";
  jsonData.forEach(result => {
    const {show} = result;
    const containerE = document.createElement("div");
    containerE.classList.add("show");
    const nameEl = document.createElement("h2");
    nameEl.textContent = show.name;
    console.log(nameEl)

    const detailsEl = document.createElement("a");
    detailsEl.href = show.url;
    detailsEl.target = "details";
    detailsEl.textContent = "More details";

    detailsEl.addEventListener("click", () => {
      dialoog.showModal();
      modalTitleElem.textContent = show.name;
    });

    const img = document.createElement("img");
    img.src = show.image?.medium ?? "./no-image.jpeg";

    const genress = document.createElement("div");
    genress.innerHTML += "<h2>Genres</h2>"
    genress.classList.add("genres");
    show.genres.forEach(genre => {
      const genreElem = document.createElement("p");
      genreElem.textContent = genre;
      genreElem.classList.add("genre");
      genress.appendChild(genreElem);
    });

    const summaryElem = document.createElement("div");
    summaryElem.classList.add("summary");
    summaryElem.innerHTML = show.summary;
    containerE.append(nameEl, img, summaryElem, detailsEl);
    if(show.genres?.length) img.after(genress)
    showCm.append(containerE);
  });
});
