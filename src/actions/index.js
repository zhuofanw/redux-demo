import { INCREMENT,DECREMENT} from "../constants/index";

export const increment = (name) =>{
    return {
        type:INCREMENT,
        name
    }
}
export const decrement = () =>{
    return {
        type:DECREMENT
    }
}