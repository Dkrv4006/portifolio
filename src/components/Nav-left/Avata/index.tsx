
import { Container } from "./style"
import avata from "../../../assets/avata.png"
import { Midias } from "../../Midias"



export const Avata: React.FC = () => {
  return (
    <Container>
       <main className="avata">
        <img src={avata} alt="prefil" />
        <h2>Daniel Kennedy</h2>
        <Midias/>
       </main>
    </Container>
  )
}