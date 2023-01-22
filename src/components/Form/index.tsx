
import { Container } from "./style"

export const Form: React.FC = () => {
  return (
    <Container>

      <form action="">
        <label htmlFor="">Form the contact</label>
        <input type="text" placeholder="Name" />
        <input type="email" name="" id="" placeholder="Email" /> <br />
        <input type="text" placeholder="Description" />
        <button type="submit">Envia</button>
      </form>
    </Container>
  )
}