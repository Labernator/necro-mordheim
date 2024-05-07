import React from "react";

import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/rulesPages.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { NavFooter } from "../../components/navfooter";
import { NavHeader } from "../../components/navheader";
export const PriorityPhasePage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname);
    return <React.Fragment>

        <NavHeader currentPage={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader?.header}</h1>
            <p>The Priority phase is split into the following steps:</p>
            <ol>
                <li>{`Roll For Priority:\nBoth players roll for Priority`}</li>
                <li>{`Ready Warband:\nBoth players give each of their fighters a Ready marker.`}</li>
            </ol>
        </header>
        <header>
            <h2 className="header-2">1. Roll for priority</h2>
            <p>{`This step determines which player wins the Priority marker for this round. The Priority marker is a coin or token, that is held by the player with Priority for the round, acting as a reminder. Holding the Priority marker gives a player a huge advantage, as they are able to activate first and can dictate the flow of the action during the round, often putting their opponent onto the back foot and making their gang behave reactively rather than proactively in response to their foes moving and attacking first.\n\nTo determine who has Priority, each player rolls a D6, and the player who rolls the highest takes Priority for this round. In the case of a tie, the player who had Priority in the previous round passes it to their opponent. If the first Priority roll of the battle is tied, neither player will have held Priority previously, therefore both players roll again.`}</p>
        </header>
        <div className="theme-admonition theme-admonition-info admonition_xJq3 alert alert--info">
            <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faCircleInfo}/></span>INFO</div>
            <h3 className="header-3">PRIORITY IN MULTI-PLAYER GAMES</h3>
            <p>{`Sometimes, more than two gangs find themselves fighting on the same battlefield - either allying together to take out hated foes, or in a bloody free-for-all.\n\nPlayers roll for Priority as normal, but ties are handled differently. Players determine play order based on their dice score when rolling for Priority. Any ties are re-rolled (for example, if four players roll for Priority and score a 5, 4, 4 and 2, the player that rolled 5 has Priority, the player that rolled 2 goes last and the players that each rolled a 4 roll off again to determine who is going second and third).`}</p>
        </div>
        <header>
            <h2 className="header-2">2. Ready warband</h2>
            <p>{`During this step of the Priority phase, both players place a Ready marker on each model in their warband that is currently on the battlefield, note that some Conditions and Statuses may prevent a model gaining a Ready marker. The Necromunda: Hive War boxed set contains a number of Ready markers that can be used for this. Ready markers should be placed either on the model’s Fighter card or Vehicle card or next to the model itself on the battlefield.\n\nOnce a model has been activated, its Ready marker is removed. Under normal circumstances, a model that is no longer Ready may not activate again, but players should take note that there are some instances in which a model may activate again, notably in the case of some skills and gang tactics.`}</p>
        </header>
        <NavFooter currentState={PageHeader?.header} />
    </React.Fragment>;
};
