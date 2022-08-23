import { BrowserRouter as Router } from "react-router-dom";
import routes, { renderRoutes } from "./route";

function App() {
  return (
    <div>
      <Router>{renderRoutes(routes)}</Router>
    </div>
  );
}

export default App;
