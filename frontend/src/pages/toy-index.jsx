// import { useDispatch, useSelector } from 'react-redux'
import {  useSelector } from 'react-redux'
import { useEffect } from 'react'

import { ToyList } from '../cmps/toy-list.jsx'
import { loadToys, removeToy }from '../store/toy.action'
// import { toyService } from '../services/toy.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function ToyIndex() {

  const toys = useSelector((storeState) => storeState.toyModule.toys)

  useEffect(() => {
    onLoadToys()
}, [])

  function onLoadToys() {
      loadToys()
          .then(() => {
              showSuccessMsg('Toys loaded')
          })
          .catch(err => {
              showErrorMsg('Cannot load Toys')
          })
  }

  function onRemoveToy(toyId){
    removeToy(toyId)
    .then(() => {
        showSuccessMsg('toy removed')
    })
    .catch(err => {
        showErrorMsg('Cannot remove toy')
    })
  }



  return(
    <section className="toy-index">
      <h1>Toy index</h1>
      <ToyList
        toys={toys}
        onRemoveToy={onRemoveToy}></ToyList> 
    </section>
  ) 
}


