import configureStore from '../store/configureStore';
import {checkList} from '../actions/checklistActions';



let store = configureStore();

export  function onCheckList() {
	store.dispatch(checkList());
}
