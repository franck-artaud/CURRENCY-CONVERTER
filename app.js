


var url = 'http://data.fixer.io/api/latest?access_key=5230fec6401750aeb329e1c083e94394&base=EUR&symbols=GBP,USD,EUR,CAD,BTC,TRY,MAD,DZD,TND,XPF,PLN,AUD,THB,VND,KHR'


function convertCurrency(){
   $.ajax({ // function ajax de jquery
       url:url,
       type:'GET',
       success: function(res, status, req ) { //resultat de la requête
           console.log(res);
           console.log(req);

           var rates = res.rates;
           var amount = document.getElementById("fromAmount").value;
           var from = document.getElementById("from").value;
           var to = document.getElementById("to").value;

           console.log(amount, from, to);

           var result = amount * rates[to] / rates[from]
           document.getElementById("toAmount").value = result


       }
   })
}

//wrong
// http://data.fixer.io/api/convert?access_key=563fc21072be211b1229c058a0569604&from=USD&to=EUR&amount=25

//ok
// http://data.fixer.io/api/latest?access_key=563fc21072be211b1229c058a0569604&base=EUR&symbols=GBP,JPY,EUR,USD