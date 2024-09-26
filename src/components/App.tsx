import scores from '../data.json';

import Main from './Main';
import Result from './Result';
import Summary from './Summary';

export interface Score {
    category: string;
    score: number;
    icon: string;
    color: string;
}

function App() {
    return (
        <div className="min-h-screen bg-very-light-blue text-lg text-pale-blue md:flex md:items-center md:justify-center">
            <Main>
                <Result scores={scores} />
                <Summary scores={scores} />
            </Main>
        </div>
    );
}

export default App;
