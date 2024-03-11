import { useContext } from "react";
import ReviewContext from "../context/ReviewContext"
import Reviewitem from "./Reviewitem";

function ReviewList({deleteReview }) {
  const {review} = useContext(ReviewContext)

  if (!review || review.length === 0) {
    return <p>No review yet!</p>;
  }

  return (
    <>
      <div>
        {review.map((item) => (
          <div key={item.id}>
            <Reviewitem review={item} deleteReview={deleteReview} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ReviewList;
