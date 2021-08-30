import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const lista = ['Codar', 'Café', 'Dormir', 'Do it again'];

function App() {
  return (
    <div className="list">
      { lista.map((tarefa) => Task(tarefa)) }
    </div>
  );
}

export default App;
