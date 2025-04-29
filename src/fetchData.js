const baseUrl = "https://brandstestowy.smallhost.pl/api/random";

export default async function fetchData(productsBatch) {
  const url = `${baseUrl}?pageNumber=${"10"}&pageSize=${productsBatch}`;
  const response = await fetch(url);
  const productsInfo = await response.json();
  //   return productsInfo.data;
  return prodData.slice(0, productsBatch);
}

let prodData = [
  {
    id: 127,
    text: "test 127",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 128,
    text: "test 128",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 129,
    text: "test 129",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 127,
    text: "test 127",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 128,
    text: "test 128",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 129,
    text: "test 129",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 127,
    text: "test 127",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 128,
    text: "test 128",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 129,
    text: "test 129",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 127,
    text: "test 127",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 128,
    text: "test 128",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 129,
    text: "test 129",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 127,
    text: "test 127",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 128,
    text: "test 128",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
  {
    id: 129,
    text: "test 129",
    image: "https://brandstestowy.smallhost.pl/KURTKA_04.png",
  },
];
