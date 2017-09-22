import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Shelf from './components/Shelf/Shelf';
import AddInventory from './components/Shelf/AddInventory/AddInventory';
import Bin from './components/Shelf/Bin/Bin';

export default (
    <Switch>
        <Route component={ Landing } path='/shelfie/' exact />
        <Route component={ Shelf } path='/shelfie/:shelf' exact/>
        <Route component={ Bin } path='/shelfie/:shelf/:id' />
        <Route component={ AddInventory } path='/shelfie/create' />
    </Switch>
)