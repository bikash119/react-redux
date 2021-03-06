//this component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
          {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.object.isRequired,
  loading : PropTypes.bool.isRequired
};

mapStateToProps(state,ownProps){
  return {
    loading : state.ajaxCallInProgress > 0
  }
}

export default connect(mapStateToProps)(App);
