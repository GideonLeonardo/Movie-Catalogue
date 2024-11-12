import TheMovieDbSource from "../../Data/themoviedb-source";
import { createMovieItemTemplate } from "../Templates/template-creator";

const NowPlaying = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const moviesContainer = document.querySelector("#movies");
    const movies = await TheMovieDbSource.nowPlayingMovies();
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
