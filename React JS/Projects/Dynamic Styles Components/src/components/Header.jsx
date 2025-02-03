import logo from "../assets/logo.png";
import { styled } from "styled-components"; // from dependencies
// import "./Header.css"; // make individual file its scope in all project components
// import classes from "./Header.module.css"; // make individual file its scope in all project components

// Tagged Templates (use as wrapper)
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  // & = header :act as parent component

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: "Pacifico", cursive;
    margin: 0;
  }

  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;
    & h1 {
      font-size: 2.25rem;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p
      // style={   // for example
      //   {
      //     textAlign : 'left',
      //     color : 'red'
      //   }
      // }
      >
        A community of artists and art-lovers.
      </p>
    </StyledHeader>
  );
}

// use inline Css : using props as object
// and two word css properties write like : text-align -> textAlign
