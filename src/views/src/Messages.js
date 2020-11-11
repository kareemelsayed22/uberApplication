import React from 'react';
class Messages extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      messages: [],
      message: {
        rideId: '',
        body: '',
      },
      newChange: false
    }
    this.handleRideIdChange = this.handleRideIdChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.getMessages()
  }
  componentDidUpdate() {
    if (this.state.newChange) this.getMessages()
  }
  handleRideIdChange(event) {
    this.setState({
      message: Object.assign(
        {},
        this.state.message,
        {
        rideId: event.target.value
        }
      )
  });
  }
  // function that does a call similar to the postman request
  // fetch returns a promise w.i a asynchronous function
  // return val from response is now equal to result from API call
  getMessages() {
    fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result)
          this.setState({
            isLoaded: true,
            messages: result,
            newChange: false
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  handleBodyChange(event) {

    this.setState({
      message: Object.assign(
        {},
        this.state.message,
        {
        body: event.target.value
        }
      )
  });
  }
  handleSubmit() {

    const message = {
      message:

    {
      body: this.state.message.body,
      rideId: this.state.message.rideId
    }

    }
    console.log('message', message)
    const url = "http://localhost:3000/messages"
    const messageResponse = fetch(url, {
      method: 'POST',
      body: JSON.stringify(message)
    }).then((response) => {
      const json = response.json()
      console.log('first response json', json)
      return json
    }, (error)=> {
      console.log('error', error)
    }).then((json)=> {
      console.log('json', json)
      this.setState({
        newChange: true
      })
      return json
    })
    return messageResponse
  }
  render() {
    const mystyle = {

      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      'border-style': 'solid',
      width: "10em"

    };

    const centered = {

      display: 'flex',
      justifyContent: 'center'

    };

    console.log('rideId', this.state.message.rideId)
    console.log('body', this.state.message.body)
    return (
      <div className="Messages">
      <h1 style={centered}> Messages Form </h1>

        <form>
  <label>
    rideId:
    <input type="text" name="rideId" value={this.state.message.rideId} onChange={this.handleRideIdChange} />
  </label>
  <label>
    body:
    <input type="text" name="body" value={this.state.message.body} onChange={this.handleBodyChange} />
  </label>
  <div style={mystyle} onClick={this.handleSubmit}>Create Message</div>
</form>



        {this.state.messages.map((message) => <div>{message.rideId}</div>)}
      </div>
    );  }
}

export default Messages;
