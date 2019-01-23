// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"
// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

import React from 'react'
import ReactDOM from 'react-dom'

// Import local files
//
// Local files can be imported directly using relative paths, for example:
import socket from "./socket"
import Inbox from "./components/inbox"
import MessageBox from "./components/message_box"
switch (window.page) {
    case "/dashboard":
        ReactDOM.render(<Inbox socket={socket} />, document.getElementById("inbox"));
        break;
    case "/":
        ReactDOM.render(<MessageBox socket={socket} />, document.getElementById("message-box"));
}