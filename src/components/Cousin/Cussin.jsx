import Friend from "../Friend.jsx/Friend";
import Special from "../Special/Special";

const Cussin = ({name,asset}) => {
    return (
        <div>
            <h2>Cussing</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name==="Rubaiya" && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cussin;