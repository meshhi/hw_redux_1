import { ActionTypes } from "./actionTypes";
import { IService } from "../../types/IService";

type IAddServiceArgs = Omit<IService, "id">

export function addService(args : IAddServiceArgs) {
    return {type: ActionTypes.ADD_SERVICE, payload: args}
}

export function removeService(id : string) {
    return {type: ActionTypes.REMOVE_SERVICE, payload: {id}}
}

export function filterService(name : string) {
    return {type: ActionTypes.FILTER_SERVICE, payload: {name}}
}