
import { Curriculum } from "../../components/curriculum"
import { Footer } from "../../components/Footer"
import { Projecte } from "../../components/Projecte"
import { Container } from "./style"

export const Project: React.FC = () => {
  return (
    <Container>
      <Projecte/>

      <div className="none">
      < Curriculum/>
      </div>
      <Footer/>
    </Container>
  )
}