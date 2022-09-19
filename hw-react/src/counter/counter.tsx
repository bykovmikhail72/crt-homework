import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { increment, decrement } from "./counterSlice";

import "./counter.sass"

const Counter = () => {
    const dispatch = useDispatch();

    const {count} = useSelector((state: RootState) => state)

    return (
        <div className="counter">
            <div className="counter__table">{count}</div>
            <div className="counter__container">
                <button 
                    className="counter__btn"
                    onClick={() => dispatch(increment())}
                >+</button>
                <button 
                    className="counter__btn"
                    onClick={() => {dispatch(decrement())}}
                >-</button>
            </div>
        </div>
    )
}

export default Counter;