
import { useState } from "react"
import { Container } from "./style"
import { data } from "./data"

// import javascript from "../../assets/javascript.svg"
// import typescript from "../../assets/typescript.svg"
// import reactjs from "../../assets/reactjs.svg"
// import nodejs from "../../assets/nodejs.svg"



export const Projecte = () => {

  // const data = [
   
  //   {
  //     id:6,
  //     name: "novo6",
  //     imag: javascript,
  //     category: 'javascript',
  //     link: "/",
  //     description: "Esse projeto foi feito usando  Javascript, Html, Css puro"
  //   },
  //   {
  //     id:5,
  //     name: "novo5",
  //     imag: typescript,
  //     category: 'javascript',
  //     link: "/",
  //     description: "Esse projeto foi feito com  JAVASCRIPT puro"
  //   },
  //   {
  //     id:4,
  //     name: "novo4",
  //     imag: reactjs,
  //     link: "/",
  //     description: "Esse projeto foi feito com  JAVASCRIPT puro"
  //   },
  //   {
  //     id:3,
  //     name: "novo3",
  //     imag: nodejs,
  //     category: 'javascript',
  //     link: "/",
  //     description: "Esse projeto foi feito com  JAVASCRIPT puro"
  //   },
  //   {
  //     id:2,
  //     name: "novo2",
  //     imag: "",
  //     link: "/",
  //   },
  //   {
  //     id:1,
  //     name: "novo1",
  //     imag: "",
  //     link: "/",
  //   },
  //   {
  //     id:1,
  //     name: "novo1",
  //     imag: "",
  //     link: "/",
  //   },

  
  // ]
 

  const [items, setitems] = useState(data)

  const filterItem = (itemCategory) => {
    const upItem = data.filter((itemCat) => {
      return (itemCat.category == itemCategory)
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

        {items.map(({name,imag,link, description,id}) => {
          return(

          
              

               <div  className="project"  style={
                        {
                          background: `gray  `,
                          backgroundRepeat: `no-repeat`,
                          backgroundSize: 'cover',
                          backgroundOrigin: 'padding-box',
                          backgroundPosition: 'center'
                      
                        }}  
                        key={id}>
                          
                            <a href="/#">

                            <div className="test">
                             <h2>{name}</h2>
                            <h4>{description}</h4>

                            </div>
                            </a>
                
                </div>
              


           
             
          )
        })}


      </div>
    </Container>
  )
}