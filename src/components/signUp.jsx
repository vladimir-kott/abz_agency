import React, {useEffect, useState} from "react";
import axios from "axios";
import Preloader from './preloader'
import { validator } from "../utils/validation";

const SignUp = () => {

    const [positions, setPositions] = useState()
    const [isLoading, setIsLoading] = useState(true)

    async function getPositions() {
        try {
          setIsLoading(true)
          const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
          setPositions(response.data.positions)
          setIsLoading(false)
          console.log('positions ', response)
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() => {
        getPositions();
    }, []);

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            isPhone: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        }
    }

    return ( 
        <>
        <p className="text-[40px] text-center mt-[140px] mb-[50px]">Working with POST request</p>
        <div className="max-w-[380px] space-y-[50px] pb-[104px] text-center ms:mx-[16px] md:mx-auto lg:mx-auto">
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

            {!isLoading ? (<div>
                <p>Select your position</p>
                
                {positions.map(el => {
                    return (<>
                        <input id={`radio ${el.id}`} type="radio" name="radio" className="hidden" key={el.id + el.name}/>
                        <label htmlFor={`radio ${el.id}`} className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        {el.name}</label>
                        </>)
                })}
            </div>) : (<Preloader/>)}

            <div className="flex text-left">
                <input type="file" id="image" className="hidden"/>
                <label htmlFor="image" className="px-[15px] py-[14px] border border-solid border-black rounded-l-[4px] hover:cursor-pointer">Upload</label>
                <label htmlFor="image" className="pl-[16px] py-[14px] border border-solid border-[#D0CFCF] rounded-r-[4px] w-[100%] hover:cursor-pointer">Upload your photo</label>
            </div>

            <button className="w-[100px] h-[34px] bg-[#B4B4B4] rounded-[80px] text-black">Sign up</button>
        </div>
        </>
    );
}
 
export default SignUp;