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

// const header = React.createElement(
//     "h1", "", "Kurs Reacta - Tydzien 1",
// );

const app = React.createElement(
    "div", {className: "App"}, "", 
);

// const TimeboxEditor = React.createElement(
//     "div", {className: "TimeboxEditor inactive"}, "",
// );

// const Timebox = React.createElement(
//     "div", {className: "Timebox"}, "Liczba przerwań: 2",
// );

// const Label1 = React.createElement(
//     "label", {disabled: "disabled", value: "Uczę się skrótów klawiszowych", type: "text"}, "Co robisz?",
// );

// const Label2 = React.createElement(
//     "label", {disabled: "disabled", value: "25", type: "number"}, "Co robisz?",
// );

// const Button = React.createElement(
//     "button", {}, "Zacznij"
// );

// const TimeboxHeader = React.createElement(
//     "h1", {}, "Uczę się skrótów klawiszowych"
// );

// const Clock = React.createElement(
//     "h2", {className: "Clock"}, "Pozostało 13:37"
// );

// const ProgressBar = React.createElement(
//     "div", {className: "ProgressBar"}, ""
// );

// const ProgressBarContent = React.createElement(
//     "div", {}, ""
// );

// const ButtonStart = React.createElement(
//     "button", {disabled: "disabled"}, "Start"
// );

// const ButtonStop = React.createElement(
//     "button", {}, "Stop"
// );

// const ButtonPause = React.createElement(
//     "button", {}, "Pauza"
// );

// const Pauses = React.createElement(
//     "p", {}, "Liczba przerw: 2"
// );


//ReactDOM.render(app, rootElement);
//ReactDOM.render([TimeboxEditor, Timebox], document.querySelector('.App'));
// ReactDOM.render([Label1, Label2, Button], document.querySelector('.TimeboxEditor'));
// ReactDOM.render([TimeboxHeader, Clock, ProgressBar, ButtonStart, ButtonStop, ButtonPause, ], document.querySelector('.Timebox'));
// ReactDOM.render(ProgressBarContent, document.querySelector('.ProgressBar'));
// document.querySelector('.ProgressBar div').style.width = "45%";