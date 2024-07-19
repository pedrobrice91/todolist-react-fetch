import { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState({ labels: "" });
  const [list, setList] = useState([]);

  const cambios = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const addTask = (e) => {
    e.preventDefault();
    if (state.labels.trim() !== "") {
      setList([...list, state.labels]);
      setState({ labels: "" }); // Resetea el campo de input
    }
  };

  const removeTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="fs-1 d-flex justify-content-center">Todo List</div>
          <form onSubmit={addTask}>
            <div className="mb-3">
              <input
                onChange={cambios}
                name="labels"
                type="text"
                className="form-control"
                placeholder="Agrega tu tarea"
                value={state.labels}
              />
            </div>
          </form>
          <ul className="list-group list-group-flush">
            {list.map((task, index) => (
              <li key={index} className="list-group-item d d-flex justify-content-between">
                <span className="p-2 w-100">{task}</span>
                <button type="button" className="btn btn-danger" onClick={() => removeTask(index)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
