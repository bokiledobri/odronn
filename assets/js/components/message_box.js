import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { sendMessage } from '../graphql';




class MessageForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: {
                subject: "",
                contact: "",
                text: ""
            },
            error: ""
        }
        this.setMessageContact = this.setMessageContact.bind(this)
        this.setMessageSubject = this.setMessageSubject.bind(this)
        this.setMessageText = this.setMessageText.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    setMessageSubject(e) {
        const msg = Object.assign({}, this.state.message)
        msg.subject = e.target.value
        this.setState({
            message: msg
        })
    }
    setMessageContact(e) {
        const msg = Object.assign({}, this.state.message)
        msg.contact = e.target.value
        this.setState({
            message: msg
        })
    }
    setMessageText(e) {
        const msg = Object.assign({}, this.state.message)
        msg.text = e.target.value
        this.setState({
            message: msg
        })
    }
    onSubmit(e) {
        e.preventDefault()
        this.props.mutate({
            variables: this.state.message
        }).then(() => this.setState({
            success: "Message successfully sent.",
            message: {
                subject: "",
                contact: "",
                text: ""
            }
        }))
            .catch(e => this.setState({ error: e.message }))
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="email col-md-6">
                        <input onChange={this.setMessageContact} value={this.state.message.contact} placeholder="Contact" />
                    </div>
                    <div className="subject col-md-6">
                        <input onChange={this.setMessageSubject} value={this.state.message.subject} placeholder="Subject" />
                    </div>
                </div>
                <div className="row">
                    <div className="text col-md-12">
                        <textarea onChange={this.setMessageText} value={this.state.message.text} placeholder="Message"></textarea>
                    </div>
                </div>
                <div style={{ color: "red" }}>{this.state.error}</div>
                <div style={{ color: "#808080" }}>{this.state.success}</div>
                <div className="submit">
                    <input type="submit" value="Send Now" />
                </div>
            </form>
        )
    }
}
export default graphql(sendMessage)(MessageForm);