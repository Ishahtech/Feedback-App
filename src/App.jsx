import { useState } from "react";
import Header from "./Component/Layout/Header";
import data from "./data/reviewData";
import ReviewList from "./Component/ReviewList";
import ReviewStats from "./Component/ReviewStats";
import ReviewForm from "./Component/ReviewForm";


function App() {
  const [review, setReview] = useState(data)

  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review")) {
        setReview(review.filter((item) => item.id !== id))
    } }


    
  return (
    <>
      <Header text="Review Application" />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router> */}

    <div className="container">
        <ReviewForm />
        <ReviewStats reviews={review} />
        <ReviewList reviews={review} deleteReview={deleteReview} />
      </div>  
    </>
  );
}

export default App;
