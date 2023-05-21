const addMovieModal = document.getElementById("add-modal");
const modalBackdropEl = document.getElementById("backdrop");
const openMovieModalBtn = document.querySelector("header button");
const addMovieModalButtons = addMovieModal.querySelector(".modal__actions");
const entryTextElement = document.querySelector("#entry-text");
const movieListElement = document.getElementById("movie-list");

const deleteMovieModal = document.getElementById("delete-modal");
const deleteMovieModalButtons =
  deleteMovieModal.querySelector(".modal__actions");

const MODAL_ELEMENTS = [addMovieModal, deleteMovieModal];

const addMovieBtn = addMovieModalButtons.lastElementChild;
const cancelModalBtn = addMovieModalButtons.firstElementChild;

// delete modal buttons
let deleteMovieBtn = deleteMovieModalButtons.lastElementChild;
let cancelDeleteModalBtn = deleteMovieModalButtons.firstElementChild;

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

const closeModal = (modalElement) => {
  modalElement.classList.remove("visible");
  modalBackdropEl.classList.remove("visible");
};

const openModal = (modalElement) => {
  modalElement.classList.add("visible");
  modalBackdropEl.classList.add("visible");
};

const deleteMovie = (id) => {
  console.log("DELETE CALLED!!");
  let movieIndex = null;
  let iterator = 0;
  for (const movie of movies) {
    console.log(
      `CURRENT MOVIE ID: ${movie.movieId}, MOVIE TO BE DELETED: ${id}`
    );
    if (movie.movieId === id) {
      movieIndex = iterator;
      break;
    }
    iterator++;
  }
  console.log(movieIndex);
  if (movieIndex === null) {
    return;
  }
  movies.splice(movieIndex, 1);
  // MODERN APPROACH
  movieListElement.children[movieIndex].remove();
  // older approach
  // const movieElement = movieListElement.children[movieIndex];
  // movieListElement.removeChild(movieElement);
  closeModal(deleteMovieModal);
  updateUI();
};

const deleteMovieHandler = (id) => {
  // show modal
  console.log("CURRENT MOVIE ID: ", id);
  openModal(deleteMovieModal);
  //   there will be multiple event listeners for how many times deleteMovieHandler is called;
  // thus when we click on it, all the click events are executed
  // thus it gives unexpected variables;

  // thus we need to create a deep copy of these buttons, replace the old ones with new clones
  const cancelDeleteModalBtnClone = cancelDeleteModalBtn.cloneNode(true);
  cancelDeleteModalBtnClone.addEventListener(
    "click",
    closeModal.bind(null, deleteMovieModal)
  );
  // replace the original node with cloned node
  cancelDeleteModalBtn.replaceWith(cancelDeleteModalBtnClone);
  //   changed global variable as it was still pointing to older reference
  cancelDeleteModalBtn = cancelDeleteModalBtnClone;

  const deleteMovieBtnClone = deleteMovieBtn.cloneNode(true);
  deleteMovieBtnClone.setAttribute("data-node-id", id);
  deleteMovieBtnClone.addEventListener("click", deleteMovie.bind(null, id));
  deleteMovieBtn.replaceWith(deleteMovieBtnClone);
  //   MAIN STEP TO MODIFY GLOBAL VARIABLE
  deleteMovieBtn = deleteMovieBtnClone;
};

const renderNewMovieElement = (movieId, movieTitle, movieUrl, movieRating) => {
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
  newMovieElement.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
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
  const movieId = Math.random().toString();
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
    movieId,
    title: movieTitle,
    url: movieUrl,
    rating: movieRating,
  };
  movies.push(newMovie);
  updateUI();
  renderNewMovieElement(movieId, movieTitle, movieUrl, movieRating);
  closeModal(addMovieModal);
  clearMovieInputs();
};

const closeAllModals = () => {
  for (const modalElem of MODAL_ELEMENTS) {
    closeModal(modalElem);
  }
  clearMovieInputs();
};

openMovieModalBtn.addEventListener(
  "click",
  openModal.bind(null, addMovieModal)
);
cancelModalBtn.addEventListener("click", closeModal.bind(null, addMovieModal));
addMovieBtn.addEventListener("click", addMovieHandler);
modalBackdropEl.addEventListener("click", closeAllModals);
