import { Link } from "react-router-dom";

export const Page2 = () => {
    return (
        <div>
            <h1>Page2のページです</h1>
            <Link to="/page2/999">URL Prameter</Link>
            <br />
            <Link to="/page2/999?name=hogehoge">Query Prameter</Link>
        </div>
    );
};