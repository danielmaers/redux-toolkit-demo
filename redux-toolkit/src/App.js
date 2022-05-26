import { Characters } from "./components/Characters";
import { Detail } from "./components/Detail";
import {Route, Switch} from "react-router-dom"
function App() {
  return (
    <h1>
      <Switch>

        <Route path="/character/:id">
          <Detail/>
        </Route>

        <Route path="/">
          <Characters/>
        </Route>

      </Switch>
    </h1>
  );
}

export default App;
