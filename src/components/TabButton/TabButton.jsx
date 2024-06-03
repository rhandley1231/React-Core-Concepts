//Using the children prop, we can pass our data between the component tags
/*
export default function TabButton({ children }){
    return (
    <li>
        <button>{children}</button>
    </li>
    );
}
*/

//We may also pass a label and call it within the tag as a label
export default function TabButton({ label }){
    return (
    <li>
        <button>{label}</button>
    </li>
    );
}
