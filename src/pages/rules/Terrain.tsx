import React from "react";
import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/rulesPages.json";
import { NavFooter } from "../../components/navfooter";
import { NavHeader } from "../../components/navheader";
export const TerrainPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname);
    return <React.Fragment>

        <NavHeader currentPage={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader?.header}</h1>
            <p>{`As mentioned previously, terrain features prominently in games of Mordheim. One of the most obvious ways in which models interact with terrain is when they attempt to move through and over it. The following section covers the various ways in which terrain affects a model’s movement.`}</p>
        </header>
        <h2 className="header-2">Open Ground</h2>
        <p>{`Fallow Fields, fields which just haven’t produced crops yet, low open hills, bridges, fords, steps, ladders)`}</p>
        <ul><li>No movement penalty.</li></ul>
        <h2 className="header-2">Difficult Ground</h2>
        <p>{`Small streams [moving water, less than 4" wide], rochy ground, fields with corps, ruins. Marshy ground, woods`}</p>
        <ul><li>Models move a 1/2 speed.</li></ul>
        <h2 className="header-2">Very difficult Ground</h2>
        <p>{`Rivers [moving water 4"or more wide] , Swamp, deep marsh, Hedges, thickets`}</p>
        <ul><li>Models move at 1/4 speed and may not execute double actions.</li></ul>

        <NavFooter currentState={PageHeader?.header} />
        </React.Fragment>;
};
