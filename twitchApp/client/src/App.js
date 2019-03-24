import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            Page One
            <Link to="/2">Page Two</Link>
        </div>
    );
}

const PageTwo = () => {
    return (
        <div>
            Page Two
            <Link to="/">Page One</Link>
        </div>
    );
}

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/2" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;