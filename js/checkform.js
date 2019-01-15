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

var form_val = document.forms["myForm"];

var fname = form_val["user_fname"];
var lname = form_val["user_lname"];
var mname = form_val["user_mname"];
var dob = form_val["user_dob"];
var password = form_val["user_password"];
var repassword = form_val["user_repassword"];
var gender = document.getElementsByName("gender");
var email = form_val["user_email"];
var phone1 = form_val["user_phone1"];
var phone2 = form_val["user_phone2"];
var address1 = form_val["user_address1"];
var city1 = form_val["user_city1"];
var state1 = form_val["user_state1"];
var country1 = form_val["user_country1"];
var pincode1 = form_val["user_pincode1"];
var address2 = form_val["user_address2"];
var city2 = form_val["user_city2"];
var state2 = form_val["user_state2"];
var country2 = form_val["user_country2"];
var pincode2 = form_val["user_pincode2"];
var interest = form_val["user_interest1"];
var captcha = form_val["user_captcha"];


function check_empty(value,error_id,error)
{
	if(value == "")
	{
		document.getElementById(error_id).innerHTML = 'This field cannot be empty';
		return false;
	}
	else
	{
		error = true;
	}
}

function check_empty_gender(value,error_id)
{
	if (gender[0].checked == true || gender[1].checked == true)
  	{
  		error_gender = true;
  	}
  	else
  	{
  		document.getElementById("gender_error_message").innerHTML = 'This field cannot be empty';
  		
  	}
}

function check_letters(value,error_id,error)
{
	if(!(/^[a-zA-Z]+$/.test(value)))
	{
		document.getElementById(error_id).innerHTML = 'Enter only characters';
		return false;
	}
	else
	{
		document.getElementById(error_id).innerHTML = '';
		return true;
	}
}

function check_mname(value,error_id)
{
	if(value != "")
	{
		if(!(/^[a-zA-Z]+$/.test(value)))
		{
			document.getElementById(error_id).innerHTML = 'Enter only characters';
			return false;
		}
		else
		{
			document.getElementById(error_id).innerHTML = '';
		}
	}
}

function check_dob(value,error_id)
{
	if(!(/(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/.test(value)))
	{
		document.getElementById(error_id).innerHTML = 'Enter valid date';
		return false;
	}
	if(/(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/.test(value))
	{
		var arr = (dob.value).split("/");
		var day = parseInt(arr[0],10);
		var month = arr[1];
		var year = parseInt(arr[2],10);
		var nDOB = new Date(arr[1] + "/" + arr[0] + "/" + arr[2]);
		var currentdate = new Date();
		if(arr[1] == '02') 
        {
            if(year%4 == 0 || year%400 == 0)
            {
             	if(day>29)
                {
                  document.getElementById(error_id).innerHTML = 'Enter valid date';
                  return false;
                }
            }
            else
            {
            	if(day>30)
            	{
                  	document.getElementById(error_id).innerHTML = 'Enter valid date';
            		return false;
            	}
            }
        }
        if(currentdate.getFullYear() - nDOB.getFullYear() < 16)
        {
        	document.getElementById(error_id).innerHTML = 'Should be above 16 years';
        	return false;
        }
        if(currentdate.getFullYear() - nDOB.getFullYear() == 16)
        {
        	if (currentdate.getMonth() < nDOB.getMonth())
        	{
        		document.getElementById(error_id).innerHTML = 'Should be above 16 years';
               	return false;
            }
        }
        if (currentdate.getMonth() == nDOB.getMonth()) 
        {
            if (currentdate.getDate() < nDOB.getDate()) 
            {
            	document.getElementById(error_id).innerHTML = 'Should be above 16 years';
    			return false;
            }
        }
        document.getElementById(error_id).innerHTML = '';
        return true;
	}
}

function check_password(value,error_id)
{
	if(!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value)))
	{
		document.getElementById(error_id).innerHTML = 'Password should contain atleast 8 characters and should include a number,a special char and an uppercase and an lowercase letter';
		return false;
	}
	else
	{
		document.getElementById(error_id).innerHTML = '';
		return true;
	}
}

function check_repassword(value1,value2,error_id)
{
	if(value1 != value2)
	{
		document.getElementById(error_id).innerHTML = 'Passwords do not match';
	}
	else
  	{
  		document.getElementById(error_id).innerHTML = '';
  		return true;
  	}
}

function check_gender(value,error_id)
{
	if(gender[0].checked == true || gender[1].checked == true)
	{
		document.getElementById(error_id).innerHTML = '';
		return true;
	}
	else
	{
		return false;
	}
}

function check_email(value,error_id)
{
	if(!( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)))
	{
		document.getElementById(error_id).innerHTML = 'Enter valid email';
		return false;
	}
	else
	{
		document.getElementById(error_id).innerHTML = '';
		return true;
	}
}

function check_phone(value,error_id)
{
	if(!( /^[2-9]\d{2}\d{3}\d{4}$/.test(value)))
	{
		document.getElementById(error_id).innerHTML = 'Enter valid number';
		return false;
	}
	else
	{
		document.getElementById(error_id).innerHTML = '';
		return true;
	}
}

function check_phone2(value,error_id)
{
	if(value != "")
	{
		if(!(/^[2-9]\d{2}\d{3}\d{4}$/.test(value)))
		{
			document.getElementById(error_id).innerHTML = 'Enter valid number';
			return false;
		}
		else
		{
			document.getElementById(error_id).innerHTML = '';
		}
	}
}

function check_pin(value,error_id)
{
	if(!( /^[0-9]*$/.test(value)))
	{
		document.getElementById(error_id).innerHTML = 'Enter only numbers';
		return false;
	}
	else
	{
		document.getElementById(error_id).innerHTML = '';
		return true;
	}
}

function check_address(value,error_id,error)
{
	if(!( /^\d{1,3}?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/.test(value)))
	{
		document.getElementById(error_id).innerHTML = 'Enter valid address';
		return false;
	}
	else
	{
		document.getElementById(error_id).innerHTML = '';
		return true;
	}
}

function check_interest(value,error_id)
{
	if(!(document.getElementById('sports').checked) && !(document.getElementById('books').checked) 
  		&& !(document.getElementById('photography').checked))
	{
		if(value == '')
		{
			document.getElementById(error_id).innerHTML = 'Please fill your interest';
			return false;
		}
		else
		{
			document.getElementById(error_id).innerHTML = '';
			return true;
		}
	}
	else
	{	
		document.getElementById(error_id).innerHTML = '';
		return true;
	}
}

function check_captcha(value,error_id,error)
{
	if(value != "")
	{
		document.getElementById(error_id).innerHTML = '';
		return true;;
	}
}



function validate()
{

	//check for correct pattern

	check_letters(fname.value,"fname_error_message",error_fname);
	check_mname(mname.value,"mname_error_message");
	check_letters(lname.value,"lname_error_message",error_lname);
	check_dob(dob.value,"dob_error_message",error_dob);
	check_password(password.value,"password_error_message",error_password);
	check_repassword(repassword.value,password.value,"repassword_error_message",error_repassword);
	check_gender(gender.value,"gender_error_message",error_gender);
	check_email(email.value,"email_error_message",error_email);
	check_phone(phone1.value,"phone1_error_message",error_phone1);
	check_phone2(phone2.value,"phone2_error_message");
	check_address(address1.value,"address1_error_message",error_address1);
	check_letters(city1.value,"city1_error_message",error_city1);
	check_letters(state1.value,"state1_error_message",error_state1);
	check_letters(country1.value,"country1_error_message",error_country1);
	check_pin(pincode1.value,"pincode1_error_message",error_pincode1);
	check_address(address2.value,"address2_error_message",error_address2);
	check_letters(city2.value,"city2_error_message",error_city2);
	check_letters(state2.value,"state2_error_message",error_state2);
	check_letters(country2.value,"country2_error_message",error_country2);
	check_pin(pincode2.value,"pincode2_error_message",error_pincode2);
	check_interest(interest.value,"interests_error_message",error_interest);
	check_captcha(captcha.value,"captcha_error_message",error_captcha);

	//check if the fields are empty

	check_empty(fname.value,"fname_error_message",error_fname);
	check_empty(lname.value,"lname_error_message",error_lname);
	check_empty(dob.value,"dob_error_message",error_dob);
	check_empty(password.value,"password_error_message",error_password);
	check_empty(repassword.value,"repassword_error_message",error_repassword);
	check_empty_gender(gender.value,"gender_error_message",error_gender);
	check_empty(email.value,"email_error_message",error_email);
	check_empty(phone1.value,"phone1_error_message",error_phone1);
	check_empty(address1.value,"address1_error_message",error_address1);
	check_empty(city1.value,"city1_error_message",error_city1);
	check_empty(state1.value,"state1_error_message",error_state1);
	check_empty(country1.value,"country1_error_message",error_country1);
	check_empty(pincode1.value,"pincode1_error_message",error_pincode1);
	check_empty(address2.value,"address2_error_message",error_address2);
	check_empty(city2.value,"city2_error_message",error_city2);
	check_empty(state2.value,"state2_error_message",error_state2);
	check_empty(country2.value,"country2_error_message",error_country2);
	check_empty(pincode2.value,"pincode2_error_message",error_pincode2);
	check_interest(interest.value,"interests_error_message",error_interest);
	check_empty(captcha.value,"captcha_error_message",error_captcha);

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

(function()
{
   generateCaptcha(0);
})();

function randomNumber(min, max)
{
  let random_number = Math.random() * (max-min) + min;
    return Math.floor(random_number);
}

var ans;
function generateCaptcha(check)
{
  var returnR = true;
  if(check == 0)
  {
   let op = ['+','-','*','/'];
   var x = randomNumber(50,100);
   var y = randomNumber(1,50);
   var z = x.toString();
   z = z + op[randomNumber(0,4)];
   z = z + y.toString();
   ans = Math.floor(eval (z));
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

function fname_field()
{
	error_fname = check_letters(fname.value,"fname_error_message");
}

function mname_field()
{
	check_mname(mname.value,"mname_error_message");
}

function lname_field()
{
	error_lname = check_letters(lname.value,"lname_error_message",error_lname);
}

function dob_field()
{
	error_dob = check_dob(dob.value,"dob_error_message",error_dob);
}

function password_field()
{
	error_password = check_password(password.value,"password_error_message",error_password);
	if(password.value != "")
	{
		document.getElementById("repassword").removeAttribute("disabled");
	}
}

function repassword_field()
{
	error_repassword = check_repassword(password.value,repassword.value,"repassword_error_message",error_repassword);
}

function gender_field()
{
	document.getElementById("gender_error_message").innerHTML = '';
}

function email_field()
{
	error_email = check_email(email.value,"email_error_message",error_email);
}

function phone1_field()
{
	error_phone1 = check_phone(phone1.value,"phone1_error_message",error_phone1);
}

function phone2_field()
{
	check_phone2(phone2.value,"phone2_error_message");
}

function address1_field()
{
	error_address1 = check_address(address1.value,"address1_error_message",error_address1);
}

function city1_field()
{
	error_city1 = check_letters(city1.value,"city1_error_message",error_city1);
}

function state1_field()
{
	error_state1 = check_letters(state1.value,"state1_error_message",error_state1);
}

function country1_field()
{
	error_country1 = check_letters(country1.value,"country1_error_message",error_country1);
}

function pincode1_field()
{
	error_pincode1 = check_pin(pincode1.value,"pincode1_error_message",error_pincode1);
}

function address2_field()
{
	error_address2 = check_address(address2.value,"address2_error_message",error_address2);
}

function city2_field()
{
	error_city2 = check_letters(city2.value,"city2_error_message",error_city2);
}

function state2_field()
{
	error_state2 = check_letters(state2.value,"state2_error_message",error_state2);
}

function country2_field()
{
	error_country2 = check_letters(country2.value,"country2_error_message",error_country2);
}

function pincode2_field()
{
	error_pincode2 = check_pin(pincode2.value,"pincode2_error_message",error_pincode2);
}

function interests_field()
{
	document.getElementById("interests_error_message").innerHTML = '';
	error_interest = true;
}

function captcha_field()
{
	document.getElementById("captcha_error_message").innerHTML = '';
	error_captcha = true;
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

		document.getElementById("address2").value = '';
		document.getElementById("city2").value = '';
		document.getElementById("state2").value = '';
		document.getElementById("country2").value = '';
		document.getElementById("pincode2").value = '';
	}
	else
	{
		document.getElementById("address2").setAttribute('disabled', true);
		document.getElementById("city2").setAttribute('disabled', true);
		document.getElementById("state2").setAttribute('disabled', true);
		document.getElementById("country2").setAttribute('disabled', true);
		document.getElementById("pincode2").setAttribute('disabled', true);

		document.getElementById("address2").value = address1.value;
		document.getElementById("city2").value = city1.value;
		document.getElementById("state2").value = state1.value;
		document.getElementById("country2").value = country1.value;
		document.getElementById("pincode2").value = pincode1.value;

		document.getElementById("address2_error_message").innerHTML = "";
		document.getElementById("city2_error_message").innerHTML = "";
		document.getElementById("state2_error_message").innerHTML = "";
		document.getElementById("country2_error_message").innerHTML = "";
		document.getElementById("pincode2_error_message").innerHTML = "";

		error_address2 = true;
		error_city2 = true;
		error_state2 = true;
		error_country2 = true;
		error_pincode2 = true;
	}
}