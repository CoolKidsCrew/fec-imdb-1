import React from "react";
import axios from "axios";
import styles from "./styles/Review.css";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {}
    };
    this.fetchReview = this.fetchReview.bind(this);
  }

  componentDidMount() {
    this.fetchReview();
  }

  fetchReview() {
    console.log(`Getting /middle/api/review/1`);
    axios
      .get('/middle/api/review/1')
      .then(results => {
        console.log("Review fetched: ", results.data);
        let review = results.data;
        this.setState({
          review: review
        });
      })
      .catch(error => {
        console.log("Error retrieving review: ", error);
      });
  }

  render() {
    let total = [];
    let tinystars = number => {
      for(let i = 0; i < number; i++){
        total.push(<span key={"star_"+i} className="fa fa-star" />)
      }
    };
    tinystars(this.state.review.review_average)
    return (
      <div className={styles.container}>
        <div className={styles.reviewbody}>
          <h2 className={styles.header}>User reviews</h2>
          <div className={styles.userreview}>
            <div className={styles.starbar}>
              {total.map(star => {
                return star;
              })}{" "}
              {this.state.review.review_average} / 10{" "}
              <strong>{this.state.review.review_title}</strong>
            </div>
            <div className={styles.userline}>
              <span className={styles.date}>
                {this.state.review.review_date} |{" "}
              </span>
              <a className={styles.username} href="" >
                by {this.state.review.reviewer} -{" "}
              </a>
              <a className={styles.userreviews} href="" >See all my reviews</a>
            </div>
            <div className={styles.reviewtext}>
              <p>{this.state.review.review}</p>
            </div>
          </div>
          <div className={styles.feedback}>
            {this.state.review.reviews_number} of{" "}
            {this.state.review.review_viewers} people found this review helpful.
            Was this review helpful to you?{" "}
            <button className={styles.btnyes} value="yes">
              Yes
            </button>{" "}
            <button className={styles.btnno} value="no">
              No
            </button>
            {" | "}
            <a className={styles.report} href="" >Report this</a>
          </div>
          <a className={styles.reviewthis} href="" >Review this title | </a>
          <a className={styles.seeall} href="" >
            See all {this.state.review.review_count} user reviews
          </a>
        </div>
      </div>
    );
  }
}

export default Review;
