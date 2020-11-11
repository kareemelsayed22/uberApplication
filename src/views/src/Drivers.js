import React from 'react';
class Drivers extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      drivers: [],
      driver: {
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
    this.getDrivers()
  }
  componentDidUpdate() {
    if (this.state.newChange) this.getDrivers()
  }
  handleUserIdChange(event) {
    this.setState({
      driver: Object.assign(
        {},
        this.state.driver,
        {
        userId: event.target.value
        }
      )
  });
  }
  // function that does a call similar to the postman request
  // fetch returns a promise w.i a asynchronous function
  // return val from response is now equal to result from API call
  getDrivers() {
    fetch("http://localhost:3000/drivers")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result)
          this.setState({
            isLoaded: true,
            drivers: result,
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
      driver: Object.assign(
        {},
        this.state.driver,
        {
        lattitude: event.target.value
        }
      )
  });
  }
  handleSubmit() {

    const driver = {
      driver:

    {
      lattitude: this.state.driver.lattitude,
      userId: this.state.driver.userId
    }

    }
    console.log('driver', driver)
    const url = "http://localhost:3000/drivers"
    const driverResponse = fetch(url, {
      method: 'POST',
      body: JSON.stringify(driver)
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
    return driverResponse
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

    console.log('userId', this.state.driver.userId)
    console.log('lattitude', this.state.driver.lattitude)
    return (
      <div className="Drivers">
      <h1 style={centered}> Drivers Form </h1>
        <form>
  <label>
    userId:
    <input type="text" name="userId" value={this.state.driver.userId} onChange={this.handleUserIdChange} />
  </label>
  <label>
    lattitude:
    <input type="text" name="lattitude" value={this.state.driver.lattitude} onChange={this.handleLattitudeChange} />
  </label>
  <div style={mystyle} onClick={this.handleSubmit}>Create Driver</div>
</form>



        {this.state.drivers.map((driver) => <div>{driver.userId}</div>)}
      </div>
    );  }
}

export default Drivers;
