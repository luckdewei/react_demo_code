import dayjs from 'dayjs';
import Calendar from './Calendar';

function App() {
    return (
        <div className="App">
            <Calendar
                value={dayjs()}
                locale="en-US"
                dateInnerContent={(value) => {
                    return (
                        <div>
                            <p style={{ background: 'yellowgreen', height: '30px' }}>
                                {value.format('YYYY/MM/DD')}
                            </p>
                        </div>
                    );
                }}
                // className={'aaa'}
                // style={{ background: 'yellow' }}
                // dateRender={(value) => {
                //     return (
                //         <div>
                //             <p style={{ background: 'yellowgreen', height: '50px' }}>
                //                 {value.format('YYYY/MM/DD')}
                //             </p>
                //         </div>
                //     );
                // }}
            ></Calendar>
        </div>
    );
}

export default App;
