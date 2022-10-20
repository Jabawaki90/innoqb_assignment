import "./App.css";
import Header from "./components/navigation_bar/header";
import ItemList from "./components/items/pagination_items";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <ItemList />
    </div>
  );
};

export default App;
