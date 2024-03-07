import { useState } from "react";
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Component/Layout/Header";
import data from "./data/reviewData";
import ReviewList from "./Component/ReviewList";
import ReviewStats from "./Component/ReviewStats";


function App() {
  const [review, setReview] = useState(data)

  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review")) {
        setReview(review.filter((item) => item.id !== id))
    } }


    
  return (
    <>
    {/* <Router>
      <Routes> 
        <Route> </Route>
      </Routes>
       </Router> */}

      <Header text="Review Application" />
      <div className="container">
        <ReviewStats reviews={review} />
        <ReviewList reviews={review} deleteReview={deleteReview} />

      </div>  
    </>
  );
}

export default App;
