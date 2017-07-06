var answer_list = document.getElementById("answers");

function addToList(li_label, li_child, li_content){
  answer_list = document.getElementById("answers");
  var li = document.createElement('li');
  li.innerHTML = li_label;
  li.appendChild(document.createElement(li_child)).innerHTML = li_content;
  answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function output_strings_init(fn_name){
  var strings ={
    html:`<strong>${fn_name}</strong>:`,
    console:`${fn_name}: `,
    str: "",
    li: document.createElement('li')
  };
  return strings;
}

function compareInt() {
    var num1 = parseInt( prompt("Enter a number"));
    var num2 = parseInt( prompt("Enter another number"));
    var output = output_strings_init("compareInt()");

    if(num1 > num2){
      output.str += `${num1} is larger than ${num2}.`;
    } else {
      output.str += `${num2} is larger than ${num1}.`;
    }

    alert(output.console + output.str);
    console.log(output.console + output.str);
    addToList(output.html, 'p', output.str);
}

function sort1(){
  var prompt_str = "Enter a number";
  var input_qty = prompt("How many numbers do you want to sort?");
  var unsorted_array = [];
  var output = output_strings_init("sort1()");

  for(i = 0; i < input_qty; i++) {
    unsorted_array[i] = parseInt( prompt(prompt_str + " (" + (i+1) + " of " + input_qty + ")" ) );
  }
  unsorted_array.sort(function (a, b) { return a - b; });
  output.str += unsorted_array.join(", ")
  output.str += ".";

  alert(output.console + output.str);
  console.log(output.console + output.str);
  addToList(output.html, 'p', output.str);
}

function sort2(){
  //this is probably more along the lines of what was expected
  var num1, num2, num3;
  var prompt_str = "Enter a number";
  var num1 = parseInt( prompt( prompt_str ));
  var num2 = parseInt( prompt( prompt_str ));
  var num3 = parseInt( prompt( prompt_str ));
  var output = output_strings_init("sort2()");

  if (num1 < num2 && num1 < num3){ // if num1 is smallest
    if (num2 < num3) {
      output.str += `${num1}, ${num2}, ${num3}.`  }
    else {
      output.str += `${num1}, ${num3}, ${num2}.`  }
  } else if (num2 < num1 && num2 < num3) { // if num2 is smallest
    if (num1 < num3) {
      output.str += `${num2}, ${num1}, ${num3}.`  }
    else {
      output.str += `${num2}, ${num3}, ${num1}.`  }
  } else { //else num3 is smallest
    if (num1 < num2) {
      output.str += `${num3}, ${num1}, ${num2}.`  }
    else {
      output.str += `${num3}, ${num2}, ${num1}.`  }
  }

  alert(output.console + output.str);
  console.log(output.console + output.str);
  li.innerHTML = output.html + output.str;
  addToList(output.html, 'p', output.str);
}

function largest1(){
  var input_array = [];

  var prompt_str = "Enter a number";
  var output = output_strings_init("largest1()");
  output.str = "The largest number is: ";

  for(var i = 0; i < 5; i++){
    input_array[i] = parseInt( prompt(prompt_str + " (" + (i+1) + " of 5)") );
  }
  input_array.sort(function (a, b) { return a - b; }).reverse();

  output.str += input_array[0];
  alert(output.console + output.str);
  console.log(output.console + output.str);
  addToList( output.html, 'p', output.str);
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
  // var li = answer_list.appendChild(document.createElement('li'));
  var li = document.createElement('li');
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
  addToList(output_str, 'ol', ol.innerHTML);
  // answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function fizzbuzz(){
  var fn_str = "fizzbuzz()";
  var output_str = `<strong>${fn_str}</strong>: `;
  var li = document.createElement('li');
  li.innerHTML = output_str;
  var ul = li.appendChild(document.createElement('ul'));

  console.log(fn_str);
  for(var i = 1; i <= 100; i++){
    var li_str = `${i}: `;
    if ((i % 3) == 0) {
      li_str += "Fizz";
    }
    if ((i % 5) == 0){
      li_str += "Buzz";
    }
    console.log(`${i}: ${li_str}`);
    ul.appendChild(document.createElement('li')).innerHTML = li_str;
  }

  // answer_list.insertBefore(li, answer_list.childNodes[0]);
  addToList(output_str, 'ul', ul.innerHTML);
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
  var lines = [];

  var number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
  var lines = [];

  var number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
  var fn_str = "pyramid2()";
  var output_str = `<strong>${fn_str}</strong>: `;
  var li = answer_list.appendChild(document.createElement('li'));
  li.innerHTML = output_str;
  var pre = li.appendChild(document.createElement('pre'));

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
          line_array[(number_array.length-1)-i] = " " + line_array[(number_array.length-1)-i];
          line_array[(number_array.length-1)+i] = " " + line_array[(number_array.length-1)+i];
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
  var pre_line = "";
  console.log(fn_str);
  for(var i=0; i < lines.length; i++){
    console.log(lines[i]);
    lines[i] += "&#10;" //put a line break at the end of each line
    pre_line += lines[i];
  }
  pre.innerHTML = pre_line;
  answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function diamond2(){
  var fn_str = "diamond2()";
  var output_str = `<strong>${fn_str}</strong>: `;
  var li = answer_list.appendChild(document.createElement('li'));
  li.innerHTML = output_str;

  var pre = li.appendChild(document.createElement('pre'));
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
  var pre_line = "";
  console.log(fn_str);
  for(var i=0; i < lines.length; i++){
    console.log(lines[i]);
    lines[i] += "&#10;" //put a line break at the end of each line
    pre_line += lines[i];
  }
  pre.innerHTML = pre_line;
  answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function todays_date(){
  today = new Date();
  date_str = `${('0'+today.getMonth()).slice(-2)}/${('0'+today.getDay()).slice(-2)}/${today.getFullYear()}`;
  console.log(date_str);
}

function leap_year_or_nah(year){
  today = new Date();
  //year = parseInt(today.getFullYear());
  year = year;
  output_str = `${year} is not a leap year`;
  if( year % 4 == 0){
    if(year % 100 == 0  && year % 400 != 0){
      console.log(output_str);
      return false;
    } else {
      output_str = `${year} is a leap year.`;
      console.log(output_str);
      return true;
    }
  } else {
    console.log(output_str);
    return false;
  }
}

function consecutive_or_nah(input_ary){
  input_qty = 5;
  number_array = input_ary;
  var nah = "not consecutive";
  if (number_array == null){
    for(var i = 0; i < input_qty; i++) {
    number_array[i] = parseInt(prompt(`Enter a number (${i+1} of ${input_qty})`));
    }
  }
  for (var i = 0; i < number_array.length -1 ; i++) {
    if (number_array[i] + 1 != number_array[i+1]) {
      console.log(nah);
      return false;
    }
  }
  console.log("Consecutive.");
  return true;
}

function repeats_or_nah1(){
  // var input_qty = 5;
  var number_array = [1,2,1,4,5,6,3,8,3,5,6,3,5,6,7];
  var output_str = "";
  var matches={'keys':[]};
  for (var i = 0; i < number_array.length; i++) {
    if(matches[number_array[i]] == null){
        matches[number_array[i]] = 1;
        matches['keys'].push(number_array[i]);
    } else {
      matches[number_array[i]] += 1;
    }
  }
  for(i = 0; i < matches['keys'].length; i++){
    if( matches[matches['keys'][i]] > 1 ){
      console.log(`${matches['keys'][i]} has ${matches[matches['keys'][i]]} repeats`);
    }
  }

  console.log(matches);
  return matches;
}

function check_multiple(array){
  array.sort();
  for (var i = 0; i < array.length-1; i++) {
    if( array[i] === array[i+1] ){
      return true;
    }
  }
  return false;
}

function first_element(input_ary, n){
  if( n == null){
    return input_ary[0];
  } else {
    return input_ary.slice(0,n);
  }
}

function join_elements(){
  var color_ary = ["Red", "Green", "White", "Black"];
  var output_str = `"${color_ary.join(' ')}" OR "${color_ary.join(',')}" OR "${color_ary.join('+')}"`;
  console.log(output_str);
}

function frequency(){
  var input_ary = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
  var counts = {'keys':[]};
  var freq = 1;
  var item = "";
  var output_str = `${item} was the most frequent with ${freq}`;

  for (var i = 0; i < input_ary.length; i++) {
    if(counts[input_ary[i]] == null){
      counts['keys'].push(input_ary[i]);
      counts[input_ary[i]] = 1;
    } else {
      counts[input_ary[i]] += 1;
    }
  }

  var keys = counts['keys'];
  for(var i = 0; i < keys.length; i++){
    if(counts[keys[i]] > freq){
      item = keys[i];
      freq = counts[keys[i]];
    }
  }
  console.log(output_str);
  return counts;
}

function ordinals(){
  var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
  var o = ["st","nd","rd", "th"];
  for (var i = 0; i < color.length; i++) {
    if(i > 2){
      console.log(`${i+1}${o[3]} choice is ${color[i]}.`);
    } else {
      console.log(`${i+1}${o[i]} choice is ${color[i]}.`);
    }
  }
}

function find_duplicates(input_ary){
  for (var i = 0; i < input_ary.length; i++) {
    for (var j = i+1; j < input_ary.length; j++) {
      if (input_ary[i] == input_ary[j]) {
        console.log(`${input_ary[j]} is a dupiicate`);
      }
    }
  }
}

function is_palindrome(input_str){
  for(var i=0; i< input_str.length / 2; i++){
    if(input_str.charAt(i) != input_str.charAt(input_str.length-1-i)){
      return false;
    }
  }
  return true;
}

function reverse_string(input_str){
  output_str = "";
  for(i=input_str.length; i >=0; i--){
    output_str += input_str.charAt(i);
  }
  console.log(output_str);
  return output_str;
}

function string_slicer(input_str){
  output_ary =[];
  for (var i = 0; i <= input_str.length; i++) {
    for (var j = i+1; j <= input_str.length; j++) {
      output_ary.push(input_str.slice(i,j));
    }
  }
  return output_ary;
}

function alphabetize(input_str){
  return input_str.split("").sort().join("");
}

function second_bananas(input_array){
  input_array.sort(function (a, b) { return a - b; });
  return [input_array[1], input_array[input_array.length-2]];
}

function remove_dulpicate_letters(input_str){
  output_str = input_str.split("");
  for (var i = 0; i < output_str.length; i++) {
    for (var j = i+1; j < output_str.length; j++) {
      if(output_str[i] == output_str[j]){
        output_str[j] = null;
      }
    }
  }
  return output_str.join("");
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
// todays_date()
// leap_year_or_nah();
// consecutive_or_nah();
