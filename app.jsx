
// class Model {

//    constructor () {
//       this.todos = [];
//       this.inputValue = null;
//       this.render = undefined;
//    }
  
//    subscribe(render) {
//       this.render = render;
//    }
//    inform() {
//       console.log(this.todos.map(e => e.text));
//       this.render();
//    }
//    addTodo(text) {
//       this.todos.push({
//          id: Utils.uuid(), // local storage
//          text: text,     // el texto que pongo
//          completed: false  //estado 
//       });
//       this.inform();
//    }
//    updateTodo(index, todo) {
//       this.todos[index] = todo;
//       this.inform();
//    }
//    removeTodo(todo) {
//       this.todos = this.todos.filter(item => item !== todo);
//       this.inform();
//    }
// }

// const App = ({ title, model }) => {
//    const items = model.todos.map((todo, index) => {
//       return (
//          <li key={todo.id}>
//             <input
//                type="text"
//                value={todo.text}
//                onChange={e =>
//                   model.updateTodo(index, {
//                      id: todo.id,
//                      text: e.target.value,
//                      completed: todo.completed
//                   })}
//             />
//             <button onClick={() => model.removeTodo(todo)}> delete item</button>
//          </li>
//       );
//    });
//    return (
//       <div>
//          <h1> {title} </h1>
//          <form
//             onSubmit={e => {
//                e.preventDefault();
//                model.addTodo(model.inputValue);
//             }}
//          >
//             <input onChange={e => (model.inputValue = e.target.value)} />
//             <button type="submit">Add Item</button>
//          </form>
//          <ol> {items} </ol>
//       </div>
//    );
// };

// let model = new Model();
// let counter = 1;
// let render = () => {
//    console.log('render times: ', counter++);
//    ReactDOM.render(
//       <App title="TodoApp" model={model} />,
//       document.getElementById('container')
//    );
// };
// //view etiqueta, model propiedad

// model.subscribe(render);
// render(); 


 class Model {

    constructor () {
       this.guests = [];
       this.inputValue = null;
       this.render = undefined;
    }
  
    subscribe(render) {
       this.render = render;
    }
    inform() {
       console.log(this.guests.map(e => e.text));
       this.render();
    }
    addTodo(text) {
       this.guests.push({
          id: Utils.uuid(), // local storage
          text: text,     // el texto que pongo
          completed: false  //estado 
       });
       this.inform();
    }
    updateTodo(index, todo) {
       this.guests[index] = todo;
       this.inform();
    }
    removeTodo(todo) {
       this.guests = this.guests.filter(item => item !== todo);
       this.inform();
    }
 }

 const App = ({ title, model }) => {
    const items = model.guests.map((todo, index) => {
       return (
          <li key={todo.id}>
             <input
                type="text"
                value={todo.text}
                onChange={e =>
                   model.updateTodo(index, {
                      id: todo.id,
                      text: e.target.value,
                      completed: todo.completed
                   })}
             />
             <button onClick={() => model.removeTodo(todo)}> delete item</button>
          </li>
       );
    });
    return (
       <div>
            <header>
                  <h1> {title} </h1>
                  <p> Registration App </p>
                  <form
                        onSubmit={e => {
                        e.preventDefault();
                        model.addTodo(model.inputValue);
                        }}
                  >
                        <input onChange={e => (model.inputValue = e.target.value)} />
                        <button type="submit">Add Item</button>
                  </form>
            </header>
          <ol> {items} </ol>
       </div>
    );
 };

 let model = new Model();
 let counter = 1;
 let render = () => {
    console.log('render times: ', counter++);
    ReactDOM.render(
       <App title="RSVP" model={model} />,
       document.getElementById('container')
    );
 };
 //view etiqueta, model propiedad

 model.subscribe(render);
 render(); 