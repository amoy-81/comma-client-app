import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AppProvider from "./configs/app/app-provider.config";

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
