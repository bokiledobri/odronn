import React, { Component } from 'react'
import MessageList from './message_list'
import MessageDetail from './message_detail'
import './styles.css'


class Inbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedMessage: 0
        }
        this.selectMessage = this.selectMessage.bind(this)
    }
    selectMessage(id) {
        this.setState({ selectedMessage: id })
    }
    render() {
        return (
            <div className="containerr">
                <div className="headerr">

                    <h2>Inbox Messages</h2>

                </div>
                <MessageList selectMessage={this.selectMessage} /><MessageDetail selectedMessage={this.state.selectedMessage} /></div>
        )
    }
}



export default Inbox