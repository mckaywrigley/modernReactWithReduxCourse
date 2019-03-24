import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './Components/Streams/StreamCreate';
import StreamDelete from './Components/Streams/StreamDelete';
import StreamEdit from './Components/Streams/StreamEdit';
import StreamList from './Components/Streams/StreamList';
import StreamShow from './Components/Streams/StreamShow';
import Header from './Components/Header';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;