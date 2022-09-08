import { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import LukeItem from "./components/LukeItem";
import AppFooter from "./components/AppFooter";
import quotess from "./data/quotess";
import "./App.css";

function App() {
    const [names, setNames] = useState([]);
    const quotesElements = quotess.map((quotes, index) => {
        return <LukeItem key={index} quotes={quotes} />;
    });

    useEffect(() => {
        fetch("https://swapi.dev/api/people/1/")
            .then((res) => {
                return res.json();
            })
            .then((resJson) => {
                setNames(resJson.name);
                console.log(resJson.data);
            });
    }, []);

    return (
        <div className="app">
            <AppHeader />
            <section className="app-section">
                <div className="app-container">
                    <div className="app-profile">
                        <img src="/images/Luke Skywalker.jpeg"></img>
                        <h1>{names}.</h1>
                    </div>
                    <div className="app-card">{quotesElements}</div>
                </div>
            </section>
            <AppFooter />
        </div>
    );
}

export default App;
