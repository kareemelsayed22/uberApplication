import React from 'react';
class Passengers extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      passengers: [],
      passenger: {
        userId: '',
        lattitude: '',
      },
      newChange: false
    }
    this.handleUserIdChange = this.handleUserIdChange.bind(this)
    this.handleLattitudeChange = this.handleLattitudeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.getPassengers()
  }
  componentDidUpdate() {
    if (this.state.newChange) this.getPassengers()
  }
  handleUserIdChange(event) {
    this.setState({
      passenger: Object.assign(
        {},
        this.state.passenger,
        {
        userId: event.target.value
        }
      )
  });
  }
  // function that does a call similar to the postman request
  // fetch returns a promise w.i a asynchronous function
  // return val from response is now equal to result from API call
  getPassengers() {
    fetch("http://localhost:3000/passengers")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result)
          this.setState({
            isLoaded: true,
            passengers: result,
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
  handleLattitudeChange(event) {

    this.setState({
      passenger: Object.assign(
        {},
        this.state.passenger,
        {
        lattitude: event.target.value
        }
      )
  });
  }
  handleSubmit() {

    const passenger = {
      passenger:

    {
      lattitude: this.state.passenger.lattitude,
      userId: this.state.passenger.userId
    }

    }
    console.log('passenger', passenger)
    const url = "http://localhost:3000/passengers"
    const passengerResponse = fetch(url, {
      method: 'POST',
      body: JSON.stringify(passenger)
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
    return passengerResponse
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

    console.log('userId', this.state.passenger.userId)
    console.log('lattitude', this.state.passenger.lattitude)
    return (
      <div className="Passengers">
      <h1 style={centered}> Passengers Form </h1>

        <form>
  <label>
    userId:
    <input type="text" name="userId" value={this.state.passenger.userId} onChange={this.handleUserIdChange} />
  </label>
  <label>
    lattitude:
    <input type="text" name="lattitude" value={this.state.passenger.lattitude} onChange={this.handleLattitudeChange} />
  </label>
  <div style={mystyle} onClick={this.handleSubmit}>Create Passenger</div>
</form>



        {this.state.passengers.map((passenger) => <div>{passenger.userId}</div>)}
      </div>
    );  }
}

export default Passengers;
