"use client";
import { useState } from "react";

const Header = ()=>{
    const [Classbox] = useState('cursor-pointer bg-no-repeat bg-center bg-cover w-[50px] h-[50px] z-10 duration-700 ease-in-out max-[425px]:w-[35px] max-[425px]:h-[35px]')
    const [Translateset,setTranslateset] = useState('translate-y-[20px]')
    const [TranslateBox1,setTranslateBox1] = useState('translate-y-[0px]')
    const [TranslateBox2,setTranslateBox2] = useState('translate-y-[0px]')
    const [TranslateBox3,setTranslateBox3] = useState('translate-y-[20px]')
    const [TranslateBox4,setTranslateBox4] = useState('translate-y-[0px]')
    const [TranslateBox5,setTranslateBox5] = useState('translate-y-[0px]')

    const Click1 =()=>{
        setTranslateBox1('translate-y-[20px]');
        setTranslateBox2('translate-y-[0px]');
        setTranslateBox3('translate-y-[0px]');
        setTranslateBox4('translate-y-[0px]');
        setTranslateBox5('translate-y-[0px]');
        setTranslateset('translate-x-[-40vw]')
    };
    const Click2 =()=>{
        setTranslateBox1('translate-y-[0px]');
        setTranslateBox2('translate-y-[20px]');
        setTranslateBox3('translate-y-[0px]');
        setTranslateBox4('translate-y-[0px]');
        setTranslateBox5('translate-y-[0px]');
        setTranslateset('translate-x-[-20vw]')
    };
    const Click3 =()=>{
        setTranslateBox1('translate-y-[0px]');
        setTranslateBox2('translate-y-[0px]');
        setTranslateBox3('translate-y-[20px]');
        setTranslateBox4('translate-y-[0px]');
        setTranslateBox5('translate-y-[0px]');
        setTranslateset('translate-x-[0vw]')
    };
    const Click4 =()=>{
        setTranslateBox1('translate-y-[0px]');
        setTranslateBox2('translate-y-[0px]');
        setTranslateBox3('translate-y-[0px]');
        setTranslateBox4('translate-y-[20px]');
        setTranslateBox5('translate-y-[0px]');
        setTranslateset('translate-x-[20vw]')
    };
    const Click5 =()=>{
        setTranslateBox1('translate-y-[0px]');
        setTranslateBox2('translate-y-[0px]');
        setTranslateBox3('translate-y-[0px]');
        setTranslateBox4('translate-y-[0px]');
        setTranslateBox5('translate-y-[20px]');
        setTranslateset('translate-x-[40vw]')
    };

    return(
        <div className="overflow">
            <div className="  w-screen h-[80px] bg-slate-400 flex justify-around items-center">
                <div className={`absolute w-[100px] h-[110px] rounded-full bg-white translate-y-[20px] duration-700 ease-in-out ${Translateset} max-[425px]:w-[60px] max-[425px]:h-[70px]`}></div>
                <div className={`absolute w-[80px] h-[80px] rounded-full bg-gray-500 translate-y-[20px] duration-700 ease-in-out ${Translateset} max-[425px]:w-[50px] max-[425px]:h-[50px]`}></div>
                <div className={`${Classbox} ${TranslateBox1} bg-Chat-icon`} onClick={Click1}></div>
                <div className={`${Classbox} ${TranslateBox2} bg-Shop-icon`} onClick={Click2}></div>
                <div className={`${Classbox} ${TranslateBox3} bg-Home-icon `} onClick={Click3}></div>
                <div className={`${Classbox} ${TranslateBox4} bg-About-icon`} onClick={Click4}></div>
                <div className={`${Classbox} ${TranslateBox5} bg-Search-icon`} onClick={Click5}></div>
            </div>
        </div>
    );
}
export default Header; 