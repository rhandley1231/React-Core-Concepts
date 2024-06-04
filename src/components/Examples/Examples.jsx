import Section from '../Section/Section';
import TabButton from '../TabButton/TabButton';
import Tabs from '../TabButton/Tabs';
import './Examples.css';
import { useState, Fragment } from 'react';
import { EXAMPLES } from '../../data';

export default function Examples() {
  //const stateArray = useState('Please click a button');
  const [selectedTopic, setSelectedTopic] = useState();
  //const [Current State value,  state updating function] = useState(default state)

  function handleClick(selectedContent) {
    setSelectedTopic(selectedContent);
  }

  //Alternative approach to conditional rendering using an if statement
  let tabContent = <p>Please Select a Topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      {/* Dynamically set the wrapper for the buttons by passing either a string value 
      representing an element from HTML or a component  */}
      <Tabs
        buttons={
          <Fragment>
            <TabButton
              selected={selectedTopic === 'components'}
              onClick={() => handleClick('components')}
              label="Components"
            />

            <TabButton
              selected={selectedTopic === 'jsx'}
              onClick={() => handleClick('jsx')}
              label="JSX"
            />

            <TabButton
              selected={selectedTopic === 'props'}
              onClick={() => handleClick('props')}
              label="Props"
            />

            <TabButton
              selected={selectedTopic === 'state'}
              onClick={() => handleClick('state')}
              label="State"
            />
          </Fragment>
        }>
        {tabContent}
      </Tabs>
      <menu>
        {/*
            Children approach
            <TabButton>Components</TabButton>
            */}

        {/* Label approach */}
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
            */}
      {/* Calling the Alternative approach to conditional rendering using an if statement */}
    </Section>
  );
}
