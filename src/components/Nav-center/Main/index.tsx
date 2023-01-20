
import { Container} from "./style"

import javascript from "../../../assets/javascript.svg"
import typescript from "../../../assets/typescript.svg"
import reactjs from "../../../assets/reactjs.svg"
import nodejs from "../../../assets/javascript.svg"



export const Main: React.FC = () => {

  const data =[
    {
      id:1 ,
      name:'JavaScript',
      img: javascript,
      link:"/project",
      text: 'Javascript é usado por programadores em todo o mundo para criar conteúdo web dinâmico e interativo, como aplicativos e navegadores.'
    },
    {
      id:1 ,
      name:'TypeScript',
      img: typescript,
      link:"/project",
      text: 'TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.'

    },
    {
      id:1 ,
      name:'ReactJs',
      img: reactjs,
      link:"/project",
      text: 'React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.'
    },
    {
      id:1 ,
      name:'NodeJs',
      img: nodejs,
      link:"/project",
      text:  'O Node.js é um ambiente de servidor de código aberto e multiplataforma que pode ser executado no Windows, Linux, Unix, macOS e muito mais. Node.js é um ambiente de tempo de execução JavaScript back-end, é executado no V8 JavaScript Engine e executa código JavaScript fora de um navegador da Web.'

    },
    {
      id:1 ,
      name:'NodeJs',
      img: nodejs,
      link:"/project",
      text:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perferendis minus laudantium eveniet neque repellat dolor accusamus odit? Voluptatum expedita veniam illo ea. Nisi, corporis odit beatae blanditiis veniam asperiores.'

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