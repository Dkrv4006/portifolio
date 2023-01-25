import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
   --primary: #019fcf;
   --secondary: #191923;
   --third:#252430;
}

*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body, html{
    background:${props=> props.theme.colors.primary};

   

}

::-webkit-scrollbar{
        width: 5px;
        background-color: #353535;
    }
::-webkit-scrollbar-thumb{
        width: 5px;
        border-radius: 10px;
        background-color: ${props=> props.theme.colors.quartenary};
    }

a, button{
    border: none;
    text-decoration: none;
    text-decoration-color: red;
    cursor: pointer;
}


#root{
    display: flex;
    justify-content: center;
}

.none{
        display: none;
    }

    @media  screen and (max-width: 950px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;


        .none{
            display: block;
        }

  }
    
`