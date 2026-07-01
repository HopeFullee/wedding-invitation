import "./styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "@/components/providers/index.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
