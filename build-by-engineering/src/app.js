import render from "./render"

// function App(){
//     return(
//         <div>{'hello,webpack!'}</div>
//     )
// }
const textElement = {
    type: "span",
    props: {
      children: [
        {
          type: "TEXT ELEMENT",
          props: { nodeValue: "Foo" }
        }
      ]
    }
  };
console.log(render(textElement,document.getElementById('root')))