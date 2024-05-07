import React from "react";
import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/rulesPages.json";
import { FleshWoundPic, OutofActionPic, SeriousInjuryPic } from "../../staticData";
import { NavFooter } from "../../components/navfooter";
import { NavHeader } from "../../components/navheader";
export const ResolveHitsPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname);
    return <React.Fragment>

        <NavHeader currentPage={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader?.header}</h1>
            <p>{`Whenever a successful Hit roll is made against a model, there is a good chance that hit will cause that model to suffer a degree of damage. Determining how badly damaged a model is and what the effects of that damage are differs between fighters.`}</p>
        </header>
        <h2 className="header-2">RESOLVING HITS AGAINST FIGHTERS</h2>
        <p>{`When a fighter suffers a Hit, follow this sequence:`}</p>
        <ol>
                <li>Make Wound Roll</li>
                <li>Make a Save Roll</li>
                <li>Inflict Damage</li>
        </ol>
        <h2 className="header-2">1. MAKE WOUND ROLL</h2>
        <p>{`Whenever a Wound roll is made against a fighter, it is always the opposing player that makes it. Cross reference the weapon’s Strength with the hit fighter’s Toughness and roll a D6 on the table below to determine if the fighter is wounded by the attack:`}</p>
        <table>
            <thead>
                <tr>
                    <th>Strength vs Toughness</th>
                    <th>D6 Roll Required</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Is the Strength <strong>2 points GREATER</strong> than the Toughness?
                    </td>
                    <td>2+</td>
                </tr>
                <tr>
                    <td>
                        Is the Strength <strong>GREATER</strong> than the Toughness?
                    </td>
                    <td>3+</td>
                </tr>
                <tr>
                    <td>
                        Is the Strength <strong>EQUAL</strong> to the Toughness?
                    </td>
                    <td>4+</td>
                </tr>
                <tr>
                    <td>
                        Is the Strength <strong>LOWER</strong> than the Toughness?
                    </td>
                    <td>5+</td>
                </tr>
                <tr>
                    <td>
                        Is the Strength <strong>2 points LOWER</strong>than the Toughness?
                    </td>
                    <td>6+</td>
                </tr>
            </tbody>
        </table>
        <h2 className="header-2">2. MAKE A SAVE ROLL</h2>
        <p>{`If a hit results in a successful Wound roll, or leads to an Injury roll being made against the fighter for any reason, the fighter may be able to make a Save roll.\n\nOnly one Save roll may be made for each hit that successfully wounds, or leads to an Injury roll being made, regardless of how many different Save rolls a fighter may have. For example, if a fighter wears both mesh armour and a refractor field, they may only attempt a Save roll against a successful Wound roll with one of those items.\n\nSave rolls are made either:`}</p>
        <ul>
                <li>After the Wound roll is made but before the Wound is removed from the fighter, in which case the Wound is ‘saved’ and not removed.</li>
                <li>If the attack has a Damage ‘-’ characteristic and causes an Injury dice to be rolled against the fighter for any reason, a Save roll is made before any Injury dice are rolled.</li>
        </ul>
        <h2 className="header-2">3. INFLICT DAMAGE</h2>
        <p>{`If a successful Wound roll is not saved, damage is inflicted as follows:`}</p>
        <ol>
                <li>Each successful wound roll that is not saved removes one Wound from a fighter.</li>
                <li>When a fighter is reduced to 0 Wounds by Damage from an attack, immediately roll one Injury dice and apply the result to the fighter (as follows).</li>
        </ol>
        <img alt="Out of Action" className="img_ev3q" style={{paddingRight: "1em"}} src={OutofActionPic}/>
        <img alt="Serious Injury" className="img_ev3q" style={{paddingRight: "1em"}} src={SeriousInjuryPic}/>
        <img alt="Flesh Wound" className="img_ev3q" style={{paddingRight: "1em"}} src={FleshWoundPic}/>
        <p>{`When any number of Injury dice are rolled against a fighter for any reason, apply the results of each individual dice against that fighter as follows:\n\nOut of Action: The fighter succumbs to their injuries and is immediately removed from play and will take no further part in this battle.\n\nSerious Injury: If a Standing or Prone and Pinned fighter suffers a Serious Injury result, they become Prone and Seriously Injured. If they suffer more than 1 Serious Injury result, each additional result after the first causes them to suffer a Flesh Wound. If this injury was inflicted in close combat, the fighter may be vulnerable to a Coup De Grace (Simple) action.\n\nShould a Prone and Seriously Injured fighter suffer one or more Serious Injury results, they suffer an additional Flesh Wound for each.\n\nFlesh Wound: The fighter suffers a Flesh Wound, reducing their Toughness characteristic by 1. If a fighter is reduced to Toughness 0, they go Out of Action.`}</p>
        <h3 className="header-3">Lasting Injuries</h3>
        <p>{`Whenever a fighter goes Out of Action, the opposing player immediately rolls two D6, one after the other (a D66 roll) and looks up the result on the Lasting Injuries table (see opposite). During Campaign play, the result is applied against the fighter and a note of the Lasting Injury made on the Warband Roster.\n\nWhen a fighter goes Out of Action, only make one Lasting Injury roll, regardless of the number of Out of Action dice.`}</p>
        <h4 className="header-4">GOING INTO CONVALESCENCE</h4>
        <p>{`Some results will cause a fighter to go into Convalescence. During Campaign play, this means that the fighter cannot perform any post-battle actions. However, they will be available to fight in the warband's next battle.`}</p>
        <h4 className="header-4">Lasting Injuries</h4>
        <table>
            <thead>
                <tr>
                    <th>D66</th>
                    <th>Lasting Injury</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11</td>
                    <td><strong>Lesson Learned:</strong> The fighter goes into Convalescence but gains D3 Experience.</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td><strong>Impressive Scars:</strong> The fighters Leadership is increased by 1. This bonus only applies once, treat all further results as Out Cold.</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td><strong>Horrid Scars:</strong> The fighter gains the <strong>Fearsome</strong> skill. This bonus only applies once, treat all further results as Out Cold.</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td><strong>Bitter Enemy:</strong> The fighter gains the <strong>Hatred</strong> skill against the entire enemy warband that put him out of action. This bonus only applies once, treat all further results as Out Cold.</td>
                </tr>
                <tr>
                    <td>15-26</td>
                    <td><strong>Out Cold:</strong> The fighter misses the rest of the battle, but avoids any long term injuries. The fighter recovers in time to perform post-battle actions.</td>
                </tr>
                <tr>
                    <td>31-36</td>
                    <td><strong>Convalescence:</strong> The fighter goes into Convalescence.</td>
                </tr>
                <tr>
                    <td>41</td>
                    <td><strong>Old Battle Wound:</strong> At the end of each battle this fighter participates in roll a D6, on a 1 the fighter goes into Convalescence.</td>
                </tr>
                <tr>
                    <td>42</td>
                    <td><strong>Partially Deafened:</strong> The fighter suffers no penalty if they are partially deafened, however, suffering this injury again reduces their Leadership by 1.</td>
                </tr>
                <tr>
                    <td>43</td>
                    <td><strong>Humiliated:</strong> The fighter goes into Convalescence and their Leadership characteristic is decreased by 1.</td>
                </tr>
                <tr>
                    <td>44</td>
                    <td><strong>Eye Injury:</strong> The fighter goes into Convalescence and their Ballistic Skill characteristic is decreased by 1.</td>
                </tr>
                <tr>
                    <td>45</td>
                    <td><strong>Hand Injury:</strong> The fighter goes into Convalescence and their Weapon Skill characteristic is decreased by 1.</td>
                </tr>
                <tr>
                    <td>46</td>
                    <td><strong>Hobbled:</strong> The fighter goes into Convalescence and their Movement characteristic is decreased by 1.</td>
                </tr>
                <tr>
                    <td>51</td>
                    <td><strong>Spinal Injury:</strong> The fighter goes into Convalescence and their Strength characteristic is decreased by 1.</td>
                </tr>
                <tr>
                    <td>52</td>
                    <td><strong>Enfeebled:</strong> The fighter goes into Convalescence and their Toughness characteristic is decreased by 1.</td>
                </tr>
                <tr>
                    <td>53</td>
                    <td><strong>Head Injury:</strong> The fighter goes into Convalescence and their Initiative characteristic is decreased by 1.</td>
                </tr>
                <tr>
                    <td>54</td>
                    <td><strong>Multiple Injuries:</strong> The fighter is not dead but has suffered many serious wounds. Roll a further D3 times on this table re-rolling any results of Captured, Multiple Injuries, Memorable Death, Sold to the Pits or Out Cold.</td>
                </tr>
                <tr>
                    <td>55-56</td>
                    <td><strong>Captured:</strong> The fighter might be Captured.</td>
                </tr>
                <tr>
                    <td>61</td>
                    <td><strong>Sold to the Pits:</strong> The fighter might be Captured.</td>
                </tr>
                <tr>
                    <td>62</td>
                    <td><strong>Robbed:</strong> The fighter manages to escape, but all his weapons, armour and equipment are lost.</td>
                </tr>
                <tr>
                    <td>63-64</td>
                    <td><strong>Hardened:</strong> The warrior from now on is <strong>Immune to Fear</strong>.</td>
                </tr>
                <tr>
                    <td>65</td>
                    <td><strong>Deep Wound:</strong> The warrior has suffered a serious wound and must miss the next game while he is recovering. He may do nothing at all while recovering.</td>
                </tr>
                <tr>
                    <td>66</td>
                    <td><strong>Memorable Death:</strong> The fighter is killed instantly. If the injury was caused by an Attack action, the attacker gains 1 additional XP.</td>
                </tr>
            </tbody>
        </table>


        <NavFooter currentState={PageHeader?.header} />


    </React.Fragment>;
};
