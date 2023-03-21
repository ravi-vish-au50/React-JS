
import './App.css';
import ClassComponent from './Components/classComponent';
import FunctionComponent from './Components/functionComponent';
function App() {
  return (
    <div className="App">
     <ClassComponent/>
     <FunctionComponent/>
    </div>
  );
}

export default App;


// Componenet state: Private to the copmonent.

//App State: Global state variable which are accesible from all the component.