import './App.css';
import Box from './Component/Box';
import Car from './Component/Car';
import CarList from './Component/CarList';
import FetchDataExample from './Component/FetchDataExample';
import Heading from './Component/Heading';
import Greet from './Greet';

function App() {
    const car = {
        name: 'Mercedes',
        amount: 100,
    };

    const carList = [
        {
            name: 'Mercedes',
            amount: 100,
        },
        {
            name: 'Lamborghini',
            amount: 100,
        },
    ];
    return (
        <div className="App">
            {/* <Greet name="huutai" />
            <Car data={car} />
            <CarList data={carList} />
            <FetchData status="loading" /> */}
            <Box>
                <Heading>Heading 1</Heading>
            </Box>
            <FetchDataExample />
        </div>
    );
}

export default App;
