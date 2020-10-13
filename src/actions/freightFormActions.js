import { SUBMIT } from '../action-types/freightFormTypes'

export const submitFreightData = freightData => {
    return {
        type: SUBMIT,
        payload: freightData
    }
}