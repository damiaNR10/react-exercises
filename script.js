const rootElement = document.querySelector('#root');
// const domElement = document.createElement("h2");
// domElement.className = "Clock";
// domElement.textContent = "Pozostało 13:36";

//rootElement.appendChild(domElement);

//Testowanie tworzenia elementów przez funkcję

/*
function createDOM(type, className, value, root) {
    const domElement = document.createElement(type);
    if(className) domElement.classList = className;
    if(value) domElement.textContent = value;
    root.appendChild(domElement);
}

createDOM("h1", "", "Kurs Reacta - Tydzien 2", rootElement);
createDOM("hr", "", "", rootElement);
createDOM("div", "App", "", rootElement);
createDOM("div", "TimeboxEditor inactive", "", document.querySelector('.App'));

*/

const header = React.createElement(
    "h1", "", "Kurs Reacta - Tydzien 1",
);

const app = React.createElement(
    "div", {className: "App"}, "",
);

const TimeboxEditor = React.createElement(
    "div", {className: "TimeboxEditor inactive"}, "",
);

const Timebox = React.createElement(
    "div", {className: "Timebox"}, "",
);

const Label1 = React.createElement(
    "label", {disabled: "disabled", value: "Uczę się skrótów klawiszowych", type: "text"}, "Co robisz?",
);

const Label2 = React.createElement(
    "label", {disabled: "disabled", value: "25", type: "number"}, "Co robisz?",
);

const Button = React.createElement(
    "button", {}, "Zacznij"
);

ReactDOM.render([header, app], rootElement);
ReactDOM.render([TimeboxEditor, Timebox], document.querySelector('.App'));
ReactDOM.render([Label1, Label2, Button], document.querySelector('.TimeboxEditor'));