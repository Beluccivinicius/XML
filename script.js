const btn = document.getElementById("joke-btn");

const norrisJokes = function (e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const divJokes = document.getElementById("joke");
      const data = JSON.parse(this.responseText);

      divJokes.innerText = `${data.value}`;
    } else {
      divJokes.innerText = `something went wrong`;
    }
  };
  xhr.send();
};

btn.addEventListener("click", norrisJokes);
document.addEventListener("DOMContentLoaded", norrisJokes);

//using fetch

// async function norrisJokes(e) {
//   e.preventDefault();
//   const response = await fetch("https://api.chucknorris.io/jokes/random");
//   const jokes = await response.json();

//   const divJokes = document.getElementById("joke");

//   divJokes.innerText = `${jokes.value}`;
// }
