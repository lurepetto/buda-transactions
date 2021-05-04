// Calculo de Timestamp hace 24 horas
const relativeTime = () => {
  var ts = Math.round(new Date().getTime() / 1000);
  var tsYesterday = ts - 24 * 3600;
  return tsYesterday;
};
relativeTime();

// Concatenacion y referencia URL transacciones ult. 24 horas
let cryptoMarket = ["BTC", "ETH", "LTC", "BCH"];
let currencyType = ["CLP", "COP", "PEN", "ARS"];
const myList = document.querySelector("ul");

// Recorrido de arreglos para la URL relativa
for (let crypto of cryptoMarket) {
  for (let currency of currencyType) {
    // Fetch de URL concatenada
    myRequest = `https://www.buda.com/api/v2/markets/${crypto}-${currency}/trades?last_timestamp=${relativeTime}`;
    fetch(myRequest)
      .then((response) => response.json())
      .then((data) => {
        // Busqueda de la transaccion mas grande
        let max = 0;
        for (const entries of data.trades.entries) {
          if (max < entries[2]) {
            max = entries[2];
          }
        }
        // Insercion al DOM
        let listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.append(
          `En el mercado ${currency}, La transaccion de ${crypto} de mayor valor en las últimas 24 horas fue de: $${max}`
        );
        myList.appendChild(listItem);
      });
  }
}
