import reactImage from './assets/react-core-concepts.png';
import componentsImage from './assets/components.png';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton/TabButton.jsx'
import { CORE_CONCEPTS } from './data';

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
          {/* May also use these here as opposed to the spread operator
            title={CORE_CONCEPTS[3].title} 
            description={CORE_CONCEPTS[3].description}
            img={CORE_CONCEPTS[3].image}
             */}
          <CoreConcept {...CORE_CONCEPTS[0]}/>

          <CoreConcept {...CORE_CONCEPTS[1]}/>

          <CoreConcept {...CORE_CONCEPTS[2]}/>

          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>

            {/*
            Children approach
            <TabButton>Components</TabButton>
            */}

            {/* Label approach */}
            <TabButton label='Components'/>
            <TabButton label='JSX'/>
            <TabButton label='Props'/>
            <TabButton label='State'/>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
