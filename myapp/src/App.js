// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import NavbarMain from "./Navbar"


// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// function App() {
//   const [counter, setCounter] = useState(0);
//     const add = () => {
//       setCounter((prev) => {
//         if (prev<20) {
//           return  prev  + 1 
//         }
//         return prev
//       })
//     };
//     const subtract = () => {
//       setCounter((prev) => {
//         if (prev>0){
//           return prev - 1
//         }
//         return prev
//       })
//     };

//   return (
//     <div className="App">
//       <NavbarMain />
//       <button onClick={add}>+</button>
//       <p>{counter}</p>
//       <button onClick={subtract}>-</button>
//     </div>
//   );
// }

// export default App;


export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
