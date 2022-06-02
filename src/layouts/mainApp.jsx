import React from "react";
import NavPanel from "./navPanel";
import MainPictureItem from "../components/mainPictureItem"


const MainApp = () => {
    return ( <>
        <header className="">
            <NavPanel/>
            <MainPictureItem/>
        </header>
        <main className="">

        </main>
        <footer className="">

        </footer>
      </>
     );
}
 
export default MainApp;