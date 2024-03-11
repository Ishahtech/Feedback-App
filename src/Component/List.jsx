import ReviewItem from "./Reviewitem"

function List({reviews, deleteReview}) {

    // if there is no review i.e the state is ''

    if(!reviews || reviews.length === 0){
      return <p>No reviews yet!</p>
    }

  return (
    <>
      <div className="review">
        {reviews.map((review) => (
            <div key={review.id}>
                <ReviewItem review={review} deleteReview={deleteReview} />
            </div>
        ))}
      </div>
    </>
  )
}

export default List
