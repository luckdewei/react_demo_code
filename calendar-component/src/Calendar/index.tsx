import Header from "./Header";
import MonthCalendar from "./MonthCalendar";
import "./index.scss";
import { Dayjs } from "dayjs";

export interface CalendarProps {
    value: Dayjs;
}

function Calendar(props: CalendarProps) {
    return (
        <div className="calendar">
            <Header />
            <MonthCalendar {...props} />
        </div>
    );
}

export default Calendar;
