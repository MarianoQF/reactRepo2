import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import './app/style.css';
import ItemCount from "./components/ItemCount";

const App = () => {
  return(
    <div>
      <NavBar>
        <CartWidget />
      </NavBar>
      <ItemListContainer greeting={'Bienvenidos a FARMAQ'} />
      <ItemCount />
    </div>
  );
}

export default App;
