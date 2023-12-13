import { useRef } from "react";
import { useDispatch } from "react-redux"
import { filterService } from "../../redux/actions/actions";

export const ServiceFilter = () => {
    const valueRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const handleFilterChange = () => {
        dispatch(filterService(String(valueRef?.current?.value)));
    }
    return(<input type="text" onChange={handleFilterChange} placeholder="filter..." ref={valueRef}></input>)
}