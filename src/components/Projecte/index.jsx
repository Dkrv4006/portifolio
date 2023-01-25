
import { useState } from "react"
import { Container } from "./style"
import { data } from "./data"
import { Foolder } from "../Foolder"

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
      <hr />
      <h3>Durante o meu período de aprendizado, crier vários projetos que me permitiram aplicar os conhecimentos adquiridos e desenvolver minhas habilidades. Alguns dos projetos que destaco incluem:</h3>

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

                              <button className="btn" >view website <i className="fa fa-globe"></i></button>
                              </a>
                              <a href={code}>

                              <button className="btn" > source code <i className="fa-brands fa-github"></i></button>
                              </a>
            
                            </div>
                        
                </div> 
                )})}
      </div>

    </Container>
  )
}