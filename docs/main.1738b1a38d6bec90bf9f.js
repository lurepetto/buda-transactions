(()=>{var t=function(){var t=Math.round((new Date).getTime()/1e3)-86400;console.log("Timestamp hace 24 horas: ".concat(t))};t();var e="https://www.buda.com/api/v2/markets/BTC-CLP/trades?last_timestamp=".concat(t);fetch(e).then((function(t){return t.json()})).then((function(t){return console.log("Transaccion de BCH: ".concat(t.trades.entries))}))})();