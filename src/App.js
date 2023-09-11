
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from"./components/ItemListContainer/itemListContainer";


function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer greeting={"Bienvenidos a OBSEQUIOS"}/>
       </div>
    </div>
    
   
  );
}

export default App;
