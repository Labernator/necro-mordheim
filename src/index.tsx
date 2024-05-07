import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ActionPhasePage, ActionTypesPage, CampaignPage, CloseCombatPage, EndPhasePage, ExperiencePage, FighterActionsPage, GameStructurePage, LandingPage, MagicPage, MovementPage, PostBattleSequencePage, PreBattleSequencePage, PriorityPhasePage, ResolveHitsPage, RulesPage, ShootingPage, TerrainPage, WarbandPage, WeatherPage } from './pages/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () =>
  <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
    <div className="app-body main-wrapper mainWrapper_z2l0 docMainContainer_TBSr">
      <div className='container padding-top--md padding-bottom--lg'>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/the-rules" Component={RulesPage} />
        <Route path="/the-rules/the-pre-battle-sequence" Component={PreBattleSequencePage} />
        <Route path="/the-rules/game-structure" Component={GameStructurePage} />
        <Route path="/the-rules/the-priority-phase" Component={PriorityPhasePage} />
        <Route path="/the-rules/the-action-phase" Component={ActionPhasePage} />
        <Route path="/the-rules/types-of-action" Component={ActionTypesPage} />
        <Route path="/the-rules/fighter-actions" Component={FighterActionsPage} />
        <Route path="/the-rules/movement" Component={MovementPage} />
        <Route path="/the-rules/terrain" Component={TerrainPage} />
        <Route path="/the-rules/shooting" Component={ShootingPage} />
        <Route path="/the-rules/close-combat" Component={CloseCombatPage} />
        <Route path="/the-rules/resolve-hits" Component={ResolveHitsPage} />
        <Route path="/the-rules/the-end-phase" Component={EndPhasePage} />
        <Route path="/the-rules/the-post-battle-sequence" Component={PostBattleSequencePage} />
        <Route path="/the-rules/gaining-experience" Component={ExperiencePage} />
        <Route path="/the-rules/magic" Component={MagicPage} />
        <Route path="/campaign-play/warband-creation" Component={WarbandPage} />
        <Route path="/campaign-play" Component={CampaignPage} />
        <Route path="/campaign-play/campaign-weather" Component={WeatherPage} />
      </Routes>
      </div>
    </div>
  </BrowserRouter>;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
