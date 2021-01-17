import AppRouter from "./routers/AppRouter";
import { AuthProvider } from "./contexts/Auth";
function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
