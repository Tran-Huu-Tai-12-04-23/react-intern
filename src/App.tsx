import MainApp from './MainApp';
import './App.css';

function App() {
    return (
        <div
            className="App"
            style={{
                padding: '2rem',
                margin: 0,
                background: '#f3f3f3',
                minHeight: 'calc(100vh - 4rem)',
            }}
        >
            <h1>Welcome TodoApplication</h1>
            <MainApp />
        </div>
    );
}

export default App;
