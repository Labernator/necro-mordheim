import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as Pages from "../../staticData/rulesPages.json";
import { NavFooter } from "../../components/navfooter";
import { NavHeader } from "../../components/navheader";
export const ShootingPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname);
    return <React.Fragment>

        <NavHeader currentPage={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader?.header}</h1>
            <p>{`Whenever a model makes a ranged attack against one or more enemy models, this sequence is followed:`}</p>
            <ol>
                <li>Who can shoot</li>
                <li>Assess Target</li>
                <li>Declare the Shot</li>
                <li>Measure Range</li>
                <li>Make the Hit Roll</li>
                <li>Resolve Hits</li>
            </ol>
        </header>
        <h2 className="header-2">1. Who can shoot</h2>
        <p>{`Each model can shoot, so long as he can see a target and assuming he has a suitable weapon or can cast spells or prayers. See the `}<Link to="/magic">Magic</Link> section for how to resolve these.</p>
        <p>{`He may not fire in the following circumstances: if he is engaged in hand-to-hand combat, has rallied this turn or is seriously injured.\n\nTo shoot at a target, a model must be able to see it, and the only way to check this is to stoop over the tabletop for a model's eye view. Models can see all around themselves (ie, 360°), and they may be turned freely to face in any direction before firing. Note that turning on the spot does not count as moving.`}</p>
        <h2 className="header-2">2. ASSESS TARGET</h2>
        <p>{`You must shoot at the closest enemy, as he represents the most immediate threat and therefore the most obvious target. However, you may shoot at a more distant target if it is easier to hit or if closer models are stunned or knocked down (see diagram on next page). For example, a closer target may be hard to hit because it is in cover, whilst a more distant target might be in the open and therefore an easier shot.\n\nYou may always choose to shoot at a Large Target if you can see it, whether it is in cover or not and even if it is not the closest target.\n\nYou can shoot at models that are fleeing, knocked down or stunned, but you can choose to ignore them, because they do not represent an immediate threat. It is better to shoot the closest standing enemy model instead.\n\nNote that you may not shoot at models that are engaged in close combat with a member of your warband`}</p>
        <h3 className="header-3">Shooting from an elevated position</h3>
        <p>{`A model situated in an elevated position (i.e., anything that is more than 2" above the table surface, such as an upper floor of a building), may freely pick any target he can see and shoot at it.\n\nThe exception to this rule is that if there are enemies in the same building and in line of sight of the shooter, he must shoot at these, as they present a more immediate threat.`}</p>
        <h2 className="header-2">3. DECLARE THE SHOT</h2>
        <p>{`Once the target has been assessed, choose a ranged weapon the model is armed with, and nominate an eligible target to be the target of the ranged attack.`}</p>
        <h2 className="header-2">4. MEASURE RANGE</h2>
        <p>{`Next, measure the distance between the model making the ranged attack and the target, to ensure that the target is within the range of the weapon. In the case of a fighter, range is measured from the model to the nearest point of the target model.\n\nIf the target is outside the weapon's range, the attack automatically misses.`}</p>
        <h2 className="header-2">5. MAKE THE HIT ROLL</h2>
        <p>{`A Hit roll is a Ballistic Skill test made against the BS of the model making the shot according to this table.`}</p>
        <table>
            <thead>
                <tr>
                    <th>BS of the shooter</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>D6 roll needed</td>
                    <td>6+</td>
                    <td>5+</td>
                    <td>4+</td>
                    <td>3+</td>
                    <td>2+</td>
                    <td>1+</td>
                    <td>1+</td>
                    <td>1+</td>
                    <td>1+</td>
                    <td>1+</td>
                </tr>
            </tbody>
        </table>
        <p>{`The following modifiers may apply to the Hit roll:`}</p>
        <ul>
            <li>Cover (-1): If any part of the model is obscured by scenery or other models then it counts as being in cover.</li>
            <li>Target is Engaged (-1): If the target is Standing and Engaged, apply a -1 modifier.</li>
            <li>Long Range (-1): If you are shooting at a target that is more than half of your weapon’s maximum range away.</li>
            <li>Moving and Shooting (-1): If your model has moved at all (other than standing up, or turning to face your target) during this turn.</li>
            <li>Large Target (+1): If either the target model has the Large Target special rule (such as an Ogre).</li>
            <li>Target is Prone (-1, Long Range Only): If the target is Prone (either Pinned or Seriously Injured) and the attacker is firing at Long range, apply a -1 modifier.</li>
            <li>Rolls of a Natural 1: If, when making a ranged attack, the hit roll is a natural 1, the attack automatically misses, regardless of any modifiers that may apply.</li>
            <li>Improbable Shots: If the negative modifiers applied to a Hit roll mean that it is impossible to score a hit, the attack is an Improbable Shot. To make a Hit roll for an Improbable Shot, roll a D6. On a 1-5, the attack misses. On a 6, there is a chance that it will hit; make a second Hit roll modified by the BS of the shooter.</li>
        </ul>
        <h3 className="header-3">HIT FIGHTERS BECOME PINNED</h3>
        <p>{`The vast majority of fighters, when they find themselves under enemy fire, will duck for cover and attempt to keep their head down. To represent this, when a Standing and Active fighter is hit by a ranged attack, they are automatically placed Prone and Pinned. Players should note that a Standing and Engaged fighter cannot become Prone and Pinned.`}</p>
        <h2 className="header-2">6. RESOLVE HITS</h2>
        <p>{`For each BS test that is passed when making a Hit roll, a hit is scored. Each hit scored is resolved as described in `}<Link to="/resolve-hits">Resolving Hits.</Link></p>
        <p>{`If the attack would have caused more than one hit, follow this sequence for every hit.`}</p>
        <NavFooter currentState={PageHeader?.header} />
    </React.Fragment>;
};
