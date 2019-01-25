import gql from 'graphql-tag'


export const seeMsg = gql`
mutation Seen($id: ID!){
    leaveSeen(id: $id){
        id
    }
}
`
export const getMsg = gql`
query GetMsg($id: ID!){
    message(id: $id){
        id
        contact
        subject
        text
    }
}`

export const getMsgs = gql`
{
    messages{
        id
        contact
        subject
        seen
    }
}
    `
export const sendMessage = gql`
    mutation SendMessage($subject: String!, $contact: String, $text: String!){
        createMessage(subject: $subject, contact: $contact, text: $text){
            id
        }
    }
    `