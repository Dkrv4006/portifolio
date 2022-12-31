
import { useState } from "react"
import { api } from "../../api/api"
import { Container } from "./style"

export const Header: React.FC = () => {


  
  return (
    <Container>
       <h1>Welcome!</h1>
       <h1>I'm a developer<span> FULL STACK</span></h1>

      <a href="/contat"><button>Contact</button> </a>
     

      
    </Container>
  )
}