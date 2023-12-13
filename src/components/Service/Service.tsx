import { IService } from "../../types/IService"
import { useDispatch } from "react-redux"
import { removeService } from "../../redux/actions/actions";

export const Service = ({id, name, price, setInputValues}: IService | any) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeService(id))
    }

    return(
        <div>
            {name} {price}
            <button type="button" onClick={() => setInputValues(name, price)}>Change</button>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}