import React, {useEffect, useState} from "react";
import axios from "axios";
import Preloader from './preloader'
import { validator } from "../utils/validation";

const SignUp = () => {

    const [positions, setPositions] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [token, setToken] = useState()
    const [file, setFile] = useState("")

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        positions: '',
        image: file
    });
    const [errors, setErrors] = useState({});

    async function getPositions() { // получаю должности
        try {
          setIsLoading(true)
          const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
          setPositions(response.data.positions)
          setIsLoading(false)
          //console.log('positions ', response)
        } catch (error) {
          console.error(error);
        }
    }

    async function getToken() { // получаю token
        try {
          const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
          setToken(response.data.token)
          //console.log('token ', response.data.token)
        } catch (error) {
          console.error(error);
        }
    }

    const handleChange = (target) => { // универсальний хендл чейндж, что бы не писать к каждому полю свой, обычно он состоит из болле проверок, для кастомных полей, которых нет в этом проекте
        if (target.target.name === 'image'){
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setFile(reader.result);
            });
            reader.readAsDataURL(target.target.files[0]);
            //setFile(target.target.files[0])
        }
        setData((prevState) => ({
            ...prevState,
            [target.target.name]: target.target.value
        }));
        /*console.log('pressed target', target.target)
        console.log('pressed name', target.target.name)
        console.log('pressed value', target.target.value)*/
    };

    const validatorConfig = { // конфиг ключей и значений для универсального валидатора
        name: {
            isRequired: {
                message: "Name is required"
            },
            min: {
                message: "Name must be at least 3 characters long",
                value: 3
            }
        },
        email: {
            isRequired: {
                message: "Email is required"
            },
            isEmail: {
                message: "Email entered incorrectly"
            }
        },
        phone: {
            isRequired: {
                message: "Phone is required"
            },
            isPhone: {
                message: "Phone entered incorrectly",
                value: 3
            }
        },
        positions: {
            isRequired: {
                message: "Positions is required"
            }
        },
        image: {
            isRequired: {
                message: "Image is required"
            }
        }
    }

    const validate = () => { // стрелочная реадизация вызова и установки ошибок
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = async (e) => { // отправка пост
        e.preventDefault();
        const isValid = validate();
        //console.log('sign up pressed', isValid)
        //console.log('token ', token)
        console.log('data ', data)
        console.log('file', file.name)
        
        if (!isValid) return;
        try {
            const response = await axios.post(
                `https://frontend-test-assignment-api.abz.agency/api/v1/users`,
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    position_id: Number(data.positions),
                    photo: file
                },
                {
                    headers: { 'Token': token}
                }).then((response) => {
                    console.log(response)
                    
                }).catch((error) => {
                    console.log(error)
                })  
        } catch (error) {
            setErrors(error);
        }
    };

    useEffect(() => { // инициализация получения наши хдолжностей
        getPositions();
        getToken()
    }, []);

    useEffect(() => { // для удобства проверки  валидации при инициализации полей, (обычно я так не делаю)
        validate();
    }, [data]);

    return ( 

        <form onSubmit={handleSubmit}>
        <p className="text-[40px] text-center mt-[140px] mb-[50px]">Working with POST request</p>
        <div className="max-w-[380px] space-y-[50px] pb-[104px] text-center ms:mx-[16px] md:mx-auto lg:mx-auto">
            <input type="text" className="form-control w-full px-[16px] py-[14px] text-[16px] font-normal text-[#7E7E7E] bg-[#E5E5E5] bg-clip-padding border 
            border-solid border-[#D0CFCF] rounded-[4px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
            id="name"
            name='name'
            value={data.name}
            onChange={handleChange}
            placeholder="Your name"/>
            <label htmlFor="name" className="text-[12px] text-red-500">{errors.name}</label>

            <input type="text" className="form-control w-full px-[16px] py-[14px] text-[16px] font-normal text-[#7E7E7E] bg-[#E5E5E5] bg-clip-padding border 
            border-solid border-[#D0CFCF] rounded-[4px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"/>
            <label htmlFor="email" className="text-[12px] text-red-500">{errors.email}</label>

            <input type="text" className="form-control w-full px-[16px] py-[14px] text-[16px] font-normal text-[#7E7E7E] bg-[#E5E5E5] bg-clip-padding border 
            border-solid border-[#D0CFCF] rounded-[4px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
            id="phone"
            name='phone'
            value={data.phone}
            onChange={handleChange}
            placeholder="Phone"/>
            <label className="text-[12px] text-[#7E7E7E]">+38 (XXX) XXX - XX - XX</label>
            <label htmlFor="phone" className="text-[12px] text-red-500 ml-[10px]">{errors.phone}</label>

            {!isLoading ? (<>
            <div>
                <p>Select your position</p>
                <div onChange={handleChange}>
                {positions.map(el => {
                    return (<>
                        <input 
                        value={el.id}
                        id={`radio${el.id}`} 
                        type="radio" 
                        name="positions" 
                        className="hidden" 
                        key={el.id + el.name}/>
                        <label htmlFor={`radio${el.id}`} className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        {el.name}</label>
                        </>)
                })}
                </div>
            </div>
                <label htmlFor="positions" className="text-[12px] text-red-500 ml-[10px]">{errors.positions}</label>
            </>
            ) : (<Preloader/>)}

            <div>
            <div className="flex text-left">
                <input 
                value={data.image}
                onChange={handleChange}
                type="file" 
                id="image" 
                name="image" 
                className="hidden"/>
                <label htmlFor="image" name="image" className="px-[15px] py-[14px] border border-solid border-black rounded-l-[4px] hover:cursor-pointer">Upload</label>
                <label htmlFor="image" name="image" className="pl-[16px] py-[14px] border border-solid border-[#D0CFCF] rounded-r-[4px] w-[100%] hover:cursor-pointer">Upload your photo</label>
            </div>
                <label htmlFor="image" className="text-[12px] text-red-500 ml-[10px]">{errors.image}</label>
            </div>

            <button 
                className={`w-[100px] h-[34px] rounded-[80px] text-black ${!isValid ? ' bg-[#B4B4B4]' : ' bg-[#F4E041]'}`} 
                type="submit"
                disabled={!isValid}>    
                Sign up
            </button>
        </div>
        </form>
    );
}
 
export default SignUp;