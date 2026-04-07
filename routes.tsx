import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Activities } from "./components/Activities";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: About },
      { path: "atividades", Component: Activities },
      { path: "galeria", Component: Gallery },
      { path: "contato", Component: Contact },
    ],
  },
]);
