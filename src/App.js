import { Route } from "react-router";
import Navbar from "./components/Navbar";
import Gens from "./screens/Gens";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Single from "./screens/Single_Game";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Route path="/" exact>
        <Home></Home>
      </Route>
      <Route path="/search/:quiz">
        <Search></Search>
      </Route>
      <Route path="/games/:id">
        <Single></Single>
      </Route>
      <Route path="/genres/:id">
        <Gens></Gens>
      </Route>
    </div>
  );
}

export default App;
