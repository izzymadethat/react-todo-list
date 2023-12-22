import { Header, Entry, TodoHistory } from "./components";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Entry />
      <TodoHistory />
    </div>
  );
};

export default App;
