
import { useState } from "react"
import { api } from "../../api/api"
import { Container } from "./style"

export const Header: React.FC = () => {


  
  return (
    <Container>
       <h1>Bem-vindo!</h1>
       <h2>Sou desenvolvedor <span>FULL STACK</span></h2>

      <a href="/contat">Contat-me</a>
     

      
    </Container>
  )
}