function calculator() {
let total = 0;
return {
  add: function (num) {
      total = total + num;
      return total
    },
  subtract: function (num) {
      total = total - num;
      return total
    }
  multiply: function (num) {
      total = total * num;
      return total
    },
  divide: function (num) {
      total = total / num;
      return total
    },
  clear: function () {
      total = 0;
      return total
    },
  getTotal: function () {
      return total
    }

}
}
const totalOperations = calculator()
console.log(totalOperations.add(5))
console.log(totalOperations.sus(5))
console.log(totalOperations.add(5))