import React from "react";
import { NavHeader } from "../../components/navheader";
import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/pages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
export const ShootingPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname)?.header || "";
    return <React.Fragment>

        <NavHeader currentState={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader}</h1>
            <p>{`There are several ways in which a model can make a ranged attack against an enemy model, most frequently by performing an action that allows it to do so, but certain skills and gang tactics will also allow various models to make a ranged attack outside of the game’s normal sequence.\n\nWhenever a model makes a ranged attack against one or more enemy models, this sequence is followed:`}</p>
            <ol>
                <li>Assess Target Priority</li>
                <li>Declare the Shot</li>
                <li>Measure Range</li>
                <li>Make the Hit Roll</li>
                <li>Resolve Hits</li>
            </ol>
        </header>
        <h2 className="header-2">1. ASSESS TARGET PRIORITY</h2>
        <p>{`When a model makes a ranged attack, it must be against the closest eligible target. An eligible target is an enemy model that is within both the vision arc and line of sight of a fighter, or within the vision arc`}</p>
        <div className="theme-admonition theme-admonition-danger admonition_xJq3 alert alert--danger">
            <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faFireFlameCurved} /></span>HOUSE RULE (NECRODAMUS, A&A)</div>
            <p>{`You must target the closest visible enemy regardless of facing. This avoids facing fighters in awkward directions to circumvent the cool check for seeing the actual closest enemy.`}</p>
        </div>
        <p>{`An enemy model is an eligible target even if it is engaged by a friendly fighter. However, if the closest eligible target is Prone and Seriously Injured, Wrecked or harder to hit than one further away (due to negative modifiers applied to the Hit roll), the attacking model may choose to ignore it. Otherwise, to make a ranged attack against an eligible target that is not the closest, the attacking model must first pass a Cool test (in the case of a vehicle, use the Cool characteristic of either the crew, or the fighter manning the weapon being used, as appropriate). If this test is passed, the ranged attacks may be made against any eligible target. If it is failed, a ranged attack can only be made against the closest eligible target.\n\nFighters in Hiding: The attacking model cannot target an enemy fighter if they are both Prone (either Pinned or Seriously Injured) and in partial or full cover – they are assumed to be keeping their head very low!`}</p>
        <h2 className="header-2">2. DECLARE THE SHOT</h2>
        <p>{`Once target priority has been assessed, choose a ranged weapon the model is armed with, and nominate an eligible target to be the target of the ranged attack.`}</p>
        <h2 className="header-2">3. MEASURE RANGE</h2>
        <p>{`Next, measure the distance between the model making the ranged attack and the target, to ensure that the target is within the range of the weapon. In the case of a fighter, range is measured from the model to the nearest point of the target model. In the case of a vehicle, range is measured from the weapon to the nearest point of the target model.\n\nIf the target is outside the weapon’s Long range, the attack automatically misses. However, the Firepower dice must still be rolled.`}</p>
        <h2 className="header-2">4. MAKE THE HIT ROLL</h2>
        <p>{`A Hit roll is a Ballistic Skill test made against the BS of the model making the shot. In the case of a fighter, use the BS of the fighter. In the case of a vehicle, use the BS of either the crew, or the fighter manning the weapon being used, as appropriate. The following modifiers may apply to the Hit roll:`}</p>
        <ul>
            <li>In Partial Cover (-1): If the target is in partial cover (see Cover), apply a -1 modifier.</li>
            <li>In Full Cover (-2): If the target is in full cover (see Cover), apply a -2 modifier.</li>
            <li>Accuracy Modifier (+/-?): If the weapon has an accuracy modifier on its profile and the target is within that range, apply the modifier.</li>
            <li>Target is Engaged (-1): If the target is Standing and Engaged, apply a -1 modifier.</li>
            <li>Target is Prone (-1, Long Range Only): If the target is Prone (either Pinned or Seriously Injured) and the attacker is firing at Long range, apply a -1 modifier.</li>
            <li>Target is a Point on the Battlefield (-2): If the target is a point on the battlefield and the weapon being fired does not have the Smoke trait, apply a -2 modifier.</li>
            <li>Rolls of a Natural 1: If, when making a ranged attack, the hit roll is a natural 1, the attack automatically misses, regardless of any modifiers that may apply.</li>
            <li>Improbable Shots: If the negative modifiers applied to a Hit roll mean that it is impossible to score a hit, the attack is an Improbable Shot. To make a Hit roll for an Improbable Shot, roll a D6. On a 1-5, the attack misses. On a 6, there is a chance that it will hit; make a second Hit roll as normal, using only the fighter’s Ballistic Skill and ignoring any other modifiers.</li>
        </ul>
        <h3 className="header-3">HIT FIGHTERS BECOME PINNED</h3>
        <p>{`The vast majority of fighters, when they find themselves under enemy fire, will duck for cover and attempt to keep their head down. To represent this, when a Standing and Active fighter is hit by a ranged attack, they are automatically placed Prone and Pinned. Players should note that a Standing and Engaged fighter cannot become Prone and Pinned.`}</p>
        <h2 className="header-2">5. RESOLVE HITS</h2>
        <p>{`For each BS test that is passed when making a Hit roll, a hit is scored. Each hit scored is resolved as described in Resolving Hits.`}</p>
        <h3 className="header-3">STRAY SHOTS</h3>
        <p>{`If an attack with a ranged weapon misses, there is a chance that another fighter, friend or foe, that is Engaging the target will be hit. Equally, there is a chance that any model, friend or foe, that is within 1" of the line along which the range between the attacker and the target was measured, will be hit.\n\nIf the attack misses, roll a D6 for each model that is at risk of being hit, starting with the model closest to the attacker. On the roll of 1, 2 or 3, that model is hit by the attack. On a 4, 5 or 6, the shot misses it – move on to the next model at risk of being hit.`}</p>
        <div className="theme-admonition theme-admonition-danger admonition_xJq3 alert alert--danger">
            <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faFireFlameCurved} /></span>HOUSE RULE (NECRODAMUS, A&A)</div>
            <p>{`Stray shots only hit other fighters on a 6+.`}</p>
        </div>
        <p>{`If the attack would have caused more than one hit, follow this sequence for every hit.`}</p>
        <h3 className="header-3">THE FIREPOWER DICE</h3>
        <h3 className="header-3">BLAST MARKERS</h3>
        <h3 className="header-3">FLAME TEMPLATES</h3>
    </React.Fragment>;
};
