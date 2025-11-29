function hoistVar() {
  console.log(number);
  var number = 3;
  console.log(number);
}

hoistVar();