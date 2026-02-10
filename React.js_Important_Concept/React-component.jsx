// react-component-> it is a reusable React component that can be used in different parts of the application
function ReactComponent() {
    return (
        <div>
            <h1>Welcome to the React Component</h1>
            <p>This is a reusable component that can be used in different parts of your application.</p>
            <button onClick={() => alert("Button clicked!")}>Click Me!</button>
        </div>
    )
}

// declarative syntax - focused on desired result.  {Jsx}
function app(){
    return <h1>Devesh</h1>
}

// imperative syntax - step by step process to achieve a goal.  {Js}
function app(){
    const element = document.createElement("h1");
    element.textContent = "Devesh";
    document.body.appendChild(element);
    
}

//functional components
    // -> functional based syntax 
    // -> State management - useState 
    // -> lifecycle method - useEffect
    // -> performance - lightweight 
        function myComponent(){
            return <h1>Hello</h1>
        }

//class component
// -> class based syntax 
// -> State management - this.state
// -> lifecycle method - componentdidmount
// -> performance - heavier
          class MyComponent extends React.Component {
            render() {   // it returns the react elements that will be renderd to the dom.
                return <h1>Hello</h1>
            }
          }