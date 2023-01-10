export function ToyPreview({toy}){

  return <section className="todo-preview">
              <h5>{toy.name}</h5>
              <h5>$ {toy.price}</h5>
              <img alt='' src={require(`../assets/img/${toy.img}`)}/>
          </section>
}