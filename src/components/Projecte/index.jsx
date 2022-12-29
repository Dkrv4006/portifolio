
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
                          background: `url(${imag})  `,
                          backgroundRepeat: `no-repeat`,
                          backgroundSize: 'cover',
                          backgroundOrigin: 'padding-box',
                          backgroundPosition: 'center'
                      
                        }}  
                        key={id}>
                          
                            <a href="/#">

                            <div className="test">
                            <h1>{name}</h1>
                            <p>{description}</p>

                            </div>
                            </a>
                
                </div>
              


           
             
          )
        })}


      </div>
    </Container>
  )
}