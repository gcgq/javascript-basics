var answer_list = document.getElementById("answers");

function compareInt() {
    var num1 = parseInt( prompt("Enter a number"));
    var num2 = parseInt( prompt("Enter another number"));
    var output_str = "<strong>compareInt()</strong>: ";
    if(num1 > num2){
      output_str += `${num1} is larger than ${num2}.`;
    } else {
      output_str += `${num2} is larger than ${num1}.`;
    }
    alert(output_str);
    answer_list.appendChild( document.createElement('li') ).innerHTML = output_str;
}

function sort1(){
  var prompt_str = "Enter a number";
  var input_qty = prompt("How many numbers do you want to sort?");
  var unsorted_array = [];
  var output_str = "<strong>sort1()</strong> The sorted numbers are: ";
  for(i = 0; i < input_qty; i++) {
    unsorted_array[i] = parseInt( prompt(prompt_str + " (" + (i+1) + " of " + input_qty + ")" ) );
  }
  unsorted_array.sort(function (a, b) { return a - b; });
  output_str += unsorted_array.join(", ")
  output_str += ".";
  alert(output_str);
  answer_list.appendChild( document.createElement('li') ).innerHTML = output_str;
}

function sort2(){
  //this is probably more along the lines of what was expected
  var num1, num2, num3;
  var prompt_str = "Enter a number";
  var num1 = parseInt( prompt( prompt_str ));
  var num2 = parseInt( prompt( prompt_str ));
  var num3 = parseInt( prompt( prompt_str ));
  var output_str = "<strong>sort2()</strong> The sorted numbers are: ";
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
  alert(output_str);
  answer_list.appendChild(document.createElement('li')).innerHTML = output_str;
}

function largest1(){
  var prompt_str = "Enter a number";
  var input_array = [];
  var output_str = "<strong>largest1()</strong> The largest number is: ";
  for(var i = 0; i < 5; i++){
    input_array[i] = parseInt( prompt(prompt_str + " (" + (i+1) + " of 5)") );
  }
  input_array.sort(function (a, b) { return a - b; }).reverse();
  output_str += input_array[0];
  alert(output_str);
  answer_list.appendChild(document.createElement('li')).innerHTML = output_str;
}

//again, a different function closer to what was probably expected
function largest2(){
  prompt_str = "Enter a number";
  var input_array = [];
  var largest_num = 0;
  var output_str = "<strong>largest2()</strong> The largest number is: ";
  for(var i = 0; i < 5; i++){
    input_array[i] = parseInt( prompt(prompt_str + " (" + (i+1) + " of 5)") );
  }
  for(var i = 0; i < 5; i++){
    if(input_array[i] > largest_num){
      largest_num = input_array[i];
    }
  }
  output_str += `${largest_num}`;
  alert(output_str);
  answer_list.appendChild(document.createElement('li')).innerHTML = output_str;
}

function evenOdd() {
  var output_str = "<strong>evenOdd()</strong> ";
  var ol = answer_list.appendChild(document.createElement('li'))
                      .appendChild(document.createElement('ol'));
  for(var i = 0; i <= 15; i++){
    if ((i % 2) == 0) {
      li_str = output_str + `${i} is even.`;
    } else {
      li_str = output_str + `${i} is odd.`;
    }
    ol.appendChild(document.createElement('li')).innerHTML = li_str;
  }
}

function fizzbuzz(){
  var output_str = "<strong>fizzbuzz()</strong>: ";
  var ol = answer_list.appendChild(document.createElement('li'))
                      .appendChild(document.createElement('ol'));
  ol.innerHTML = output_str;
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
}

function multiplesOf3(){
  var output_str = "<strong>multiplesOf3()</strong>: ";
  var count = 0;
  var ol = answer_list.appendChild(document.createElement('li'))
                      .appendChild(document.createElement('ol'));
  ol.innerHTML = output_str;
  for(var i = 1; i <= 1000; i++){
    if ((i % 3) == 0) {
      count++;
      li_str = `${i} is divisible by 3. Total: ${count}`;
      ol.appendChild(document.createElement('li')).innerHTML = li_str;
    }
  }
  // ol.innerHTML = total_str;
  var total_str = `Final total: ${count}`;
  alert(total_str);
  console.log(total_str);
}

function pyramid(){
  var pre = answer_list.appendChild(document.createElement('li'))
                      .appendChild(document.createElement('pre'));
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
  var pre_line = "<strong>pyramid1()</strong>&#10;";
  for(var i=0; i < lines.length; i++){
    console.log(lines[i]);
    lines[i] += "&#10;"; //put a line break at the end of each line
    pre_line += lines[i];
  }
  pre.innerHTML = pre_line;
}

function diamond(){
  var pre = answer_list.appendChild(document.createElement('li'))
                      .appendChild(document.createElement('pre'));
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
  var pre_line = "<strong>diamond1()</strong>&#10;";
  for(var i=0; i < lines.length; i++){
    console.log(lines[i]);
    lines[i] += "&#10;"; //put a line break at the end of each line
    pre_line += lines[i];
  }
  pre.innerHTML = pre_line;
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
