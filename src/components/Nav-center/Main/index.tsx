
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
      text: "JavaScript foi criado em 1995 por Brendan Eich. Começou como uma linguagem simples para aplicativos web, mas hoje é usada em aplicativos front-end e back-end. Eu tenho trabalhado com JavaScript por anos e amo a capacidade de criar interatividade e dinamismo em projetos web."
    },
    {
      id:2 ,
      name:'TypeScript',
      img: typescript,
      link:"/project",
      text: "TypeScript foi criado pela Microsoft em 2012, com o objetivo de melhorar a escrita de código JavaScript. Ele adiciona tipagem estática e recursos avançados, tornando o código mais organizado e fácil de manter. Tenho trabalhado com TypeScript em vários projetos e aprecio a sua capacidade de melhorar a qualidade do código e a eficiência do desenvolvimento."

    },
    {
      id:3 ,
      name:'ReactJs',
      img: reactjs,
      link:"/project",
      text: "ReactJS é um framework JavaScript criado pela Facebook em 2011, especialmente projetado para construir interfaces de usuário e aplicações web. Ele permite o desenvolvimento de componentes reutilizáveis e a capacidade de lidar com grandes conjuntos de dados. Possuo extensa experiência trabalhando com ReactJS, tendo implementado suas funções em diversos projetos, e aprecio sua facilidade de uso e flexibilidade."
    },
    {
      id:4 ,
      name:'NodeJs',
      img: nodejs,
      link:"/project",
      text:  "Node.js é uma plataforma de código aberto criada em 2009 por Ryan Dahl, que permite a execução de JavaScript no lado do servidor. Isso torna possível a construção de aplicações full-stack usando apenas uma única linguagem, facilitando a produtividade do desenvolvedor. Possuo vasta experiência trabalhando com Node.js, tendo aplicado suas funcionalidades em diversos projetos, e aprecio sua escalabilidade, velocidade de execução e a ampla disponibilidade de bibliotecas de terceiros."

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