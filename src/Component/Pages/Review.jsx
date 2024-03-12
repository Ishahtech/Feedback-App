import { useState } from "react";
import { Link } from "react-router-dom";
import ReviewForm from "../ReviewForm";
import { ReviewProvider } from "../../context/ReviewContext";
import { v4 as uuid } from "uuid";
import { FaHouseDamage } from "react-icons/fa";
import Button from "../Layout/Button";
import { useNavigate } from "react-router-dom";
import Reviewitem from "../Reviewitem";
import { FaTimes } from "react-icons/fa";

function Review({ setReview, review }) {
  const navigate = useNavigate();
  const [currentReview, setCurrentReview] = useState({
    id: "",
    text: "",
    rating: "",
  });
  // function to delete review
  const deleteReview = (id) => {
    if (window.confirm("Are you sure, you want to delete this review?")) {
      setCurrentReview({
        id: "",
        text: "",
        rating: "",
      });
    }
  };

  // function to add a review
  const AddReview = (newReview) => {
    newReview.id = uuid();
    setReview([newReview]);
    setCurrentReview(newReview);
    console.log(newReview);
  };

  return (
    <>
    <ReviewProvider>
      <ReviewForm review={review} setReview={setReview} handleAdd={AddReview} />
      <div className="container">
        {/* <ReviewStats reviews={review} /> */}
        {/* <List reviews={currentReview} deleteReview={deleteReview} /> */}
        {currentReview.text && (
          <Reviewitem review={currentReview} deleteReview={deleteReview} />
        )}
      </div>
      <div className="container">
        <div className="about-link">
          <Link to="/">
            <FaHouseDamage size={40} />
          </Link>
        </div>
      </div>
      <div className="container">
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate("/all-reviews")}
        >
          See All Reviews
        </Button>
      </div>

      <div className="container">
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate("/all-reviews")}
        >
          See All Reviews
        </Button>
      </div>
      </ReviewProvider>

       
     
    </>

  );
}

export default Review;
