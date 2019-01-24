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
import { client } from './apollo'
import { ApolloProvider } from 'react-apollo'

// Import local files
//
// Local files can be imported directly using relative paths, for example:
import Inbox from "./components/inbox"
import MessageBox from "./components/message_box"
switch (window.page) {
    case "/dashboard":
        ReactDOM.render(<ApolloProvider client={client}><Inbox /></ApolloProvider>, document.getElementById("inbox"));
        break;
    case "/":
        ReactDOM.render(
            <ApolloProvider client={client}><MessageBox />
            </ApolloProvider>, document.getElementById("message-box"));
}