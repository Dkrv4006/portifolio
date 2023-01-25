
import { Container } from "./style"
import curriculum from "../../assets/curriculo.pdf"

export const Curriculum = () => {
  return (
    <Container>
      <a href={curriculum} download="curriculum" >
       <button >Curriculum<i className="fa fa-download"></i></button>
      </a>
    </Container>
  )
}