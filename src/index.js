import React from "react";
import ReactDom from "react-dom/client";
import { Image } from "./components/Image";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
        <Image/>
    </>
)