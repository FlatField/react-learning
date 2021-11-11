import { useLocation, useHistory } from 'react-router-dom';

export const Page1DetailA = () => {
    const { state } = useLocation();
    console.log( state );

    const history = useHistory();

    // console.log(history.goBack());

    const hoge = () => history.goBack();

    console.log(history.goBack());


    return (
        <div>
            <h1>Page1DetailAのページです</h1>
            <button onclick={hoge}>戻る</button>
        </div>
    );
};