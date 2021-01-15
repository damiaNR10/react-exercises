const rootElement = document.querySelector('#root');

// const domElement = document.createElement("h2");
// domElement.className = "Clock";
// domElement.textContent = "Pozostało 13:36";

//rootElement.appendChild(domElement);

// const element = React.createElement(
//     "h2",
//     {className: "Clock",},
//     "Pozostało 13:35",
// );

// ReactDOM.render([element, element], rootElement);

function createDOM(type, value, className, root) {
    const domElement = document.createElement(type);
    domElement.className = className;
    domElement.textContent = value;
    root.appendChild(domElement);
}

createDOM("h2", "Pozostało 13:36 - test", "Clock", rootElement);