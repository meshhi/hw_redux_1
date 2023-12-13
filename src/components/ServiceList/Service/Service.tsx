import { IService } from "../../../types/IService"
import { useDispatch } from "react-redux"
import { removeService } from "../../../redux/actions/actions";

export const Service = ({id, name, price, setInputValues, setCurrentPrice}: IService & any) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeService(id))
    }

    return(
        <div>
            {name} {price}
            <button type="button" onClick={() => {
                setInputValues(name, price);
                setCurrentPrice(id);
            }}>Change</button>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}