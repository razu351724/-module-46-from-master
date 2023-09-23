import { useContext } from "react";
import Cussin from "../Cousin/Cussin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cussin name={'Mamshad'}></Cussin>
                <Cussin name={'Rubaiya'}></Cussin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;