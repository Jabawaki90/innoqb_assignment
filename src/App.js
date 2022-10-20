import "./App.css";
import Header from "./components/navigation_bar/header";
import Pagination from "./components/items/pagination_items";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Pagination />
    </div>
  );
};

export default App;
