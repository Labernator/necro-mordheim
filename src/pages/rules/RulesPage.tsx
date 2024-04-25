import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHeader } from "../../components/navheader";
import * as Pages from "../../staticData/pages.json";
export const RulesPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname)?.header || "";
    const ArticleEntry = ({ linkTarget, header, text }: { linkTarget: string, header: string, text: string }) =>
        <article className="col col--6 margin-bottom--lg generatedIndexPage_vN6x">
            <Link to={linkTarget} className="card padding--lg cardContainer_fWXF">
                <h2 className="header-2">📄️ {header}</h2>
                <p>{text}</p>
            </Link>
        </article>
    const Articles = myPages.pages.filter((page) => page.header !== "The Rules").map((page) => {
        return <ArticleEntry
            linkTarget={page.link}
            header={page.header}
            text={page.text}
        />
    });

    return <React.Fragment>
        <div>
        <NavHeader currentState={PageHeader}/>
        <header>
            <h1 className="header-1">{PageHeader}</h1>
            <p>This section contains rules that allow players to fight out the bitter and vicious skirmishes that punctuate the daily lives of the gangs and groups in the underhive and out in the ash wastes. The Round sequence, activating models, attacking the enemy with ranged weapons or in combat, suffering and recovering from injuries, gangs or individual models losing their bottle and fleeing – all of these things are dealt with over the following pages.</p>
        </header>
        <article className="margin-top--lg">
            <section className="row list_eTzJ">
                {Articles}
            </section>
        </article>
        </div>
    </React.Fragment>;
};
