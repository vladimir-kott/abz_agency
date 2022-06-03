import React from "react";

const Card = () => {
    return ( 
        <div className="bg-white w-1/4 text-center px-4 leading-loose text-sm p-[20px] rounded-[10px] br-black ">
                <div class="w-[70px] h-[70px] rounded-full overflow-hidden mx-auto">
                    <img src={process.env.PUBLIC_URL + `/public_img/photo-cover.svg`} alt="" class="object-cover w-full h-full"/>
                </div>
                <p className="text-[16px] truncate pt-[20px]">Alexandre</p>
                <div className="leading-[26px]">
                    <p className="text-[16px] truncate">Lead Independent Director</p>
                    <p className="text-[16px] truncate">Alexandr_develop@gmail.com</p>
                    <p className="text-[16px] truncate">+38 (098) 198 44 24</p>
                </div>
        </div>
    );
}
    
export default Card;
