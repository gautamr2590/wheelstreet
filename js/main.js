//Floating label jquery
$(document).ready(function() {
  $('.form-control').blur(function() {
    if ($(this).val())
      $(this).next('label').addClass('used');
    else
      $(this).next('label').removeClass('used');
  });


    $("#fname, #lname").change(function (){
        $('input:-webkit-autofill').each(function(){
            if($('.form-control').val())
                $(this).next('label').addClass('used');
            else
                $(this).next('label').removeClass('used');
        });
    });
});


//Number Restriction using regex
function onlyNum(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function validate() {
		//First Name Validation
	    if(fname.value == "" )
         { 	
         	document.getElementById('fnamee').style.display = "block";
           	fname.focus() ;
           	fname.setAttribute("class", "form-control error");
            return false;
         } else {
            document.getElementById('fnamee').style.display = "none";
         }

        //Last Name Validation
        if(lname.value == "" )
         {
         	document.getElementById('lnamee').style.display = "block";
            lname.focus() ;
            lname.setAttribute("class", "form-control error");
            return false;
         } else {
            document.getElementById('lnamee').style.display = "none";
         }

        //Email Validation
        if(email.value == "" )
         {
         	document.getElementById('emaile').style.display = "block";
            email.focus();
            email.setAttribute("class", "form-control error");
            return false;
         } else {
            document.getElementById('emaile').style.display = "none";
         }

        //Mobile Number Validation
        if(mnumber.value == "" || mnumber.value.length <= 7)
         {
         	document.getElementById('mnumbere').style.display = "block";
            mnumber.focus();
            mnumber.setAttribute("class", "form-control error");
            return false;
         } else {
            document.getElementById('mnumbere').style.display = "none";
         }

        //Password Validation
        if(pass.value == "" )
         {
         	document.getElementById('passe').style.display = "block";
            pass.focus();
            pass.setAttribute("class", "form-control error");
            return false;
         } else {
            document.getElementById('passe').style.display = "none";
         }

        //Confirm Password Validation
        if(cpass.value == "" )
         {
         	document.getElementById('cpasse').style.display = "block";
            cpass.focus();
            cpass.setAttribute("class", "form-control error");
            return false;
         } else {
            document.getElementById('cpasse').style.display = "none";
         }

        //Checking if 2 passwords are same
        if (pass.value != cpass.value ) {
            // console.log(pass.value);
            // console.log(cpass.value);
            cpass.focus();
            cpass.setAttribute("class", "form-control error");
        	document.getElementById('nomatch').style.display = "block";
            return false;
        } else {
            document.getElementById('nomatch').style.display = "none";
        }
}
