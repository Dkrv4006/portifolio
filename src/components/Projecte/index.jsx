
import { useState } from "react"
import { Container } from "./style"
import { data } from "./data"

export const Projecte = () => {

  const [items, setitems] = useState(data)

  const filterItem = (itemCategory) => {
    const upItem = data.filter((itemCat) => {
      return ((itemCat.category) === (itemCategory))
    })
    setitems(upItem)
  }

  return (
    <Container>
      <div className="text">
      <h1>Project</h1>
      <p>These are some of my projects created or during my apprenticeship.</p>
      <hr />

      </div>
      <button onClick={() => setitems(data)}>All</button>
      <button onClick={() => filterItem("javascript")}>Javascript</button>
      <button onClick={() => filterItem("reactjs")}>React</button>
      <button onClick={() => filterItem("nodejs")}>Node</button>
      <button onClick={() => filterItem("css")}>Css</button>
      <div className="conta">
        {items.map(({name,imag,link,code, description,id}) => {
          return(
               <div  className="project"  style={{
                          backgroundImage: `url(${imag})`,
                          backgroundRepeat: `no-repeat`,
                          backgroundSize: 'cover',
                        
                          backgroundPosition: 'center'}}  
                          key={id}>
                        
                        
                            <div className="test">
                              <h2>{name}</h2>
                              <h4>{description}</h4>
 
                              <a href={link}>

                              <button  >view website <i className="fa fa-globe"></i></button>
                              </a>
                              <a href={code}>

                              <button  > source code <i className="fa-brands fa-github"></i></button>
                              </a>
            
                            </div>
                        
                </div> 
                )})}
      </div>
    </Container>
  )
}