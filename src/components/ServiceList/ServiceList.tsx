import { useSelector, useDispatch } from "react-redux"
import { IService } from "../../types/IService";
import { SyntheticEvent, useRef } from "react";
import { addService, changeService } from "../../redux/actions/actions";
import { Service } from "./Service/Service";
import { useState } from "react";

export const ServiceList = () => {
    const state = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const nameRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);

    const [currentPrice, setCurrentPrice] = useState<string | null>();
    
    const mapState = (service : IService) => {
        if (service?.visible) {
            return <Service key={service.id} {...service} setInputValues={setInputValues} setCurrentPrice={setCurrentPrice}></Service>
        }
    }
    
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!nameRef?.current?.value || isNaN(Number(priceRef?.current?.value))) return;
        if (currentPrice) {
            dispatch(changeService({
                id: Number(currentPrice),
                name: nameRef?.current?.value,
                price: Number(priceRef?.current?.value),
            }))
        } else {
            dispatch(addService({
                name: nameRef?.current?.value,
                price: Number(priceRef?.current?.value),
                visible: true
            }))
        }
        setCurrentPrice(null);
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
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
            <ul>
            {state.map(mapState)}
            </ul>
        </>
    )
}