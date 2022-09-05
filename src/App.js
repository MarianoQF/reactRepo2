import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import './app/style.css';

const App = () => {
  return(
    <div>
      <NavBar>
        <CartWidget />
      </NavBar>
      <ItemListContainer greeting={'Bienvenidos a FARMAQ'} />
    </div>
  );
}

export default App;
