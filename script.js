function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value
    deposit = document.getElementById("deposit");
    interest = document.getElementById("interest");
    amount = document.getElementById("amount");
    date = document.getElementById("date");
    result = document.getElementById("result");

    result.style.display = "block";
    deposit.innerHTML = p;
    interest.innerHTML = r;
    amount.innerHTML = ((p * r)/100)*y;
    date.innerHTML = 2020 + parseInt(y)
}
        