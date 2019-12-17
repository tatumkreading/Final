// This took the longest to code. I had many versions because I struggled to get the drop down 
// question to be assosiated with numbers. 

// document.getElementById("defaultOpen").click();


// ORIGINAL - addition function                         This was the original functin of the first 2 inputs with no drop down just a text box
//  function multiValues() {         
//   var num1, num1, res;
//   num1=Number(document.formcalc.txtnum1.value);
//   num2=Number(document.formcalc.txtnum2.value
//   res=num1+num2;
//   document.formcalc.txtres.value=res;
// }

// function dropDowns() {                               Then I tried doing just a function for drop downs but realized that it wouldn't be associated with
//   var yes, no, res;                                  my other inputs
//   yes=10(document.formcalc.yes.value);
//   no=0(document.formcalc.no.value);
//   res=
// }

// function multiValues() {                                     Then I tried placing variables for each of the operations/calculations and having 2 steps happening
//     var num1, num1, n1, res;
//     num1=Number(document.formcalc.txtnum1.value);
//     num2=Number(document.formcalc.txtnum2.value);
//     num3=Number(document.formcalc.txtnum3.value);
//     n1 = parseFloat(document.getElementById('n1').value);
//     oper = document.getElementById('operators').value;
//     if(oper === 'yes')
//     {
//         document.getElementById('result').value = n1+5;
//     }
    
//     if(oper === 'no')
//     {
//         document.getElementById('result').value = n1-0;
//     }
  
//     res=(num1*num2)-(num3*5000);
//     document.formcalc.txtres.value=res;

//   }

// I finally got it to work by naming variables as one and having one big equations and I used a lot less code than I originally had
// and it works much smoother
function calc(evt)
{
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var n3 = parseFloat(document.getElementById('n3').value);
    var n4 = parseFloat(document.getElementById('n4').value);
    var oper = document.getElementById('operators').value;
    
    if(oper === 'yes')
    {
        document.getElementById('result').value = (n1*n2)-(n3*3000)-(n4*1200)+(15340)-5000;
    }
    
    if(oper === 'no')
    {
        document.getElementById('result').value = (n1*n2)-(n3*5000)-(n4*1200)+(15340);
    }
  
  }