
export const getPromotions = state => state.promotionsReducer.promotions.data;

export const getTotal = state => state.promotionsReducer.promotions.total;

export const getError = state => state.promotionsReducer.promotions.error;

export const getLoading = state => state.promotionsReducer.promotions.loading;

export const getOrder = state => state.order;

export const getSort = state => state.sort;

export const getColor = state => state.color;

export const getPage = state => state.page;

export const getMinPrice = state => state.minPrice;

export const getMaxPrice = state => state.maxPrice;

export const getSearch = state => state.search;

export const getParams = state => state.paramsReducer.params;