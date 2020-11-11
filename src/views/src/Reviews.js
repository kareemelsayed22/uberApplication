import React from 'react';
class Reviews extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      reviews: [],
      review: {
        rideId: '',
        star: '',
      },
      newChange: false
    }
    this.handleRideIdChange = this.handleRideIdChange.bind(this)
    this.handleStarChange = this.handleStarChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.getReviews()
  }
  componentDidUpdate() {
    if (this.state.newChange) this.getReviews()
  }
  handleRideIdChange(event) {
    this.setState({
      review: Object.assign(
        {},
        this.state.review,
        {
        rideId: event.target.value
        }
      )
  });
  }
  // function that does a call similar to the postman request
  // fetch returns a promise w.i a asynchronous function
  // return val from response is now equal to result from API call
  getReviews() {
    fetch("http://localhost:3000/reviews")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result)
          this.setState({
            isLoaded: true,
            reviews: result,
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
  handleStarChange(event) {

    this.setState({
      review: Object.assign(
        {},
        this.state.review,
        {
        star: event.target.value
        }
      )
  });
  }
  handleSubmit() {

    const review = {
      review:

    {
      star: this.state.review.star,
      rideId: this.state.review.rideId
    }

    }
    console.log('review', review)
    const url = "http://localhost:3000/reviews"
    const reviewResponse = fetch(url, {
      method: 'POST',
      body: JSON.stringify(review)
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
    return reviewResponse
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

    console.log('rideId', this.state.review.rideId)
    console.log('star', this.state.review.star)
    return (
      <div className="Reviews">
      <h1 style={centered}> Reviews Form </h1>

        <form>
  <label>
    rideId:
    <input type="text" name="rideId" value={this.state.review.rideId} onChange={this.handleRideIdChange} />
  </label>
  <label>
    star:
    <input type="text" name="star" value={this.state.review.star} onChange={this.handleStarChange} />
  </label>
  <div style={mystyle} onClick={this.handleSubmit}>Create Review</div>
</form>



        {this.state.reviews.map((review) => <div>{review.rideId}</div>)}
      </div>
    );  }
}

export default Reviews;
