
// 3rd Packages 
import { useRoutes } from "react-router-dom";

// Local
import routes from "./routes";


function App() {
  const content = useRoutes(routes);
 
  return(
    <div>{content}</div>
  );
}

export default App;
