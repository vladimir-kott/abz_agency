import React from "react";

const NavPanel = () => { // навигация у меня как лейаут ибо в других проектах навигационная панель обширный лейаут с кучей компонентов под разные устройства + если юзать редакс или контекст то нав панель выступает main parent
    return ( 
        <div className="bg-white">
            <div className="h-[60px] flex justify-between items-center max-w-[1170px] m-auto">
                <img src={process.env.PUBLIC_URL + `/public_img/Logo.svg`} className="lg:ml-[0px] md:ml-[60px] sm:ml-[20px] ms:ml-[16px]" width="104" height="26" alt="Hi, friend)"/>
                <div className="flex space-x-2.5 lg:mr-[0px] md:mr-[60px] sm:mr-[20px] ms:mr-[16px]">
                    <button className="w-[100px] h-[34px] bg-[#F4E041] rounded-[80px]">Users</button>
                    <button className="w-[100px] h-[34px] bg-[#F4E041] rounded-[80px]">Sign up</button>
                </div>
            </div>
        </div>
    );
}
 
export default NavPanel;