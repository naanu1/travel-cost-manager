let a = 0;
let resultDiv = null;

function permit() {
  let num = parseInt(document.getElementById("permits").value);
  let optdiv = document.getElementById("inputpermit");
  optdiv.innerHTML = "";
  for (let i = 0; i < num; i++) {
    var input = document.createElement("input");
    input.type = "text";
    input.id = `${i}`;
    input.placeholder = "Enter price";
    optdiv.appendChild(input);
  }
  var but = document.createElement("button");
  but.id = "calcper";
  but.innerText = "submit";
  but.onclick = function () {
    a = abc(optdiv);
  };
  optdiv.appendChild(but);
}

function abc(optdiv) {
  let sum = 0;
  let inputs = optdiv.querySelectorAll("input");
  inputs.forEach(function (input) {
    let b = parseInt(input.value) || 0; // Parse value or 0 if empty
    sum += b;
  });
  return sum;
}

function calsum() {
  // Retrieve values of other elements and calculate totalstay and totalfood here
  let kilo = parseInt(document.getElementById("kilo").value) || 0;
  let kph = parseInt(document.getElementById("pkm").value) || 0;
  let members = parseInt(document.getElementById("members").value) || 0;
  let others = parseInt(document.getElementById("exp").value) || 0;
  let days = parseInt(document.getElementById("days").value) || 0;
  let stayday = parseInt(document.getElementById("sday").value) || 0;
  let stayprice = parseInt(document.getElementById("sprice").value) || 0;
  let food = parseInt(document.getElementById("food").value) || 0;
  let toll = parseInt(document.getElementById("toll").value) || 0;
  let bata = parseInt(document.getElementById("bata").value) || 0;
  let nbata = parseInt(document.getElementById("nbata").value) || 0;

  let totalstay = stayday * stayprice;
  let totalfood = food * days * members;
  let tk = kilo * kph;
  let db = days * bata;
  let night = nbata * bata;
  let tb = db + night;

  let total = a + tb + toll + totalfood + totalstay + tk + others;
  let tv = a + tb + toll + tk;
  let aa = Math.ceil(total / members) || "Not Entered";
  let bb = Math.ceil(totalfood / members) || "Not Entered";
  let cc = Math.ceil(totalstay / members) || "Not Entered";
  let dd = Math.ceil(others / members) || "Not Entered";
  let ee = Math.ceil(tv / members) || "Not Entered";

  // let tmax = bb * members + cc * members + dd * members + ee * members;

  if (resultDiv) {
    resultDiv.remove();
  }

  resultDiv = document.createElement("div");
  resultDiv.innerHTML = `
    <div class="main">
      <div class="p1 card">
        <h2>Total TT Travel Price</h2>
        <p>Total food: ${isNaN(totalfood) ? "Not Entered" : totalfood}</p>
        <p>Total stay: ${isNaN(totalstay) ? "Not Entered" : totalstay}</p>
        <p>TT Price per KM: ${isNaN(tk) ? "Not Entered" : tk}</p>
        <p>Toll Price: ${isNaN(toll) ? "Not Entered" : toll}</p>
        <p>Total permit Price: ${isNaN(a) ? "Not Entered" : a}</p>
        <p>Driver Bata: ${isNaN(tb) ? "Not Entered" : tb}</p>
        <p>Visiting Prices and Other Expenses: ${
          isNaN(others) ? "Not Entered" : others
        }</p>
        <p>Total Price: ${isNaN(total) ? "Not Entered" : total}</p>
      
      </div>
      <div class="p2 card">
        <h2>Per head Price</h2>
        <p>Per Person: ${isNaN(aa) ? "Not Entered" : aa}</p>
        <p>Per Person food: ${isNaN(bb) ? "Not Entered" : bb}</p>
        <p>Per Person stay: ${isNaN(cc) ? "Not Entered" : cc}</p>
        <p>Per Person other expenses: ${isNaN(dd) ? "Not Entered" : dd}</p>
        <p>Per Person Travel Price: ${isNaN(ee) ? "Not Entered" : ee}</p>
      </div>
    </div>
  `;

  // Append the div to the document body
  document.body.appendChild(resultDiv);
}
