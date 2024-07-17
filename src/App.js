import { useState } from "react";
import "./App.css";

const App = () => {
  const [State, setState] = useState({ labels: "" });
  const [List, setList] = useState();

  const cambios = (e) => {
    setState({
      ...State,
      [e.target.name]: e.target.value,
    });
  }
  const cambios2 = (e) => {;
        e.preventDefault();
        alert('¡Enviando!');
      }
 
console.log(State)
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="fs-1 d-flex justify-content-center">Todo List</div>
          <form>
            <div class="mb-3">
              <input
                onChange={cambios}
                name="labels"
                type="text"
                className="form-control"
                placeholder="Agrega tu tarea"
              />
              <input
                type="button"
                onClick={() => {
                  alert("Hola");
                }}
                className="boton d-flex justify-content-center"
                id="btn-agregar"
                value="Agregar Tarea"
                clinck
              />
            </div>
          </form>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d d-flex justify-content-between">
              <span className="p-2 w-100">Comer</span>
              <button type="button" className="btn btn-danger">
                Eliminar
              </button>
            </li>
            <li className="list-group-item d d-flex justify-content-between">
              <span className="p-2 w-100">Estudiar para el examen</span>
              <button type="button" className="btn btn-danger">
                Eliminar
              </button>
            </li>
            <li className="list-group-item d d-flex justify-content-between">
              <span className="p-2 w-100">lavar la ropa</span>
              <button type="button" className="btn btn-danger">
                Eliminar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
