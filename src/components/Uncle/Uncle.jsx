import Cussin from "../Cousin/Cussin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cussin name={'Rafsan'} asset={asset}></Cussin>
                <Cussin name={'Sohana'}></Cussin>
            </section>
        </div>
    );
};

export default Uncle;