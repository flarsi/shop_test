export const URL =({color, maxPrice, minPrice, order, page, search, sort})=>{
    if (color.length){
        const newColor = color.join('&color=')
        color = `&color=${newColor}`
    }
    if (maxPrice){
        maxPrice = `&price_lte=${maxPrice}`
    }
    if (minPrice){
        minPrice = `&price_gte=${minPrice}`
    }
    if (search){
        search = `&title_like=${search}`
    }
    const urlToFind = `http://localhost:5000/promotions?_embed=comments&_limit=4&_order=${order}&_sort=${sort}&_page=${page}${color}${maxPrice}${minPrice}${search}`;
    return urlToFind
}
