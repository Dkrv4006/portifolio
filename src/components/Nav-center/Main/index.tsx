import { Curriculum } from "../../curriculum"
import { Footer } from "../../Footer"
import { Container} from "./style"

export const Main: React.FC = () => {

  const data =[
    {
      id:1 ,
      name:'JavaScript',
      link:"/project",
      icon: "https://skillicons.dev/icons?i=javascript",
      textp: "Minha experiência com JavaScript tem sido incrível, trabalhando com ele há mais de 3 anos. É uma linguagem versátil e poderosa que me permite desenvolver tanto no lado do cliente quanto no lado do servidor. A sua comunidade é grande e há muitos recursos disponíveis para aprender e se aperfeiçoar.",
      texte: "My experience with JavaScript has been incredible, working with it for over 3 years. It's a versatile and powerful language that allows me to develop both on the client-side and the server-side. Its community is large and there are many resources available for learning and improving."
    },
    {
      id:2 ,
      name:'TypeScript',
      icon: "https://skillicons.dev/icons?i=typescript",
      link:"/project",
      textp: "TypeScript adiciona recursos de tipagem ao JavaScript, o que me ajuda a escrever código mais seguro e fácil de manter. Ele também tem uma excelente integração com ferramentas de desenvolvimento populares",
      texte: "TypeScript adds type features to JavaScript, which helps me write safer and easier to maintain code. It also has great integration with popular development tools."

    },
    {
      id:3 ,
      name:'ReactJs',
      icon: "https://skillicons.dev/icons?i=react",
      link:"/project",
      textp: "React.js é fácil de aprender e usar, e a sua comunidade é grande e ativa. Ele me permite construir aplicações web com componentes reutilizáveis e escaláveis, eu recomendo para quem deseja desenvolver aplicações web modernas e interativas.",
      texte: "React.js is easy to learn and use, and its community is large and active. It allows me to build web applications with reusable and scalable components, I recommend it to anyone who wants to develop modern and interactive web applications"
    },
    {
      id:4 ,
      name:'NodeJs',
      icon: "https://skillicons.dev/icons?i=nodejs",
      link:"/project",
      textp:  "Minha experiência com Node.js é positiva, tendo trabalhado com ele por cerca de 2 anos. Gosto da facilidade de uso e da grande comunidade. Ele permite escrever código JavaScript tanto no lado do cliente quanto no lado do servidor, o que me ajuda a ser mais eficiente e produtivo.",
      texte:  "My experience with Node.js is positive, having worked with it for about 2 years. I like the ease of use and the large community. It allows me to write JavaScript code both on the client-side and the server-side, which helps me be more efficient and productive."

    },
    {
      id:5 ,
      name:'NexJs',
      icon: "https://skillicons.dev/icons?i=nextjs",
      link:"/project",
      textp:  "Next.js é fácil de usar e me permite desenvolver aplicações web de forma rápida e eficiente. Ele vem com recursos de roteamento, construção e performance pré-configurados, tornando o desenvolvimento mais fácil e produtivo. Ele também tem uma excelente integração com o React, o que é uma vantagem para quem está familiarizado com essa biblioteca.",
      texte:  "Next.js is easy to use and allows me to develop web applications quickly and efficiently. It comes with pre-configured routing, building and performance features, making development easier and more productive. It also has great integration with React, which is an advantage for those familiar with this library."

    },
    {
      id:6 ,
      name:'NestJs',
      icon: "https://skillicons.dev/icons?i=nestjs",
      link:"/project",
      textp:  "Nest.js é baseado no Node.js e usa o TypeScript para proporcionar uma estrutura de aplicativo robusta e escalável. Ele também oferece suporte ao desenvolvimento de aplicativos com arquitetura de camadas, permitindo uma melhor organização do código. Ele tem uma comunidade ativa e diversas bibliotecas e ferramentas disponíveis para auxiliar no desenvolvimento.",
      texte:  "Nest.js is based on Node.js and uses TypeScript to provide a robust and scalable application structure. It also supports layer-based application development, allowing for better code organization. It has an active community and many available libraries and tools to aid in development."

    },
    {
      id:7 ,
      name:'Prisma',
      icon: "https://skillicons.dev/icons?i=prisma",
      link:"/project",
      textp:  "Prisma é uma ferramenta de gerenciamento de banco de dados que me permite trabalhar com bancos de dados relacionais de forma simples e eficiente. Ele oferece uma linguagem de consulta fácil de usar, e uma camada de abstração do banco de dados, tornando o desenvolvimento mais rápido e seguro.",
      texte:  "Prisma is a database management tool that allows me to work with relational databases in a simple and efficient manner. It offers an easy-to-use query language and a database abstraction layer, making development faster and safer"

    },
    {
      id:8 ,
      name:'Mysql',
      icon: "https://skillicons.dev/icons?i=mysql",
      link:"/project",
      textp:  "MySQL é um sistema de gerenciamento de banco de dados relacional robusto e confiável. Ele possui uma grande variedade de recursos e é amplamente utilizado em aplicações web e sistemas empresariais.",
      texte:  "My experience with MySQL has been positive as it's a robust and reliable relational database management system. It has a wide range of features and is widely used in web applications and enterprise systems"

    },
    {
      id:9 ,
      name:'Aws',
      icon: "https://skillicons.dev/icons?i=aws",
      link:"/project",
      textp:  "AWS é uma plataforma de nuvem confiável e escalável, com uma ampla variedade de serviços e ferramentas para desenvolvimento, infraestrutura e gerenciamento de aplicativos. Ele me permite gerenciar recursos de forma fácil e eficiente",
      texte:  "AWS is a reliable and scalable cloud platform with a wide range of services and tools for development, infrastructure, and application management. It allows me to manage resources easily and efficiently."

    },
    {
      id:10 ,
      name:'Github',
      icon: "https://skillicons.dev/icons?i=github",
      link:"/project",
      textp:  "GitHub é uma plataforma de controle de versão e colaboração para código aberto e privado. Ele me permite gerenciar meus projetos e colaborar com outras pessoas de forma fácil e eficiente. Ele tem uma interface intuitiva e uma ampla variedade de recursos",
      texte:  "GitHub is a version control and collaboration platform for both open-source and private code. It allows me to manage my projects and collaborate with others easily and efficiently. It has an intuitive interface and a wide range of features."

    },
    {
      id:11,
      name:'Linux',
      icon: "https://skillicons.dev/icons?i=linux",
      link:"/project",
      textp:  "Linux é um sistema operacional de código aberto altamente personalizável e escalável. Ele me permite gerenciar minha infraestrutura de forma eficiente e segura. Ele possui uma comunidade ativa e uma grande variedade de distribuições e ferramentas disponíveis. Ele é uma boa escolha para desenvolvedores e administradores de sistemas que buscam flexibilidade e estabilidade.",
      texte:  "Linux is a highly customizable and scalable open-source operating system. It allows me to manage my infrastructure efficiently and securely. It has an active community and a wide variety of distributions and tools available. It's a good choice for developers and system administrators who seek flexibility and stability."

    },
  ]

  return (
    <Container>
      <hr />
      <div className="box">
        {data.map(({name,link, texte,icon,id}) => {
          return(
            <div  className="lingue" key={id}>
              <h2><img src={icon} alt={name} /><br />{name}</h2>
              <p>{texte}</p>
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
      <Curriculum/>
      </div>
      <Footer/>
    </Container>
  )
}