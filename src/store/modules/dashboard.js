import dashboard from "../../data/dashboard\.json"

const state = {
    data : dashboard.data,
    delivery : dashboard.delivery,
    cards : dashboard.cards,
    selling : dashboard.selling,
    activitie : dashboard.activitie 
};

export default {
    namespaced: true,
    state,
}