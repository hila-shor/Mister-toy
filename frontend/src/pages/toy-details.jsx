import {  useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"


import {toyService } from "../services/toy.service.js"
import { showErrorMsg , showSuccessMsg} from '../services/event-bus.service.js'
import { utilService } from '../services/util.service.js'
import { addReview } from "../store/review.actions.js"

import { AddReview } from '../cmps/add-review.jsx'

export function ToyDetails(){
  const [toy, setToy] = useState(null)
  const [review, setReview] = useState({ txt: '' })

console.log('review :>> ', review);
  const { toyId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadToy()
}, [toyId])

function loadToy() {
  toyService.getById(toyId)
      .then((toy) => setToy(toy))
      .catch((err) => {
          console.log('Had issues in toy details', err)
          showErrorMsg('Cannot load toy')
          navigate('/toy')
      })
}
 async function onAddReview(newReview) {
  console.log('onAddReview :newReview>> ', newReview)
        try {
            await addReview( {...newReview,  aboutToyId: toy._id})
            showSuccessMsg('Review added')
            // setReview({ txt:''})
        } catch (err) {
            showErrorMsg('Cannot add review')
        }
    }
//  function onAddReview(newReview) {
// console.log('onAddReview :newReview>> ', newReview)
//       //  addReview({...review, aboutToyId: toy._id})
//       //       showSuccessMsg('Review added')
//             // setReview({ txt: '' }
//         }
    

if (!toy) return <div>Loading...</div>
  return (
    <section className="toy-details main-layout">
      <h2>{toy.name}</h2>
              <h2>$ {toy.price}</h2>
              <div className="img-wrapper flex">
                <img src={`https://robohash.org/${toy.name}?set=set1`} alt="" />
                <AddReview onAddReview={onAddReview}/>
                
              </div>
              {/* <img alt='' src={require(`../assets/img/${toy.img}`)}/> */}
              <h4>Type: <span>{toy.labels}</span></h4>
            <h4>Created at: <span>{utilService.timestampToDate (toy.createdAt)}</span></h4>
            <h4>In Stock: <span>{(toy.inStock) ? 'yes' : 'no'}</span></h4>
    </section>
  )

}