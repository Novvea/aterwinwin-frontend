import "./shared/css/Global.css";
import { Navigation } from "./components/navigation/Navigation";
import { Routes } from "./routes/Routes";
import { UserProvider } from "./shared/provider/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Navigation />
      </Routes>
    </UserProvider>
  );
}

export default App;
