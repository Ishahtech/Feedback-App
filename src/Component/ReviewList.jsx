import Reviewitem from "./Reviewitem";

function ReviewList({ reviews }) {
  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review")) {
        setReview(reviews.filter((item) => item.id !== id));
    }    
  };

  if (!reviews || reviews.length === 0) {
    return <p>No review yet!</p>;
  }

  return (
    <>
      <div>
        {reviews.map((item) => (
          <div key={item.id}>
            <Reviewitem review={item} deleteReview={deleteReview} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ReviewList;
