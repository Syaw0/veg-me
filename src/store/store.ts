import create from "zustand";
import { fadein, fadeout } from "../Styles/keyframes";

interface Store {
    currentTheme:string ; 
    setTheme:(value:string)=>void ;
    currentSalad:string ;
    setSalad:(value:string)=>void
}

const useStore = create<Store>()((set,get)=>({
    currentTheme:"light",
    setTheme:(value:string)=> set(state=>{return{...state , currentTheme:value}}),
    currentSalad:"1",
    setSalad:(value:string)=>{
        console.log(get().currentSalad , value)
        let mainImg:any = document.getElementById("mainImg")
        let maindatacon:any = document.getElementById("maindatacon")
        let mainRight:any = document.getElementById("mainRight")
        console.log(mainRight.childNodes)
        for(let i = 0 ; i != mainRight.childNodes.length ; i++){
            mainRight.childNodes[i].style.animation = `${fadeout} 0.5s 0s both`
        }
        mainImg.style.animation = `${fadeout} 0.5s 0s both`
        maindatacon.style.animation = `${fadeout} 0.5s 0s both`
        // mainImg.style.animation = `${fadein} 1s 1s both`
        // preElement.style.animation =`${fadeout} 1s 0s both`
        // nextElemet.style.animation =`${fadein} 1s 1s both`
        setTimeout(()=>{
            set(state=>{return{...state , currentSalad:value}})
            mainImg.style.animation = `${fadein} 0.5s 0.6s both`
            maindatacon.style.animation = `${fadein} 0.5s 0.6s both`
            for(let i = 0 ; i != mainRight.childNodes.length ; i++){
                mainRight.childNodes[i].style.animation = `${fadein} 0.5s 0.5s both`
            }
        },500)
    }
}))


export {useStore}