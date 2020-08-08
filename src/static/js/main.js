(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMsg = void 0;

var _sockets = require("./sockets");

/*
    client들이 socket을 통해 채팅을 가능하게 하는 파일입니다.
*/
var messages = document.getElementById("jsMessages"); // messages container

var sendMsg = document.getElementById("jsSendMessage");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "<span class=\"author ".concat(nickname ? "others" : "self", "\">").concat(nickname ? nickname : "You", ": </span>").concat(text);
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMsg = function handleNewMsg(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMsg = handleNewMsg;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TXNnIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUhBOzs7QUFLQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQixDLENBQXdEOztBQUN4RCxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFoQjs7QUFFQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLFFBQVAsRUFBb0I7QUFDcEMsTUFBTUMsRUFBRSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBRCxFQUFBQSxFQUFFLENBQUNFLFNBQUgsa0NBQXNDSCxRQUFRLEdBQUcsUUFBSCxHQUFjLE1BQTVELGdCQUNFQSxRQUFRLEdBQUdBLFFBQUgsR0FBYyxLQUR4QixzQkFFWUQsSUFGWjtBQUdBTCxFQUFBQSxRQUFRLENBQUNVLFdBQVQsQ0FBcUJILEVBQXJCO0FBQ0QsQ0FORDs7QUFRQSxJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQkEsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsS0FBSyxHQUFHWCxPQUFPLENBQUNZLGFBQVIsQ0FBc0IsT0FBdEIsQ0FBZDtBQUYrQixNQUd2QkMsS0FIdUIsR0FHYkYsS0FIYSxDQUd2QkUsS0FIdUI7QUFJL0IsNEJBQVlDLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsT0FBL0IsRUFBd0M7QUFBRWlCLElBQUFBLE9BQU8sRUFBRUo7QUFBWCxHQUF4QztBQUNBRixFQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBYyxFQUFkO0FBQ0FaLEVBQUFBLFNBQVMsQ0FBQ1ksS0FBRCxDQUFUO0FBQ0QsQ0FQRDs7QUFTTyxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUdELE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlkLFFBQVosUUFBWUEsUUFBWjtBQUFBLFNBQzFCRixTQUFTLENBQUNnQixPQUFELEVBQVVkLFFBQVYsQ0FEaUI7QUFBQSxDQUFyQjs7OztBQUdQLElBQUlILE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUNtQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ1gsYUFBbkM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgY2xpZW5065Ok7J20IHNvY2tldOydhCDthrXtlbQg7LGE7YyF7J2EIOqwgOuKpe2VmOqyjCDtlZjripQg7YyM7J287J6F64uI64ukLlxuKi9cbmltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTWVzc2FnZXNcIik7IC8vIG1lc3NhZ2VzIGNvbnRhaW5lclxuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTWVzc2FnZVwiKTtcblxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJhdXRob3IgJHtuaWNrbmFtZSA/IFwib3RoZXJzXCIgOiBcInNlbGZcIn1cIj4ke1xuICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIllvdVwiXG4gIH06IDwvc3Bhbj4ke3RleHR9YDtcbiAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQobGkpO1xufTtcblxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnNlbmRNc2csIHsgbWVzc2FnZTogdmFsdWUgfSk7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgYXBwZW5kTXNnKHZhbHVlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdNc2cgPSAoeyBtZXNzYWdlLCBuaWNrbmFtZSB9KSA9PlxuICBhcHBlbmRNc2cobWVzc2FnZSwgbmlja25hbWUpO1xuXG5pZiAoc2VuZE1zZykge1xuICBzZW5kTXNnLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU2VuZE1zZyk7XG59XG4iXX0=
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./game");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNGJmNjkxZWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFVQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ2xpZW50IFNpZGUgSmF2YVNjcmlwdHMuXG5cbiAgICBPcGVyYXRlIEZsb3cuXG4gICAgMS4g7IKs7Jqp7J6Q6rCAIOuLieuEpOyehOydhCDsnoXroKUuKGxvZ2luLmpzKVxuICAgIDIuIHNvY2tldCDsl7DqsrAg7Iuc7J6RLihzb2NrZXQuanMpXG4gICAgICAgIC0gc29ja2V0Lmpz7J2EIO2Gte2VtOyEnCBOb3RpZmljYXRpb27rj4Qg64+Z7J6RXG4gICAgMy4gQ2hhdCDrj5nsnpEuXG4qL1xuXG5pbXBvcnQgXCIuL3NvY2tldHNcIjtcbmltcG9ydCBcIi4vbG9naW5cIjtcbmltcG9ydCBcIi4vY2hhdFwiO1xuaW1wb3J0IFwiLi9nYW1lXCI7XG4iXX0=
},{"./chat":1,"./game":3,"./login":4,"./sockets":7}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

// HTML Elements
var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var brushSizeInput = document.getElementById("jsBrushSize");
var brushSizeText = document.getElementById("jsBrushSizeText");
var modeBtn = document.getElementById("jsMode");
var initializeBtn = document.getElementById("jsInitialize");
var colors = document.getElementsByClassName("jsColor");
var INITIAL_COLOR = "black";
var INITIAL_BRUSH_SIZE = 2.5;
var CANVAS_SIZE = 550; // Default Values

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = INITIAL_BRUSH_SIZE;
var isPainting = false;
var isFilling = false; // Functions

var stopPainting = function stopPainting() {
  isPainting = false;
};

var startPainting = function startPainting() {
  isPainting = true;
};

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var brushSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var currentColor = ctx.strokeStyle;
  var currentBrushSize = ctx.lineWidth;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  if (brushSize !== null) {
    ctx.lineWidth = brushSize;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = currentBrushSize;
};

var onMouseMove = function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!isPainting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle,
      brushSize: ctx.lineWidth
    });
  }
};

var fillCanvas = function fillCanvas() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = currentColor;
};

var handleCanvasClick = function handleCanvasClick() {
  if (isFilling) {
    fillCanvas();
    isFilling = false;
    modeBtn.innerText = "Fill";
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
};

var handleRightClick = function handleRightClick(event) {
  event.preventDefault();
};

var handleColorClick = function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

var handleBrushSizeChange = function handleBrushSizeChange(event) {
  var brushSize = event.target.value;
  ctx.lineWidth = brushSize;
  brushSizeText.innerText = brushSize.includes(".") ? brushSize : "".concat(brushSize, ".0");
};

var handleModeClick = function handleModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "FILL";
  } else {
    isFilling = true;
    modeBtn.innerText = "Paint";
  }
};

var handleInitializeClick = function handleInitializeClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}; // Event Listeners


if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleRightClick);
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (brushSizeInput) {
  brushSizeInput.addEventListener("input", handleBrushSizeChange);
}

if (modeBtn) {
  modeBtn.addEventListener("click", handleModeClick);
}

if (initializeBtn) {
  initializeBtn.addEventListener("click", handleInitializeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color,
      brushSize = _ref2.brushSize;
  return strokePath(x, y, color, brushSize);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fillCanvas(color);
};

exports.handleFilled = handleFilled;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJicnVzaFNpemVJbnB1dCIsImJydXNoU2l6ZVRleHQiLCJtb2RlQnRuIiwiaW5pdGlhbGl6ZUJ0biIsImNvbG9ycyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJJTklUSUFMX0NPTE9SIiwiSU5JVElBTF9CUlVTSF9TSVpFIiwiQ0FOVkFTX1NJWkUiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJpc1BhaW50aW5nIiwiaXNGaWxsaW5nIiwic3RvcFBhaW50aW5nIiwic3RhcnRQYWludGluZyIsImJlZ2luUGF0aCIsIngiLCJ5IiwibW92ZVRvIiwic3Ryb2tlUGF0aCIsImNvbG9yIiwiYnJ1c2hTaXplIiwiY3VycmVudENvbG9yIiwiY3VycmVudEJydXNoU2l6ZSIsImxpbmVUbyIsInN0cm9rZSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJmaWxsQ2FudmFzIiwiaGFuZGxlQ2FudmFzQ2xpY2siLCJpbm5lclRleHQiLCJmaWxsIiwiaGFuZGxlUmlnaHRDbGljayIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ29sb3JDbGljayIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlQnJ1c2hTaXplQ2hhbmdlIiwidmFsdWUiLCJpbmNsdWRlcyIsImhhbmRsZU1vZGVDbGljayIsImhhbmRsZUluaXRpYWxpemVDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiaGFuZGxlQmVnYW5QYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJoYW5kbGVGaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFF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Q0wscUJBQXpDO0FBQ0Q7O0FBRUQsSUFBSTdDLE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUNrRCxnQkFBUixDQUF5QixPQUF6QixFQUFrQ0YsZUFBbEM7QUFDRDs7QUFFRCxJQUFJL0MsYUFBSixFQUFtQjtBQUNqQkEsRUFBQUEsYUFBYSxDQUFDaUQsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0NELHFCQUF4QztBQUNEOztBQUVNLElBQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFHcEMsQ0FBSCxRQUFHQSxDQUFIO0FBQUEsTUFBTUMsQ0FBTixRQUFNQSxDQUFOO0FBQUEsU0FBY0YsU0FBUyxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBdkI7QUFBQSxDQUF4Qjs7OztBQUNBLElBQU1vQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBR3JDLENBQUgsU0FBR0EsQ0FBSDtBQUFBLE1BQU1DLENBQU4sU0FBTUEsQ0FBTjtBQUFBLE1BQVNHLEtBQVQsU0FBU0EsS0FBVDtBQUFBLE1BQWdCQyxTQUFoQixTQUFnQkEsU0FBaEI7QUFBQSxTQUMvQkYsVUFBVSxDQUFDSCxDQUFELEVBQUlDLENBQUosRUFBT0csS0FBUCxFQUFjQyxTQUFkLENBRHFCO0FBQUEsQ0FBMUI7Ozs7QUFFQSxJQUFNaUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHbEMsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZWEsVUFBVSxDQUFDYixLQUFELENBQXpCO0FBQUEsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbi8vIEhUTUwgRWxlbWVudHNcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCBicnVzaFNpemVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNCcnVzaFNpemVcIik7XG5jb25zdCBicnVzaFNpemVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0JydXNoU2l6ZVRleHRcIik7XG5cbmNvbnN0IG1vZGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcbmNvbnN0IGluaXRpYWxpemVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzSW5pdGlhbGl6ZVwiKTtcblxuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XG5cbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcImJsYWNrXCI7XG5jb25zdCBJTklUSUFMX0JSVVNIX1NJWkUgPSAyLjU7XG5jb25zdCBDQU5WQVNfU0laRSA9IDU1MDtcblxuLy8gRGVmYXVsdCBWYWx1ZXNcbmNhbnZhcy53aWR0aCA9IENBTlZBU19TSVpFO1xuY2FudmFzLmhlaWdodCA9IENBTlZBU19TSVpFO1xuXG5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG5jdHguZmlsbFN0eWxlID0gSU5JVElBTF9DT0xPUjtcbmN0eC5saW5lV2lkdGggPSBJTklUSUFMX0JSVVNIX1NJWkU7XG5cbmxldCBpc1BhaW50aW5nID0gZmFsc2U7XG5sZXQgaXNGaWxsaW5nID0gZmFsc2U7XG5cbi8vIEZ1bmN0aW9uc1xuY29uc3Qgc3RvcFBhaW50aW5nID0gKCkgPT4ge1xuICBpc1BhaW50aW5nID0gZmFsc2U7XG59O1xuXG5jb25zdCBzdGFydFBhaW50aW5nID0gKCkgPT4ge1xuICBpc1BhaW50aW5nID0gdHJ1ZTtcbn07XG5cbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4LCB5KTtcbn07XG5cbmNvbnN0IHN0cm9rZVBhdGggPSAoeCwgeSwgY29sb3IgPSBudWxsLCBicnVzaFNpemUgPSBudWxsKSA9PiB7XG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XG4gIGxldCBjdXJyZW50QnJ1c2hTaXplID0gY3R4LmxpbmVXaWR0aDtcbiAgaWYgKGNvbG9yICE9PSBudWxsKSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIH1cbiAgaWYgKGJydXNoU2l6ZSAhPT0gbnVsbCkge1xuICAgIGN0eC5saW5lV2lkdGggPSBicnVzaFNpemU7XG4gIH1cbiAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgY3R4LnN0cm9rZSgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjdXJyZW50Q29sb3I7XG4gIGN0eC5saW5lV2lkdGggPSBjdXJyZW50QnJ1c2hTaXplO1xufTtcblxuY29uc3Qgb25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeCA9IGV2ZW50Lm9mZnNldFg7XG4gIGNvbnN0IHkgPSBldmVudC5vZmZzZXRZO1xuICBpZiAoIWlzUGFpbnRpbmcpIHtcbiAgICBiZWdpblBhdGgoeCwgeSk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmJlZ2luUGF0aCwgeyB4LCB5IH0pO1xuICB9IGVsc2Uge1xuICAgIHN0cm9rZVBhdGgoeCwgeSk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnN0cm9rZVBhdGgsIHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgY29sb3I6IGN0eC5zdHJva2VTdHlsZSxcbiAgICAgIGJydXNoU2l6ZTogY3R4LmxpbmVXaWR0aCxcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgZmlsbENhbnZhcyA9IChjb2xvciA9IG51bGwpID0+IHtcbiAgbGV0IGN1cnJlbnRDb2xvciA9IGN0eC5maWxsU3R5bGU7XG4gIGlmIChjb2xvciAhPT0gbnVsbCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgfVxuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3R4LmZpbGxTdHlsZSA9IGN1cnJlbnRDb2xvcjtcbn07XG5cbmNvbnN0IGhhbmRsZUNhbnZhc0NsaWNrID0gKCkgPT4ge1xuICBpZiAoaXNGaWxsaW5nKSB7XG4gICAgZmlsbENhbnZhcygpO1xuICAgIGlzRmlsbGluZyA9IGZhbHNlO1xuICAgIG1vZGVCdG4uaW5uZXJUZXh0ID0gXCJGaWxsXCI7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmZpbGwsIHsgY29sb3I6IGN0eC5maWxsU3R5bGUgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZVJpZ2h0Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbmNvbnN0IGhhbmRsZUNvbG9yQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgY29sb3IgPSBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xufTtcblxuY29uc3QgaGFuZGxlQnJ1c2hTaXplQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGJydXNoU2l6ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgY3R4LmxpbmVXaWR0aCA9IGJydXNoU2l6ZTtcbiAgYnJ1c2hTaXplVGV4dC5pbm5lclRleHQgPSBicnVzaFNpemUuaW5jbHVkZXMoXCIuXCIpXG4gICAgPyBicnVzaFNpemVcbiAgICA6IGAke2JydXNoU2l6ZX0uMGA7XG59O1xuXG5jb25zdCBoYW5kbGVNb2RlQ2xpY2sgPSAoKSA9PiB7XG4gIGlmIChpc0ZpbGxpbmcpIHtcbiAgICBpc0ZpbGxpbmcgPSBmYWxzZTtcbiAgICBtb2RlQnRuLmlubmVyVGV4dCA9IFwiRklMTFwiO1xuICB9IGVsc2Uge1xuICAgIGlzRmlsbGluZyA9IHRydWU7XG4gICAgbW9kZUJ0bi5pbm5lclRleHQgPSBcIlBhaW50XCI7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUluaXRpYWxpemVDbGljayA9ICgpID0+IHtcbiAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG59O1xuXG4vLyBFdmVudCBMaXN0ZW5lcnNcbmlmIChjYW52YXMpIHtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBoYW5kbGVSaWdodENsaWNrKTtcbn1cblxuQXJyYXkuZnJvbShjb2xvcnMpLmZvckVhY2goKGNvbG9yKSA9PlxuICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ29sb3JDbGljaylcbik7XG5cbmlmIChicnVzaFNpemVJbnB1dCkge1xuICBicnVzaFNpemVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlQnJ1c2hTaXplQ2hhbmdlKTtcbn1cblxuaWYgKG1vZGVCdG4pIHtcbiAgbW9kZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTW9kZUNsaWNrKTtcbn1cblxuaWYgKGluaXRpYWxpemVCdG4pIHtcbiAgaW5pdGlhbGl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlSW5pdGlhbGl6ZUNsaWNrKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUJlZ2FuUGF0aCA9ICh7IHgsIHkgfSkgPT4gYmVnaW5QYXRoKHgsIHkpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZVN0cm9rZWRQYXRoID0gKHsgeCwgeSwgY29sb3IsIGJydXNoU2l6ZSB9KSA9PlxuICBzdHJva2VQYXRoKHgsIHksIGNvbG9yLCBicnVzaFNpemUpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUZpbGxlZCA9ICh7IGNvbG9yIH0pID0+IGZpbGxDYW52YXMoY29sb3IpO1xuIl19
},{"./sockets":7}],4:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

/*
    Login Flow.

    Client Side의 Socket 진입점.

    1. 사용자 이름 기입
    2. Socket 연결

*/
var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/"); // Socket 연결 처리 (Client)

  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.classList = LOGGED_OUT;
} else {
  body.classList = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  localStorage.setItem(NICKNAME, value);
  input.value = "";
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc0xpc3QiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJjbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQVVBOztBQVZBOzs7Ozs7Ozs7QUFZQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsUUFBckIsQ0FBakI7O0FBRUEsSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0gsUUFBRCxFQUFjO0FBQzFCO0FBQ0EsTUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQixDQUYwQixDQUVGOztBQUN4QkQsRUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxXQUExQixFQUF1QztBQUFFVCxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBdkM7QUFDQSw0QkFBWUksTUFBWjtBQUNELENBTEQ7O0FBT0EsSUFBSUosUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCUixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWixVQUFqQjtBQUNELENBRkQsTUFFTztBQUNMTixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNILFFBQUQsQ0FBTDtBQUNEOztBQUVELElBQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxLQUFLLEdBQUduQixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUY4QixNQUd0QnFCLEtBSHNCLEdBR1pELEtBSFksQ0FHdEJDLEtBSHNCO0FBSTlCZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQXZCLEVBQUFBLElBQUksQ0FBQ3lCLFNBQUwsR0FBaUJsQixTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBUkQ7O0FBVUEsSUFBSXBCLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUN1QixnQkFBVixDQUEyQixRQUEzQixFQUFxQ1AsZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIExvZ2luIEZsb3cuXG5cbiAgICBDbGllbnQgU2lkZeydmCBTb2NrZXQg7KeE7J6F7KCQLlxuXG4gICAgMS4g7IKs7Jqp7J6QIOydtOumhCDquLDsnoVcbiAgICAyLiBTb2NrZXQg7Jew6rKwXG5cbiovXG5cbmltcG9ydCB7IGluaXRTb2NrZXRzIH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XG5cbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5cbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xuXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpOyAvLyBTb2NrZXQg7Jew6rKwIOyymOumrCAoQ2xpZW50KVxuICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pO1xuICBpbml0U29ja2V0cyhzb2NrZXQpO1xufTtcblxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XG4gIGJvZHkuY2xhc3NMaXN0ID0gTE9HR0VEX09VVDtcbn0gZWxzZSB7XG4gIGJvZHkuY2xhc3NMaXN0ID0gTE9HR0VEX0lOO1xuICBsb2dJbihuaWNrbmFtZSk7XG59XG5cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKHZhbHVlKTtcbn07XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
},{"./sockets":7}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;

/*
  알람 동작에 대한 파일입니다.
*/
var body = document.querySelector("body");
var STATUS_GOOD = "good";
var STATUS_BAD = "bad";
var COLOR_GOOD = "#396ec4";
var COLOR_BAD = "#f39c12";

var fireNotification = function fireNotification(text, status) {
  var notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerText = text;

  if (status === STATUS_GOOD) {
    notification.style.backgroundColor = COLOR_GOOD;
  } else if (status === STATUS_BAD) {
    notification.style.backgroundColor = COLOR_BAD;
  }

  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  fireNotification("\"".concat(nickname, "\" \uB2D8\uC774\n\uCC38\uAC00\uD558\uC168\uC2B5\uB2C8\uB2E4!"), STATUS_GOOD);
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  fireNotification("\"".concat(nickname, "\" \uB2D8\uC774\n\uB098\uAC00\uC168\uC2B5\uB2C8\uB2E4!"), STATUS_BAD);
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlNUQVRVU19HT09EIiwiU1RBVFVTX0JBRCIsIkNPTE9SX0dPT0QiLCJDT0xPUl9CQUQiLCJmaXJlTm90aWZpY2F0aW9uIiwidGV4dCIsInN0YXR1cyIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImFwcGVuZENoaWxkIiwiaGFuZGxlTmV3VXNlciIsIm5pY2tuYW1lIiwiaGFuZGxlRGlzY29ubmVjdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUdBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFFQSxJQUFNQyxXQUFXLEdBQUcsTUFBcEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsS0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsU0FBbEI7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFDekMsTUFBTUMsWUFBWSxHQUFHVCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFFQUQsRUFBQUEsWUFBWSxDQUFDRSxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixjQUEzQjtBQUNBSCxFQUFBQSxZQUFZLENBQUNJLFNBQWIsR0FBeUJOLElBQXpCOztBQUVBLE1BQUlDLE1BQU0sS0FBS04sV0FBZixFQUE0QjtBQUMxQk8sSUFBQUEsWUFBWSxDQUFDSyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQ1gsVUFBckM7QUFDRCxHQUZELE1BRU8sSUFBSUksTUFBTSxLQUFLTCxVQUFmLEVBQTJCO0FBQ2hDTSxJQUFBQSxZQUFZLENBQUNLLEtBQWIsQ0FBbUJDLGVBQW5CLEdBQXFDVixTQUFyQztBQUNEOztBQUVETixFQUFBQSxJQUFJLENBQUNpQixXQUFMLENBQWlCUCxZQUFqQjtBQUNELENBYkQ7O0FBZU8sSUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM3Q1osRUFBQUEsZ0JBQWdCLGFBQUtZLFFBQUwsbUVBQStCaEIsV0FBL0IsQ0FBaEI7QUFDRCxDQUZNOzs7O0FBSUEsSUFBTWlCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsUUFBa0I7QUFBQSxNQUFmRCxRQUFlLFNBQWZBLFFBQWU7QUFDbERaLEVBQUFBLGdCQUFnQixhQUFLWSxRQUFMLDZEQUE4QmYsVUFBOUIsQ0FBaEI7QUFDRCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAg7JWM656MIOuPmeyekeyXkCDrjIDtlZwg7YyM7J287J6F64uI64ukLlxuKi9cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuY29uc3QgU1RBVFVTX0dPT0QgPSBcImdvb2RcIjtcbmNvbnN0IFNUQVRVU19CQUQgPSBcImJhZFwiO1xuY29uc3QgQ09MT1JfR09PRCA9IFwiIzM5NmVjNFwiO1xuY29uc3QgQ09MT1JfQkFEID0gXCIjZjM5YzEyXCI7XG5cbmNvbnN0IGZpcmVOb3RpZmljYXRpb24gPSAodGV4dCwgc3RhdHVzKSA9PiB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJub3RpZmljYXRpb25cIik7XG4gIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xuXG4gIGlmIChzdGF0dXMgPT09IFNUQVRVU19HT09EKSB7XG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IENPTE9SX0dPT0Q7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSBTVEFUVVNfQkFEKSB7XG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IENPTE9SX0JBRDtcbiAgfVxuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT4ge1xuICBmaXJlTm90aWZpY2F0aW9uKGBcIiR7bmlja25hbWV9XCIg64uY7J20XFxu7LC46rCA7ZWY7IWo7Iq164uI64ukIWAsIFNUQVRVU19HT09EKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVEaXNjb25uZWN0ZWQgPSAoeyBuaWNrbmFtZSB9KSA9PiB7XG4gIGZpcmVOb3RpZmljYXRpb24oYFwiJHtuaWNrbmFtZX1cIiDri5jsnbRcXG7rgpjqsIDshajsirXri4jri6QhYCwgU1RBVFVTX0JBRCk7XG59O1xuIl19
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePlayerUpdate = void 0;

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return console.log(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6WyJoYW5kbGVQbGF5ZXJVcGRhdGUiLCJzb2NrZXRzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUFpQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVosQ0FBakI7QUFBQSxDQUEzQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBoYW5kbGVQbGF5ZXJVcGRhdGUgPSAoeyBzb2NrZXRzIH0pID0+IGNvbnNvbGUubG9nKHNvY2tldHMpO1xuIl19
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _game = require("./game");

var _player = require("./player");

/*
    Client Side Socket Controller.

    1. 알림동작 (notifications.js)
    2. 채팅 동작 (chat.js)
    3. 실시간 그림그리기 및 캔버스 채우기 (game.js)
    4. 게임 참여자 정보 갱신 (player.js)
*/
var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(newSocket) {
  var _window = window,
      events = _window.events;
  socket = newSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMsg);
  socket.on(events.beganPath, _game.handleBeganPath);
  socket.on(events.strokedPath, _game.handleStrokedPath);
  socket.on(events.filled, _game.handleFilled);
  socket.on(events.playerUpdate, _player.handlePlayerUpdate);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJuZXdTb2NrZXQiLCJ3aW5kb3ciLCJldmVudHMiLCJvbiIsIm5ld1VzZXIiLCJoYW5kbGVOZXdVc2VyIiwiZGlzY29ubmVjdGVkIiwiaGFuZGxlRGlzY29ubmVjdGVkIiwibmV3TXNnIiwiaGFuZGxlTmV3TXNnIiwiYmVnYW5QYXRoIiwiaGFuZGxlQmVnYW5QYXRoIiwic3Ryb2tlZFBhdGgiLCJoYW5kbGVTdHJva2VkUGF0aCIsImZpbGxlZCIsImhhbmRsZUZpbGxlZCIsInBsYXllclVwZGF0ZSIsImhhbmRsZVBsYXllclVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVNBOztBQUNBOztBQUNBOztBQUNBOztBQVpBOzs7Ozs7OztBQWNBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFlO0FBQUEsZ0JBQ3JCQyxNQURxQjtBQUFBLE1BQ2hDQyxNQURnQyxXQUNoQ0EsTUFEZ0M7QUFFeENMLEVBQUFBLE1BQU0sR0FBR0csU0FBVDtBQUNBSCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDRSxPQUFqQixFQUEwQkMsNEJBQTFCO0FBQ0FSLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNJLFlBQWpCLEVBQStCQyxpQ0FBL0I7QUFDQVYsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ00sTUFBakIsRUFBeUJDLGtCQUF6QjtBQUNBWixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDUSxTQUFqQixFQUE0QkMscUJBQTVCO0FBQ0FkLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNVLFdBQWpCLEVBQThCQyx1QkFBOUI7QUFDQWhCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNZLE1BQWpCLEVBQXlCQyxrQkFBekI7QUFDQWxCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNjLFlBQWpCLEVBQStCQywwQkFBL0I7QUFDRCxDQVZNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDbGllbnQgU2lkZSBTb2NrZXQgQ29udHJvbGxlci5cblxuICAgIDEuIOyVjOumvOuPmeyekSAobm90aWZpY2F0aW9ucy5qcylcbiAgICAyLiDssYTtjIUg64+Z7J6RIChjaGF0LmpzKVxuICAgIDMuIOyLpOyLnOqwhCDqt7jrprzqt7jrpqzquLAg67CPIOy6lOuyhOyKpCDssYTsmrDquLAgKGdhbWUuanMpXG4gICAgNC4g6rKM7J6EIOywuOyXrOyekCDsoJXrs7Qg6rCx7IugIChwbGF5ZXIuanMpXG4qL1xuXG5pbXBvcnQgeyBoYW5kbGVOZXdVc2VyLCBoYW5kbGVEaXNjb25uZWN0ZWQgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyBoYW5kbGVOZXdNc2cgfSBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQgeyBoYW5kbGVCZWdhblBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoLCBoYW5kbGVGaWxsZWQgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgeyBoYW5kbGVQbGF5ZXJVcGRhdGUgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChuZXdTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgc29ja2V0ID0gbmV3U29ja2V0O1xuICBzb2NrZXQub24oZXZlbnRzLm5ld1VzZXIsIGhhbmRsZU5ld1VzZXIpO1xuICBzb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01zZyk7XG4gIHNvY2tldC5vbihldmVudHMuYmVnYW5QYXRoLCBoYW5kbGVCZWdhblBhdGgpO1xuICBzb2NrZXQub24oZXZlbnRzLnN0cm9rZWRQYXRoLCBoYW5kbGVTdHJva2VkUGF0aCk7XG4gIHNvY2tldC5vbihldmVudHMuZmlsbGVkLCBoYW5kbGVGaWxsZWQpO1xuICBzb2NrZXQub24oZXZlbnRzLnBsYXllclVwZGF0ZSwgaGFuZGxlUGxheWVyVXBkYXRlKTtcbn07XG4iXX0=
},{"./chat":1,"./game":3,"./notifications":5,"./player":6}]},{},[2])