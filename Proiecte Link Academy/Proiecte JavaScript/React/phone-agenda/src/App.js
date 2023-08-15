import "./App.css";
import AddContact from "./components/AddContact/addContact";
import DataForm from "./components/AddLogic/AddLogic";
import Design from "./components/PhoneDesign/design";
import Title from "./components/Title/Title";

function App() {
  return (
    <div id="App">
      <Title></Title>
      <AddContact></AddContact>
      <DataForm></DataForm>
      <Design></Design>
    </div>
  );
}

export default App;
