import React from "react";

const MainPictureItem = () => {
    return ( 
        <div className="max-w-[1170px] m-auto relative">
            <img src={process.env.PUBLIC_URL + `/public_img/pexels-alexandr-podvalny-1227513.jpeg`} alt="V. Kott"/>
            <div className="absolute text-center m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white space-y-2.5 max-w-[400px]">
                <p className="text-[40px]">
                Test assignment for front-end developer
                </p>
                <p className="text-[16px]">
                What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                 They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </p>
                <button className="w-[100px] h-[34px] bg-[#F4E041] rounded-[80px] text-black">Sign up</button>
            </div>
        </div>
    );
}
 
export default MainPictureItem;