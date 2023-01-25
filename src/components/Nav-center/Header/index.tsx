
import { Midias } from "../../Midias"
import { Container } from "./style"

export const Header: React.FC = () => {
  return (
    <Container>
      <div className="text">
       <h1>Welcome to my portfolio, where you will find a collection of my work and skills as a developer.</h1> <br />
       <h1>I'm a developer<span> FULL STACK</span></h1>
      </div>
       <a href="/contat"><button>Contact</button> </a>
       <div className="midia">
       <Midias/>

       </div>
    </Container>
  )
}