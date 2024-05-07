import React from "react";

import { Link, useLocation } from "react-router-dom";
import * as Pages from "../../staticData/campaignPages.json";
import { NavHeader } from "../../components/navheader";
import { NavFooterCampaign } from "../../components/navFooterCampaign";
export const WeatherPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const currentPage = myPages.pages.find((route) => route.link === location.pathname);

    return <React.Fragment>

        <NavHeader currentPage={currentPage} />
        <header>
            <h1 className="header-1">{currentPage?.header}</h1>

        </header>
        <header>
            <h2 className="header-2">SEASONS</h2>
            <p>The campaign is played over a year, with each gap of 10 CP portraying three months.<br />The Campaign starts in Spring, then follows through the seasons below. When one player hits 11 CP, the season changes to Summer, then at 21 CP it flow into Autumn and then Winter follows for the final ten, from 31 to 40.</p>
            <p>Before every game, roll a dice on the appropriate table below, depending on the current season. Apply the appropriate Weather to your scenario.</p>
        </header>
        <h3 className="header-3">0 to 10 CP - HerensTag to Pflugzeit</h3>
        <p><strong>Mitterfruhl:</strong> the season of new life, produce and animal life is plentiful. Any time healing herbs or any type of herb is discovered or purchased, D3 more units are found/available.</p>
        <h3 className="header-3">11 to 20 CP - Sigmarzeit to Vorgeheim</h3>
        <p><strong>Sonstill:</strong> Summer is the main trading season of Marienburg, where ships from all over the world dock to sell their wares. <br />Rarity rolls are +1 during the summer.</p>
        <h3 className="header-3">21 to 30 CP - Nachgeheim to Brauzeit</h3>
        <p><strong>Mittherbst:</strong> the Beer is brewed in Autumn and the chilling months make it the perfect time to drink it aswell. Any time any type of alcohol is discovered or purchased, D3 more units are found/available.</p>
        <h3 className="header-3">31 to 40 CP - Kaldezeit to Vorheren</h3>
        <p><strong>Mondstill:</strong> the waters, while not frozen are extremely cold!<br />All tests made in water are at +1 and all combat in water is at an additional -1 to hit. Cold Blooded Creatures ignore the cold blooded rule whilst in water.</p>

        <table>
            <thead>
                <tr>
                    <th>D6</th>
                    <th>Spring</th>
                    <th>Fall</th>
                    <th>Autumn</th>
                    <th>Winter</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ textAlign: "center" }}>2 - 3</td>
                    <td>Fog</td>
                    <td>Monsoon</td>
                    <td>Thunder and Lightning</td>
                    <td>Fog</td>
                </tr>
                <tr>
                    <td style={{ textAlign: "center" }}>4 - 5</td>
                    <td>Rain</td>
                    <td>Hail</td>
                    <td>Dry</td>
                    <td>Severe Wind</td>
                </tr>
                <tr>
                    <td style={{ textAlign: "center" }}>6 - 8</td>
                    <td colSpan={4} style={{ textAlign: "center" }}><strong>Fine weather</strong></td>
                </tr>
                <tr>
                    <td style={{ textAlign: "center" }}>9 - 10</td>
                    <td>Monsoon</td>
                    <td>Heat Wave</td>
                    <td>Fog</td>
                    <td>Blizzard</td>
                </tr>
                <tr>
                    <td style={{ textAlign: "center" }}>11 - 12</td>
                    <td>Hail</td>
                    <td>Thunder and Lighning</td>
                    <td>Severe Wind</td>
                    <td>Bitter Cold</td>
                </tr>
            </tbody>
        </table>
        <header>
            <h2 className="header-2">Weather</h2>
            <p>Some weather conditions only last a couple of turns starting on the begin of the battle. See in the brackets.</p>
            <h3 className="header-3">Bitter cold</h3>
            <p>Norse, Beastmen and Marauders of Chaos are not affected by these rules.</p>
            <h4><strong>Special Rules</strong></h4>
            <p><strong>Bitter Winds:</strong><br />When targeting a model that has no other models or terrain (larger than 1") in a 6" radius around it, roll a D6. On a 3+, continue as normal. Otherwise, the shot/spell fails.</p>
            <p><strong>Wintery chill:</strong><br />Every model without winter furs suffers -1 LD and -1 Initiative (to a min. of 1). Undead creatures are not affected</p>

            <h3 className="header-3">Blizzard</h3>
            <h4><strong>Special Rules</strong></h4>
            <p><strong>Bad Sight:</strong><br />Every model reduces its sight to 10". With it, max. range for missile weapons and charges is therefore also reduced to 10". Note that the <strong>Eagle Eyes</strong> skill cannot be used to increase sight in a blizzard.</p>
            <h3 className="header-3">Dry</h3>
            <h4><strong>Special Rules</strong></h4>
            <p><strong>Dry ground:</strong><br />All models add +1 to their Initiative when climbing or avoiding to fall.</p>
            <h3 className="header-3">Fog</h3>
            <h4><strong>Special Rules</strong></h4>
            <p>Roll a D6:</p>
            <ul>
                <li><strong>1 Haze:</strong> Max. range for all missile weapons is reduced to 18" following the same rules as described in <strong>Bad Sight</strong> under Blizzard.</li>
                <li><strong>2-5 Thick mist:</strong> Sight is reduced to 12". In addition, every model suffers -1 BS</li>
                <li><strong>6 Pea soup:</strong> Every model suffers -2 BS and the maximum sight becomes 2D6". Any model unable to see a friendly model is suffering the effects of <strong>All Alone</strong> and immediately must take a Leadership test.</li>
            </ul>
            <h3 className="header-3">Hail (D3 + 1 turns)</h3>
            <h4><strong>Special Rules</strong></h4>
            <p><strong>Freezing hail:</strong><br />Any model that is not standing below any cover suffers -1 to hit in combat and -1 BS. Magic users get -1 to all Difficulty tests.</p>
            <p><strong>Skull sized hail:</strong><br />At the beginning of turn, roll a D6. On a 6+, all models not in cover suffer a Strength 1 hit. Additionally all effects of <strong>Freezing Hail</strong> come into effect but at -2 instead of -1.</p>
            <h3 className="header-3">Heat Wave</h3>
            <h4><strong>Special Rules</strong></h4>
            <p><strong>Sweltering Heat:</strong><br />All models have their movement reduced by 1 until the weather changes (except for Undead creatures). After rolling on the fire table, roll a D6 for every other building within 6" and set it on fire on a 4+.</p>
            <h3 className="header-3">Monsoon (D3 + 2 turns)</h3>
            <h3 className="header-3">Rain (D3 turns)</h3>
            <h4><strong>Special Rules</strong></h4>
            <p><strong>Wet:</strong><br />All missile and powder weapons are at -1 to hit. Powder weapons need to roll a 4+ on a D6 or they cannot fire this turn.</p>
            <h3 className="header-3">Severe Wind</h3>
            <h4><strong>Special Rules</strong></h4>
            <p><strong>Not all casts land on their feet:</strong>Climbing, Jumping Charges and leaping suffers -1 Initiative.</p>
            <p><strong>Blown out:</strong>Roll a D6, when firing a missile weapon (not powder):</p>
            <ul>
                <li><strong>1-3:</strong> -1 BS when shooting</li>
                <li><strong>4+:</strong> +D6" range upon shooting</li>
            </ul>
            <p><strong>Blaze Spreading:</strong> After rolling on the fire table, roll a D6 for every other building within 6" and set it on fire on a 4+.</p>
            <h3 className="header-3">Thunder and Lightning</h3>
            <h4><strong>Special Rules</strong></h4>
            <p>Roll 3D6 at the beginning of every turn.</p>
            <table>
            <thead>
                <tr>
                    <th>3D6</th>
                    <th>Result</th>
                    <th>Effect</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ textAlign: "center" }}>1-11</td>
                    <td>Nothing happens</td>
                    <td>Really nothing...</td>
                </tr>
                <tr>
                    <td style={{ textAlign: "center" }}>12-15</td>
                    <td>Thunder</td>
                    <td>All animals must pass a leadership test (against their own LD, not the leaders). If failed, it may not move or charge this turn, requires 6+ to hit in combat and strikes last.</td>
                </tr>
                <tr>
                    <td style={{ textAlign: "center" }}>16-17</td>
                    <td>Lightning</td>
                    <td>A random tree/building is set on fire. See <Link to="/campaign-play/fire">Fire</Link></td>
                </tr>
                <tr>
                    <td style={{ textAlign: "center" }}>18</td>
                    <td>It must be fate</td>
                    <td>Determine a random warriors wearing a suit of armour (not Lamellar, toughened leather, helmet or shield) who is not in cover. The warrior is struck by lightning and is immediately out of action. All other models within 2" are pinned and prone and suffer a Strength 4 hit ignoring armour saves. When rolled again, the lightning will hit the identical spot even if there is no model standing there anymore. </td>
                </tr>
            </tbody>
        </table>
        </header>
        <NavFooterCampaign currentState={currentPage?.header} />
    </React.Fragment>;
};
