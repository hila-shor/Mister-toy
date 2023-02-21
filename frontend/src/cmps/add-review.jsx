import React, { useState } from 'react'
// import { add } from '../../backend/api/user/user.service';


export function AddReview({onAddReview}){

  const [review, setReview] = useState({ txt: '' })
  // console.log(review)
  // const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = (type === 'number') ? +value : value
    setReview(prevReview => {
        return { ...prevReview, [field]: value }
    })
}



  return (
    <section className="toy-review">
              <form className="grid">
                <textarea
                  placeholder="Add your review here..."
                  value={review.txt}
                  name='txt'
                  onChange={handleChange}
                />
              </form>
              <button onClick={()=>onAddReview(review)}>Add Toy Review</button>
    </section>
  )
}