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
    addGuest(text) {
       this.guests.push({
          id: Utils.uuid(), // local storage
          text: text,     // el texto que pongo
          completed: false  //estado 
       });
       this.inform();
    }
    updateGuessList(index, todo) {
       this.guests[index] = todo;
       this.inform();
    }
    removeTodo(todo) {
       this.guests = this.guests.filter(item => item !== todo);
       this.inform();
    }
    changeClass(e) {
      console.log(e.parentNode);
        if (e.parentNode.className == "") {
              e.parentNode.className = 'responded';
        } else {
              e.className = '';
        }
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
                   model.updateGuessList(index, {
                      id: todo.id,
                      text: e.target.value,
                      completed: todo.completed
                   })}
             />
             <label htmlFor="">Confirmed</label>
             <input type="checkbox" id="myCheck" name="Confirmed" onChange={e=>model.changeClass(e.target)}/>
             <button onClick={() => model.removeTodo(todo)}> Remove</button>
          </li>
       );
    });
    return (
       <div className="wrapper">
            <header>
                  <h1> {title} </h1>
                  <p> Registration App </p>
                  <form
                        onSubmit={e => {
                        e.preventDefault();
                        model.addGuest(model.inputValue);
                        }}
                  >
                        <input onChange={e => (model.inputValue = e.target.value)} placeholder="Invite Someone" />
                        <button type="submit">Submit</button>
                  </form>
            </header>
            <div class="main">	
                  <h2>Invitees</h2>
                  <ul id="invitedList">{items}</ul>	
            </div>
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