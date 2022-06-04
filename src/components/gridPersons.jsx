import React from "react";
import Card from './card'

const GridPersons = () => {
    return ( <>
    <p className="text-[40px] text-center mt-[140px] mb-[50px]">Working with GET request</p>
    <div className="flex flex-col justify-center items-center gap-[29px]">
        <div className="flex flex-wrap justify-center items-center gap-[29px] w-full">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <button className="w-[100px] h-[34px] bg-[#F4E041] rounded-[80px] text-black mt-[20px]">Show more</button>
    </div>
    </>
    );
}
 
export default GridPersons;