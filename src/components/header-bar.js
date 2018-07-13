import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './header-bar.css';
import Pokeball from './pokemonIcons/Pokeball';
import pokemonArr from './pokemonIcons/pokemonArr';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    let username;
    let buddyIcon = pokemonArr.map(item => {
      if (item.value === this.props.buddy){
        return item.icon;
      }
    });
    if (this.props.loggedIn) {
      logOutButton = (
        <button className="logout-btn btn-highlight" onClick={() => this.logOut()}>Log out</button>
      );
      username = <p className="username">{this.props.user.username}</p>;
    }

    return (
      <header className="main-header">
        <div className="logo-container">
          <h1 className="logo">Guessmon</h1>
          <Pokeball />
        </div>
        <div className="header-data">
          {logOutButton}
          {username}
          {buddyIcon}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  user : state.auth.currentUser,
  buddy : state.buddy.pokemon
});

export default connect(mapStateToProps)(HeaderBar);
