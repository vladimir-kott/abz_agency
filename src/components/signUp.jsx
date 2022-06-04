import React from "react";

const SignUp = () => {
    return ( 
        <>
        <p className="text-[40px] text-center mt-[140px] mb-[50px]">Working with POST request</p>
        <div className="max-w-[380px] mx-auto space-y-[50px] pb-[104px] text-center ms:mx-[16px]">
            <input type="text" className="form-control w-full px-[16px] py-[14px] text-[16px] font-normal text-[#7E7E7E] bg-[#E5E5E5] bg-clip-padding border 
            border-solid border-[#D0CFCF] rounded-[4px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
            id="name"
            placeholder="Your name"/>

            <input type="text" className="form-control w-full px-[16px] py-[14px] text-[16px] font-normal text-[#7E7E7E] bg-[#E5E5E5] bg-clip-padding border 
            border-solid border-[#D0CFCF] rounded-[4px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
            id="email"
            placeholder="Email"/>

            <input type="text" className="form-control w-full px-[16px] py-[14px] text-[16px] font-normal text-[#7E7E7E] bg-[#E5E5E5] bg-clip-padding border 
            border-solid border-[#D0CFCF] rounded-[4px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
            id="phone"
            placeholder="Phone"/>
            <label className="text-[12px] text-[#7E7E7E]">+38 (XXX) XXX - XX - XX</label>

            <div>
                <p>Select your position</p>
                
                <input id="radio1" type="radio" name="radio" className="hidden" />
                <label for="radio1" className="flex items-center cursor-pointer">
                <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                Frontend developer</label>

                <input id="radio2" type="radio" name="radio" className="hidden" />
                <label for="radio2" className="flex items-center cursor-pointer">
                <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                Backend developer</label>

                <input id="radio3" type="radio" name="radio" className="hidden" />
                <label for="radio3" className="flex items-center cursor-pointer">
                <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                Designer</label>

                <input id="radio4" type="radio" name="radio" className="hidden" />
                <label for="radio4" className="flex items-center cursor-pointer">
                <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                QA</label>
            </div>

            <div className="flex text-left">
                <input type="file" id="image" className="hidden"/>
                <label for="image" className="px-[15px] py-[14px] border border-solid border-black rounded-l-[4px] hover:cursor-pointer">Upload</label>
                <label for="image" className="pl-[16px] py-[14px] border border-solid border-[#D0CFCF] rounded-r-[4px] w-[100%] hover:cursor-pointer">Upload your photo</label>
            </div>

            <button className="w-[100px] h-[34px] bg-[#B4B4B4] rounded-[80px] text-black">Sign up</button>
        </div>
        </>
    );
}
 
export default SignUp;