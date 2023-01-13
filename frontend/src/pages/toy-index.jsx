// import { useDispatch, useSelector } from 'react-redux'
import {  useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { ToyList } from '../cmps/toy-list.jsx'
import { loadToys, removeToy }from '../store/toy.action'
import { toyService } from '../services/toy.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { ToyFilter } from '../cmps/toy-filter.jsx'

export function ToyIndex() {

  const toys = useSelector((storeState) => storeState.toyModule.toys)
  const [filterBy, setFilterBy] = useState(toyService.getDefaultFilter())
  
  useEffect(() => {
    onLoadToys(filterBy)
}, [filterBy])

  function onLoadToys(filterBy) {
      loadToys(filterBy)
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

  function handleChange(ev) {
    const field = ev.target.name
    const value = (field === "inStock") ? ev.target.checked : ev.target.value
    setFilterBy({ ...filterBy, [field]: value })
}

  return(
    <section className="toy-index main-layout">
      <ToyFilter
          filterBy={filterBy} 
          handleChange={handleChange} />
      <ToyList
        toys={toys}
        onRemoveToy={onRemoveToy}></ToyList> 
    </section>
  ) 
}


