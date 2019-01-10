debugger;

var error_fname = false;
var error_lname = false;
var error_dob = false;
var error_password = false;
var error_repassword = false;
var error_gender = false;
var error_email = false;
var error_phone1 = false;
var error_address1 = false;
var error_city1 = false;
var error_state1 = false;
var error_country1 = false;
var error_pincode1 = false;
var error_address2 = false;
var error_city2 = false;
var error_state2 = false;
var error_country2 = false;
var error_pincode2 = false;
var error_interest = false;
var error_captcha = false;

function validate() //for form validation
{
	var fname = document.forms["myForm"]["user_fname"].value;
	if(fname == "")
	{
		document.getElementById("fname_error_message").innerHTML = 'This field cannot be empty';
	}
	else
	{
		if (!( /^[a-zA-Z]+$/.test(fname)))
    	{
    	document.getElementById("fname_error_message").innerHTML = 'Enter only characters';
    	
  		}
  		error_fname = true;
	}
	
  	var mname = document.forms["myForm"]["user_mname"].value;
  	if (mname != "") 
  	{
  		if (!( /^[a-zA-Z]+$/.test(mname)))
	    {
	    	document.getElementById("mname_error_message").innerHTML = 'Enter only characters';
	    	error_mname = true;	  	
	    }
  	}
  
  	var lname = document.forms["myForm"]["user_lname"].value;
	if(lname == "")
	{
		document.getElementById("lname_error_message").innerHTML = 'This field cannot be empty';
	}
	else 
	{
		if (!( /^[a-zA-Z]+$/.test(lname)))
	    {
	    	document.getElementById("lname_error_message").innerHTML = 'Enter only characters';
	    	error_lname = true;
	  	}
	}
  	

  	var dob = document.forms["myForm"]["user_dob"].value;
  	var d=0;
	if(dob == "")
	{
		document.getElementById("dob_error_message").innerHTML = 'This field cannot be empty';
		
	}

	else {
		var arr = dob.split("/");
		var day = parseInt(arr[0],10);
		var month = arr[1];
		var year = parseInt(arr[2],10);
		if(year<=2003)
		{
			if(year%400 == 0 || year%4 == 0)
			{
				if(month == '01' || month == '03' || month == '05' || month == '07' || month == '08'|| month == '10' || month == '12' )
				{
					if(day>=1 && day<=31)
					{
						d=1;
					}
				}
				else if (month == '04' || month == '06' || month == '09' || month == '11') 
				{
					if (day>=1 && day<=30) 
					{
						d=1;
					}
				}
				else
				{
					if (day>=1 && day<=29)
					{
						d=1;
					}
				}
			}
			else
			{
				if(month == '01' || month == '03' || month == '05' || month == '07' || month == '08'|| month == '10' || month == '12' )
				{
					if(day>=1 && day<=31)
					{
						d=1;
					}
				}
				else if (month == '04' || month == '06' || month == '09' || month == '11') 
				{
					if (day>=1 && day<=30) 
					{
						d=1;
					}
				}
				else
				{
					if (day>=1 && day<=28)
					{
						d=1;
					}
				}
			}
			if (d != 1) 
			{
				document.getElementById("dob_error_message").innerHTML = 'Please enter correct date';
				error_dob = true;
			}
		}
		else
		{
			document.getElementById("dob_error_message").innerHTML = 'Should be 16 years or above';
		}
	}
	
  	var password = document.forms["myForm"]["user_password"].value;
	if(password == "")
	{
		document.getElementById("password_error_message").innerHTML = 'This field cannot be empty';
		
	}
	else
	{
		 if (!( (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).test(password)))
	    {

	    	document.getElementById("password_error_message").innerHTML = 'Password should contain atleast 8 characters, a number,a special char and a capital and small letter';
	    	
	    	
	  	}
	  	error_password = true;
	}
  	var gender = document.getElementsByName("gender");
  	if (gender[0].checked == true || gender[1].checked == true)
  	{
  		error_gender = true;
  	}
  	else
  	{
  		document.getElementById("gender_error_message").innerHTML = 'This field cannot be empty';
  		
  	}

  	var email = document.forms["myForm"]["user_email"].value;
  	if(email == "")
	{
		document.getElementById("email_error_message").innerHTML = 'This field cannot be empty';
		
	}
	else if (!( (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)))
    {

    	document.getElementById("email_error_message").innerHTML = 'Password enter email id in correct format';
    	
    	error_email = true;
  	}
  	else
  	{
  		error_email = true;
  	}

  	var phone1 = document.forms["myForm"]["user_phone1"].value;
  	if(phone1 == "")
	{
		document.getElementById("phone1_error_message").innerHTML = 'This field cannot be empty';
		
	}
	else if (!( (/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/).test(phone1)))
    {

    	document.getElementById("phone1_error_message").innerHTML = 'Please enter valid number';
    	
    	error_phone1 = true;
  	}
  	else
  	{
  		error_phone1 = true;
  	}

  	var phone2 = document.forms["myForm"]["user_phone2"].value;
  	if(phone2 == "")
	{
		error_phone2 = true;
	}
	else if (!( (/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/).test(phone2)))
    {

    	document.getElementById("phone2_error_message").innerHTML = 'Please enter only digits';
    	
    	error_phone2 = true;
  	}
  	else
  	{
  		error_phone2 = true;
  	}

  	var address1 = document.forms["myForm"]["user_address1"].value;
  	if(address1 == "")
	{
		document.getElementById("address1_error_message").innerHTML = 'This field cannot be empty';
		
	}
	else if (!( (/^[a-zA-Z0-9\s,.'-]{3,}$/).test(address1)))
    {

    	document.getElementById("address1_error_message").innerHTML = 'Please enter valid address';
    	
    	error_address1 = true;
  	}
  	else
  	{
  		error_address1 = true;
  	}

  	var city1 = document.forms["myForm"]["user_city1"].value;
  	if(city1 == "")
	{
		document.getElementById("city1_error_message").innerHTML = 'This field cannot be empty';
		
	}
	else if (!( (/^[A-Za-z]+$/).test(city1)))
    {

    	document.getElementById("city1_error_message").innerHTML = 'Please enter valid city';
    
    	error_city1 = true;
  	}
  	else
  	{
  		error_city1 = true;
  	}

  	var state1 = document.forms["myForm"]["user_state1"].value;
  	if(state1 == "")
	{
		document.getElementById("state1_error_message").innerHTML = 'This field cannot be empty';
	
	}
	else if (!( (/^[A-Za-z]+$/).test(state1)))
    {

    	document.getElementById("state1_error_message").innerHTML = 'Please enter valid state';
    
    	error_state1 = true;
  	}
  	else
  	{
  		error_state1 = true;
  	}

  	var country1 = document.forms["myForm"]["user_country1"].value;
  	if(country1 == "")
	{
		document.getElementById("country1_error_message").innerHTML = 'This field cannot be empty';
	
	}
	else if (!( (/^[A-Za-z]+$/).test(country1)))
    {

    	document.getElementById("country1_error_message").innerHTML = 'Please enter valid country';
    
    	error_country1 = true;
  	}
  	else
  	{
  		error_country1 = true;
  	}

  	var pincode1 = document.forms["myForm"]["user_pincode1"].value;
  	if(pincode1 == "")
	{
		document.getElementById("pincode1_error_message").innerHTML = 'This field cannot be empty';
		
	}
	else if (!( (/^[0-9]*$/).test(pincode1)))
    {

    	document.getElementById("pincode1_error_message").innerHTML = 'Please enter valid pincode';
    	
    	error_pincode1 = true;
  	}
  	else
  	{
  		error_pincode1 = true;
  	}

  	var address2 = document.forms["myForm"]["user_address2"].value;
  	if(address2 == "")
	{
		document.getElementById("address2_error_message").innerHTML = 'This field cannot be empty';
		
	}
	else if (!( (/^[a-zA-Z0-9\s,.'-]{3,}$/).test(address2)))
    {

    	document.getElementById("address2_error_message").innerHTML = 'Please enter valid address';
    	
    	error_address2 = true;
  	}
  	else
  	{
  		error_address2 = true;
  	}

  	var city2 = document.forms["myForm"]["user_city2"].value;
  	if(city2 == "")
	{
		document.getElementById("city2_error_message").innerHTML = 'This field cannot be empty';
		
	}
	else if (!( (/^[A-Za-z]+$/).test(city2)))
    {

    	document.getElementById("city2_error_message").innerHTML = 'Please enter valid city';
    	
    	error_city2 = true;
  	}
  	else
  	{
  		error_city2 = true;
  	}

  	var state2 = document.forms["myForm"]["user_state2"].value;
  	if(state2 == "")
	{
		document.getElementById("state2_error_message").innerHTML = 'This field cannot be empty';
		
	}
	else if (!( (/^[A-Za-z]+$/).test(state2)))
    {

    	document.getElementById("state2_error_message").innerHTML = 'Please enter valid state';
    	
    	error_state2 = true;
  	}
  	else
  	{
  		error_state2 = true;
  	}

  	var country2 = document.forms["myForm"]["user_country2"].value;
  	if(country2 == "")
	{
		document.getElementById("country2_error_message").innerHTML = 'This field cannot be empty';
		
	}
	else if (!( (/^[A-Za-z]+$/).test(country2)))
    {

    	document.getElementById("country2_error_message").innerHTML = 'Please enter valid country';
    	
    	error_country2 = true;
  	}
  	else
  	{
  		error_country2 = true;
  	}

  	var pincode2 = document.forms["myForm"]["user_pincode2"].value;
  	if(pincode2 == "")
	{
		document.getElementById("pincode2_error_message").innerHTML = 'This field cannot be empty';
	}
	else if (!( (/^[0-9]*$/).test(pincode2)))
    {

    	document.getElementById("pincode2_error_message").innerHTML = 'Please enter valid pincode';
  
    	error_pincode2 = true;
  	}
  	else
  	{
  		error_pincode2 = true;
  	}

  	var interest = document.forms["myForm"]["user_interest1"].value;
  	if(!(document.getElementById('sports').checked) || !(document.getElementById('books').checked) 
  		|| !(document.getElementById('photography').checked) || interest == "")
  	{
  		document.getElementById("interests_error_message").innerHTML = 'This field cannot be empty';
 
  	}
  	else
  	{
  		error_interest = true;
  	}

  	var captcha = document.forms["myForm"]["user_captcha"].value;
  	if(captcha == "")
	{
		document.getElementById("captcha_error_message").innerHTML = 'This field cannot be empty';
	}
  	else
  	{
  		error_captcha = true;
  	}

  	var captchaQ = generateCaptcha(1);
  	if(captchaQ == "false")
	{
    document.getElementById("captcha_error_message").innerHTML = 'Please enter correct answer';
    var a = generateCaptcha(0);
   	document.getElementById("captcha").innerHTML ="";
   	return false;
	}

	if(error_fname == false || error_lname == false || error_dob == false || error_password == false ||
		error_repassword == false || error_gender == false || error_phone1 == false || error_address1 == false ||
		error_city1 == false || error_state1 == false || error_country1 == false || error_pincode1 == false ||
		error_address2 == false || error_city2== false || error_state2 == false || error_country2 == false ||
		error_pincode2 == false || error_interest == false || error_captcha == false)
	{
		return false;
	}

}

function password_check() //comparing password
{
	var repassword = document.forms["myForm"]["user_repassword"].value;
	var password = document.forms["myForm"]["user_password"].value;
	if(password!=repassword)
  	{
  		document.getElementById("repassword_error_message").innerHTML='Passwords do not match';
  	}
  	else
  	{
  		error_repassword = true;
  	}
}

function password_field() //disabling password field
{
	var password = document.forms["myForm"]["user_password"].value;
	if(password != "")
	{	
		document.getElementById("repassword").removeAttribute("disabled");
	}
	if(!( (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).test(password)))
	{
		document.getElementById("password_error_message").innerHTML = 'Password should conatain atleast 8 characters, a number,a special char and a capital and small letter'
	}
	else
	{
		document.getElementById("password_error_message").innerHTML = "";
	}
}

function addcheck_field() //checking permanent and current address for same
{
	var add_check = document.querySelector('input[name=addcheck]:checked').value
	if(add_check == 'no')
	{
		document.getElementById("address2").removeAttribute("disabled");
		document.getElementById("city2").removeAttribute("disabled");
		document.getElementById("state2").removeAttribute("disabled");
		document.getElementById("country2").removeAttribute("disabled");
		document.getElementById("pincode2").removeAttribute("disabled");
	}
	else
	{
		document.getElementById("address2").setAttribute('disabled', true);
		document.getElementById("city2").setAttribute('disabled', true);
		document.getElementById("state2").setAttribute('disabled', true);
		document.getElementById("country2").setAttribute('disabled', true);
		document.getElementById("pincode2").setAttribute('disabled', true);	

	}
}

(function()
{
   generateCaptcha(0);
})();

function randomNumber(min ,max)
{
  let random_number = Math.random() * (max-min) + min;
    return Math.floor(random_number);
}

var ans;
function generateCaptcha(check)
{
  var returnR = true;
  if(check == 0){
   let op = ['+','-','*','/'];
   var x = randomNumber(50,100);
   var y = randomNumber(0,50);
   var z = x.toString();
   z = z + op[randomNumber(0,4)];
   z = z + y.toString();
   ans = eval (z);
   document.getElementById('captchaq').innerText = z;
  }
  else
  {
     if(document.getElementById("captcha").value != ans)
    {
      returnR = "false";
    }
  }
  return returnR;
}


function fname_field() //disappear the error message
{
	var fname = document.forms["myForm"]["user_fname"].value;
	if(!( /^[a-zA-Z]+$/.test(fname)))
	{
		document.getElementById("fname_error_message").innerHTML = 'Enter only characters';
	}
	else
	{
		document.getElementById("fname_error_message").innerHTML = '';
	}
}

function mname_field() //disappear the error message
{
	var mname = document.forms["myForm"]["user_mname"].value;
	if(!( /^[a-zA-Z]+$/.test(mname)))
	{
		document.getElementById("mname_error_message").innerHTML = 'Enter only characters';
	}
	else
	{
		document.getElementById("mname_error_message").innerHTML = '';
	}
}

function lname_field() //disappear the error message
{
	var lname = document.forms["myForm"]["user_lname"].value;
	if(!( /^[a-zA-Z]+$/.test(lname)))
	{
		document.getElementById("lname_error_message").innerHTML = 'Enter only characters';
	}
	else
	{
		document.getElementById("lname_error_message").innerHTML = '';
	}
}

function dob_field() //disappear the error message
{
	var dob = document.forms["myForm"]["user_dob"].value;
	if(dob != "")
	{
		var arr = dob.split("/");
		var day = parseInt(arr[0],10);
		var month = arr[1];
		var year = parseInt(arr[2],10);
		var d=0;
		if(year<=2003)
		{
			if(year%400 == 0 || year%4 == 0)
			{
				if(month == '01' || month == '03' || month == '05' || month == '07' || month == '08'|| month == '10' || month == '12' )
				{
					if(day>=1 && day<=31)
					{
						d=1;
					}
				}
				else if (month == '04' || month == '06' || month == '09' || month == '11') 
				{
					if (day>=1 && day<=30) 
					{
						d=1;
					}
				}
				else
				{
					if(month == '02')
					{
						if (day>=1 && day<=29)
						{
							d=1;
						}
					}
					
				}
			}
			else
			{
				if(month == '01' || month == '03' || month == '05' || month == '07' || month == '08'|| month == '10' || month == '12' )
				{
					if(day>=1 && day<=31)
					{
						d=1;
					}
				}
				else if (month == '04' || month == '06' || month == '09' || month == '11') 
				{
					if (day>=1 && day<=30) 
					{
						d=1; 
					}
				}
				else
				{
					if(month == '02')
					{
						if (day>=1 && day<=29)
						{
							d=1;
						}
					}
				}
			}

			if (d != 1) 
			{
				document.getElementById("dob_error_message").innerHTML = 'Enter valid date';
			}
			else
			{
				document.getElementById("dob_error_message").innerHTML = '';
			}
		}
		else
		{
			document.getElementById("dob_error_message").innerHTML = 'Should be 16 years or above';
		}

	}

	
}

function gender_field()
{
	document.getElementById("gender_error_message").innerHTML = '';
}

function email_field() //disappear the error message
{
	var email = document.forms["myForm"]["user_email"].value;
	if(!( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) // correct the format
	{
		document.getElementById("email_error_message").innerHTML = 'Enter valid email';
	}
	else
	{
		document.getElementById("email_error_message").innerHTML = '';
	}
}

function phone1_field() //disappear the error message
{
	var phone1 = document.forms["myForm"]["user_phone1"].value;
	if(!( /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone1))) // correct the format
	{
		document.getElementById("phone1_error_message").innerHTML = 'Enter valid number';
	}
	else
	{
		document.getElementById("phone1_error_message").innerHTML = '';
	}
}

function phone2_field() //disappear the error message
{
	var phone2 = document.forms["myForm"]["user_phone2"].value;
	if(!( /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone2))) // correct the format
	{
		document.getElementById("phone2_error_message").innerHTML = 'Enter valid number';
	}
	else
	{
		document.getElementById("phone2_error_message").innerHTML = '';
	}
}

function address1_field() //disappear the error message
{
	var address1 = document.forms["myForm"]["user_address1"].value;
	if(!( /^[a-zA-Z0-9\s,.'-]{3,}$/.test(address1))) // correct the format
	{
		document.getElementById("address1_error_message").innerHTML = 'Enter valid address';
	}
	else
	{
		document.getElementById("address1_error_message").innerHTML = '';
	}
}

function city1_field() //disappear the error message
{
	var city1 = document.forms["myForm"]["user_city1"].value;
	if(!( /^[A-Za-z]+([\ A-Za-z]+)*/.test(city1))) // correct the format
	{
		document.getElementById("city1_error_message").innerHTML = 'Enter valid city';
	}
	else
	{
		document.getElementById("city1_error_message").innerHTML = '';
	}
}

function state1_field() //disappear the error message
{
	var state1 = document.forms["myForm"]["user_state1"].value;
	if(!( /^[A-Za-z]+([\ A-Za-z]+)*/.test(state1))) // correct the format
	{
		document.getElementById("state1_error_message").innerHTML = 'Enter valid state';
	}
	else
	{
		document.getElementById("state1_error_message").innerHTML = '';
	}
}

function country1_field() //disappear the error message
{
	var country1 = document.forms["myForm"]["user_country1"].value;
	if(!( /^[A-Za-z]+([\ A-Za-z]+)*/.test(country1))) // correct the format
	{
		document.getElementById("country1_error_message").innerHTML = 'Enter valid country';
	}
	else
	{
		document.getElementById("country1_error_message").innerHTML = '';
	}
}

function pincode1_field() //disappear the error message
{
	var pincode1 = document.forms["myForm"]["user_pincode1"].value;
	if(!( /^[0-9]*$/.test(pincode1))) // correct the format
	{
		document.getElementById("pincode1_error_message").innerHTML = 'Enter valid pincode';
	}
	else
	{
		document.getElementById("pincode1_error_message").innerHTML = '';
	}
}

function address2_field() //disappear the error message
{
	var address2 = document.forms["myForm"]["user_address2"].value;
	if(!( /^[a-zA-Z0-9\s,.'-]{3,}$/.test(address2))) // correct the format
	{
		document.getElementById("address2_error_message").innerHTML = 'Enter valid address';
	}
	else
	{
		document.getElementById("address2_error_message").innerHTML = '';
	}
}

function city2_field() //disappear the error message
{
	var city2 = document.forms["myForm"]["user_city2"].value;
	if(!( /^[A-Za-z]+([\ A-Za-z]+)*/.test(city2))) // correct the format
	{
		document.getElementById("city2_error_message").innerHTML = 'Enter valid city';
	}
	else
	{
		document.getElementById("city2_error_message").innerHTML = '';
	}
}

function state2_field() //disappear the error message
{
	var state2 = document.forms["myForm"]["user_state2"].value;
	if(!( /^[A-Za-z]+([\ A-Za-z]+)*/.test(state2))) // correct the format
	{
		document.getElementById("state2_error_message").innerHTML = 'Enter valid state';
	}
	else
	{
		document.getElementById("state2_error_message").innerHTML = '';
	}
}

function country2_field() //disappear the error message
{
	var country2 = document.forms["myForm"]["user_country2"].value;
	if(!( /^[A-Za-z]+([\ A-Za-z]+)*/.test(country2))) // correct the format
	{
		document.getElementById("country2_error_message").innerHTML = 'Enter valid country';
	}
	else
	{
		document.getElementById("country2_error_message").innerHTML = '';
	}
}

function pincode2_field() //disappear the error message
{
	var pincode2 = document.forms["myForm"]["user_pincode2"].value;
	if(!( /^[0-9]*$/.test(pincode2))) // correct the format
	{
		document.getElementById("pincode2_error_message").innerHTML = 'Enter valid pincode';
	}
	else
	{
		document.getElementById("pincode2_error_message").innerHTML = '';
	}
}

function interests_field() //disappear the error message
{
		document.getElementById("interests_error_message").innerHTML = '';
}

function captcha_field() //disappear the error message
{
		document.getElementById("captcha_error_message").innerHTML = '';
}











