import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Shelf from './components/Shelf/Shelf';
import AddInventory from './components/Shelf/AddInventory/AddInventory';
import Bin from './components/Shelf/Bin/Bin';

export default (
    <Switch>
        <Route component={ App } path='/' exact />
        <Route component={ Shelf } path='/bins/:id' />
        <Route component={ Bin } path='/bin/:id' />
        <Route component={ AddInventory } path='/create/:id' />
    </Switch>
)