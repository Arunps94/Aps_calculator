let display = document.querySelector('#display').value;

var modulas = () => {
  document.calculator.display.value += '%';
};

var divide = () => {
  document.calculator.display.value += '/';
};

var multiply = () => {
  document.calculator.display.value += '*';
};

var plus = () => {
  document.calculator.display.value += '+';
};

var minus = () => {
  document.calculator.display.value += '-';
};

//clear
document.querySelector('#clear').addEventListener('click', () => {
  document.querySelector('#display').value = ' ';
});

//backspace
var backspace = () => {
  var num = document.querySelector('#display').value.slice(0, -1);
  document.querySelector('#display').value = num;
};

//one
var one = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '1';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '1';
  }
};

//two
var two = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '2';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '2';
  }
};

//two
var two = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '2';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '2';
  }
};

//Three
var three = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '3';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '3';
  }
};

//four
var four = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '4';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '4';
  }
};

//five
var five = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '5';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '5';
  }
};

//six
var six = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '6';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '6';
  }
};

//seven
var seven = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '7';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '7';
  }
};

//eight
var eight = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '8';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '8';
  }
};

//nine
var nine = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '9';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '9';
  }
};

//zero
var zero = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '0';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '0';
  }
};

//twozero
var twozero = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '00';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '00';
  }
};

//dot
var dot = () => {
  if (document.querySelector('#display').value == ' ') {
    document.querySelector('#display').value = '.';
  } else {
    document.querySelector('#display').value =
      document.querySelector('#display').value + '.';
  }
};

equalto = () => {
  document.calculator.display.value = eval(calculator.display.value);
};
