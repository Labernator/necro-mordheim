import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ActionPhasePage, ActionTypesPage, PriorityPhasePage, GameStructurePage, PreBattleSequencePage , RulesPage, FighterActionsPage, MovementPage, ShootingPage } from './pages/rules/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () =>
  <BrowserRouter>
    <div className="app-body main-wrapper mainWrapper_z2l0 docMainContainer_TBSr">
      <div className='container padding-top--md padding-bottom--lg'>
      <Routes>
        <Route path="/" Component={RulesPage} />
        <Route path="/the-rules" Component={RulesPage} />
        <Route path="/the-pre-battle-sequence" Component={PreBattleSequencePage} />
        <Route path="/game-structure" Component={GameStructurePage} />
        <Route path="/the-priority-phase" Component={PriorityPhasePage} />
        <Route path="/the-action-phase" Component={ActionPhasePage} />
        <Route path="/types-of-action" Component={ActionTypesPage} />
        <Route path="/fighter-actions" Component={FighterActionsPage} />
        <Route path="/movement" Component={MovementPage} />
        <Route path="/shooting" Component={ShootingPage} />
        <Route path="/close-combat" Component={ActionPhasePage} />
        <Route path="/resolve-hits" Component={ActionPhasePage} />
        <Route path="/the-end-phase" Component={ActionPhasePage} />
        <Route path="/the-post-battle-sequence" Component={ActionPhasePage} />
        <Route path="/gaining-experience" Component={ActionPhasePage} />
        <Route path="/magic" Component={ActionPhasePage} />
      </Routes>
      </div>
    </div>
  </BrowserRouter>;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
