import React from "react";
import { render } from "react-dom";
import { RestfulProvider } from "restful-react";

import App from "./App";

render(
  <RestfulProvider queryParams={{ apiKey: "kzbskSGIM5KqFH05L9WrSskLQsITRWbb" }} base="https://api.giphy.com/v1">
    <App />
  </RestfulProvider>,
  document.querySelector("#app"),
);
