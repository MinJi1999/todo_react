import * as React from 'react';
import BackGround from './component/BackGround';
import Clock from './component/Clock';
import Greeting from './component/Greeting';
import Quote from './component/quotes';
import Todo from './component/Todo';
import Weather from './component/Weather';
import Menu from './component/Menu';

function App() {
    return (
        <>
            <Menu />
            <Weather />
            <BackGround />
            <Clock />
            <Greeting />
            <Todo />
            <Quote />
        </>
    )
}

export default App;