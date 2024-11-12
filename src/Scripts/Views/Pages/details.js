import UrlParser from "../../Routes/url-parser";
import TheMovieDbSource from "../../Data/themoviedb-source";

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector("#movie");
    movieContainer.innerHTML = createMovieDetailTemplate(movie);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;
