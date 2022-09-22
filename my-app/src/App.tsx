import "./App.css";

import Header from "./containers/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Footer from "./containers/Footer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Archives" element={<p>Archives</p>} />
                </Routes>
                <Footer />
            </header>
        </div>
    );
}

export default App;
