import { ToyPreview } from "./toy-preview"
import { Link } from "react-router-dom"

export function ToyList({toys, onRemoveToy}){

  return (
  <section className="toys-list-wrapper">
    <ul className="toy-list clean-list container">
      {toys.map(toy=>
        <li className="toy-li flex" 
            key={toy._id}>
          <ToyPreview toy={toy}/>
          <button onClick={()=>{onRemoveToy(toy._id)}}>x</button>
          <Link to={`/toy/${toy._id}`}>Select toy!</Link>
        </li>)}
    </ul> 
  </section>
)}
