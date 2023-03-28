import { createContext} from 'react';
import {TabPanel,Tab} from './components/Tabs'
import './components/tabs.css'
import { useContextApp } from './hooks/useContextApp';

export const contextApp =createContext(null);

export default function App() {
 
    const infoTabs = useContextApp();
    
  return (
  <main>
    <h1>#6 PESTAÑAS</h1>
  <div className='tabPanel'>
     {<contextApp.Provider value={infoTabs}>
          <TabPanel >
            {infoTabs.dataTabs.map((elem,index)=>  
                <Tab key={index} isActive={index==infoTabs.activeIndex} index={index} /> 
             )}
          </TabPanel>
            </contextApp.Provider>}
    </div>
    </main>
  )
}

