import ecommerce from "../../data/ecommerce.json"

const state = {
    invoice : ecommerce.invoice,
    whislist :  ecommerce.whislist
};

export default {
    namespaced: true,
    state,
}
