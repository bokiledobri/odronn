import React from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

function MessageList(props) {
    return (
        < React.Fragment > {
            props.data.loading ?
                <div>Loading...</div> :
                props.data.messages.map(msg =>
                    <div key={msg.id}><h3>{msg.subject}</h3><h5>{msg.contact}</h5></div>)
        }
        </React.Fragment >
    )
}

const query = gql`
{
    messages{
        id
        contact
        subject
    }
}
`
export default graphql(query)(MessageList);