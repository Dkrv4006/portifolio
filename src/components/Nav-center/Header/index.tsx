
import { Container } from "./style"

export const Header: React.FC = () => {
  return (
    <Container>
       <h1>Welcome to my portfolio, where you will find a collection of my work and skills as a developer.</h1> <br />
       <h1>I'm a developer<span> FULL STACK</span></h1>
       <a href="/contat"><button>Contact</button> </a>
    </Container>
  )
}