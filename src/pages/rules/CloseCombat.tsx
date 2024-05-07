import React from "react";
import { NavHeader } from "../../components/navheader";
import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/rulesPages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { NavFooter } from "../../components/navfooter";
export const CloseCombatPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const Page = myPages.pages.find((route) => route.link === location.pathname);
    return <React.Fragment>

        <NavHeader currentPage={Page} />
        <header>
            <h1 className="header-1">{Page?.header}</h1>
            <p>{`Fighters that are Standing and Engaged with an enemy model may make close combat attacks against that model. Most often, this is done by performing a Fight (Basic) action – either on its own when the fighter is activated or for free as part of a Charge (Double) action – or by making Reaction attacks after an enemy fighter they are engaged with has resolved a Fight (Basic) action against them. Additionally, certain skills, gang tactics and the Mounted condition will also allow fighters to make a close combat attack outside of the normal sequence of the battle.\n\nWhenever a fighter makes a close combat attack against one or more enemy models using a weapon with the Melee or Sidearm trait(s), this sequence is followed:`}</p>
            <ol>
                <li>Turn to Face</li>
                <li>Choose Weapons</li>
                <li>Determine Attack Dice</li>
                <li>Declare Targets</li>
                <li>Make Hit Roll(s)</li>
                <li>Resolve Hits</li>
                <li>Reaction Attacks</li>
                <li>Consolidate or Coup De Grace</li>
            </ol>
            <div className="theme-admonition theme-admonition-info admonition_xJq3 alert alert--info">
                <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faCircleInfo} /></span>INFO</div>
                <h3 className="header-3">CHARGING PRONE OR OUT OF LINE OF SIGHT FIGHTERS</h3>
                <p>{`When a Prone and Pinned fighter is successfully charged they will automatically change their status to Standing and Engaged, however for the purposes of Reaction attacks they count as having turned to face the enemy.\n\nIf a fighter charges an enemy fighter they could not draw line of sight to then they must apply a -1 modifier to their hits when making their free Fight (Basic) action.`}</p>
            </div>
        </header>
        <h2 className="header-2">1. TURN TO FACE</h2>
        <p>{`The attacking fighter may turn to face any direction. Sometimes this will be essential, especially if they wish to attack an enemy that is Engaging them but that is not within their vision arc. However, doing so causes a -1 modifier to apply to the fighter’s Hit rolls. This modifier is cumulative with any others. For example, if a fighter that is Broken turns to face before making a Reaction attack, they will suffer a -3 modifier to their Hit rolls.`}</p>
        <h2 className="header-2">2. CHOOSE WEAPONS</h2>
        <p>{`The controlling player declares which weapons the fighter will use. A fighter can use up to two weapons with either the Melee or the Sidearm trait, but only one if it also has the Unwieldy trait. Alternatively, the fighter may make unarmed attacks.\n\nUnarmed Attacks: A fighter that is not armed with any weapons with either the Melee or Sidearm traits may still make close combat attacks, either as part of an action or as a reaction to an attack from an enemy fighter.\n\nAn unarmed attack uses the fighter’s unmodified Strength characteristic, has no AP and has a Damage of 1.`}</p>
        <h2 className="header-2">3. DETERMINE ATTACK DICE</h2>
        <p>{`The number of Attack dice rolled is equal to the fighter’s Attacks characteristic, plus the following modifiers:`}</p>
        <ul>
            <li>Dual Weapons with the Melee trait (+1)</li>
            <li>Charging (+1)</li>
        </ul>
        <p>{`If the fighter is attacking with more than one weapon, the Attack dice must be split as evenly as possible between the two weapons, ideally allocating an equal number of Attack dice to each weapon. Where this is not possible, for instance if the fighter has an odd number of Attacks to make, the controlling player may choose which weapon is allocated the extra Attack dice.\n\nPistols at Close Quarters: A weapon with the Sidearm trait can only have one Attack dice allocated to it. Any remaining Attack dice must be allocated to a weapon with the Melee trait. If a fighter has no other weapons with the Melee trait, any remaining Attack dice must be allocated to Unarmed attacks, as described previously.\n\nIf a fighter attacks with a weapon with the Sidearm trait in close combat, Accuracy modifiers do not apply – this is only used when making ranged attacks.`}</p>
        <div className="theme-admonition theme-admonition-info admonition_xJq3 alert alert--info">
            <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faCircleInfo} /></span>INFO</div>
            <h3 className="header-3">FIGHTING ACROSS BARRICADES</h3>
            <p>{`A fighter that is in base contact with an obstacle\n\nthat is less than 1" wide counts as being engaged with an enemy fighter if that enemy fighter is in base contact with the other side of the obstacle, even though the fighters themselves are not in base to base contact. Fighters armed with weapons with the Versatile trait can fight across wider obstacles if the enemy fighter is within the range of the weapon.`}</p>
        </div>
        <h2 className="header-2">4. DECLARE TARGETS</h2>
        <p>{`When a fighter makes a close combat attack, it must be against an eligible target. An eligible target is an enemy model that is within the vision arc of the fighter, and that the fighter is Engaging. If there is more than one eligible target, close combat attacks can be split between them as the player wishes.`}</p>
        <h2 className="header-2">5. MAKE HIT ROLL(S)</h2>
        <p>{`Each Attack dice is used to make a Hit roll. A Hit roll is a Weapon Skill test made against the WS of the attacking fighter. Roll separately for each different weapon being used by the fighter and/or for different targets.\n\nHit rolls may be modified by +1 for each assist froma friendly fighter also engaged with the target, or by -1 for each enemy fighter also Engaging the attacker.\n\nNote that BS is not used to make Hit rolls in close combat, even when a ranged weapon with the Sidearm trait is used. When making a Hit roll for a weapon with the Sidearm trait, a WS test is made, exactly as described above.\n\nRolls of a Natural 1: If, when making a close combat attack, the Hit roll is a natural 1, the attack automatically misses, regardless of any modifiers that may apply.`}</p>
        <h2 className="header-2">6. RESOLVE HITS</h2>
        <p>{`Each attack that scores a hit is resolved as described in Resolving Hits.`}</p>
        <h2 className="header-2">7. REACTION ATTACKS</h2>
        <p>{`If there are still enemies that are Standing and Engaged with the attacker, they may make Reaction attacks, following steps 1-6.`}</p>
        <h2 className="header-2">8. CONSOLIDATE OR COUP DE GRACE</h2>
        <p>{`If all enemy models the attacker was engaged with are now either Prone and Seriously Injured or Wrecked, the fighter may make a free Coup De Grace (Simple) action against one such enemy fighter.\n\nAlternatively, if all enemy models the attacker was engaged with are now Prone and Seriously Injured, have gone Out of Action or are Wrecked, the fighter may move up to 2" in any direction.`}</p>
        <NavFooter currentState={Page?.header} />
    </React.Fragment>;
};
