import { useState } from "react";
import Header from "./Component/Layout/Header";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Review from "./Component/Pages/Review";
import About from "./Component/Pages/About";
import data from "./data/reviewData";



function App() {
  const [review, setReview] = useState(data)
  
  return (
    <>
      <Header text="Review Application" />
      {/* structure of the browser router */}
      <BrowserRouter>
        <Routes>
          {/* "/" tells the browser which page to render once a site is opened */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review setReview={setReview} review={review} />} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
