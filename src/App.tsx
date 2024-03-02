import { Provider } from "react-redux";
import store from "./redux";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./style/theme";
import AppRoutes from "./routes/index";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
