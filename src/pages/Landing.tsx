import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {

    return <React.Fragment>
        <header>
            <h1 className="header-1">Necro-Mordheim</h1>
            <p>Mordheim... but better! Or at least different...</p>
        </header>
        <div>
            <Link className="button button--primary button--lg" to="/campaign-play">Campaign Play</Link>
            {/* <Link className="button button--primary button--lg" to="/warband-creation">Warband creation</Link> */}
            <Link className="button button--primary button--lg" to="/the-rules">Core Rules</Link>

            {/* <Link className="button button--primary button--lg" to="/mutiny-in-marienburg">Mutiny in Marienburg</Link> */}
        </div>
    </React.Fragment>;
};
