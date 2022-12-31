
import { Container } from "./style"
import curriculum from "../../../assets/curriculo.pdf"

export const Curriculum = () => {
  return (
    <Container>
      <a href={curriculum} download="curriculum" >

      <button >Download</button>
      </a>
    </Container>
  )
}