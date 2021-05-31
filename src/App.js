import { BrowserRouter as Router } from "react-router-dom";

//global components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

//routes component
import Routes from "./routes";

import { AppContainer } from "./styles/App.styles";
import "./styles/global.css";

export default function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes />
        <Footer />
      </AppContainer>
    </Router>
  );
}
