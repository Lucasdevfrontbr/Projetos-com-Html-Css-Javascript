import styled from "styled-components"
export function Band(props){ 
    const Main=styled.main`
padding:1rem;
`
 const Img=styled.img`
 border-radius:1rem;
 ` 
 const Title=styled.h1`
 
 `    
 const Country=styled.p`
 text-align:center;
margin-top:0.5rem;
 width:100%;
 ` 
return(
    <Main>
<Img src={props.img} alt="" width={200} />
<Title>{props.name}</Title>
<Country>{props.country}</Country>
    </Main>
)
}