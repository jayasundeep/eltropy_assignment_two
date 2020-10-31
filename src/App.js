// import logo from './logo.svg';
import ItemForm from './components/ItemForm';
import { ItemList } from './components/ItemList';

const itemsStirng = localStorage.getItem('items');
// console.log(itemsStirng);
const itemsInLocalStorage = JSON.parse(itemsStirng);
console.log(itemsInLocalStorage);

function App() {
  return (
    <div className="App">
      <h1> Hello! </h1>
      <ItemForm />
      <ItemList items={itemsInLocalStorage} />
    </div>
  );
}

export default App;
