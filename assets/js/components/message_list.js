import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { getMsgs, seeMsg } from '../graphql';

function MessageList(props) {
    const msgClicked = (e, msg) => {
        e.preventDefault();
        props.mutate({
            variables: { id: msg.id }
        })
        props.selectMessage(msg.id)
    }
    return (
        <div className="left-side">
            <div className="inbox-menu">
                <i className="far fa-envelope"></i>
                <h2>Messages</h2>
            </div>
            {props.data.loading ?

                "Loading..." :


                props.data.messages.map((msg) =>
                    <div onClick={e => { msgClicked(e, msg) }} className={msg.seen ? "inbox-messages seen" : "inbox-messages"} key={msg.id}><h4>{msg.subject}</h4><h4>{msg.contact}</h4></div>)
            }
        </div>
    )
}
export default graphql(seeMsg)(graphql(getMsgs)(MessageList));