function insertValue(val) {
    document.getElementById("result").value += val;
  }
  function result() {
    document.getElementById("result").value = eval(
      document.getElementById("result").value
    );
  }
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  