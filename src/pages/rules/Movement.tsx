import React from "react";
import { NavHeader } from "../../components/navheader";
import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/pages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
export const MovementPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname)?.header || "";
    return <React.Fragment>

        <NavHeader currentState={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader}</h1>
            <p>{`During the Action phase, a number of actions allow a model to move in different ways, as detailed previously. Sometimes, a model may even be moved involuntarily as a result of an enemy attack or an in-game effect. This section deals with how models are moved around the tabletop and how terrain can hinder their progress.`}</p>
        </header>
        <h2 className="header-2">Moving Models</h2>
        <p>{`All models, be they fighters or vehicles, move by performing actions. For example, a fighter might perform a Move (Simple) action to advance cautiously, or may perform two Move (Simple) actions in quick succession to run forward and cover a lot more ground. A fighter might Charge (Double) to get into combat, or Crawl (Double) to get out of the firing line.\n\nA model is not obliged to move its full Movement allowance, it can move any distance up to its Movement allowance, but it cannot move further. A fighter need not move in a straight line, vehicles however are more restricted; a fighter can zigzag around terrain as appropriate (though note that a Charge (Double) action should take the shortest route possible), whereas a vehicle can make a number of turns based upon the action being performed. After moving, a fighter can turn to face any direction, whereas a vehicle’s facing will be determined by the action it performed.\n\nAll actions that include movement must be declared before any measuring is carried out. Sometimes, after a model’s declared movement is measured, it may become obvious that it does not have as much movement as hoped and will end its movement short of where the controlling player had planned. In this case, move the model as far as possible in the desired direction, and try to make good use of any available cover!\n\nNote that, in the case of a fighter performing a Charge (Double) action, if the fighter has insufficient movement to make it into base to base contact with an enemy fighter, they must still move the full distance (stopping 1" away, as follows) and may often end their movement in a very dangerous position!`}</p>
        <div className="theme-admonition theme-admonition-tip admonition_xJq3 alert alert--success">
            <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faLightbulb} /></span>Useful House Rule</div>
            <p>{`Fighters can move (voluntarily) through friendly fighters (if having sufficient movement to not overlap any bases).`}</p>
        </div>
        <h2 className="header-2">THE 1" RULE</h2>
        <p>{`Fighters cannot move to within 1" of an enemy fighter during their activation, unless that enemy fighter is Prone and Seriously Injured. Vehicles suffer no such restriction and can move to within 1" of any enemy model during their activation, as described on the opposite page.\n\nThe only exception to this rule is when a Standing and Active fighter performs a Charge (Double) action, in which case they may move to within 1" of one or more enemy fighters, provided that they end their movement in base to base contact with one or more enemy fighters. If a fighter performing a Charge (Double) action has sufficient movement to get within 1" of an enemy fighter but does not have sufficient movement to make it into base to base contact with the enemy fighter, they must stop moving 1" away.\n\nIt may occur that a fighter is moved involuntarily to within 1" of an enemy model. For example, a fighter with the Hurl skill may throw an enemy fighter that they are engaged with, which may result in that fighter coming into contact with other fighters, friendly or enemy. Should this happen, the normal rules described previously are temporarily suspended until the movement and any other effects it causes have been fully resolved (such as in the previous Hurl example, in which case the fighters would suffer hits as a result of being thrown into contact with one another). Once they have been, move the model that was involuntarily moved by the shortest route possible until it is 1" away from the enemy model.`}</p>
        <h2 className="header-2">DIRECTLY TOWARDS & DIRECTLY AWAY FROM</h2>
        <p>{`Sometimes, the rules will say that a model needs to move directly towards another model. To do this, trace an imaginary straight line that crosses through the centre of each model – the moving model then moves towards the other along this line the required distance. Similarly, to move directly away from another model, follow the same method but move the moving model away.\n\nAs always, this cannot make a model move through a solid terrain feature. Should a model contact a solid terrain feature, it stops and does not move further`}</p>
    </React.Fragment>;
};
