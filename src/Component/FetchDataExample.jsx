import { useState, useEffect } from 'react';

const FetchDataExample = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await new Promise((resolve) => {
                    setTimeout(() => resolve(['huutai', 'caonguyen', 'vanphu']), 2000);
                });
                setData(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {data.map((name, index) => (
                    <h1 key={index}>{name}</h1>
                ))}
            </ul>
        </div>
    );
};

export default FetchDataExample;
