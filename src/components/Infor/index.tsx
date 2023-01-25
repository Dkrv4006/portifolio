
import { Container } from "./style"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { data } from "../Projecte/data"
export const Infor: React.FC = () => {

  const [git, setgit] = useState()

useEffect(()   =>  {
      axios.get('https://api.github.com/users/Dkrv4006')
     .then(response => setgit(response.data.public_repos))

  },[])

  const pro = data.length

  console.log(pro);
  



  return (
    <Container>

        <div><span>{git}+ </span> Repositorios </div>
        <div><span>{pro}+ </span> Projetos </div>
     
      
    </Container>
  )
}