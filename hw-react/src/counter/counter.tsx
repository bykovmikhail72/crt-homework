import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { increment, decrement } from "./counterSlice";

const Counter = () => {
    const dispatch = useDispatch();

    const {count} = useSelector((state: RootState) => state)

    return (
        <div className="counter">
            <div className="counter__table">{count}</div>
            <button 
                className="counter__increment"
                onClick={() => dispatch(increment())}
            >+</button>
            <button 
                className="counter__decriment"
                onClick={() => {dispatch(decrement())}}>-</button>
        </div>
    )
}

export default Counter;