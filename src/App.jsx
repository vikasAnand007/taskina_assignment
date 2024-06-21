import ButtonList from "./components/List/ButtonList";
import CheckListWithLabel from "./components/List/CheckListWithLabel";
import CheckListWoLabel from "./components/List/CheckListWoLabel";
import Form from "./components/List/Form";

function App() {
  return (
    <div className="app-container">
      <ButtonList />
      <CheckListWoLabel />
      <CheckListWithLabel />
      <Form />
    </div>
  );
}

export default App;
