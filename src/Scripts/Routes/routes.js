import NowPlaying from "../Views/Pages/now-playing";
import Upcoming from "../Views/Pages/upcoming";
import Detail from "../Views/Pages/details";

const routes = {
  "/": NowPlaying, // default page
  "/now-playing": NowPlaying,
  "/upcoming": Upcoming,
  "/detail/:id": Detail,
};

export default routes;
