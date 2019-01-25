import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { getMsg } from '../graphql';

function MessageDetail(props) {
    return (props.data.message ?
        <div className="right-side">
            <div class="right-subject">
                <h3>{props.data.message.subject}</h3>
            </div>
            <div class="right-email">
                <h3>{props.data.message.contact}</h3>
            </div>
            <div class="right-head">
                <h3>Message:</h3>
            </div>
            <div class="right-message">
                <p>{props.data.message.text}</p></div>
        </div> : <div className="right-side">Loading...</div>
    )
}
export default graphql(getMsg, { options: (props) => { return { variables: { id: props.selectedMessage } } } })(MessageDetail);