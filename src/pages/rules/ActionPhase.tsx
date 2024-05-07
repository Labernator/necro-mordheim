import React from "react";

import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/rulesPages.json";
import { NavFooter } from "../../components/navfooter";
import { NavHeader } from "../../components/navheader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
export const ActionPhasePage = () => {
    const location = useLocation();
    const myPages = Pages;
    const currentPage = myPages.pages.find((route) => route.link === location.pathname);

    const PageHeader = currentPage;
    return <React.Fragment>

        <NavHeader currentPage={currentPage} />
        <header>
            <h1 className="header-1">{PageHeader?.header}</h1>
            <p>The Action phase consists of just one step:</p>
            <ol>
                <li>{`Activate Gang:\nStarting with the player that holds Priority, players take turns to choose one of their Ready fighters to activate.`}</li>
            </ol>
        </header>
        <header>
            <h2 className="header-2">1. Activate Gang</h2>
            <p>{`The bulk of a game of Necromunda takes place during the Action phase. The Action phase consists of play alternating back and forth between the players, activating individual models one at a time, or small groups of fighters as part of a ‘Group Activation’ (as follows).\n\nWhen it is a player’s turn, they choose one of the models within their gang that is Ready and perform a number of actions with it. This is referred to as ‘activating’ the model. The number of actions a model can perform depends upon its type:`}</p>
            <ul>
                <li>{`When activated, a model may perform up to two actions, depending upon the type of actions it chooses to perform.`}</li>
                <li>{`Sometimes a model may only be able to perform one action when activated. In such cases, the types of action it can choose to perform are limited to Simple, Basic and Free (see Types of Action).`}</li>
                <li>{`Sometimes a model may be able to perform additional actions when activated. In such cases, the rules will specify either the type of action or a specific action.`}</li>
            </ul>
            <p>{`The actions a Ready model can perform are governed by its current Status and Secondary Status. Players should note that certain Conditions will also limit the actions a model may make, most notably Broken. For example, a fighter subject to the Broken condition may only make a Running for Cover (Double) action when activated, regardless of Status or Secondary Status.\n\nIf one player runs out of models to activate, the other player can activate all of their remaining models in an order of their choosing. Once all models have been activated, even if they performed no actions during their activation, the Action phase ends.`}</p>
        </header>
        <div className="theme-admonition theme-admonition-danger admonition_xJq3 alert alert--danger">
                <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faFireFlameCurved} /></span>HOUSE RULE</div>
                <p>For the first activation of every round, each player may only activate <strong>one</strong> model (plus it's group activations).<br/>In every subsequent activation of that round, each player activates <strong>two</strong> models.</p>
            </div>
        <header>
            <h3 className="header-3">Group Activations</h3>
            <p>{`Your Leader has a special rule called ‘Group Activation (2)’ listed on their profile. This special rule, allows the player to activate additional Ready fighters at the same time as the fighter:`}</p>
            <p>{`Group Activation (X): When a fighter with this special rule is activated, their controlling player can choose to activate a number of additional Ready friendly fighters equal to the number shown in brackets that are within 3" of this fighter as part of a ‘Group Activation’:`}</p>
            <ul>
                <li>{`The controlling player must nominate all of the fighters who will be activated in this way before any of them are activated.`}</li>
                <li>{`Once all participants of the Group Activation have been nominated, the controlling player selects one and activates them as normal, fully resolving their activation before selecting and activating the next. Each fighter activates individually; groups do not activate simultaneously.`}</li>
            </ul>
        </header>

        <NavFooter currentState={PageHeader?.header} />
    </React.Fragment>;
};
