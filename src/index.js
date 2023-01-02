require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import { App } from "./App";
import "./App.scss";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");

const root = createRoot(container);

root.render(<App />);
