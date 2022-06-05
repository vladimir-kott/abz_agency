import React from "react";

const Card = ({data}) => {


    //console.log(data)

    return ( 
        <div className="bg-white text-center px-4 leading-loose text-sm p-[20px] rounded-[10px] br-black ms:w-full ms:mx-[16px] sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="w-[70px] h-[70px] rounded-full overflow-hidden mx-auto">
                    <img src={data.photo} alt="" className="object-cover w-full h-full"/>
                </div>
                <p className="text-[16px] truncate pt-[20px]">{data.name}</p>
                <div className="leading-[26px]">
                    <p className="text-[16px] truncate">{data.position}</p>
                    <p className="text-[16px] truncate">{data.email}</p>
                    <p className="text-[16px] truncate">{data.phone}</p>
                </div>
        </div>
    );
}
    
export default Card;
