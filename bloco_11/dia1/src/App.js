import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="list">
      { Task ('codar' )}
    </div>
  );
}

export default App;
