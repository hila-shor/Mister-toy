export function ToyPreview({toy}){
const pic= "audi.jpg"
  return <section className="todo-preview">
              <h6>toy-preview</h6>
              <h5>{toy.name}</h5>
              <h5>{toy.price}</h5>
              <img alt='' src={require(`../assets/img/${pic}`)}/>
          </section>
}