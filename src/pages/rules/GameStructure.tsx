import React from "react";
import { NavHeader } from "../../components/navheader";
import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/pages.json";
export const GameStructurePage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname)?.header || "";
    return <React.Fragment>

        <NavHeader currentState={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader}</h1>
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
                <li>{`Bottle Checks:\nIf a player has at least one Prone and Seriously Injured or Out of Action fighter, they will have to make a Bottle check for their gang. Often, passing this check is a formality, but as the casualties increase, failing a Bottle check becomes ever more likely!`}</li>
                <li>{`Fleeing the Battlefield:\nIf either gang has failed a Bottle check, the controlling player makes a Cool test for each of their models that is still on the battlefield. Any models that fail will flee the battlefield.`}</li>
                <li>{`Recover & Restart:\nStarting with the player that holds Priority, both players make Recovery tests for any Prone and Seriously Injured fighters and/or Restart tests for any Stationary and Stalled vehicles belonging to their gang.`}</li>
                <li>{`Rally Tests:\nStarting with the player that holds Priority, both players make Cool tests for Broken models belonging to their gang to see if they can Rally.`}</li>
            </ol>
        </header>
    </React.Fragment>;
};
