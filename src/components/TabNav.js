import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below
const Nav= props=>(
    <NavLink
    exact 
    {...props}
    activeClassName="active"/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

    const welcomeLabel = createLabel("home", "Home Page")
	const characterLabel = createLabel("users", "Characters")
	const locationLabel = createLabel("map", "Locations")
    const episodesLabel = createLabel("play", "Episodes")
    
    const panes = [
        { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
        { menuItem: <Menu.Item key='characters' as={Nav} to={`/characters`} content={characterLabel} /> },
        { menuItem: <Menu.Item key='locations' as={Nav} to={`/locations`} content={locationLabel} /> },
        { menuItem: <Menu.Item key='episodes' as={Nav} to={`/episodes`} content={episodesLabel} /> }
      ]
// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />
export default TabNav