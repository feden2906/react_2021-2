import './App.css';
import Users from "./components/users/Users";

function App() {
  return (
    <div>
      <Users/>
    </div>
  );
}

export default App;

// Отримати всі user з jsonplaceholder та вивести їх.
// До кожного user зробити кнопку при натисканні якої виводиться всі пости поточного юзера в межах Users компоненти
// State lifting + events task
