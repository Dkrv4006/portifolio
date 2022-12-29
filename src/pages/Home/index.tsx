
import { Header } from "../../components/Nav-center/Header"
import { Main } from "../../components/Nav-center/Main"
import { Container } from "./style"

export const Home: React.FC = () => {
  return (
    <Container>
      <Header/>
      <Main/>

    </Container>
  )
}