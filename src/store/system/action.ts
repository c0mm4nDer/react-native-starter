import store from '../store';
import { setLoading } from './reducers';

export const setLoadingAction = (show: boolean) => {
    return store.dispatch(
        setLoading(show)
    );
}