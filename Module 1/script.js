
import { HelloWorld } from "./another"
const App = () =>{
    return React.createElement('h1', {
        style : {
            color: 'red'
        }
    }, 'This is a fokira App',
    HelloWorld()
)
}


// const HelloWorld =() =>{
//     return (
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     )
// }

// const App = () =>{
//     return (
//         <React.Fragment>
//             <h1>Hello world</h1>
//             <HelloWorld />
//         </React.Fragment>
//     )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
