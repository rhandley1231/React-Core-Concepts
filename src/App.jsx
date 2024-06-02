import reactImage from './assets/react-core-concepts.png';
import componentsImage from './assets/components.png';
import { CORE_CONCEPTS } from './data';
const reactAdjectives = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max + 1));
}

function Header(){
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

function CoreConcept(props){
  return (
    <li>
      <img src={props.img} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      </li>
  );
}

function App() {
  return (
    <div>
      {/* We may call react components like this*/}
      <Header></Header> 
      {/* We may also use <Header /> */}
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description}
            img={CORE_CONCEPTS[0].image}/>

          <CoreConcept 
            title={CORE_CONCEPTS[1].title} 
            description={CORE_CONCEPTS[1].description}
            img={CORE_CONCEPTS[1].image}/>

          <CoreConcept 
            title={CORE_CONCEPTS[2].title} 
            description={CORE_CONCEPTS[2].description}
            img={CORE_CONCEPTS[2].image}/>

          <CoreConcept 
            title={CORE_CONCEPTS[3].title} 
            description={CORE_CONCEPTS[3].description}
            img={CORE_CONCEPTS[3].image}/>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
