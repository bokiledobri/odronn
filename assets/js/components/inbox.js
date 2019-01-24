import React, { Component } from 'react'
import MessageList from './message_list'
import MessageDetail from './message_detail'


class Inbox extends Component {
    render() {
        return (
            <div> <MessageList /><MessageDetail /></div>
        )
    }
}



export default Inbox