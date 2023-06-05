// ReactDOM.render(<h1>Hello everyone</h1>, document.getElementById("root"));

// function Main() {
//   return <h3>Hello from led</h3>;
// }

// ReactDOM.render(
//   <div>
//     <ul>
//       <li>1</li>
//       <li>2</li>
//     </ul>
//     <Main />
//   </div>,

//   document.getElementById("root")
// );

// const h1 = document.createElement("h1");
// h1.textContent = "this is imperative";
// h1.className = "header";
// document.getElementById("root").append(h1);

// const element = <h1 className="header">This is JSX </h1>;
// console.log(element);
// ReactDOM.render(element, document.getElementById("root"));

// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is paragraph</p>
//   </div>
// );
// console.log(page);
// ReactDOM.render(page, document.getElementById("root"));

// const NavBAr = (
//   <nav>
//     <h1>Yo Hello</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );
// ReactDOM.render(NavBAr, document.getElementById("root"));
const page = (
  <div>
    <h1>My awesome website in react</h1>
    <h3>here are the reason why i love react</h3>
    <ol>
      <li>Composable</li>
      <li>Declarative</li>
      <li>Hireable skill </li>
      <li>Actively maintend by skilled root </li>
    </ol>
  </div>
);
document.getElementById("root").append(JSON.stringify(page));
ReactDOM.render(page, document.getElementById("root"));
