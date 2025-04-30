const baseUrl = "https://brandstestowy.smallhost.pl/api/random";

export default async function fetchData(productsBatch) {
  const url = `${baseUrl}?pageNumber=${"2"}&pageSize=${productsBatch}`;
  try {
    const response = await fetch(url);
    const productsInfo = await response.json();
    console.log(`${productsInfo.data.length}, batch size ${productsBatch}`);
    return productsInfo.data;
  } catch (err) {
    alert(`There was an error in loading products: 
      ${err}`);
  }
}
