import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>NotFound</h1>
      Go to 
      {" "}
      <Link to="/">home</Link>
    </div>
  );
}
