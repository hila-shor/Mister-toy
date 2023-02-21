import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"


import { toyService } from '../services/toy.service.js'
import { loadToy, saveToy }from '../store/toy.action'



export function ToyEdit(){
  const [toyToEdit , setToyToEdit] = useState(toyService.getEmptyToy())
  console.log(toyToEdit)

  const {toyId} = useParams()
  const navigate = useNavigate()

  useEffect(() =>{
    if(!toyId) return
    loadToyFromStore()
} , [])

function loadToyFromStore() {
  loadToy(toyId)
    .then((toy) => setToyToEdit(toy))
    .catch((err) =>{
        console.log(err)
        navigate('/toy')
    })
}

function onSaveToy(ev){ 
  ev.preventDefault()
  console.log("onSaveToy")

    // split the comma-separated labels string into an array
  const labels = toyToEdit.labels.split(',').map(label => label.trim())

    // create a new toy object with the updated labels array
  const updatedToy = {...toyToEdit, labels}

  // if (!toyToEdit.thumbnail)toyToEdit.thumbnail='assets/img/toy1.jpg'
  saveToy(updatedToy).then((toy)=>{
        console.log('toy', toy)
        // showSuccessMsg('Toy saved')
        navigate('/toy')
    })
    .catch((err) =>{
      console.log('error', err)
      // showErrorMsg('Could not save new toy')
  })
}
function handleChange({target}){
  let {value, name:field, type}= target
  value = type === 'number'? +value : value;
  setToyToEdit((prevFilter)=>{
    return {...prevFilter, [field]:value}
  })
}

  return (
    <section className="toy-edit">
      <header>Toy Edit cmp</header>
      <div className="form-container">
              <form onSubmit={onSaveToy}>

                <label className="flex" htmlFor="name">Toy name:<span className="red">*</span></label>
                <input type="text"
                  name="name"
                  id="name"
                  placeholder="Enter toy name..."
                  value={toyToEdit.name}
                  onChange={handleChange}
                  required/> 

                  
                <label className="flex" htmlFor="price">Price:</label>
                <input type="number" 
                  name="price"
                  id="price"
                  placeholder="Enter price..."
                  value={toyToEdit.price}
                  onChange={handleChange}/>

                {/* <label className="flex" htmlFor="title">Label</label>
                <input type="text"
                  name="labels"
                  id="labels"
                  placeholder="Enter label..."
                  value={toyToEdit.title}
                  onChange={handleChange}
                  required/> */}

                <label className="flex" htmlFor="labels">Labels (comma-separated):</label>
                <textarea
                  name="labels"
                  id="labels"
                  placeholder="Enter labels separated by commas..."
                  value={toyToEdit.labels}
                  onChange={handleChange}/>

                <div>
                    <button>{toyToEdit.id ? 'Save' : 'Add'}</button>
                    <Link to="/toy">Cancel</Link>
                </div> 

              </form> 
      </div>
    </section>
  )
}