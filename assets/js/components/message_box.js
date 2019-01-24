import React, { Component } from 'react'
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';




class MessageForm extends Component {
    render() {
        return (
            <form className="form">
                <div className="row">
                    <div className="email col-md-6">
                        <input type="text" name="msg-contact" id="msg-contact" placeholder="Contact" />
                    </div>
                    <div className="subject col-md-6">
                        <input type="text" name="msg-subject" id="msg-subject" placeholder="Subject" />
                    </div>
                </div>
                <div className="row">
                    <div className="text col-md-12">
                        <textarea name="msg-text" id="msg-text" placeholder="Message"></textarea>
                    </div>
                </div>
                <div className="submit">
                    <input type="submit" value="Send Now" />
                </div>
            </form>
        )
    }
}

export default MessageForm;