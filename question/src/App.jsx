import React,{useState} from 'react';
import data from './utils/data';
import List from './components/List'


function App() {
    const [answrs,revealer]=useState(data);
    const reveal = (id)=>{
       console.log("OKAY BUDDAY")
    }
        
    return (
        <main>
            <section className='container'>
                <h3>{answrs.length} Birthdays today</h3>
                <List answrs={answrs} remove={reveal}/>
                <list />
                
                
                <div className='buttons' onMouseEnter={()=>{console.log()}}>
                    <button onClick={()=>{revealer([])}}>ClearAll</button>
                    <button onClick={()=>{revealer(data)}}>reset</button>
                </div>
            </section>
        </main>
    )
}
export default App















