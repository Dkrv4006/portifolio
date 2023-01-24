
import { Container } from "./style"
import avata from "../../../assets/avata.png"

const data = [
  {
    icon: "fa-brands fa-github",
    link: "https://github.com/Dkrv4006/portifolio"
  },
  {
    icon: "fa-brands fa-telegram",
    link: "https://github.com/Dkrv4006/portifolio"
  },
  {
    icon: "fa-brands fa-linkedin",
    link: "https://github.com/Dkrv4006/portifolio"
  },
  {
    icon: "fa-brands fa-discord",
    link: "https://github.com/Dkrv4006/portifolio"
  },
]

export const Avata: React.FC = () => {
  return (
    <Container>
       <main className="avata">
        <img src={avata} alt="prefil" />
        <h2>Daniel Kennedy</h2>
        <div className="icons">
           {data.map(({icon,link}) => {
              return(
                <a href={link}>
                  <i className={icon}></i>

                </a>

              )
            })}
        </div>
       </main>
    </Container>
  )
}