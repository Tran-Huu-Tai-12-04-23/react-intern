type CarProps = {
    data: {
        name: string;
        amount: number;
    };
};
function Car(props: CarProps) {
    return (
        <div>
            <h1>Name : {props.data.name}</h1>
            <h2>Amount : {props.data.amount}</h2>
        </div>
    );
}

export default Car;
