import render from "./render"

// function App(){
//     return(
//         <div>{'hello,webpack!'}</div>
//     )
// }
const element = {
  type: "ddd",
  props: {
    id: "container",
    onclick:()=>{
      console.log(999)
    },
    children: [
      { type: "input", props: { value: "foo123", type: "text" } },
      { type: "a", props: { value:"标签",type: "text",href: "/bar" } },
      { type: "span", props: {} }
    ]
  }
};
  render(element,document.getElementById('root'))
console.log(123)