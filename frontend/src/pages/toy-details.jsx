import {  useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"

import {toyService } from "../services/toy.service.js"
import { showErrorMsg } from '../services/event-bus.service.js'
import { utilService } from '../services/util.service.js'

export function ToyDetails(){
  const [toy, setToy] = useState(null)
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

if (!toy) return <div>Loading...</div>
  return (
    <section className="toy-details">
      <h1>details</h1>
      <h5>{toy.name}</h5>
              <h5>$ {toy.price}</h5>
              <img alt='' src={require(`../assets/img/${toy.img}`)}/>
              <h2>Type: <span>{toy.labels}</span></h2>
            <h2>Created at: <span>{utilService.timestampToDate (toy.createdAt)}</span></h2>
            <h2>In Stock: <span>{(toy.inStock) ? 'yes' : 'no'}</span></h2>
    </section>
  )

}