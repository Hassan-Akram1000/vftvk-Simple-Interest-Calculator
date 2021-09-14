//function to dispaly range value beside range
function rangeshow()
{
    var rate =document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rate+"%";
}
//function to check the input amount and compute the amount if input is valid
function compute()
{
    var principal = document.getElementById("principal");
    if(principal.value<=0)
        {
                alert("please Enter correct amount");
                principal.focus();
        }
    else
        {
    var rate =document.getElementById("rate").value;
    principal =principal.value;
    var years =document.getElementById("years").value;
    var interest=years*principal*(rate/100);
    var amount= (parseInt(principal)+ parseInt(interest));
    //Getting the future year
    var year = new Date().getFullYear()+ parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>" + rate +"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
        }
}
        