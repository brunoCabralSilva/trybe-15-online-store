export async function getCategories() {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/categories`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
};

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
};
