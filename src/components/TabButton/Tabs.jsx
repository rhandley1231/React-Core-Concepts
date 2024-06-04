import { Fragment } from 'react';
//Multiple Slots allow for more reusability in components
//Say we need tabs set up on different parts of a website, well now we can do that
export default function Tabs({ children, buttons, ButtonsContainer }) {
  //const ButtonsContainer = buttonsContainer;
  return (
    <Fragment>
      {/*Allows us to dynamically set the html wrapping the buttons, for reuseability*/}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </Fragment>
  );
}
