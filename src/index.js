import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Context";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <ContextProvider>
  //   <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
  //   </BrowserRouter>
  // </ContextProvider>
);
