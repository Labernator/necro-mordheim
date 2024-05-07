import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IPageInfo } from "../staticData";
import * as RulesPages from "../staticData/rulesPages.json";
import * as CampaignPages from "../staticData/campaignPages.json";
export const NavHeader = ({currentPage}: {currentPage: IPageInfo | undefined}) => {

    const myRulesPages = RulesPages;
    const myCampaignPages = CampaignPages;
    const myPages = myRulesPages.pages.concat(myCampaignPages.pages);
    const parentPath = currentPage?.parent;
    const parentPage = myPages.find((page) => page.link === parentPath)
    return <React.Fragment>
        <div className="theme-doc-breadcrumbs breadcrumbsContainer_Z_bl">
            <ul className="breadcrumbs" style={{  listStyleType:"none"}}>
                <li className="breadcrumbs__item">
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                    </Link>
                </li>
                {currentPage?.parent !== "/" ? <React.Fragment>
                <li className="breadcrumbs__item">
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </li>

                <li className="breadcrumbs__item">
                    <Link to={currentPage?.parent || ""}>
                        {parentPage?.header}
                    </Link>
                </li>
                </React.Fragment> : undefined}
                <li className="breadcrumbs__item">
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </li>
                <li className="breadcrumbs__item">
                    {currentPage?.header}
                </li>
            </ul>
        </div>
    </React.Fragment>;
};