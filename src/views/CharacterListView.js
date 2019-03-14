import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    console.log(this.props.characters)
    this.props.getCharacters();
    // call our action
    
  }

  
  render() {
    // setTimeout(function(){this.props.getCharacters();}, 3000);
    if (this.props.isLoading === true) {
      return <h1>It might be loading, who knows</h1>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
