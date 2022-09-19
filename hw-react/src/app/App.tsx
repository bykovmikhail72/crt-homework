import Counter from "../counter/counter";

import "./App.sass"

const App = () => {

    return (
        <div className="app">
            <div className="app__title">Hello, this is counter working with react-redux</div>
            <Counter/>
        </div>
    )
}

export default App;