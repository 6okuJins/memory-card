import Header from './components/Header';
import { useState } from 'react';
import Main from './components/Main';
function App() {
    const [ score, setScore ] = useState(0);
    const [ best, setBest ] = useState(0);
    const [ clicked, setClicked ] = useState(new Set());

    const handleClick = (e) => {
        e.preventDefault();
        const digimonName = e.target.id;
        console.log('hi');
        if (!clicked.has(digimonName)) {
            setScore(score + 1);
            setClicked(prevState => new Set(prevState).add(digimonName));
        }
        else {
            setScore(0);
            setClicked(new Set());
        }
        setBest(Math.max(score, best));
    }
    return ( 
    <div className = "App" >
        <Header
        score={score}
        best={best}
        />
        <Main
        setClicked={handleClick}
        />
    </div>
    );
}

export default App;