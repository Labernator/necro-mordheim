import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import * as Pages from "../staticData/rulesPages.json";
export const NavFooter = ({currentState}: {currentState: string | undefined}) => {
    const myPages = Pages;
    const pageNumber = myPages.pages.findIndex((route) => route.header === currentState);
    const previousPage = pageNumber > 2 ? <Link to={myPages.pages[pageNumber - 1].link}>{myPages.pages[pageNumber - 1].header}</Link> : <Link to="/the-rules"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link>;
    const nextPage = pageNumber < myPages.pages.length - 1 ? <Link to={myPages.pages[pageNumber + 1].link}>{myPages.pages[pageNumber + 1].header}</Link> : <Link to="/the-rules"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link>;
    return <React.Fragment>
        <div className="theme-doc-breadcrumbs breadcrumbsContainer_Z_bl">
            <ul className="breadcrumbs" style={{  listStyleType:"none"}}>
                <li className="breadcrumbs__item">
                    {previousPage}
                </li>
                <li className="breadcrumbs__item">
                    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                </li>
                <li className="breadcrumbs__item">
                    {currentState}
                </li>
                <li className="breadcrumbs__item">
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </li>
                <li className="breadcrumbs__item">
                    {nextPage}
                </li>
            </ul>
        </div>
    </React.Fragment>;
};