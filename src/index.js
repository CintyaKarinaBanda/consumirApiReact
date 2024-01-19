import React from "react";
import ReactDom from "react-dom/client";
import { Contador } from "./components/contador";
import { Texto } from "./components/Texto";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
        <Contador/>
        <Texto/>
    </>
)