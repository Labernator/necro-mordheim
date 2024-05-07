import React from "react";
import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/rulesPages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { NavFooter } from "../../components/navfooter";
import { NavHeader } from "../../components/navheader";
export const EndPhasePage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname);
    return <React.Fragment>

        <NavHeader currentPage={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader?.header}</h1>
            <p>{`After all models have been activated, the Action phase ends and play moves on to the End phase. The End phase has three steps:`}</p>
            <ol>
                <li>{`Rout tests: A player must make a Rout test at the start of his turn if a quarter (25%) or more of his warband are Seriously Injured, Broken or Out of Action.`}</li>
                <li>{`Recover: Starting with the player that holds Priority, both players make Recovery tests for any Prone and Seriously Injured fighters.`}</li>
                <li>{`Rally Tests: Starting with the player that holds Priority, both players make Leadership tests for Broken models belonging to their gang to see if they can Rally.`}</li>
            </ol>
        </header>
        <h2 className="header-2">1. Rout test</h2>
        <p>{`player must make a Rout test at the start of his turn if a quarter (25%) or more of his warband is out of action.\n\nFor example, in a warband that has twelve warriors a test is needed if three or more are out of action. Even warbands who are normally immune to psychology (such as Undead) must make Rout tests.\n\nIf the Rout test is failed, the warband automatically loses the fight. The game ends immediately and surviving warriors retreat from the area. A failed Rout test is the most common way in which a fight ends.\n\nTo take a Rout test roll 2D6. If the score is equal to or less than the warband leader’s Leadership, the player has passed the test and may continue to fight.\n\nIf the warband’s leader is out of action or stunned, then the player may not use his Leadership to take the test. Instead, use the highest Leadership characteristic amongst any remaining fighters who are not stunned or out of action.`}</p>
        <div className="theme-admonition theme-admonition-tip admonition_xJq3 alert alert--success">
            <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faLightbulb} /></span>Voluntary Rout</div>
            <p>{`A player may choose to voluntarily Rout at the start of any of his own turns if he wishes, but only if he was already required to take a Rout test or if a quarter (25%) or more of his warband are Seriously Injured, Broken or Out of Action.`}</p>
        </div>
        <h2 className="header-2">2. Recover</h2>
        <p>{`For each member of their gang that is Prone and Seriously Injured and still on the battlefield, the controlling player makes a Recovery test by rolling an Injury dice:`}</p>
        <ul>
            <li>{`If the result is Out of Action, the fighter is removed from play.`}</li>
            <li>{`If the result is Seriously Injured, the fighter suffers a Flesh Wound and remains as they are – Prone and Seriously Injured.`}</li>
            <li>{`If the result is a Flesh Wound, the fighter suffers a Flesh Wound and becomes Prone and Pinned.`}</li>
        </ul>
        <p>{`Assistance: When making a Recovery test for a Prone and Seriously Injured fighter, one Standing and Active friendly fighter that is within 1" can offer assistance. If they do so, roll one extra Injury dice then pick one of the Injury dice to resolve and discard the other. In addition, a fighter that is being assisted does not suffer a Flesh Wound regardless of the result of the Injury dice.\n\nA fighter can only assist one Recovery test per End phase.\n\nMultiple Injury Dice: It may happen that, due to assistance, items of Wargear or skills that, when making a Recovery test, several Injury dice are rolled. Regardless of how many are rolled, one Injury dice is picked and resolved – the others are discarded, as described previously.`}</p>
        <h2 className="header-2">3. Rally Tests</h2>
        <p>{`During the final step of the End phase, players may attempt to Rally any Broken models belonging to their gang, starting with the gang that holds Priority if both gangs contain Broken models.\n\nTo Rally a Broken model, make a Leadership test for them, applying a +1 modifier to the result for each friendly model within 3" of them that is not Broken and is not Prone and Seriously Injured:`}</p>
        <ul>
            <li>{`If the test is passed, the model is no longer Broken.`}</li>
            <li>{`If the test is failed, the model remains Broken and may attempt to Rally again in the next End phase.`}</li>
        </ul>
        <NavFooter currentState={PageHeader?.header} />
    </React.Fragment>;
};
