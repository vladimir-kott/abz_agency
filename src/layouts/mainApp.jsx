import React from "react";
import NavPanel from "./navPanel";
import MainPictureItem from "../components/mainPictureItem"
import GridPersons from "../components/gridPersons";
import SignUp from "../components/signUp";


const MainApp = () => {
    return ( <>
        <header className="">
            <NavPanel/>
            <MainPictureItem/>
        </header>
        <main className="max-w-[1170px] m-auto">
            <GridPersons/>
            <SignUp/>
        </main>
        <footer className="max-w-[1170px] m-auto">
        </footer>
      </>
     );
}
 
export default MainApp;