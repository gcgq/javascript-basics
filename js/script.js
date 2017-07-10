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
    html:`<strong>${fn_name}:</strong>`,
    console:`${fn_name}: `,
    str: ""
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
  var prompt_str = "Enter a number";
  var output = output_strings_init("largest2()");
  output.str = "The largest number is: ";

  for(var i = 0; i < 5; i++){
    input_array[i] = parseInt( prompt(prompt_str + " (" + (i+1) + " of 5)") );
  }

  for(var i = 0; i < 5; i++){
    if(input_array[i] > largest_num){
      largest_num = input_array[i];
    }
  }
  output.str += `${largest_num}`;
  alert(output.console + output.str);
  console.log(output.console + output.str);
  addToList(output.html, 'p', output.str);
  // li.innerHTML = output.html;
  // answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function evenOdd() {
  var output = output_strings_init("evenOdd()");
  var ol = document.createElement('ol');

  console.log(output.console);
  for(var i = 0; i <= 15; i++){
    if ((i % 2) == 0) {
      li_str = `${i} is even.`;
    } else {
      li_str = `${i} is odd.`;
    }
    console.log(li_str);
    ol.appendChild(document.createElement('li')).innerHTML = li_str;
  }
  addToList(output.html, 'ol', ol.innerHTML);
  // answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function fizzbuzz(){
  var output = output_strings_init("fizzbuzz()");
  var ul = document.createElement('ul');

  console.log(output.console);
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
  addToList(output.html, 'ul', ul.innerHTML);
}

function multiplesOf3(){
  var output = output_strings_init("multiplesOf3()");
  var ol = document.createElement('ol');

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
  addToList(output.html,'ol', ol.innerHTML);
}

function pyramid(){
  var output = output_strings_init("pyramid()");
  var pre = document.createElement('pre');
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

  console.log(output.console);
  for(var i=0; i < lines.length; i++){
    console.log(lines[i]);
    lines[i] += "&#10;"; //put a line break at the end of each line
    pre_line += lines[i];
  }
  pre.innerHTML = pre_line;
  addToList(output.html, 'pre', pre.innerHTML)
  // answer_list.insertBefore(li, answer_list.childNodes[0]);
}

function diamond(){
  var output = output_strings_init("diamond()");
  var pre = document.createElement('pre');
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

  console.log(output.console);
  for(var i=0; i < lines.length; i++){
    console.log(lines[i]);
    lines[i] += "&#10;"; //put a line break at the end of each line
    pre_line += lines[i];
  }
  pre.innerHTML = pre_line;
  addToList(output.html, 'pre', pre.innerHTML);
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
  var output = output_strings_init("todays_date()");

  console.log(output.console);
  addToList(output.html, 'p', date_str);
}

function leap_year_or_nah(year){
  //year = parseInt(today.getFullYear());
  var output = output_strings_init("leap_year_or_nah()")
  year = year;
  if(year == null){
    year = prompt("Enter a year");
  }
  output.str = `${year} is not a leap year`;
  console.log(output.console);
  if( year % 4 == 0){
    if(year % 100 == 0  && year % 400 != 0){
      console.log(output.str);
      addToList(output.html, 'p', output.str);
      return false;
    } else {
      output.str = `${year} is a leap year.`;
      console.log(output.str);
      addToList(output.html, 'p', output.str);
      return true;
    }
  } else {
    console.log(output.str);
    addToList(output.html, 'p', output.str);
    return false;
  }
}

function consecutive_or_nah(input_ary){
  var output = output_strings_init("consecutive_or_nah()");
  var input_qty = 5;
  var number_ary = input_ary;
  var consecutive_str = "is not consecutive.";

  if (number_ary == null){
    number_ary = [];
    for(var i = 0; i < input_qty; i++) {
      number_ary[i] = parseInt(prompt(`Enter a number (${i+1} of ${input_qty})`));
    }
  }

  for (var i = 0; i < number_ary.length -1 ; i++) {
    if (number_ary[i] + 1 != number_ary[i+1]) {
      output.str = `${number_ary} ${consecutive_str}`;
      console.log(output.console + output.str);
      addToList(output.html, 'p', output.str);
      return false;
    }
  }

  consecutive_str = "is consecutive.";
  output.str = `${number_ary} ${consecutive_str}`;
  console.log(output.console + output.str);
  addToList(output.html, 'p', output.str);
  return true;
}

function repeats_or_nah(){
  var output = output_strings_init("repeats_or_nah()");
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
  addToList(output.str, 'ul', ul.innerHTML);
  console.log(matches);
  return matches;
}

function check_multiple(array){
  var output = output_strings_init("check_multiple()");
  array.sort();
  for (var i = 0; i < array.length-1; i++) {
    if( array[i] === array[i+1] ){
      return true;
    }
  }
  return false;
}

function first_element(input_ary, n){
  var output = output_strings_init("first_element()");
  if(input_ary == null){
    input = prompt("Enter an array of numbers (separate values with commas)");
    n = prompt("Enter number of elements to return");
    input_ary = JSON.parse("[" + input + "]");
  }

  if( n == null || n == ""){
    output.str += input_ary[0];
    addToList(output.html, 'p', output.str);
    return input_ary[0];
  } else {
    output.str += input_ary.slice(0,n);
    addToList(output.html, 'p', output.str);
    return input_ary.slice(0,n);
  }
}

function join_elements(){
  var input = input;
  var output = output_strings_init("join_elements()");
  var ary = ["Red", "Green", "White", "Black"];
  if(input == null){
    input = prompt("Enter strings to join (separate items with commas. put strings in quotes)");
    ary = JSON.parse("["+ input +"]");
  }
  output.str = `"${ary.join(" ")}" OR "${ary.join(',')}" OR "${ary.join('+')}"`;
  addToList( output.html, 'p', output.str);
  console.log(output.console + output.str);
}

function frequency(){
  var output = output_strings_init("frequency()");
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
  var output = output_strings_init("ordinals()");
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
  var output = output_strings_init("find_duplicates()");
  for (var i = 0; i < input_ary.length; i++) {
    for (var j = i+1; j < input_ary.length; j++) {
      if (input_ary[i] == input_ary[j]) {
        console.log(`${input_ary[j]} is a dupiicate`);
      }
    }
  }
}

function is_palindrome(input_str){
  var output = output_strings_init("is_palindrome()");
  for(var i=0; i< input_str.length / 2; i++){
    if(input_str.charAt(i) != input_str.charAt(input_str.length-1-i)){
      return false;
    }
  }
  return true;
}

function reverse_string(input_str){
  var output = output_strings_init("reverse_string()");
  output_str = "";
  for(i=input_str.length; i >=0; i--){
    output_str += input_str.charAt(i);
  }
  console.log(output_str);
  return output_str;
}

function string_slicer(input_str){
  var output = output_strings_init("string_slicer()");
  output_ary =[];
  for (var i = 0; i <= input_str.length; i++) {
    for (var j = i+1; j <= input_str.length; j++) {
      output_ary.push(input_str.slice(i,j));
    }
  }
  return output_ary;
}

function alphabetize(input_str){
  var output = output_strings_init("alphabetize()");
  return input_str.split("").sort().join("");
}

function second_bananas(input_array){
  var output = output_strings_init("second_bananas()");
  input_array.sort(function (a, b) { return a - b; });
  return [input_array[1], input_array[input_array.length-2]];
}

function remove_dulpicate_letters(input_str){
  var output = output_strings_init("remove_dulpicate_letters()");
  output_str = input_str.split("");
  for (var i = 0; i < output_str.length; i++) {
    for (var j = i+1; j < output_str.length-1; j++) {
      if(output_str[i] == output_str[j]){
        output_str[j] = null;
      }
    }
  }
  return output_str.join("");
}

function js_style(){
  var paragraph = document.getElementById("change-this-text");
  paragraph.innerHTML = "<h1>Boom.</h1> <h6>(changed the background color, too.)</h6>";
  paragraph.style.color = "red";
  paragraph.style.background = "black" ;
  paragraph.style.fontSize="300%";
  document.getElementById("jsstyle").style.display="none";
}

function getFormValue(){
  // var input = document.getElementById("form1").submit();
  // alert(input);
  var first_name = document.querySelector("[name='fn']").value;
  var last_name = document.querySelector("[name='ln']").value;
  alert(`Hi, ${first_name} ${last_name}`);
}

function highlight(){
  var bs = document.getElementsByTagName('b');
  for(var i=0; i< bs.length; i++){
    bs[i].style.background = "yellow";
  }
}

function lowlight(){
  var bs = document.getElementsByTagName('b');
  for(var i=0; i< bs.length; i++){
    bs[i].style.background = "";
  }
}

function getAttributes(){
  var link = document.getElementById('w3r');
  var output_str = "DOM version\n\n";
  for( var i=0; i < link.attributes.length; i++){
    output_str += `${link.attributes[i].name} = ${link.attributes[i].value}\n`;
  }
  alert(output_str);
}

$(document).ready(function(){
  $("#jsstyle2").click(function(){
    var $p = $("#change-this-text");
    $p.html("<h1>Boom.</h1> <h6>(changed the background color, too.)</h6>");
    $p.css({"color": "yellowgreen", "background": "blue", "font-size": "300%"});
    $("#jsstyle2").css({"display": "none"});
  });

  $("#form2").submit(function (event){
    var first_name = $(this).find("input[name='fn']").val();
    var last_name = $(this).find("input[name='ln']").val();
    alert(`Hi, ${first_name} ${last_name}`);
    event.preventDefault();
  });

  $("#highlightstuff").mouseenter(function(){
    $('b').css("background","yellow")
  });

  $("#highlightstuff").mouseleave(function(){
    $('b').css("background","");
  });

  $("#attribute-button").click(function(){
    var attr = $("#w3r")[0].attributes;
    var output_str = "jQuery version\n\n";
    for (var i = 0; i < attr.length; i++) {
      output_str += `${attr[i].name} = ${attr[i].value}\n`;
    }
    alert(output_str);
  });
});


// function lowlightJQ(){
//
// }
// function highlightJQ(){
//
// }
// function getAttributesJQ(){
//
// }
