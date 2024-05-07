import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation } from "react-router-dom";
import { NavFooterCampaign } from "../../components/navFooterCampaign";
import { NavHeader } from "../../components/navheader";

import * as Pages from "../../staticData/campaignPages.json";
export const WarbandPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const currentPage = myPages.pages.find((route) => route.link === location.pathname);

    return <React.Fragment>
        <NavHeader currentPage={currentPage} />
        <header>
            <h1 className="header-1">{currentPage?.header}</h1>
            <p>All warbands in Mordheim created for a campaign, need to follow these restrictions:</p>
        </header>
        <div>
            <ul>
                <li>Each player gets <strong>500gc</strong> for creating an initial warband.</li>
                <li>Each model and their equipement cost a set of money.</li>
                <li>As you make your choice, substract the many you have spend from your total until you have bought all you can.</li>
                <li>Any unspent gold crowns are put into the warband‘s treasury and can be used later or hoarded to buy something more expensive.</li>
            </ul>
            <h2>Warband composition</h2>
            <p>For game purposes the warriors in your warband are classified as Heroes and Henchmen.</p>
            <div className="theme-admonition theme-admonition-danger admonition_xJq3 alert alert--danger">
                <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faFireFlameCurved} /></span>HOUSE RULE</div>
                <p>{`Starting warbands may not include more than 12 heroes. With every game, the size of your warband is increased by one, but can never exceed the maximum limit set in the warband definition.`}</p>
            </div>
            <h3 className="header-3">Heroes</h3>
            <p>These are exeptional individuals who have the potential to become legends. Heroes can be armed and equipped indiviually and may carry any special equipment they might pick up during the campaign.</p>
            <ul>
                <li>Every warband must have a leader.</li>
                <li>Your warband may include up to five other Heroes. A warband may never include more Heroes of a specific type than the number given in the warband list.</li>
            </ul>
            <div className="theme-admonition theme-admonition-danger admonition_xJq3 alert alert--danger">
                <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faFireFlameCurved} /></span>HOUSE RULE</div>
                <p>{`Each hero may purchase a single wound upon character creation. This extra wound costs an additional 20gc.`}</p>
            </div>
            <h3 className="header-3">Henchmen</h3>
            <p>Henchmen typically fall into two groups:</p>
            <ul>
                <li>There are Henchmen who gain experience and become better as time goes by.</li>
                <li>The other type of henchman are those too dimwitted or primitive to gain experience.</li>
            </ul>
        </div>
        <NavFooterCampaign currentState={currentPage?.header} />
    </React.Fragment>;
};
