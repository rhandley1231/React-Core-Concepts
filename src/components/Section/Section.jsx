export default function Section({ title, children, ...props }){
    //We may forward props across html elements through the spread operator
    return(
        
        <section {...props}>
            {/*The spread operator on props here allows us to still pass amy traditional arguments to the  html code*/}
            <h2>{title}</h2>
            {children}
        </section>
    );
}