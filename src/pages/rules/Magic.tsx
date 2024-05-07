import React from "react";

import { Link, useLocation } from "react-router-dom";
import * as Pages from "../../staticData/rulesPages.json";
import { NavFooter } from "../../components/navfooter";
import { NavHeader } from "../../components/navheader";
export const MagicPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const Page = myPages.pages.find((route) => route.link === location.pathname);
    return <React.Fragment>

        <NavHeader currentPage={Page} />
        <header>
            <h1 className="header-1">{Page?.header}</h1>
            <p>{`There have always been those who have used magic: witches and wizards, wise women and warlocks. But as all scholars know, all magic is dangerous, for it originates from Chaos, the source of corruption and change. Indeed, during these times, sorcery is illegal and punishable by death.\n\nWizards have little say in whether the world of magic touches them or not. They are born with second sight and to them the world of magical energies and spells is much more real than the mundane world of normal mortals. With all the persecution, fear and hatred it is little wonder that wizards become reclusive and suspicious, and many are downright insane. Some even turn to the worship of the dark gods, and others follow the forbidden path of necromancy.\n\nMordheim has become home to many magic users and they roam the ruins hiding from Witch Hunters. But there are other ways of gaining power over and above that of a normal mortal man. The gods watch over their subjects and a priest of strong faith can call upon them to assist him in battle. Of these, the Priests of Sigmar are the most common, for Sigmar is the patron god of the Empire, and his following is strong during these times of strife.`}</p>
        </header>
        <h2 className="header-2">Allocated spells</h2>
        <p>{`Each spell caster (both in the warbands and in the hired swords section) has an entry in his special rules section, where it states, which kind of magic it may use and how many spells he already knows.\n\nSelect a spell for each spell the spell caster knows from the start on the appropriate magic list chart.\n\nInstead of learning new skills, spellcasters may also learn new spells instead.`}</p>
        <h2 className="header-2">Casting spells</h2>
        <p>{`Spells are cast in the shooting phase, and can be used even if the caster is in hand-to-hand combat. To use a spell, the wizard must roll equal to or greater than the spell’s Difficulty score on 2D6. If he fails, he may not cast a spell that turn. If the test is passed the spell may be used as described overleaf. A wizard may cast one spell per turn and may not use missile weapons if he wants to cast a spell. He can however run! A wizard may not use magic if he is wearing armour or has a shield or buckler. The only exception is the Prayers of Sigmar. Sisters of Sigmar and Warrior- Priests may wear ar-mour and use their prayers.`}</p>
        <h2 className="header-2">Damage</h2>
        <p>{`Some spells cause direct damage, and are resolved as any other damage. See `}<Link to="/resolve-hits">Resolving Hits.</Link></p> <p>{`Models always receive armour saves against wounds caused by spells unless noted otherwise.`}</p>
        <NavFooter currentState={Page?.header} />
    </React.Fragment>;
};
