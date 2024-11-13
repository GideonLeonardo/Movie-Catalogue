import NowPlaying from "../Views/Pages/now-playing";
import Upcoming from "../Views/Pages/upcoming";
import Detail from "../Views/Pages/details";
import Like from "../Views/Pages/like";

const routes = {
  "/": NowPlaying, // default page
  "/now-playing": NowPlaying,
  "/upcoming": Upcoming,
  "/detail/:id": Detail,
  "/like": Like,
};

export default routes;
