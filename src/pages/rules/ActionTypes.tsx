import React from "react";
import { NavHeader } from "../../components/navheader";
import { useLocation } from "react-router-dom";
import * as Pages from "../../staticData/pages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
export const ActionTypesPage = () => {
    const location = useLocation();
    const myPages = Pages;
    const PageHeader = myPages.pages.find((route) => route.link === location.pathname)?.header || "";
    return <React.Fragment>

        <NavHeader currentState={PageHeader} />
        <header>
            <h1 className="header-1">{PageHeader}</h1>
            <p>{`The following section covers the types of actions models can perform when activated. The actions available to a model differ depending on whether it is a fighter or a vehicle.\n\nPlayers should take note that whilst the actions a model can perform are based upon their current Status and Secondary Status, performing an action can and will, in many cases, change either their Status, their Secondary Status, or both.\n\nThere are four types of action a model may perform when activated:`}</p>
        </header>
        <h2 className="header-2">Simple Action</h2>
        <p>{`A model can perform the same Simple action more than once during its activation. Each time a Simple action is repeated during an activation, it uses up one action. For example, a Standing and Active fighter may perform two Move (Simple) actions, using both of their actions but allowing them to move twice. If an active model’s first action is a Simple action, it may fully resolve it before declaring its second action.`}</p>
        <div className="theme-admonition theme-admonition-info admonition_xJq3 alert alert--info">
            <div className="admonitionHeading_Gvgb"><span className="admonitionIcon_Rf37"><FontAwesomeIcon icon={faCircleInfo} /></span>INFO</div>
            <h3 className="header-3">CHANGING FACING</h3>
            <p>{`Fighters can change their facing during their activation, representing them turning in place, or turning their head from side to side. When a Standing fighter is activated, they may turn to face any direction their controlling player wishes, before making either of their actions. Changing facing in this way does not count as moving, and therefore can be combined with any other action.\n\nPlayers should note, however, that a fighter that changes their facing when Standing and Engaged will normally suffer negative modifiers to any Hit rolls they make. This represents the fighter turning quickly to confront an attacker.\n\nProne fighters, as has been mentioned previously, have no facing. When they stand up, the controlling player can choose in which direction they face.`}</p>
        </div>
        <h2 className="header-2">BASIC ACTIONS</h2>
        <p>{`A Basic action can only be performed once per model activation. If an activated model’s first action is a Basic action, it may fully resolve it before declaring its second action.`}</p>
        <h2 className="header-2">DOUBLE ACTIONS</h2>
        <p>{`Performing a Double action counts as making two actions. For example, if a Mobile vehicle makes a Ram(Double) action, it will have used both of its actions and cannot perform another during this activation. If a model can only perform one action during its activation for any reason, it may not perform a Double action.`}</p>
        <h2 className="header-2">FREE ACTIONS</h2>
        <p>{`Performing a Free action does not count as using one of your actions. Each Free action can only be performed once per activation. A model may not perform a Free action with the same name as a Basic action that they have performed this activation and vice versa.`}</p>
        <h2 className="header-2">CHANGING ACTION TYPE</h2>
        <p>{`Some effects may change an action’s type; for example, the Unwieldy trait changes the Shoot (Basic) action to a Shoot (Double) action. Unless stated otherwise, any effect that applies to an action applies regardless of the action type (i.e., if a gang tactic is triggered by a Shoot (Basic) action it will also be triggered by a Shoot (Double) or a Shoot (Simple) action).`}</p>
    </React.Fragment>;
};
