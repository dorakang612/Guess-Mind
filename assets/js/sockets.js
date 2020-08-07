/*
    Client Side Socket Controller.

    1. 알림동작 (notifications.js)
*/

import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMsg } from "./chat";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = (newSocket) => {
  socket = newSocket;
};

export const initSockets = (newSocket) => {
  const { events } = window;
  updateSocket(newSocket);
  socket.on(events.newUser, handleNewUser);
  socket.on(events.disconnected, handleDisconnected);
  socket.on(events.newMsg, handleNewMsg);
};
