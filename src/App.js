import { createContext } from "react";
import "./App.css";
// import A from "./comp/A";
// import B from "./comp/B";
// import StudentList from "./components/StudentList";
import List from "./del-com/List";

const Cmd = createContext();
function App() {
  const greet = "Main Data from Parent";
  const greet1 = "Main Data from Parent but with Context";
  return (
    <div className="App">
      <List />
      {/* <StudentList /> */}
      {/* <B headline={greet} /> */}
      {/* <Cmd.Provider value={greet1}>
        <A headline={greet} />
      </Cmd.Provider> */}
    </div>
  );
}

export default App;
export { Cmd };
