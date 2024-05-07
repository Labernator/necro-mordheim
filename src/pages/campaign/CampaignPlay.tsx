import React from "react";
import { ArticleEntry } from "../../components/article";
import { NavHeader } from "../../components/navheader";

import * as Pages from "../../staticData/campaignPages.json";
export const CampaignPage = () => {
    const myPages = Pages;
    const Articles = myPages.pages.filter(page => page.link !== "/campaign-play").map((page) => {
        return <ArticleEntry
            linkTarget={page.link}
            header={page.header}
        />
    });

    return <React.Fragment>
        <NavHeader currentPage={{header: "Campaign Play", link:"/campaign-play", parent:"/"}} />
        <header>
            <h1 className="header-1">Campaign Play</h1>
            <p>Here you can find all resources that will help you to run a campaign (Mutiny in Marienburg)</p>
        </header>
        <article className="margin-top--lg">
            <section className="row list_eTzJ">
                {Articles}
            </section>
        </article>

    </React.Fragment>;
};
