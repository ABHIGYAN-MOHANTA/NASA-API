document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const date = document.querySelector("input").value;
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=oePbfZlXwFwDad1JnyjzqKwOTyHGhV0eh95yTvzN&date=" +
    date;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        document.querySelector("img").classList.remove("remove");
        document.querySelector("img").src = data.hdurl;
        document.querySelector("h3").innerText = data.explanation;
        document.querySelector("iframe").classList.add("remove");
      } else {
        document.querySelector("iframe").classList.remove("remove");
        document.querySelector("iframe").src = data.url;
        document.querySelector("h3").innerText = data.explanation;
        document.querySelector("img").classList.add("remove");
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

const year = new Date().getFullYear();
document.querySelector('footer p').innerText = `Copyright ⓒ ${year}`