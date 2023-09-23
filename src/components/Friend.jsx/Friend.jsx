import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const git = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>has: {git}</p>
        </div>
    );
};

export default Friend;