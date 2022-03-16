import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import {GithubProvider} from "./context/github/GithubContext"
import {AlertProvider} from "./context/alert/AlertContext"

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className="flex flex-col justify-between h-screen">
                        <Navbar/>
                        <main className="container mx-auto px-3 pb-12">
                            <Routes>
                                <Route exact path="/" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/404" element={<NotFound/>}/>
                                <Route path="/*" element={<NotFound/>}/>
                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;
