import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

import App from "./App.tsx";
import "./config/i18n";
import "./styles/_main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
