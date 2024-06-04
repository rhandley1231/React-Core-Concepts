import { Fragment } from 'react'; //A react hook
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples/Examples.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';

function App() {
  return (
    <Fragment>
      {/* We may call react components like this*/}
      <Header></Header>
      {/* We may also use <Header /> */}
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
