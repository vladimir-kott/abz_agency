import React, {useEffect, useState} from "react";
import Card from './card'
import axios from "axios";
import Preloader from './preloader'

const GridPersons = () => {

    const [page, setPage] = useState(1);
    const [users, setUsers] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [showButton, setShowButton] = useState(true)
    const [maxPage, setMaxPage] = useState(0)

    async function getUser() { // получаем юзеров с API
        try {
          setIsLoading(true)
          setPage(1 + page)
          const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`);
          setUsers(response.data.users)
          setIsLoading(false)
          setMaxPage(response.data.total_pages)
          //console.log(response)
        } catch (error) {
          console.error(error);
        }
    }

    function filteredCard(arr){ // стандартная js сортировка
        //console.log('arr', arr)
        const dataUserArr = arr.sort((a, b) => new Date(b.registration_timestamp * 1000) - new Date(a.registration_timestamp * 1000))
        //console.log('arr sorted', dataUserArr)
        return dataUserArr
    }

    const handleClick = () => { // нажатие на кнопку
        if(page < maxPage){
            getUser()
            //console.log(page)
            //console.log(maxPage)
        }
        else{
            setShowButton(false)
            //console.log('button false')
        }
    }

    useEffect(() => { // инициализация
        getUser();
    }, []);

    return ( <>
    <p className="text-[40px] text-center mt-[140px] mb-[50px]">Working with GET request</p>
    <div className="flex flex-col justify-center items-center gap-[29px]">
        <div className="flex flex-wrap justify-center items-center gap-[29px] w-full">
            {!isLoading ? (
                filteredCard(users).map(element => {
                        //console.log(element.name, new Date(element.registration_timestamp * 1000))
                    {return <Card data = {element} key={element.id}/>}
                })
            )
            : (<Preloader/>)
            } 
        </div>
        <button 
            onClick={handleClick}
            className={`w-[100px] h-[34px] bg-[#F4E041] rounded-[80px] text-black mt-[20px] ${showButton ? '' : ' invisible'}`}>
            Show more
            </button>
    </div>
    </>
    );
}
 
export default GridPersons;