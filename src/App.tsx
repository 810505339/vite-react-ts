import React, {FC} from 'react'
import {NavBar} from "@/components";
import GlobalStyles from "@/GlobalStyles";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";

const App: FC = () => {

    return (<>
        <GlobalStyles/>
        <NavBar/>
        <IconContext.Provider value={{ color: "pink" }}>
            <FaBars />
        </IconContext.Provider>
    </>)
}

export default App
