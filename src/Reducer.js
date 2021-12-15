const Reducer = (state, action) => {
    switch (action.type) {
        case "PRODUCT_LIST":
            return {
                ...state, ProductList: action.ProductList
            }
        default: return state;
    }
};
export default Reducer;