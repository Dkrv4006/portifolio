
import { Curriculum } from "../../components/curriculum"
import { Footer } from "../../components/Footer"
import { data } from "./data"
import { Container } from "./style"

export const Education: React.FC = () => {
  return (
    <Container>
      <h1>Education</h1>
      <hr />
        <h3>"Como profissional de tecnologia, estou sempre buscando me aperfeiçoar e ampliar meus conhecimentos. As capacitações que adquiri foram fundamentais para o meu desenvolvimento pessoal e profissional, e estou orgulhoso de compartilhá-las em meu portfólio. Desde cursos online até certificações, minhas capacitações abrangem desde desenvolvimento de software até segurança cibernética."</h3>
    
    <div className="container-edu">
      {data.map(({certificate, description, date,link, institutions}) => {
        return(
          <div className="education">
            <div className="left-edu">
              <h2>{institutions}</h2>
              <h3>Termino <span className="span">{date}</span></h3>
            </div>
            <div className="right-edu">
              <a href={link}>{certificate}</a>
              <h4>{description}</h4>
            </div>
          </div>
        )
      })}
    </div>
    <div className="none">
    <Curriculum/>
    </div>
    <Footer/>
    </Container>
  )
}