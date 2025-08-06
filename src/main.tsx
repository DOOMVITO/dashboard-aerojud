import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Importação de estilos após o App, para priorizar lógica
import "./index.css";

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(<App />);
} else {
  console.error("Elemento root não encontrado!");
}
