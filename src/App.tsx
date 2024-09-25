import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="flex gap-4 items-center bg-slate-300 p-16 rounded">
                <div>
                    <button onClick={() => dispatch(decrement())} className="bg-red-500 text-white p-3 rounded font-semibold">
                        Decrement
                    </button>
                </div>
                <p className="text-4xl font-semibold">{count}</p>
                <div>
                    <button onClick={() => dispatch(increment())} className="bg-green-500 text-white p-3 rounded font-semibold">
                        increment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
