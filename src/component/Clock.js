import * as React from 'react';

function Clock() {
    const [text, setText] = React.useState('00 : 00');

    const getTime = () => {
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        setText(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    }

    React.useEffect(() => {
        const interval = setInterval(getTime, 1000);
        return () => {
            if (interval) clearInterval(interval);
        }
    }, []);

    return (
        <div className="js-clock clock">
            <h1>{text}</h1>
        </div>
    )
}

export default Clock;