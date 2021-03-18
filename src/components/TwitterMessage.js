import React from "react";

class TwitterMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            message: "",
        };
    }

    updateMessage = (e) => {
        this.setState({
            message: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <h4>Characters Remaining: </h4>
                <strong>Your message: {this.props.maxChars - this.state.message.length}</strong>
                <input
                    onChange={this.updateMessage}
                    value={this.state.message}
                    type="text"
                    name="message"
                    id="message"
                />
            </div>
        );
    }
}

export default TwitterMessage;
