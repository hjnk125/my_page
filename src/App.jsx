import {Suspense} from "react";
import "./css/App.scss";
import Home from "./pages/Index";
import {MOBILE, PC} from "./components/MediaQuery";

function App() {
    return (
        <Suspense fallback={<div/>}>
            <MOBILE>
                <div className={"App mobile_container"}>
                    <Home container={"mobile"}/>
                </div>
            </MOBILE>
            <PC>
                <div className={"App pc_container"}>
                    <Home container={"pc"}/>
                </div>
            </PC>
        </Suspense>
    )
}

export default App
