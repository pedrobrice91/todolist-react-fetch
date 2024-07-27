import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
	const [state, setState] = useState({label:'', is_done:false});
	const [list, setList] = useState([]);

	const cambios = (e) => {
		setState(
			{...state, [e.target.name]: e.target.value}
		);
	};

	const consulta = async () => {
		try {
			const response = await fetch(
				"https://playground.4geeks.com/todo/users/pedrobriceno",
				{
					method: "GET",
					headers: { "Content-type": "application/json"}
				},
			);
			const data = await response.json();
			setList(data.todos);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const guardo = async (tarea) => {
		try {
			const response = await fetch(
				"https://playground.4geeks.com/todo/todos/pedrobriceno",
				{
					method: "POST",
					headers: { "Content-type": "application/json", 'accept': 'application/json' },
					body: JSON.stringify(tarea),
				},
			);
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const eliminar = async (id) => {
		try {
			const response = await fetch(
				"https://playground.4geeks.com/todo/todos/"+id,
				{
					method: "DELETE",
					headers: { "Content-type": "application/json" },
				},
			);
			if (response.status === 204) {
				consulta()
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		consulta();
	}, []);

	const addTask = (e) => {
		e.preventDefault();
		if (state.label.trim() !== "") {
			setList([...list, state]);
			setState({label:'', is_done:false}); 
			guardo(state)
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="fs-1 d-flex justify-content-center">Listado</div>
					<form onSubmit={addTask}>
						<div className="mb-3">
							<input
								onChange={cambios}
								name="label"
								type="text"
								className="form-control"
								placeholder="Agrega tu tarea"
								value={state.label}
							/>
						</div>
					</form>
					<ul className="list-group list-group-flush">
						{list.map((task, index) => (
							<li
								key={index}
								className="list-group-item d d-flex justify-content-between"
							>
								<span className="p-2 w-100">{task.label}</span>
								<button
									type="button"
									className="btn btn-danger"
									onClick={() => eliminar(task.id)}
								>
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
