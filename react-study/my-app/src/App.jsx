import React, { useEffect, useState } from 'react';
import ColorfullMessage from './components/ColorfullMessage'


const App = () => {
    const [num, setNum] = useState(0);
    const [FaceShowFlag, setFaceShowFlag] = useState(true);

    const onClickCountUp = () => {
        setNum(num + 1);
    };
    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!FaceShowFlag);
    };

    useEffect(() => {
        if (num > 0 && num % 3 === 0) {
            FaceShowFlag || setFaceShowFlag(true);
        } else {
            FaceShowFlag && setFaceShowFlag(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[num]);

    return (
        <>
            <h1 style={{ color:'red' }}>こんにちは!</h1>
            <ColorfullMessage color="blue">お元気ですか?</ColorfullMessage>
            <ColorfullMessage color="pink">元気です</ColorfullMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
            <br />
            <button onClick={onClickSwitchShowFlag}>on/off</button>
            {FaceShowFlag && <p>😁</p>}
        </>
    );
};

export default App;