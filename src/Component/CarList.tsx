import Car from './Car';

type CarListProps = {
    data: {
        name: string;
        amount: number;
    }[];
};
function CarList(props: CarListProps) {
    return (
        <div>
            {props.data.map((car, index) => {
                return <Car key={index} data={car}></Car>;
            })}
        </div>
    );
}

export default CarList;
