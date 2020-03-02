import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';
import {setActualCharacter} from '../../store/actions/appActions';

const mapStateToProps = state => {
  return {
    characters: state.app.characters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActualCharacter: character => dispatch(setActualCharacter(character)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
