
import { Container } from "./style"

const data = [
  {
    icon: "fa-brands fa-github",
    link: "https://github.com/Dkrv4006/portifolio"
  },
  {
    icon: "fa-brands fa-telegram",
    link: "https://t.me/look4006"
  },
  {
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/daniel-kennedy-b1b386217"
  },
  {
    icon: "fa-brands fa-discord",
    link: "https://github.com/Dkrv4006/portifolio"
  },
]

export const Midias: React.FC = () => {
  return (
    <Container>
      <div className="icons">
           {data.map(({icon,link}) => {
              return(
                <a href={link}>
                  <i className={icon}></i>

                </a>

              )
            })}
        </div>
    </Container>
  )
}