(function() {
  'use strict';

//The module
  angular
    .module('app', []);

})();

(function() {
    'use strict';

//The controller
    angular
      .module('app')
      .controller('MortgageController', MortgageController);

    MortgageController.$inject = [];

    /* @ngInject */
    function MortgageController() {
      var vm = this;
      vm.balance;
      vm.apr;
      vm.term;

//Click function to calculate the monthly mortgage value
      vm.calculateMortgage = function() {
        // monthly interest rate
        var monthlyInterestRate = (vm.apr / 100) / vm.period;

        // number of payments
        var numberOfPayments = vm.term * vm.period;

        // compounded interest rate
        var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);

        // interest quotient
        var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

        // final calculation
        var monthlyPayment = (vm.balance * interestQuotient).toFixed(2);

        //Printing the value to the p so the user can see the monthly cost
        vm.payment = ("Your monthly payment is " + "$" + Math.round(monthlyPayment));


      }
    }
  })();
