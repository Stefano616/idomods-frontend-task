const baseUrl = "https://brandstestowy.smallhost.pl/api/random";

export default async function fetchProducts(productsBatch, currentPage) {
  const url = `${baseUrl}?pageNumber=${currentPage}&pageSize=${productsBatch}`;
  try {
    const response = await fetch(url);
    const productsInfo = await response.json();
    return productsInfo.data;
  } catch (err) {
    alert(`There was an error in loading products:
      ${err}`);
  }
}
