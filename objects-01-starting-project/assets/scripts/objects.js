const addMovieBtnEl = document.getElementById("add-movie-btn");
const searchMovieBtnEl = document.getElementById("search-btn");
const movieListEl = document.getElementById("movie-list");
const movies = [];

const renderMovies = (filter = "") => {
  if (movies.length === 0) {
    movieListEl.classList.remove("visible");
  } else {
    movieListEl.classList.add("visible");
  }

  // NOT AN IDEAL WAY TO RESET INNERHTML
  // in production we should go with .appendChild() or append() on movieListEl
  // now since we also have to practice forEach loop, we ar using this approach
  // technically the moviesListEl is getting rendered every time as we add new element
  movieListEl.innerHTML = "";
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let title = movie?.info?.title + " - ";

    for (const key in movie.info) {
      if (key !== "title") {
        // dynamic key access using square brackets
        title += `${key}: ${movie.info[key]},`;
      }
    }

    movieEl.textContent = title;
    movieListEl.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (!title.trim() || !extraName.trim() || !extraValue.trim()) {
    return;
  }

  const newMovie = {
    info: {
      title, // shorthand notation variable name = keyname
      [extraName]: extraValue, // dynamic keyname generation
    },
    id: movies.length + 1,
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtnEl.addEventListener("click", addMovieHandler);
searchMovieBtnEl.addEventListener("click", searchMovieHandler);
