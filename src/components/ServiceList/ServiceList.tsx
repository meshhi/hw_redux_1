import { useSelector, useDispatch } from "react-redux"
import { IService } from "../../types/IService";
import { SyntheticEvent, useRef } from "react";
import { addService } from "../../redux/actions/actions";
import { Service } from "./Service/Service";

export const ServiceList = () => {
    const state = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const nameRef = useRef<HTMLInputElement | null>();
    const priceRef = useRef<HTMLInputElement | null>();
    
    const mapState = (service : IService) => <Service key={service.id} {...service} setInputValues={setInputValues}></Service>
    
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!nameRef?.current?.value || !priceRef?.current?.value) return;
        dispatch(addService({
            name: nameRef?.current?.value,
            price: Number(priceRef?.current?.value),
            visible: true
        }))
    }

    const handleCancel = () => {
        if (!nameRef?.current?.value || !priceRef?.current?.value) return;
        nameRef.current.value = '';
        priceRef.current.value = '';
    }

    const setInputValues = (name : string, price : string) => {
        if (!nameRef?.current || !priceRef?.current) return;
        nameRef.current.value = name;
        priceRef.current.value = price;
    }



    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef}/>
                <input type="text" ref={priceRef}/>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
            <ul>
            {state.map(mapState)}
            </ul>
        </>
    )
}