import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: ''
    };
  }

  handleTweetChange = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
          onChange={event => this.handleTweetChange(event)}
          value={this.state.tweet} />
        {this.props.maxChars - this.state.tweet.length} characters remaining
      </div>
    );
  }
}

export default TwitterMessage;
