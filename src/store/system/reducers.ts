import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store'

// Define a type for the slice state

export interface IAppVersion {
    version: number,
    force_update: boolean;
    download_url: string;
}
interface CounterState {
    value: number;
    loading: boolean;
    appVersion: IAppVersion;
    currentVerssion: number;
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 10,
    loading: false,
    appVersion: {
        download_url: '',
        force_update: false,
        version: 1
    },
    currentVerssion: 1
}

export const counterSlice = createSlice({
    name: 'system',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            return { ...state, value: state.value + 1 };
        },
        decrement: (state) => {
            return { ...state, value: state.value - 1 };
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        
        setAppVersion: (state, action: PayloadAction<IAppVersion>) => {
            state.appVersion = action.payload;
        }
    },
});

export const { increment, decrement, setLoading, setAppVersion } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
