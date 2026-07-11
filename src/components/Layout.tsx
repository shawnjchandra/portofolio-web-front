import { Component, JSX } from "solid-js"
import Navbar from "./Navbar/Navbar"

export const Layout : Component<{ children? : JSX.Element }> = (props) => {
    return (
        <>
            <Navbar/>
            {props.children}
        </>
    );
}

