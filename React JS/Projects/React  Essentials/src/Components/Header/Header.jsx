import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    // Custom Component
  
    const descriptions = reactDescriptions[randomInt(2)];
    return (
      <header>
        <h2>Welcome on React Page</h2>
        <img src={reactImg} alt="React Logo" />
        <h1>React Essentials</h1>
        <p>
          {descriptions} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }