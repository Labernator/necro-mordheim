import React from "react";
import { NavHeader } from "../../components/navheader";
import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/pages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
export const FighterActionsPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname)?.header || "";
    return <React.Fragment>

        <NavHeader currentState={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader}</h1>
            <p>{`The following pages detail all of the core actions fighters may perform in Necromunda. This list is by no means exhaustive, however, with skills, scenarios, special terrain features and more introducing further actions that fighters may perform.`}</p>
        </header>
        <h2 className="header-2">STANDING FIGHTERS</h2>
        <p>{`Fighters that are Standing and Active are able to perform any of the following actions:`}</p>
        <h2 className="header-2">STANDING & ACTIVE FIGHTERS</h2>
        <h3 className="header-3">MOVE (SIMPLE)</h3>
        <p>{`The fighter may:`}</p>
        <ul>
            <li>Move a distance up to their Movement characteristic.</li>
            <li>Climb vertically upwards or downwards.</li>
            <li>Cross any gap between two platforms that is no wider than their base.</li>
            <li>Attempt to leap across a bigger gap provided that they have enough movement left to do so.</li>
            <li>Attempt to jump down to a level below.</li>
        </ul>
        <h3 className="header-3">CHARGE (DOUBLE)</h3>
        <p>{`The fighter moves as if making a Move (Simple) action, but adds D3" to the distance they can move. A charging fighter can move to within 1" of one or more enemy fighters that are Standing and either Active or Engaged, or that are Prone and either Pinned or Seriously Injured, but if they do move to within 1" they must have sufficient movement to get into base to base contact with at least one enemy fighter. If they do not have sufficient movement to get into base to base contact, they must stop 1" away. If they are Standing and Engaged at the end of this move, they must immediately make a free Fight (Basic) action. If they are Standing and Engaged with a Prone and Pinned fighter at the end of this move, that fighter changes their status to Standing and Active.`}</p>
        <h3 className="header-3">TAKE COVER (BASIC)</h3>
        <p>{`This fighter moves up to half their Movement characteristic and is then Prone and Pinned.`}</p>
        <h3 className="header-3">SHOOT (BASIC)</h3>
        <p>{`The fighter makes an attack with a ranged weapon – see Shooting.`}</p>
        <h3 className="header-3">AIM (BASIC)</h3>
        <p>{`If the fighter makes a subsequent Shoot (Basic) action this activation, apply a +1 modifier to any Hit rolls they make.`}</p>
        <h3 className="header-3">RELOAD (BASIC)</h3>
        <p>{`Pick one of the fighter’s weapons that is Out of Ammo and make an Ammo test. If the test is passed, the weapon is reloaded and the Out of Ammo marker is removed.`}</p>
        <h3 className="header-3">COUP DE GRACE (BASIC)</h3>
        <p>{`If this fighter is not engaged with any other fighters, choose one Prone and Seriously Injured enemy fighter within 1" and within the vision arc of this fighter. That enemy fighter immediately goes Out of Action.\n\nA fighter performing a Charge (Double) action may make a free Coup De Grace (Simple) action instead of a free Fight (Basic) action if they end their move within 1" of a Prone and Seriously Injured fighter and are not engaged with any other enemy fighters.`}</p>
        <div className="theme-admonition theme-admonition-tip admonition_xJq3 alert alert--success">
            <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faLightbulb} /></span>Useful House Rule</div>
            <p>{`Do not make a 2nd Nerve test for fighters that became Seriously Injured and then taken Out of Action by a free Coup de Grace action in the same activation.`}</p>
        </div>
        <h3 className="header-3">SMASH OPEN LOOT CASKET (BASIC)</h3>
        <p>{`If this fighter is within 1" of a Loot Casket, roll a D6 and add their Strength. If the total is 6 or more, the casket is opened. However, subtract 1 from the roll to determine the casket’s contents, to a minimum of 1 (see Opening Loot Caskets).`}</p>
        <h3 className="header-3">BYPASS LOOT CASKET LOCK (BASIC)</h3>
        <p>{`If this fighter is within 1" of a Loot Casket, make an Intelligence test for this fighter. If the test is passed, the casket is opened.`}</p>
        <h3 className="header-3">CARRY LOOT CASKET (SIMPLE)</h3>
        <p>{`If this fighter is within 1" of a Loot Casket, they may make a Move (Simple) action, carrying the Loot Casket with them. When the action ends, the casket is placed in base contact with this fighter.`}</p>
        <h2 className="header-2">STANDING & ENGAGED FIGHTERS</h2>
        <p>{`The fighter makes close combat attacks against one or more enemy fighters they are engaged with (see Close Combat).`}</p>
        <h3 className="header-3">FIGHT (BASIC)</h3>
        <p>{`The fighter makes close combat attacks against one or more enemy fighters they are engaged with (see Close Combat).`}</p>
        <h3 className="header-3">RETREAT (BASIC)</h3>
        <p>{`Make an Initiative test for this fighter. If it is passed, they can make a Move (Basic) action, moving up to D6" instead of their Movement characteristic. Regardless of the result of the Initiative test, each enemy fighter that is engaged with them can make an Initiative test. If they pass, they can make Reaction attacks against the retreating fighter.`}</p>
        <h2 className="header-2">PRONE FIGHTERS</h2>
        <p>{`Prone fighters are not able to perform as many actions as Standing fighters. The exact actions available to them depend upon their Secondary Status: Pinned (face-up) or Seriously Injured (face-down).`}</p>
        <h2 className="header-2">PRONE & PINNED FIGHTERS</h2>
        <p>{`Fighters that are Prone and Pinned are able to perform any of the following actions:`}</p>
        <h3 className="header-3">STAND UP (BASIC)</h3>
        <p>{`For most fighters, quickly getting back to their feet when they have been knocked down is a priority. The fighter stands up, returning to Standing and Active status. The controlling player can choose the fighter’s facing.`}</p>
        <h3 className="header-3">CRAWL (DOUBLE)</h3>
        <p>{`Wanting to stay low, close to the ground and hidden from enemy fire, the fighter crawls along the ground. The fighter may move up to half of their Movement characteristic.`}</p>
        <h3 className="header-3">BLIND FIRE (DOUBLE)</h3>
        <p>{`Staying close to the ground, safely hidden from the enemy by terrain or barricades, the fighter fires blindly towards the enemy. The fighter makes a ranged attack, treating their vision arc as 360°. Subtract 2 from the result of any Hit rolls.`}</p>
        <h3 className="header-3">RELOAD (SIMPLE)</h3>
        <p>{`Pick one of the fighter’s weapons that is Out of Ammo and make an Ammo test. If the test is passed, the weapon is reloaded and the Out of Ammo marker is removed.`}</p>
        <h2 className="header-2">PRONE & SERIOUSLY INJURED FIGHTERS</h2>
        <p>{`Fighters that are Prone and Seriously Injured have more pressing concerns than the battle that rages around them. Often in considerable pain and usually bleeding profusely, Prone and Seriously Injured fighters are concerned primarily with making their way to safety, away from their enemies. Therefore, Prone and Seriously Injured fighters may only perform the following action:`}</p>
        <h3 className="header-3">CRAWL (DOUBLE)</h3>
        <p>{`(See previous Crawl entry).`}</p>
        <h2 className="header-2">BROKEN FIGHTERS</h2>
        <p>{`Fighters can be subject to the Broken condition. A Broken fighter is one that has lost their nerve, a fighter that wants nothing more than to get to a safe place where they can regain their composure. Any fighter subject to the Broken condition must perform a Running for Cover (Double) action when activated.`}</p>
        <h3 className="header-3">RUNNING FOR COVER (DOUBLE)</h3>
        <p>{`If the fighter is Standing and Active, they will move 2D6". If the fighter is Prone and Pinned or Prone and Seriously Injured, they can only move half of their Movement characteristic.\n\nWhen a Broken fighter moves they must attempt to end their move, in order of priority:`}</p>
        <ul>
            <li>So that they are more than 3" away from enemy models.</li>
            <li>So that they are out of line of sight of enemy models.</li>
            <li>In partial or full cover.</li>
            <li>As far away from any enemy models as possible.</li>
        </ul>
        <p>{`If a Broken fighter is Standing and Engaged when activated, they must make an Initiative test. If it is passed, they must move as described previously. Each enemy fighter that is engaged with them makes an Initiative test and if passed, they can make Reaction attacks before the Broken fighter is moved. If the Broken fighter fails the Initiative test, they remain engaged and can perform no further actions.`}</p>
    </React.Fragment>;
};
