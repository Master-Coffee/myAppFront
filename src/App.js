
// 3rd Packages 
import { useRoutes } from "react-router-dom";

// Local
import routes from "./routes";
import { SidebarProvider } from "./contexts/SidebarContext";


function App() {
  const content = useRoutes(routes);
 
  return(
    <SidebarProvider>
      {content}
    </SidebarProvider>
  );
}

export default App;
