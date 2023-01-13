import { ToyPreview } from "./toy-preview"
import { Link } from "react-router-dom"


export function ToyList({toys, onRemoveToy}){

  return (
  <section className="toys-list-wrapper ">
    <ul className="toy-list clean-list  ">
      {toys.map(toy=>
        <li className="toy-li " 
            key={toy._id}>
          <ToyPreview toy={toy}/>
            <div className=" btn-wrapper flex">
              <div className="remove-toy-btn" onClick={()=>{onRemoveToy(toy._id)}}>x</div>
              <Link to={`/toy/${toy._id}`}>Select toy</Link>
            </div>
        </li>)}
    </ul> 
  </section>
)}
