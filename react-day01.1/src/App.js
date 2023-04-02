
import './App.css';
import ClassComponent from './Components/classComponent';
import Person from './Components/common/person';
import FunctionComponent from './Components/functionComponent';
import Person from './common/person'
function App() {
  function sampleFun(){
    alert('I am being of child')
  }
  return (
    <div className="App">
     <ClassComponent name= {'John'} age={10} gender={M} />
     <FunctionComponent/>

     <Person name={'John'} age={10} gender={'M'} sampleFun={()=>this.sampleFun} />
     <Person name={'Adam'} age={10} gender={'M'}/>
     <Person name={'Eav'} age={10} gender={'M'}/>
   
    </div>
  );
}

export default App;


// Componenet state: Private to the copmonent.

//App State: Global state variable which are accesible from all the component.