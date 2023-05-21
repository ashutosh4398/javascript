const addMovieModal = document.getElementById("add-modal");
const modalBackdropEl = document.getElementById("backdrop");
const openMovieModalBtn = document.querySelector("header button");
const addMovieModalButtons = addMovieModal.querySelector(".modal__actions");
const entryTextElement = document.querySelector("#entry-text");
const movieListElement = document.getElementById("movie-list");

const addMovieBtn = addMovieModalButtons.lastElementChild;
const cancelModalBtn = addMovieModalButtons.firstElementChild;

// user inputs for adding movies
// practicing using Static NodeList
const userInputs = addMovieModal.querySelectorAll("input");
// const movieTitleElement = addMovieModal.querySelector("#title");
// const movieImageURLElement = addMovieModal.querySelector("#image-url");
// const movieRatingElement = addMovieModal.querySelector("#rating");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextElement.style.display = "block";
  } else {
    entryTextElement.style.display = "none";
  }
};

const renderNewMovieElement = (movieTitle, movieUrl, movieRating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${movieUrl}" alt="${movieTitle}" />
        </div>
        <div class="movie-element__info">
            <h2>${movieTitle}</h2>
            <p>${movieRating}/5 ratings</p>
        </div>
    `;

  movieListElement.appendChild(newMovieElement);
};

const toggleBackdrop = () => {
  modalBackdropEl.classList.toggle("visible");
};

const toggleMovieModalHandler = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
  clearMovieInputs();
};

const clearMovieInputs = () => {
  for (const inputEl of userInputs) {
    // leveraging the non real time sync between html attribute and dom property
    inputEl.value = inputEl.getAttribute("value");
  }
};

const addMovieHandler = () => {
  const movieTitle = userInputs[0].value;
  const movieUrl = userInputs[1].value;
  const movieRating = parseFloat(userInputs[2].value.trim());

  if (
    !movieTitle.trim() ||
    !movieUrl.trim() ||
    !movieRating ||
    isNaN(movieRating) ||
    movieRating < 1 ||
    movieRating > 5
  ) {
    return alert("Please enter valid values");
  }

  const newMovie = {
    title: movieTitle,
    url: movieUrl,
    rating: movieRating,
  };
  movies.push(newMovie);
  updateUI();
  renderNewMovieElement(movieTitle, movieUrl, movieRating);
  toggleMovieModalHandler();
  clearMovieInputs();
};

openMovieModalBtn.addEventListener("click", toggleMovieModalHandler);
cancelModalBtn.addEventListener("click", toggleMovieModalHandler);
addMovieBtn.addEventListener("click", addMovieHandler);
