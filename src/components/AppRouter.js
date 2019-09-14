import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
import LocationList from './LocationsList';
import EpisodeList from './EpisodeList';


export default function  Router() {
return (
    <div className='page-view ui botton segment active tab'>
        <Switch>
            <Route path='/characters' component={CharacterList} />
            <Route path='/episodes' component={EpisodeList} />
            <Route path='/locations' component={LocationList} />
            <Route component={WelcomePage} />
        </Switch>
    </div>
)
}