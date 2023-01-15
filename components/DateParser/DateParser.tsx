import React, {FC} from 'react';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import style from './dateParser.module.scss'

interface IDateParser {
    date: string
}
const DateParser: FC<IDateParser> = ({date}) => {

    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const parsedDate = new Date(date)

   const dateString = `${MONTHS[parsedDate.getMonth()]} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`

    return (
        <div className={style.date}>
            <CalendarTodayOutlinedIcon/> {dateString}
        </div>

    );
};

export default DateParser;