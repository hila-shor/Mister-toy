export function ToyPreview({toy}){

  return <section className="toy-preview flex">
              <h3>{toy.name}</h3>
              <h3>$ {toy.price}</h3>
              <div className="img-wrapper">
                <img src={`https://robohash.org/${toy.name}?set=set1`} alt="" />
              </div>
          </section>
}