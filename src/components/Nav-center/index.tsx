
import { Container } from "./style"


interface IChildren{
  children: React.ReactNode
}

export const NavCenter: React.FC<IChildren> = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}