import * as React from 'react';

const IMG_NUMBER = 5;

const images = require.context('../images', true);

function BackGround() {
    const [source, setSource] = React.useState('');

    const paintImage = (imgNumber) => {
        setSource(`${imgNumber + 1}.jpg`);
    }

    const generateRandom = () => {
        const number = Math.floor(Math.random() * IMG_NUMBER);
        return number;
    }

    React.useEffect(() => {
        const randomNumber = generateRandom()
        paintImage(randomNumber);
    }, []);

    if (!source)
        return null;

    const image = images('./' + source);

    return (
        <img src={image} className="bg_image" />
    )
}

export default BackGround;