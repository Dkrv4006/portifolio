
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Container } from "./style"

interface Itheme{
  theme: () => void 

}

export const NavRight: React.FC<Itheme> = ({theme}) => {

  const route = [
    {
      name: 'Home',
      icon: "fa-solid fa-house",
      link: '/'
    },
    {
      name: 'Project',
      icon: "fa fa-briefcase",
      link: '/project'
    },
    {
      name: 'Farmac',
      icon: "fa fa-user-graduate",
      link: '/education'
    },
    {
      name: 'Blog',
      icon: "fa-solid fa-laptop-code",
      link: '/blog'
    },
    {
      name: 'Contat',
      icon: "fa fa-message",
      link: '/contat'
    },
  ]

  const [open, setopen] = useState(true)
  return (
    <Container>
    
    <div className="left">



      <button 
      onClick={() => 
        {theme(); setopen(!open);}}>
        {open 
        ? <i className="fa-regular fa-moon"></i>
        : <i className="fa-solid fa-sun"></i>}</button>

      
      {route.map(({link, name , icon},index) => {
        return(
            <NavLink to={link} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
               <div className="link">
               <p >{name}</p>
               <i className={icon}></i>
               </div>
            </NavLink>

        )
      })}

    </div>

     
    </Container>
  )
}