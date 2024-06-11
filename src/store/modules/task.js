import task from "../../data/task.json"

const state = {
    data : task.data,
};

export default {
    namespaced: true,
    state,
}