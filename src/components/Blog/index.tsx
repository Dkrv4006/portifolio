import { Container } from "./style"

import {data} from "./data"

export const Blog: React.FC = () => {
  return (
    <Container>
      <div className="box">
        {data.map(({name,link}) => {
          return(
            <div className="blog">
              <div>{name}</div>
              <div>{link}</div>
            </div>
          )
        } )}
      </div>
    </Container>
  )
}