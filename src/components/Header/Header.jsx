import reactImage from '../../assets/react-core-concepts.png';
import './Header.css';
const reactAdjectives = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max + 1));
}


export default function Header(){
    const adjective = reactAdjectives[genRandomInt(2)]; 
  
    return(   
      <header>
          <img src={reactImage} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {/* Dynamically generating the adjective to describe react concepts */}
            {adjective} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }