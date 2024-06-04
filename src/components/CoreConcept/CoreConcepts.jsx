import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../../data';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* We may use map to dynamically output list/array data*/}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}

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
  );
}
