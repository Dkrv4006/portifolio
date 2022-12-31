
import { Avata } from "./Avata"
import { Curriculum } from "./curriculum"
import { Experience } from "./Experience"
import { Container } from "./style"

export const NavLeft: React.FC = () => {
  return (
    <Container>
      <Avata/>
      <Experience/>
      <Curriculum/>
    </Container>
  )
}