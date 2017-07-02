var answer_list = document.getElementById("answers");

function compareInt() {
    var num1 = parseInt( prompt("Enter a number"));
    var num2 = parseInt( prompt("Enter another number"));
    var fn_str = "compareInt()";
    var html_str = `<strong>${fn_str}</strong>: `;
    var console_str = `${fn_str}: `;
    var output_str =""
    if(num1 > num2){
      output_str += `${num1} is larger than ${num2}.`;
    } else {
      output_str += `${num2} is larger than ${num1}.`;
    }
    alert(console_str + output_str);
    console.log(console_str + output_str);
    answer_list.insertBefore( document.createElement('li'), answer_list.childNodes[0] ).innerHTML = html_str + output_str;
}

function sort1(){
  var prompt_str = "Enter a number";
  var input_qty = prompt("How many numbers do you want to sort?");
  var unsorted_array = [];

  var fn_str = "sort1()";
  var html_str = `<strong>${fn_str}</strong> The sorted numbers are: `;
  var console_str = `${fn_str} The sorted numbers are: `;
  var output_str =""

  var li = answer_list.appendChild(document.createElement('li'));

  for(i = 0; i < input_qty; i++) {
    unsorted_array[i] = parseInt( prompt(prompt_str + " (" + (i+1) + " of " + input_qty + ")" ) );
  }
  unsorted_array.sort(function (a, b) { return a - b; });
  output_str += unsorted_array.join(", ")
  output_str += ".";
  alert(console_str + output_str);
  console.log(console_str + output_str);
  li.innerHTML = html_str + output_str;
  answer_list.insertBefore(li, answer_list.childNodes[0]);
  // answer_list.appendChild( document.createElement('li') ).innerHTML = output_str;
}

function sort2(){
  //this is probably more along the lines of what was expected
  var num1, num2, num3;
  var prompt_str = "Enter a number";
  var num1 = parseInt( prompt( prompt_str ));
  var num2 = parseInt( prompt( prompt_str ));
  var num3 = parseInt( prompt( prompt_str ));
  var fn_str = "sort2()";
  var html_str = `<strong>${fn_str}</strong> The sorted numbers are: `;
  var console_str = `${fn_str} The sorted numbers are: `;
  var output_str =""

  var li = answer_list.appendChild(document.createElement('li'));

  if (num1 < num2 && num1 < num3){ // if num1 is smallest
    if (num2 < num3) {
      output_str += `${num1}, ${num2}, ${num3}.`  }
    else {
      output_str += `${num1}, ${num3}, ${num2}.`  }
  } else if (num2 < num1 && num2 < num3) { // if num2 is smallest
    if (num1 < num3) {
      output_str += `${num2}, ${num1}, ${num3}.`  }
    else {
      output_str += `${num2}, ${num3}, ${num1}.`  }
  } else { //else num3 is smallest
    if (num1 < num2) {
      output_str += `${num3}, ${num1}, ${num2}.`  }
    else {
      output_str += `${num3}, ${num2}, ${num1}.`  }
  }
  alert(console_str + output_str);
  console.log(console_str + output_str);
  li.innerHTML = html_str + output_str;
  answer_list.insertBefore(li, answer_list.childNodes[0])
  // answer_list.appendChild(document.createElement('li')).innerHTML = html_str;
}

function largest1(){
  var input_array = [];

  var fn_str = "largest1()";
  var prompt_str = "Enter a number";
  var html_str = `<strong>${fn_str}</strong> `;
  var console_str = `${fn_str} `;
  var output_str = "The largest number is: ";

  var li = answer_list.appendChild(document.createElement('li'));

  for(var i = 0; i < 5; i++){
    input_array[i] = parseInt( prompt(prompt_str + " (" + (i+1) + " of 5)") );
  }
  input_array.sort(function (a, b) { return a - b; }).reverse();

  html_str += output_str + `${input_array[0]}`;
  li.innerHTML = html_str;
  alert(console_str + output_str + `${input_array[0]}`);
  console.log(console_str + output_str + `${input_array[0]}`);
  answer_list.insertBefore(li, answer_list.childNodes[0]);
}

//again, a different function closer to what was probably expected
function largest2(){
  var input_array = [];
  var largest_num = 0;
  var fn_str = "largest2()";
  var html_str = `<strong>${fn_str}</strong> `;
  var console_str = `${fn_str} `;
  var prompt_str = "Enter a number";
  var output_str = "The largest number is: ";

  var li = answer_list.appendChild(document.createElement('li'));

  for(var i = 0; i < 5; i++){
    input_array[i] = parseInt( prompt(prompt_str + " (" + (i+1) + " of 5)") );
  }
  for(var i = 0; i < 5; i++){
    if(input_array[i] > largest_num){
      largest_num = input_array[i];
    }
  }
  html_str += output_str + `${largest_num}`;
  li.innerHTML = html_str;
  alert(console_str + output_str + `${largest_num}`);
  console.log(console_str + output_str + `${largest_num}`);
  answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function evenOdd() {
  var fn_str = "evenOdd()";
  var output_str = `<strong>${fn_str}</strong>: `;
  var li = answer_list.appendChild(document.createElement('li'));
  li.innerHTML = output_str;
  var ol = li.appendChild(document.createElement('ol'));

  console.log(fn_str);
  for(var i = 0; i <= 15; i++){
    if ((i % 2) == 0) {
      li_str = `${i} is even.`;
    } else {
      li_str = `${i} is odd.`;
    }
    console.log(li_str);
    ol.appendChild(document.createElement('li')).innerHTML = li_str;
  }

  answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function fizzbuzz(){
  var fn_str = "fizzbuzz()";
  var output_str = `<strong>${fn_str}</strong>: `;
  var li = answer_list.appendChild(document.createElement('li'));
  li.innerHTML = output_str;
  var ol = li.appendChild(document.createElement('ol'));

  console.log(fn_str);
  for(var i = 1; i <= 100; i++){
    var li_str = "";
    if ((i % 3) == 0) {
      li_str += "Fizz";
    }
    if ((i % 5) == 0){
      li_str += "Buzz";
    }
    console.log(`${i}: ${li_str}`);
    ol.appendChild(document.createElement('li')).innerHTML = li_str;
  }

  answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function multiplesOf3(){
  var fn_str = "multiplesOf3()";
  var output_str = `<strong>${fn_str}</strong>: `;
  var li = answer_list.appendChild(document.createElement('li'));
  li.innerHTML = output_str;
  var ol = li.appendChild(document.createElement('ol'));

  var count = 0;
  for(var i = 1; i <= 1000; i++){
    if ((i % 3) == 0) {
      count++;
      li_str = `${i} is divisible by 3. Total: ${count}`;
      ol.appendChild(document.createElement('li')).innerHTML = li_str;
    }
  }

  var total_str = `Final total: ${count}`;
  alert(total_str);
  console.log(total_str);
  answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function pyramid(){
  var fn_str = "pyramid()";
  var output_str = `<strong>${fn_str}</strong>: `;
  var li = answer_list.appendChild(document.createElement('li'));
  li.innerHTML = output_str;
  var pre = li.appendChild(document.createElement('pre'));

  var pre_line = "";
  var number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lines = [];
  for (var j = 0; j < number_array.length; j++) {
    line_array = [];
    for( var i = 0; i < number_array.length; i++){
      if( j >= i){
        line_array[(number_array.length-1)-i] = `${number_array[j-i]}`;
        line_array[(number_array.length-1)+i] = `${number_array[j-i]}`;
      } else {
        line_array[(number_array.length-1)-i] = " ";
        line_array[(number_array.length-1)+i] = " ";
      }
    }
    lines[j] = line_array.join("");
  }
  console.log(fn_str);
  for(var i=0; i < lines.length; i++){
    console.log(lines[i]);
    lines[i] += "&#10;"; //put a line break at the end of each line
    pre_line += lines[i];
  }
  pre.innerHTML = pre_line;
  answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function diamond(){
  var fn_str = "diamond()";
  var output_str = `<strong>${fn_str}</strong>: `;
  var li = answer_list.appendChild(document.createElement('li'));
  li.innerHTML = output_str;
  var pre = li.appendChild(document.createElement('pre'));

  var pre_line = "";
  var number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lines = [];
  for (var j = 0; j < number_array.length; j++) {
    line_array = [];
    for( var i = 0; i < number_array.length; i++){
      if( j >= i){
        line_array[(number_array.length-1)-i] = `${number_array[j-i]}`;
        line_array[(number_array.length-1)+i] = `${number_array[j-i]}`;
      } else {
        line_array[(number_array.length-1)-i] = " ";
        line_array[(number_array.length-1)+i] = " ";
      }
    }
    var joined_line = line_array.join("");
    lines[j] = joined_line;
    lines[(number_array.length*2) - 2 - j] = joined_line;
  }
  console.log(fn_str);
  for(var i=0; i < lines.length; i++){
    console.log(lines[i]);
    lines[i] += "&#10;"; //put a line break at the end of each line
    pre_line += lines[i];
  }
  pre.innerHTML = pre_line;
  answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function pyramid2(){
  var pre = answer_list.appendChild(document.createElement('li'))
                      .appendChild(document.createElement('pre'));
  var range = 0;
  var number_array = [];
  var lines = [];
  while( 0 >= range || range > 99){
    range = prompt("Enter a number between 1-99");
  }
  for (var i = 0; i < range; i++) {
    number_array[i] = i + 1;
  }
  for (var j = 0; j < number_array.length; j++) {
    line_array = [];
    for( var i = 0; i < number_array.length; i++){
      if( j >= i){
        line_array[(number_array.length-1)-i] = `${number_array[j-i]}`;
        line_array[(number_array.length-1)+i] = `${number_array[j-i]}`;
        if( number_array[i] < 10 && range > 9){
          line_array[(number_array.length-1)-i] += " ";
          line_array[(number_array.length-1)+i] += " ";
        }
      } else {
        line_array[(number_array.length-1)-i] = " ";
        line_array[(number_array.length-1)+i] = " ";
        if( range > 9){
          line_array[(number_array.length-1)-i] += " ";
          line_array[(number_array.length-1)+i] += " ";
        }
      }
    }
    var joined_line = line_array.join("");
    lines[j] = joined_line;
  }
  var pre_line = "<strong>diamond2()</strong>&#10;";
  for(var i=0; i < lines.length; i++){
    console.log(lines[i]);
    lines[i] += "&#10;" //put a line break at the end of each line
    pre_line += lines[i];
  }
  pre.innerHTML = pre_line;
}

function diamond2(){
  var pre = answer_list.appendChild(document.createElement('li'))
                      .appendChild(document.createElement('pre'));
  var range = 0;
  var number_array = [];
  var lines = [];
  while( 0 >= range || range > 99){
    range = prompt("Enter a number between 1-99");
  }
  for (var i = 0; i < range; i++) {
    number_array[i] = i + 1;
  }
  for (var j = 0; j < number_array.length; j++) {
    line_array = [];
    for( var i = 0; i < number_array.length; i++){
      if( j >= i){
        line_array[(number_array.length-1)-i] = `${number_array[j-i]}`;
        line_array[(number_array.length-1)+i] = `${number_array[j-i]}`;
        if( number_array[i] < 10 && range > 9){
          line_array[(number_array.length-1)-i] += " ";
          line_array[(number_array.length-1)+i] += " ";
          // if( range > 9){
          //   line_array[(number_array.length-1)-i] += " ";
          //   line_array[(number_array.length-1)+i] += " ";
          // }
        }
      } else {
        line_array[(number_array.length-1)-i] = " ";
        line_array[(number_array.length-1)+i] = " ";
        if( range > 9){
          line_array[(number_array.length-1)-i] += " ";
          line_array[(number_array.length-1)+i] += " ";
        }
      }
    }
    var joined_line = line_array.join("");
    lines[j] = joined_line;
    lines[(number_array.length*2) - 2 - j] = joined_line;
  }
  var pre_line = "<strong>diamond2()</strong>&#10;";
  for(var i=0; i < lines.length; i++){
    console.log(lines[i]);
    lines[i] += "&#10;" //put a line break at the end of each line
    pre_line += lines[i];
  }
  pre.innerHTML = pre_line;
}

// function addToList(li_txt, li_content){
//   var li = document.createElement('li').appendChild(li_content);
  // li.innerHTML = li_txt;
//   answer_list.insertBefore(li, answer_list.childNodes[0]);
// }

// compareInt();
// sort1();
// sort2();
// largest1();
// largest2();
// evenOdd();
// fizzbuzz();
// multiplesOf3();
// pyramid();
// diamond();
