
import { Container } from "./style"

export const Experience: React.FC = () => {

  const language = [
    {
      language: "Javascript",
      value: 70,
    },
    {
      language: "Typescript",
      value: 50,
    },
    {
      language: "React Js",
      value: 70,
    },
    {
      language: "Node Js",
      value: 50,
    },
    {
      language: "Next Js",
      value: 30,
    },
    {
      language: "Nest Js",
      value: 44,
    },
    {
      language: "Aws",
      value: 70,
    },
    {
      language: "Mysql",
      value: 60,
    },
  ]

  return (
    <Container>
       <div className="scroll">

        <h1>Experience</h1>

        <div className="language">
        {language.map(( { language,value }, index) => {

          return(
            <div className="container" key={index}>
              <div className="box">
                
              <h3>{language}</h3>
              <h3>{value}%</h3>

              </div>
              <input className="range" type="range" name={language} value={value} />

            </div>

          )

        })}

        </div>

        
       </div>
    </Container>
  )
}