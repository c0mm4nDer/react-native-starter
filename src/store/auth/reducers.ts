import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store'

// Define a type for the slice state
export interface IPerson {
    _id: string;
    name: string;
    surname: string;
    nationalId: string;
    phoneNumber: string;
    address: string;
    photoURL: string;
    role: string;
    __v: string;
    token: string;
    remember: boolean;
}

interface IDevicesState {
    person?: IPerson
}

// Define the initial state using that type
const initialState: IDevicesState = {
    person: undefined,
}

export const personSlice = createSlice({
    name: 'person',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        getPerson: (state) => {
            const loadUser = async () => {
                let user = await AsyncStorage.getItem("user");
                if (user == null || user === "") return;
                const objUser = JSON.parse(user);
                if (objUser?.token) {
                    return { ...state, person: objUser };
                }
            }
            loadUser();
        },
        setPerson: (state, action: PayloadAction<IPerson>) => {
            return { ...state, person: action.payload };
        },
        logout: (state) => {
            state.person = undefined;
        }
    },
});

export const { setPerson, getPerson, logout } = personSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.devices.value;

export default personSlice.reducer;
