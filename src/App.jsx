import Containers from "./components/Containers";
import CheatSheet from "./components/CheatSheet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={"text-center"}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={Containers} />
          <Route path={"cheatsheet"} Component={CheatSheet} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
