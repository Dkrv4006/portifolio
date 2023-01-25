
import { Foolder } from "../../components/Foolder"
import { Projecte } from "../../components/Projecte"
import { Container } from "./style"

export const Project: React.FC = () => {
  return (
    <Container>
      <Projecte/>

      <div className="none">

      <  Foolder/>
      </div>
    </Container>
  )
}