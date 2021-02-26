

function reset(){
       document.getElementById('amount').value= "";
        document.getElementById('apr').value= "";
        document.getElementById('payment').value= "";
        document.getElementById('term').value= "";
        document.getElementById('extrapay').value= "0";
        document.getElementById('loan_info').innerHTML= "";
        document.getElementById('table').innerHTML= "";
    }
 
// Listen for submit

document.getElementById("loan_form").addEventListener("submit", results);

function results(evt) {
  // User Input

  const UIamount = document.getElementById("amount").value;
  const UIinterest =document.getElementById('apr').value;  
  const UIyears = document.getElementById("term").value;
    
  // Calculate

  const principal = parseFloat(UIamount);
  const CalculateInterest = parseFloat(UIinterest) / 100 / 12;

  const calculatedPayments = parseFloat(UIyears) * 12;

  //Compute monthly Payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  //Show results

  document.getElementById("payment").innerHTML = "$" + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "%" + totalInterest;

  document.getElementById("totalPayment").innerHTML = "$" + totalPayment;

  evt.preventDefault();
}