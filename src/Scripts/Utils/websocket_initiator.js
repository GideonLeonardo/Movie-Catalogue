import NotificationHelper from "./notification-helper";
import CONFIG from "../Globals/config";

const WebSocketInitiator = {
  init(url) {
    const webSocket = new webSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const movie = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`,
      },
    });
  },
};

export default WebSocketInitiator;
