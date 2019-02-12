var a = document.getElementById('priceTotal');
//taking the reference of $0
var total=0;


var totalThis = function (val){
    console.log(val);
    total +=val;
    console.log(total)
    a.innerHTML = '$'+total;
}



//used for the checkout.html

var sub = document.getElementById('sub');

sub.addEventListener('click',function () {
    validate();
});


var validate=function () {
    var x=true;
    var fname = document.getElementById('fname');
    var mail = document.getElementById('mail')
    var address = document.getElementById('address');
    console.log(fname.value.length);
    if(fname.value.length==0){
        x=false;
    }

    if(address.value.length==0){
        x=false;
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))) {
        x=false;
    }

    console.log(x);

    if (x){
        if(confirm("Full Name: "+fname.value+"\nAddress: "+address.value+"\nE-Mail: "+mail.value+"\nTotal: "+total)){
            window.location.href='Store.html';
        }
        }
    else {
        alert("Please Fill in all details to continue");
    }

}