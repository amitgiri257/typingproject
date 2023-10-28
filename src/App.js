import React, { useState } from 'react';
import { ThemeProvider } from './Components/ThemeContext';
import Header from './Components/Header';
import Typingpage from './Components/Typingpage';
import Footer from './Components/Footer';
import ScoreSummary from './Components/ScoreSummary'; 
import LoginComponent from './Components/LoginPage';
const App=()=>{
    const [testCompleted, setTestCompleted] = useState(false);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    return(
        <ThemeProvider>
        <div >
            <Header/>
            {testCompleted 
    ? <ScoreSummary wpm={wpm} accuracy={accuracy}/> 
    : <Typingpage onTestEnd={(calculatedWpm, calculatedAccuracy) => {
        setWpm(calculatedWpm);
        setAccuracy(calculatedAccuracy);
        setTestCompleted(true);
    }} />
}
           <Footer/>
           <LoginComponent/>
           
           
        </div>
        </ThemeProvider>
        
    )
}

export default App;