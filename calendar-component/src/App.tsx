import Calendar from './Calendar';

function App() {
    return (
        <div className="App">
            <Calendar
                onChange={(date) => {
                    console.log(date.format('YYYY-MM-DD'));
                }}
            ></Calendar>
        </div>
    );
}

export default App;
