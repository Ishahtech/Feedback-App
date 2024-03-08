import { useState } from "react";
import Button from "./Layout/Button";

function ReviewForm() {
    const [text, setText] = useState('')

    const textHandler = (e) => {
        setText(e.target.value)
    }
  return (
    <>
      <div className="container">
        <div className="card">
          <form>
            <h3>Kindly drop a review for our service you just experienced.</h3>
            <div className="input-group">
                <input type="text" value={text} placeholder="write our review here" onChange={textHandler} />
                <Button type='submit' variant='secondary'>
                    Submit
                </Button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReviewForm;
