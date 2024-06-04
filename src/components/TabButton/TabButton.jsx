//Using the children prop, we can pass our data between the component tags
/*
export default function TabButton({ children, click }){
    return (
    <li>
        <button onClick = {click}>{children}</button>
    </li>
    );
}
*/

//We may also pass a label and call it within the tag as a label
export default function TabButton({ label, click, selected }){
    return (
    <li>
        <button className={selected ? 'active' : undefined} onClick = {click}>{label}</button>
    </li>
    );
}
