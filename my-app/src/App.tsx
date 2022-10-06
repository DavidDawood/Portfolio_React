import "./App.scss";

import Header from "./containers/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import Sidebar from "./containers/Sidebar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <Routes>
                    <Route path="" element={<Home />} />
                </Routes>
            </header>
            <Footer />
            <Sidebar />
        </div>
    );
}

export default App;
