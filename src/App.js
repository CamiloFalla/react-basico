import logo from './logoips_poli.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pagina para proyecto Frontend del Poli.
        </p>
        <TodoItem />
        <Noticias />
        
      </header>
    </div>
  );
}

function Noticias () {
  return (
    <li>
      <p>Servicio X</p>
    </li>
  );

}
function TodoItem () {
  return (
    <li>
      <span>V</span>
      <p>Historia 1</p>
      <span>X</span>
    </li>
  );
}
export default App;
