function myFunction()
{
    console.log("entered");
    var total=parseFloat(document.getElementById("total").value);
    var tiprate = parseFloat(document.getElementById("rate").value);

    const taxRate = 5.5;
    const tax1 = total*(taxRate/100);
    const tip= total*(tiprate/100);
    const G_total= tax1 + tip + total;

    document.getElementById("amountOfTip").innerHTML=tip;
    document.getElementById("tax").innerHTML=tax1;
    document.getElementById("gtotal").innerHTML=G_total;

}

document.querySelector('#calculate').addEventListener('click',myFunction);