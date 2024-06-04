import { useState } from 'react'; //A react hook
import reactImage from './assets/react-core-concepts.png';
import componentsImage from './assets/components.png';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js'

function App() {
//const stateArray = useState('Please click a button');
const [selectedTopic, setSelectedTopic ] = useState();
//const [Current State value,  state updating function] = useState(default state)

  function handleClick(selectedContent){
    setSelectedTopic(selectedContent);
  }

  //Alternative approach to conditional rendering using an if statement
  let tabContent = <p>Please Select a Topic.</p>
  if (selectedTopic){
    tabContent = 
    (<div id='tab-content'> 
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
     </code>
    </pre>
  </div>); 
  }
  return (
    <div>
      {/* We may call react components like this*/}
      <Header></Header> 
      {/* We may also use <Header /> */}
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* We may use map to dynamically output list/array data*/}
          {CORE_CONCEPTS.map((conceptItem) => 
            (<CoreConcept key={conceptItem.title} {...conceptItem}/>)
            )}

          {/* May also use these here as opposed to the spread operator, but eww, why would we?
            title={CORE_CONCEPTS[3].title} 
            description={CORE_CONCEPTS[3].description}
            img={CORE_CONCEPTS[3].image}
             */}

             {/* The map function makes this wayyyy smoother
          <CoreConcept {...CORE_CONCEPTS[0]}/>

          <CoreConcept {...CORE_CONCEPTS[1]}/>

          <CoreConcept {...CORE_CONCEPTS[2]}/>

          <CoreConcept {...CORE_CONCEPTS[3]}/>
        */}

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
            <TabButton 
            selected={selectedTopic === 'components'} 
            click={() => handleClick('components')} label='Components'
            />

            <TabButton 
            selected={selectedTopic === 'jsx'} 
            click={() => handleClick('jsx')} label='JSX'
            />

            <TabButton 
            selected={selectedTopic === 'props'} 
            click={() => handleClick('props')} label='Props'
            />

            <TabButton 
            selected={selectedTopic === 'state'} 
            click={() => handleClick('state')} label='State'
            />

          </menu>
          
          {/* Conditional Rendering allows for us to output the proper html for a particular state
          We use a ternary expression to do so*/}
          {/*
            { !selectedTopic ? <p>Please Select a Topic.</p> : (
            <div id='tab-content'> 
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
               </code>
              </pre>
            </div> 
            
            ) }
            */ }
            {/* Calling the Alternative approach to conditional rendering using an if statement */}
            {tabContent}
      
            
        </section>
      </main>
    </div>
  );
}

export default App;
