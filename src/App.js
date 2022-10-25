import "./App.css";
import Header from "./components/navigation_bar/header";
import Pagination from "./components/items/pagination_items";
import Temp from "./components/items/temp";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      {/* <Pagination /> */}
      <div className="headline">
        <h1>Flash Deals</h1>
      </div>

      <Temp />
    </div>
  );
};

export default App;
