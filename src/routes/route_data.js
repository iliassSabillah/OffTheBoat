import configureStore from '../store/configureStore';
import {fetchUser} from '../actions/infoActions';



let store = configureStore();

export  function onUsersEnter() {
	store.dispatch(fetchUser());
}

