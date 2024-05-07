import React from "react";
import { useLocation } from "react-router-dom";
import { NavFooter } from "../../components/navfooter";
import { NavHeader } from "../../components/navheader";

import * as Pages from "../../staticData/rulesPages.json";
export const PreBattleSequencePage = () => {
    const txt = 'The final step of the pre-battle sequence is deployment, in which the players set their gangs up on the battlefield, ready for the battle ahead. Many scenarios will provide details of the size and location of ‘deployment zones’, the name given to the areas in which gangs can be set up. For those which do not, the standard deployment rules are: \nDraw a line dividing the battlefield into two equal halves. Starting with the defender, or the winner of a roll-off, players select one half of the battlefield in which to set their crews up. The defender/winner of the roll-off sets up first. All fighters in both players crews must be set up at least 12" away from the dividing line.'
    const terrainTxt = `You will also need something to play your battles on. Any firm, level surface is best, such as a tabletop or an area of floor – most kitchen tables will do. It’s a good idea to use an old sheet or blanket to protect the table from scratches.\nSome players make a special gaming board from chipboard or other similar material (divided into two or more pieces for ease of storage) which they can use on top of a table to extend the playing area.\nWhatever you use, you will find that a square area approximately 4 x 4' is about right for most battles.
    \nThe bitter struggles of a Mordheim battle take place in labyrinthine streets, ruined buildings and on derelict walkways. As a rule, a table packed with scenery will lead to closer and more exciting games.\nMany scenarios will give you a hint what kind of terrain would be best suited.`
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname);
    return <React.Fragment>
        <NavHeader currentPage={PageHeader} />
        <header>
            <h1 className="header-1">The Pre-Battle Sequence</h1>
            <p>Prior to any battle, there are several important steps that need to take place, as listed below. Some of these only apply during Campaign play, and can therefore be skipped during Skirmish play, as mentioned in the appropriate entries. Whatever the case, this sequence must be followed in the order shown, and must be done while both players are present.</p>
        </header>
         <p>The pre-battle sequence consists of the following steps:</p>
        <ol className="list">
            <li>Determine Scenario</li>
            <li>Set up the Battlefield</li>
            <li>Deployment</li>
        </ol>
        <header>
            <h2  className="header-2">1. DETERMINE SCENARIO</h2>
            <p>In Skirmish play, players may simply choose a scenario they wish to play. If they cannot decide, they should roll off to see who decides which scenario is played. In Campaign play, the scenario may be determined by the Arbitrator, though many campaigns include their own Scenario table.</p>
        </header>
        <header>
            <h2  className="header-2">2. Set up the Battlefield</h2>
            <p style={{whiteSpace: 'pre-wrap'}}>{terrainTxt}</p>
        </header>
        <header>
            <h2  className="header-2">3. Deployment</h2>
            <p style={{whiteSpace: 'pre-wrap'}}>{txt}</p>
        </header>
        <NavFooter currentState={PageHeader?.header} />
    </React.Fragment>;
};
