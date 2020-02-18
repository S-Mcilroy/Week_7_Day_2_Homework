import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rates: {},
      eurRate: {
        "EUR": 1.00
      },
      selectedCurrency: 0.00,
      amountToExchange: 0.00,
      currenyToExchange: 0.00
    },
    mounted(){
      this.fetchRates();
    },
    computed: {
      exchanged: function() {
        return ((this.amountToExchange / this.currenyToExchange )* this.selectedCurrency).toFixed(2);
      }
    },
    methods: {
      fetchRates: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.rates = data.rates)
      },
      getKeyByValue: function(object, value) {
        if( value === 1){
          return "EUR"
        } else {
          return Object.keys(object).find(key => object[key] === value);
        }
      }
    }
  });
});
