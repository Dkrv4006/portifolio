
import { Container} from "./style"

import javascript from "../../../assets/javascript.svg"
import typescript from "../../../assets/typescript.svg"
import reactjs from "../../../assets/reactjs.svg"
import nodejs from "../../../assets/javascript.svg"
import { url } from "inspector"


export const Main: React.FC = () => {

  const data =[
    {
      id:1 ,
      name:'JavaScript',
      img: javascript,
      link:"/project",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perferendis minus laudantium eveniet neque repellat dolor accusamus odit? Voluptatum expedita veniam illo ea. Nisi, corporis odit beatae blanditiis veniam asperiores.'
    },
    {
      id:1 ,
      name:'TypeScript',
      img: typescript,
      link:"/project",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perferendis minus laudantium eveniet neque repellat dolor accusamus odit? Voluptatum expedita veniam illo ea. Nisi, corporis odit beatae blanditiis veniam asperiores.'

    },
    {
      id:1 ,
      name:'ReactJs',
      img: reactjs,
      link:"/project",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perferendis minus laudantium eveniet neque repellat dolor accusamus odit? Voluptatum expedita veniam illo ea. Nisi, corporis odit beatae blanditiis veniam asperiores.'

    },
    {
      id:1 ,
      name:'NodeJs',
      img: nodejs,
      link:"/project",
      text:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perferendis minus laudantium eveniet neque repellat dolor accusamus odit? Voluptatum expedita veniam illo ea. Nisi, corporis odit beatae blanditiis veniam asperiores.'

    },
  ]
  return (
    <Container>
      
      <hr />

      <div className="box">
        {data.map(({name,img,link, text,id}) => {
          return(
            <div  className="lingue">
              
              <h2>{name}</h2>
              <p>{text}</p>

              <a href={link}> to go <i className="fa-solid fa-chevron-right"></i></a>

            </div>
           
          )
        })}
      </div>
    </Container>
  )
}