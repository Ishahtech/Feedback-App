import { useState } from "react";
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Component/Layout/Header";
import data from "./data/reviewData";
import ReviewList from "./Component/ReviewList";


function App() {
  const [review, setReview] = useState(data)
  return (
    <>
    {/* <Router>
      <Routes> 
        <Route> </Route>
      </Routes>
       </Router> */}
      <Header text="Review Application" />
      <div className="container">
        <ReviewList reviews={review} />

      </div>  
    </>
  );
}

export default App;
