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
const Quizz = (
  <div>
    <h1>Quizz</h1>
    <ol>
      <li>
        <p>Why do we import React from react in our files?</p>
        <p>JSX syntax is define in react and require react to be interpreted</p>
      </li>
      <li>
        <p>If i were to console.log(page)in index js what wouls show up ?</p>
        <p>
          A javascript object React element that describe what reac should
          eventually add to the real dom for us
        </p>
      </li>
      <li>
        Whats wrong sit this code :
        <code>
          const page=(
          <h1>Hello</h1>
          <p>This is my website</p>)?
        </code>
        <p>
          No div or fragment to wrap the element up, you try to render two
          siblingg element
        </p>
      </li>
      <li>
        What does it mean for something to be declarative instead of imperative
        <p>
          you don't have to declare step by step // Declarative means i can tell
          the computer what to do and expect it to handle the details.
          Imperative means i need to tell it How to do each step
        </p>
      </li>
      <li>
        what does it mean for something to be "composable"
        <p>
          it's compose of different small element// We have small pieces that we
          can put together to make something larger/greater than the indivual
          pieces
        </p>
      </li>
      <li>
        <p> What is a react component?</p>
        <p>
          a function that return react element, react element are the object
          that got created with JSX a components can be reused as much as we
          like
        </p>
      </li>
      <li>
        <p>
          What's wrong with this code ?
          <code>
            function myComponent() retour(<small> I'm a tiny text </small>)
          </code>
        </p>
        <p>
          We have to use PascalCase and not Camel case so the name of the
          function declaring the components should be MyComponents
        </p>
      </li>
      <li>
        <p>
          Whats wrong with this code ?
          <code>
            function Header()
            {
              <header>
                <nav>
                  <img src="./react-logo.png" width="40px" />
                </nav>
              </header>
            }
            ReactDom.render(Header(),document.getElementById('root'))
          </code>
        </p>
        <p>
          Le return est enlever pour cause d'erreur vs code. The Header
          components is invoked as a function instead of a component even if
          it's working it should be as a component
        </p>
      </li>
    </ol>
  </div>
);
document.getElementById("root").append(JSON.stringify(Quizz));
ReactDOM.render(Quizz, document.getElementById("root"));
