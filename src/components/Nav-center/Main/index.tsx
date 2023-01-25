import { Foolder } from "../../Foolder"
import { Container} from "./style"

export const Main: React.FC = () => {

  const data =[
    {
      id:1 ,
      name:'JavaScript',
      link:"/project",
      icon: "https://skillicons.dev/icons?i=javascript",
      text: "Minha experiência com JavaScript tem sido incrível, trabalhando com ele há mais de 3 anos. É uma linguagem versátil e poderosa que me permite desenvolver tanto no lado do cliente quanto no lado do servidor. A sua comunidade é grande e há muitos recursos disponíveis para aprender e se aperfeiçoar."
    },
    {
      id:2 ,
      name:'TypeScript',
      icon: "https://skillicons.dev/icons?i=typescript",
      link:"/project",
      text: "TypeScript adiciona recursos de tipagem ao JavaScript, o que me ajuda a escrever código mais seguro e fácil de manter. Ele também tem uma excelente integração com ferramentas de desenvolvimento populares"

    },
    {
      id:3 ,
      name:'ReactJs',
      icon: "https://skillicons.dev/icons?i=react",
      link:"/project",
      text: "React.js é fácil de aprender e usar, e a sua comunidade é grande e ativa. Ele me permite construir aplicações web com componentes reutilizáveis e escaláveis, eu recomendo para quem deseja desenvolver aplicações web modernas e interativas."
    },
    {
      id:4 ,
      name:'NodeJs',
      icon: "https://skillicons.dev/icons?i=nodejs",
      link:"/project",
      text:  "Minha experiência com Node.js é positiva, tendo trabalhado com ele por cerca de 2 anos. Gosto da facilidade de uso e da grande comunidade. Ele permite escrever código JavaScript tanto no lado do cliente quanto no lado do servidor, o que me ajuda a ser mais eficiente e produtivo."

    },
    {
      id:5 ,
      name:'NexJs',
      icon: "https://skillicons.dev/icons?i=nextjs",
      link:"/project",
      text:  "Next.js é fácil de usar e me permite desenvolver aplicações web de forma rápida e eficiente. Ele vem com recursos de roteamento, construção e performance pré-configurados, tornando o desenvolvimento mais fácil e produtivo. Ele também tem uma excelente integração com o React, o que é uma vantagem para quem está familiarizado com essa biblioteca."

    },
    {
      id:6 ,
      name:'NestJs',
      icon: "https://skillicons.dev/icons?i=nestjs",
      link:"/project",
      text:  "Nest.js é baseado no Node.js e usa o TypeScript para proporcionar uma estrutura de aplicativo robusta e escalável. Ele também oferece suporte ao desenvolvimento de aplicativos com arquitetura de camadas, permitindo uma melhor organização do código. Ele tem uma comunidade ativa e diversas bibliotecas e ferramentas disponíveis para auxiliar no desenvolvimento."

    },
    {
      id:7 ,
      name:'Prisma',
      icon: "https://skillicons.dev/icons?i=prisma",
      link:"/project",
      text:  "Prisma é uma ferramenta de gerenciamento de banco de dados que me permite trabalhar com bancos de dados relacionais de forma simples e eficiente. Ele oferece uma linguagem de consulta fácil de usar, e uma camada de abstração do banco de dados, tornando o desenvolvimento mais rápido e seguro."

    },
    {
      id:8 ,
      name:'Mysql',
      icon: "https://skillicons.dev/icons?i=mysql",
      link:"/project",
      text:  "MySQL é um sistema de gerenciamento de banco de dados relacional robusto e confiável. Ele possui uma grande variedade de recursos e é amplamente utilizado em aplicações web e sistemas empresariais."

    },
    {
      id:9 ,
      name:'Aws',
      icon: "https://skillicons.dev/icons?i=aws",
      link:"/project",
      text:  "AWS é uma plataforma de nuvem confiável e escalável, com uma ampla variedade de serviços e ferramentas para desenvolvimento, infraestrutura e gerenciamento de aplicativos. Ele me permite gerenciar recursos de forma fácil e eficiente"

    },
    {
      id:10 ,
      name:'Github',
      icon: "https://skillicons.dev/icons?i=github",
      link:"/project",
      text:  "GitHub é uma plataforma de controle de versão e colaboração para código aberto e privado. Ele me permite gerenciar meus projetos e colaborar com outras pessoas de forma fácil e eficiente. Ele tem uma interface intuitiva e uma ampla variedade de recursos"

    },
    {
      id:11,
      name:'Linux',
      icon: "https://skillicons.dev/icons?i=linux",
      link:"/project",
      text:  "Linux é um sistema operacional de código aberto altamente personalizável e escalável. Ele me permite gerenciar minha infraestrutura de forma eficiente e segura. Ele possui uma comunidade ativa e uma grande variedade de distribuições e ferramentas disponíveis. Ele é uma boa escolha para desenvolvedores e administradores de sistemas que buscam flexibilidade e estabilidade."

    },
  ]

  return (
    <Container>
      <hr />
      <div className="box">
        {data.map(({name,link, text,icon,id}) => {
          return(
            <div  className="lingue" key={id}>
              <h2><img src={icon} alt={name} /><br />{name}</h2>
              <p>{text}</p>
              <a href={link}> TO GO <i className="fa-solid fa-chevron-right"></i></a>
            </div>    
          )
        })
        }
           <div className="foolde">
               <img src="https://skillicons.dev/icons?i=webpack" alt="webpack" />
               <img src="https://skillicons.dev/icons?i=vscode" alt="vscode" />
               <img src="https://skillicons.dev/icons?i=vite" alt="vite" />
               <img src="https://skillicons.dev/icons?i=tailwind" alt="tailwind" />
               <img src="https://skillicons.dev/icons?i=styledcomponents" alt="styledcomponents" />
               <img src="https://skillicons.dev/icons?i=postgres" alt="postgres" />
               <img src="https://skillicons.dev/icons?i=netlify" alt="netlify" />
               <img src="https://skillicons.dev/icons?i=materialui" alt="materialui" />
               <img src="https://skillicons.dev/icons?i=mongodb" alt="mongodb" />
               <img src="https://skillicons.dev/icons?i=bootstrap" alt="bootstrap" />
               <img src="https://skillicons.dev/icons?i=bash" alt="bash" />
           </div>
      </div>
      <div className="none">

      <Foolder/>
      </div>
    </Container>
  )
}