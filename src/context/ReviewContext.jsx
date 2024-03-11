import { createContext, useState } from "react";

const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    const [review, setReview] = useState(
        [
            {
            id: 1,
            text: "Chioma,we have you in check"
            },
            {
                id: 2,
                text: "Josephine,we have you in check"
            }
        ]
    )

    return <ReviewContext.Provider value={{review}}>
        {children}
    </ReviewContext.Provider>
}