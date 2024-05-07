import React from "react";

import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/rulesPages.json";
import { NavFooter } from "../../components/navfooter";
import { NavHeader } from "../../components/navheader";
export const GameStructurePage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname);
    return <React.Fragment>

        <NavHeader currentPage={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader?.header}</h1>
            <p>A game of Mordheim is split into several rounds. During a round, players will determine who has Priority, take turns activating one or more fighters and perform actions with them. They will attempt to recover injured fighters, rally fleeing models and determine if their warband can hold its nerve in the face of the enemy.</p>
        </header>
        <header>
            <h2 className="header-2">Round Sequence</h2>
            <p>Each round is split into three phases, each in turn consisting of a number of steps resolved one at a time. These are as follows:</p>
        </header>
        <header>
            <h3 className="header-3">Priority Phase</h3>
            <p>During the Priority phase:</p>
            <ol>
                <li>Roll For Priority: Both players roll for Priority. 2. Ready Gang: Both players give each of their fighters and vehicles a Ready marker.</li>
            </ol>
        </header>
        <header>
            <h3 className="header-3">Action Phase</h3>
            <p>During the Action phase:</p>
            <ol>
                <li>Activate Gang: Starting with the player that holds Priority, players take turns to choose one of their Ready fighters or vehicles to activate.</li>
            </ol>
        </header>
        <header>
            <h3 className="header-3">End Phase</h3>
            <p>During the End phase:</p>
            <ol>
                <li>{`Rout tests:\nA player must make a Rout test at the start of his turn if a quarter (25%) or more of his warband are Seriously Injured, Broken or Out of Action.`}</li>
                <li>{`Recover:\nStarting with the player that holds Priority, both players make Recovery tests for any Prone and Seriously Injured fighters.`}</li>
                <li>{`Rally Tests:\nStarting with the player that holds Priority, both players make Leadership tests for Broken models belonging to their gang to see if they can Rally.`}</li>
            </ol>
        </header>
        <NavFooter currentState={PageHeader?.header} />
    </React.Fragment>;
};
