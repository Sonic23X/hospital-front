import general from "../../data/general.json"

const state = {
    table : general.table,
    employee :general.employee
};

export default {
    namespaced: true,
    state,
}