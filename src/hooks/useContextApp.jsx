import { useState } from "react"
import useGetData from './useGetData';

export const useContextApp = () =>{
    const dataTabs=useGetData();
    let dataTab=useGetData(0);
   
    const [activeIndex,setActiveIndex]=useState(0);
    const [contenido,setContenido]=useState(<div className="contentTab"><img src={dataTab.img} width={200} height={200}/><p>{dataTab.description}</p></div>)

    const handleClick=(tabActive)=>{
            setActiveIndex(tabActive);
            dataTab=useGetData(tabActive)
            setContenido(<div className="contentTab"><img src={dataTab.img} width={200} height={200}/><p>{dataTab.description}</p></div>)
   }
return {dataTabs,activeIndex,handleClick,contenido};
   
}