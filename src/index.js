import { StrictMode } from "react";
import ReactDOM from "react-dom";

import TikTackTock from "./TikTackTok";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TikTackTock />
  </StrictMode>,
  rootElement
);
