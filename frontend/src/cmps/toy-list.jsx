import { ToyPreview } from "./toy-preview"

export function ToyList({toys, onRemoveToy}){

  return <section className="toys-list-wrapper">
            <h4>toy-list</h4>
            <ul className="toy-list clean-list container">
              {toys.map(toy=>
                <li className="toy-li flex" 
                    key={toy._id}>
                      <h1>hi</h1>
                  <ToyPreview toy={toy}/>
                  <button onClick={()=>{onRemoveToy(toy._id)}}>x</button>
                </li>)}
            </ul> 
          </section>
}
