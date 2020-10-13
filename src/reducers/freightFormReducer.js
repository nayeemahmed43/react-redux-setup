import { SUBMIT } from "../action-types/freightFormTypes"

const initialState = {
    pickupLocation: "",
    deliveryLocation: "",
    pickupDate: "",
    deliveryDate: "",
    pickupStartingTime: "",
    pickupEndingTime: "",
    deliveryStartingTime: "",
    deliveryEndingTime: "",
    shipmentType: "FTL (Full Truck Load)",
    fixedFrequentRoute: false
}
const freightFormReducer = (state=initialState, action) => {
    if(action.type==='SUBMIT') {
        return action.payload
    }
    return state
}

export default freightFormReducer