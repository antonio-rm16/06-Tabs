import { useContext } from "react"
import { contextApp } from "../App"


export const TabPanel = ({children})=>{
    return <div className="boxPanel">{children}</div>
}

export const Tab = ({isActive,index})=>{
    const contextTabs=useContext(contextApp)
   
   return (<>
      {  <button className={isActive?'but Active':'but '} onClick={()=>contextTabs.handleClick(index)}>{contextTabs.dataTabs[index].name}</button>}
        {contextTabs.contenido}
</>)

}

