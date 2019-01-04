console.log("app.js is running!");

//logical && operator for if you want something to show, or nothing at all
//ternery operation for if you want one thing or another thing to show
//const and let are block scope
//Arrow function doesn't bind it's own this value - this use the this value of the context they were created in (will use parents this value)
//use ES5 function if you want to access this on a method - or it will use parents which is global scope and will be undefined.

//JSX - JavaScript XML
const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = e => {
  //gets called with the event object
  //prevents full page refresh
  e.preventDefault();
  //store inputed value
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderOptions();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderOptions();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderOptions = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderOptions();
