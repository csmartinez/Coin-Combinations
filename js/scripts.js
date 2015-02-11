var coinCombination = function(amount) {
  var combination = [0,0,0,0];
  while (amount !== 0) {
    if (amount >= 25) {
      combination[3] = (Math.floor(amount/25));
      amount = amount%25;
    } else if (amount >= 10) {
      combination[2] = (Math.floor(amount/10));
      amount = amount%10;
    } else if (amount >= 5) {
      combination[1] = (Math.floor(amount/5));
      amount = amount%5;
    } else {
      combination[0] = amount;
      amount = 0;
    }
  }
  return combination;
}

$(document).ready(function() {
  $("form#coin-combination").submit(function(event) {
    var amount = parseInt($("input#amount").val());
    var result = coinCombination(amount);

    $(".input-amount").text(amount);
    $(".quarter").text(result[3]);
    $(".dime").text(result[2]);
    $(".nickel").text(result[1]);
    $(".penny").text(result[0]);


  $("#result").show();
  event.preventDefault();
});
});
