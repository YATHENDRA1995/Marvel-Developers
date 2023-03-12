import { ThemeProvider } from "styled-components";

import { themeDark } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import Home from "./pages/landing/Home";
import Header from "./shared/components/header/Header";
import Footer from "./shared/components/footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={themeDark}>
      <GlobalStyles />
      <Header />
      {/* Pages */}
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
