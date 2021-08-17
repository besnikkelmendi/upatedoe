import {createSlice} from "@reduxjs/toolkit";

export const deviceSlice = createSlice({
    name: "device",
    initialState: {
        macAddress: "98:CD:AC:7B:97:20",
    },
    reducers: {
        setDeviceAddress: (state, action) => {
            state.macAddress = action.payload;
        },

        resetDeviceAddress: (state) => {
            state.macAddress = null;
        },
    }, 
});

export const { setDeviceAddress, resetDeviceAddress } = deviceSlice.actions;

export const selectDeviceAddress = (state) => state.device.macAddress;

export default deviceSlice.reducer;