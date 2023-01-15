import {InputAdornment, TextField} from "@mui/material";
import style from './search.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import {FC} from "react";

interface ISearch {
    value: string
    setValue: (value: string) => void
}

export const Search: FC<ISearch> = ({value, setValue}) => {

    return <div className={style.container}>
        <div>
            Filter by keywords
        </div>
        <TextField placeholder={'Enter query'} fullWidth
                   value={value}
                   onChange={event => setValue(event.target.value)}
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start">
                               <SearchIcon/>
                           </InputAdornment>
                       ),
                   }}
                   inputProps={{"data-testid": "search"}}
        />
    </div>
}