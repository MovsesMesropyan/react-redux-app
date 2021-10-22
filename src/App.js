import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPosts, getUsers } from './store/actions';
import Navigation from './components/Navigation/Navigation';
import Posts from './containers/Posts/Posts';
import Users from './containers/Users/Users';
import Loader from './components/UI/Loader/Loader';

const App = ({ loading, onGetPosts, onGetUsers }) => {

  useEffect(() => {
    onGetPosts();
    onGetUsers();
  }, [onGetPosts, onGetUsers]);

  return (
    <div className="main-wrapper">
      <div className="main-container">
        {loading ?
          <Loader /> :
          <>
            <Navigation />
            <Switch>
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/users" component={Users} />
              <Redirect to="/posts" />
            </Switch>
          </>
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.posts.loading || state.users.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPosts: () => dispatch(getPosts()),
    onGetUsers: () => dispatch(getUsers())
  };
};

App.propTypes = {
  loading: PropTypes.bool,
  onGetPosts: PropTypes.func,
  onGetUsers: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
