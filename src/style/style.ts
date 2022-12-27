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
    
`