import React from "react";
import { ArticleEntry } from "../../components/article";
import { NavHeader } from "../../components/navheader";

import * as Pages from "../../staticData/rulesPages.json";
export const RulesPage = () => {
    const myPages = Pages;
    const Articles = myPages.pages.filter(page => page.link !== "/the-rules").map((page) => {
        return <ArticleEntry
            linkTarget={page.link}
            header={page.header}
        />
    });

    return <React.Fragment>
        <div>
        <NavHeader currentPage={{header: "Core Rules", link:"/the-rules", parent:"/"}}/>
        <header>
            <h1 className="header-1">Core Rules</h1>
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
