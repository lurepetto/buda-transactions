// Calculo de Timestamp hace 24 horas
const relativeTime = () => {
  var ts = Math.round(new Date().getTime() / 1000);
  var tsYesterday = ts - 24 * 3600;
  return tsYesterday;
};
relativeTime();

// Concatenacion y referencia URL transacciones ult. 24 horas
let cryptoMarket = ["BTC", "ETH", "LTC", "BCH"];
const myList = document.querySelector("ul");

// Fetch de URL
for (let crypto of cryptoMarket) {
  myRequest = `https://www.buda.com/api/v2/markets/${crypto}-CLP/trades?last_timestamp=${relativeTime}`;
  fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
      let max = 0;
      for (const entries of data.trades.entries) {
        if (max < entries[2]) {
          max = entries[2];
        }
      }
      let listItem = document.createElement("li");
      listItem.append(
        `La transaccion de ${crypto} de mayor valor realizada en las últimas 24 horas fue de: $${max}`
      );
      myList.appendChild(listItem);
    });
}
