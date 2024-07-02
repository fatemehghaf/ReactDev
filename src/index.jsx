import React from "react";
import ReactDOM from "react-dom/client";
import Textarea from "./Components/TextArea";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
<Textarea style={{ borderRadius: 4 }} inputLength={20} />
  </div>
);
