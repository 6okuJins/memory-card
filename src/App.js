import Header from './components/Header';
import { useState } from 'react';
import Main from './components/Main';
function App() {
    const [ score, setScore ] = useState(0);
    const [ best, setBest ] = useState(0);

    const incScore = () => {
        setScore(score + 1);
    }
    const incBest = () => {
        setBest(best + 1);
    }
    return ( 
    <div className = "App" >
        <Header
        score={score}
        best={best}
        />
        <Main
        incScore={incScore}
        incBest={incBest}
        />
    </div>
    );
}

export default App;