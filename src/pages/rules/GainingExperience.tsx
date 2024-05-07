import React from "react";

import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/rulesPages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { NavFooter } from "../../components/navfooter";
import { NavHeader } from "../../components/navheader";
export const ExperiencePage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname);
    return <React.Fragment>

        <NavHeader currentPage={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader?.header}</h1>
            <p>{`During any battle, a fighter (including vehicle crew) can gain Experience (XP) in a number of ways. The standard ways in which Experience is gained are detailed here. Experience is also gained by completing scenario objectives – these will be detailed in the scenario. Players should note that, for the purposes of gaining Experience, vehicle crew are considered to be fighters.\n\nA model gains XP for any of the following actions:`}</p>
        </header>
        <ul>
            <li>{`1 XP if their action directly causes an enemy fighter to suffer one or more Serious Injuries.*`}</li>
            <li>{`2 XP if their action directly causes an enemy fighter to go Out of Action.*`}</li>
            <li>{`If the enemy fighter is a Leader or a Champion, gain an extra 1 XP.`}</li>
            <li>{`2 XP if they took part in a battle.`}</li>
            <li>{`1 XP if they are Broken and successfully rally.`}</li>
            <li>{`1 XP if they provide Assistance to another fighter making a Recovery test who becomes Prone and Pinned.`}</li>
        </ul>
        <p>{`* Note that fighters can only gain XP for Seriously Injuring or taking an enemy fighter Out of Action once per enemy fighter per activation. For instance, if a fighter causes an enemy fighter to suffer a Serious Injury, and then performs a Coup De Grace (Free) action, they would only gain the 2 XP for causing the enemy fighter to go Out of Action.`}</p>
        <div className="theme-admonition theme-admonition-danger admonition_xJq3 alert alert--danger">
            <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faFireFlameCurved} /></span>HOUSE RULE</div>
            <p>{`D3 XP for the MVP of each playing team. This is nominated by your opponent at the end of the match.`}</p>
        </div>
        <h2 className="header-2">ADVANCEMENTS</h2>

        <h3 className="header-3">Heroes</h3>
        <p>{`At the end of a battle, during the post-battle sequence, each player has the chance to purchase Advancements for any of their models by spending some or all of the XP that model has accrued. The XP cost of these Advancements is shown on the following tables. The model’s card is updated accordingly with the Advancement taken, the model’s XP is reduced by the amount spent to purchase the Advancement, the model’s total number of Advancements is increased by one (on the gang roster) and the model’s Cost is adjusted by the amount of credits shown, which will in turn increase the Gang Rating.\n\nThe more experienced a model is, the more certain Advancements cost to purchase in terms of XP. The cost of each characteristic Advancement for the same characteristic taken is increased by 2 XP for each instance after the first. For example, a Champion may increase their Initiative by 1 for 5 XP, but to increase it by 1 a second time will cost them 7 XP.`}</p>
        <table>
            <thead>
                <tr>
                    <th>Cost</th>
                    <th>Advancement Heroes</th>
                    <th>Cost Increase</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>4 xp</td>
                    <td>Improve the fighter's Leadership characteristic by 1.</td>
                    <td>+5 gc</td>
                </tr>
                <tr>
                    <td>5 xp</td>
                    <td>Improve the fighter's Initiative or Movement characteristic by 1.</td>
                    <td>+5 gc</td>
                </tr>
                <tr>
                    <td>6 xp</td>
                    <td>Improve the fighter's Weapon Skill or Ballistic Skill characteristic by 1.</td>
                    <td>+10 gc</td>
                </tr>
                <tr>
                    <td>6 xp</td>
                    <td>The fighter gains a random skill from one of their Skill lists.**</td>
                    <td>+10 gc</td>
                </tr>
                <tr>
                    <td>8 xp</td>
                    <td>Improve the fighter's Strength or Attacks characteristic by 1.</td>
                    <td>+15 gc</td>
                </tr>
                <tr>
                    <td>9 xp</td>
                    <td>Improve the fighter's Toughness characteristic by 1.</td>
                    <td>+20 gc</td>
                </tr>
                <tr>
                    <td>9 xp</td>
                    <td>The fighter gains a skill of your choice from one of their Skill lists.</td>
                    <td>+20 gc</td>
                </tr>
                <tr>
                    <td>10 xp</td>
                    <td>Improve the fighter's Wounds characteristic by 1.</td>
                    <td>+25 gc</td>
                </tr>
                <tr>
                    <td>15 xp</td>
                    <td>The fighter gains a skill of your choice from any Skill list.</td>
                    <td>+30 gc</td>
                </tr>
            </tbody>
        </table>
        <p>{`** Note: First you select a skill list. Then you randomize on that list.`}</p>
        <h3 className="header-3">Henchmen</h3>
        <p>{`Whilst Heroes are central to a warbands narrative, henchmen are its 'supporting cast'. As such, they spend Experience and gain Advancements in a simplified manner.\n\nIf during the post-battle sequence a henchman has 6 XP or more, the controlling player must roll 2D6 on the table below, and then update the henchmans Fighter card and their Cost accordingly, before finally reducing their XP by 6.`}</p>
        <table>
            <thead>
                <tr>
                    <th>2D6</th>
                    <th>Advancement Henchman</th>
                    <th>Cost Increase</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2 - 4</td>
                    <td>Improve the fighter's Initiative characteristic by 1.</td>
                    <td>+5 gc</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Improve the fighter's Strength characteristic by 1.</td>
                    <td>+15 gc</td>
                </tr>
                <tr>
                    <td>6 - 7</td>
                    <td>Improve the fighter's Weapon Skill or Ballistic Skill characteristic by 1.</td>
                    <td>+10 gc</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Improve the fighter's Attack characteristic by 1.</td>
                    <td>+15 gc</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Improve the fighter's Leadership characteristic by 1.</td>
                    <td>+5 gc</td>
                </tr>
                <tr>
                    <td>10 - 12</td>
                    <td>If you already have the maximum number of Heroes, roll again. The new Hero remains the same Henchman type (eg, a Ghoul stays as a Ghoul) and starts with the same experience the Henchman had, with all his characteristic increases intact. You may choose two skill lists available to Heroes in your warband. These are the skill types your new Hero can choose from when he gains new skills. In this case the henchman XP is not reduced by 6!</td>
                    <td>+20 gc</td>
                </tr>
            </tbody>
        </table>
        <NavFooter currentState={PageHeader?.header} />
    </React.Fragment>;
};
