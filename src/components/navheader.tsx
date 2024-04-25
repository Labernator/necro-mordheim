import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleRight } from "@fortawesome/free-solid-svg-icons";
export const NavHeader = ({currentState}: {currentState: string}) => {
    return <React.Fragment>
        <div className="theme-doc-breadcrumbs breadcrumbsContainer_Z_bl">
            <ul className="breadcrumbs" style={{  listStyleType:"none"}}>
                <li className="breadcrumbs__item">
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                    </Link>
                </li>
                <li className="breadcrumbs__item">
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </li>
                <li className="breadcrumbs__item">
                    {currentState}
                </li>
            </ul>
        </div>
    </React.Fragment>;
};