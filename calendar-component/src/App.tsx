import dayjs from 'dayjs';
import Calendar from './Calendar';

function App() {
    return (
        <div className="App">
            <Calendar value={dayjs()} className={'aaa'} style={{ background: 'yellow' }}></Calendar>
        </div>
    );
}

export default App;
