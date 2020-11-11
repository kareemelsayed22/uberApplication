import React from 'react';
class Rides extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      rides: [],
      ride: {
        driverId: '',
        passengerId: '',
      },
      newChange: false
    }
    this.handleDriverIdChange = this.handleDriverIdChange.bind(this)
    this.handlePassengerIdChange = this.handlePassengerIdChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.getRides()
  }
  componentDidUpdate() {
    if (this.state.newChange) this.getRides()
  }
  handleDriverIdChange(event) {
    this.setState({
      ride: Object.assign(
        {},
        this.state.ride,
        {
        driverId: event.target.value
        }
      )
  });
  }
  // function that does a call similar to the postman request
  // fetch returns a promise w.i a asynchronous function
  // return val from response is now equal to result from API call
  getRides() {
    fetch("http://localhost:3000/rides")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result)
          this.setState({
            isLoaded: true,
            rides: result,
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
  handlePassengerIdChange(event) {

    this.setState({
      ride: Object.assign(
        {},
        this.state.ride,
        {
        passengerId: event.target.value
        }
      )
  });
  }
  handleSubmit() {

    const ride = {
      ride:

    {
      driverId: this.state.ride.driverId,
      passengerId: this.state.ride.passengerId
    }

    }
    console.log('ride', ride)
    const url = "http://localhost:3000/rides"
    const rideResponse = fetch(url, {
      method: 'POST',
      body: JSON.stringify(ride)
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
    return rideResponse
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

    console.log('driverId', this.state.ride.driverId)
    console.log('passengerId', this.state.ride.passengerId)
    return (
      <div className="Rides">
      <h1 style={centered}> Rides Form </h1>

        <form>
  <label>
    driverId:
    <input type="text" name="driverId" value={this.state.ride.driverId} onChange={this.handleDriverIdChange} />
  </label>
  <label>
    passengerId:
    <input type="text" name="passengerId" value={this.state.ride.passengerId} onChange={this.handlePassengerIdChange} />
  </label>
  <div style={mystyle} onClick={this.handleSubmit}>Create Ride</div>
</form>



        {this.state.rides.map((ride) => <div>{ride.driverId}</div>)}
      </div>
    );  }
}

export default Rides;
