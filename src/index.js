// Calculo de Timestamp hace 24 horas
const calcularTiempo = () => {
  var ts = Math.round(new Date().getTime() / 1000);
  var tsYesterday = ts - 24 * 3600;
  console.log(`Timestamp hace 24 horas: ${tsYesterday}`);
};
calcularTiempo();

// Concatenacion y referencia URL transacciones ult. 24 horas
const bchClp = `https://www.buda.com/api/v2/markets/BTC-CLP/trades?last_timestamp=${calcularTiempo}`;
// Todo: Recorrer Arreglo ult. 24 horas

// Fetch de URL
fetch(bchClp)
  .then((response) => response.json())
  .then((data) => console.log(`Transaccion de BCH: ${data.trades.entries}`));
