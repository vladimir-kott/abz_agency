import React from "react";

const NavPanel = () => {
    return ( 
        <div className="bg-white">
            <div className="h-[60px] flex justify-between items-center max-w-[1170px] m-auto">
                <img src={process.env.PUBLIC_URL + `/public_img/Logo.svg`} width="104" height="26" alt="Hi, friend)"/>
                <div className="flex space-x-2.5">
                    <button className="w-[100px] h-[34px] bg-[#F4E041] rounded-[80px]">Users</button>
                    <button className="w-[100px] h-[34px] bg-[#F4E041] rounded-[80px]">Sign up</button>
                </div>
            </div>
        </div>
    );
}
 
export default NavPanel;