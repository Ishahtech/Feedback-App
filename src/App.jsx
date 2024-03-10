import { useState } from "react";
import Header from "./Component/Layout/Header";
// import { BrowserRouter, Routes,Route } from "react-router-dom";
import data from "./data/reviewData";
import ReviewList from "./Component/ReviewList";
import ReviewStats from "./Component/ReviewStats";
import ReviewForm from "./Component/ReviewForm";
import { v4 as uuid } from 'uuid';



function App() {
  const [review, setReview] = useState(data)

  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review")) {
        setReview(review.filter((item) => item.id !== id))
    } }

    //function to add review
  const AddReview = (newReview) => {
    newReview.id = uuid()
    setReview([newReview, ...review])
  }

    
  return (
    <>
      <Header text="Review Application" />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter> */}

    <div className="container">
        <ReviewForm handleAdd={AddReview} />
        <ReviewStats reviews={review} />
        <ReviewList reviews={review} deleteReview={deleteReview} />
      </div>  
    </>
  );
}

export default App;
