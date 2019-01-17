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

var fname = $("#fname");
var lname = $("#lname");
var mname = $("#mname");
var dob = $("#dob");
var password = $("#password");
var repassword = $("#repassword");
var email = $("#mail");
var phone1 = $("#phone1");
var phone2 = $("#phone2");
var address1 = $("#address1");
var city1 = $("#city1");
var state1 = $("#state1");
var country1 = $("#country1");
var pincode1 = $("#pincode1");
var address2 = $("#address2");
var city2 = $("#city2");
var state2 = $("#state2");
var country2 = $("#country2");
var pincode2 = $("#pincode2");
var interest = $("#others");
var captcha = $("#captcha");


function check_empty(value,error_id,error)
{
	if(value == "")
	{
		$(error_id).html('This field cannot be empty');
		return false;
	}
	else
	{
		error = true;
	}
}

function check_empty_gender(error_id)
{
	if ($('#male').is(':checked') || $('#female').is(':checked'))
  	{
  		error_gender = true;
  	}
  	else
  	{
  		$(error_id).html('This field cannot be empty');
  		
  	}
}

function check_letters(value,error_id,error)
{
	if(!(/^[a-zA-Z]+$/.test(value)))
	{
		$(error_id).html('Enter only characters');
		return false;
	}
	else
	{
		$(error_id).html('');
		return true;
	}
}

function check_mname(value,error_id)
{
	if(value != "")
	{
		if(!(/^[a-zA-Z]+$/.test(value)))
		{
			$(error_id).html('Enter only characters');
			return false;
		}
		else
		{
			$(error_id).html('');
		}
	}
	if(value == "")
	{
		$(error_id).html('');
	}
}

function check_dob(value,error_id)
{
	if(!(/(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/.test(value)))
	{
		$(error_id).html('Enter valid date');
		return false;
	}
	if(/(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/.test(value))
	{
		var arr = (dob.val()).split("/");
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
                  $(error_id).html('Enter valid date');
                  return false;
                }
            }
            else
            {
            	if(day>30)
            	{
                  	$(error_id).html('Enter valid date');
            		return false;
            	}
            }
        }
        if(currentdate.getFullYear() - nDOB.getFullYear() < 16)
        {
        	$(error_id).html('Should be above 16 years');
        	return false;
        }
        if(currentdate.getFullYear() - nDOB.getFullYear() == 16)
        {
        	if (currentdate.getMonth() < nDOB.getMonth())
        	{
        		$(error_id).html('Should be above 16 years');
               	return false;
            }
        }
        if (currentdate.getMonth() == nDOB.getMonth()) 
        {
            if (currentdate.getDate() < nDOB.getDate()) 
            {
            	$(error_id).html('Should be above 16 years');
    			return false;
            }
        }
        $(error_id).html('');
        return true;
	}
}

function check_password(value,error_id)
{
	if(!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value)))
	{
		$(error_id).html('Password should contain atleast 8 characters and should include a number,a special char, an uppercase and a lowercase letter');
		return false;
	}
	else
	{
		$(error_id).html('');
		return true;
	}
}

function check_repassword(value1,value2,error_id)
{
	if(value1 != value2)
	{
		$(error_id).html('Passwords do not match');
	}
	else
  	{
  		$(error_id).html('');
  		return true;
  	}
}

function check_email(value,error_id)
{
	if(!( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)))
	{
		$(error_id).html('Enter valid email');
		return false;
	}
	else
	{
		$(error_id).html('');
		return true;
	}
}

function check_phone(value,error_id)
{
	if(!( /^[2-9]\d{2}\d{3}\d{4}$/.test(value)))
	{
		$(error_id).html('Enter valid number');
		return false;
	}
	else
	{
		$(error_id).html('');
		return true;
	}
}

function check_phone2(value,error_id)
{
	if(value != "")
	{
		if(!(/^[2-9]\d{2}\d{3}\d{4}$/.test(value)))
		{
			$(error_id).html('Enter valid number');
			return false;
		}
		else
		{
			$(error_id).html('');
		}
	}
	if(value == "")
	{
		$(error_id).html('');
	}
}

function check_pin(value,error_id)
{
	if(!( /^[0-9]*$/.test(value)))
	{
		$(error_id).html('Enter only numbers');
		return false;
	}
	else
	{
		$(error_id).html('');
		return true;
	}
}

function check_address(value,error_id,error)
{
	if(!( /^\d{1,3}?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/.test(value)))
	{
		$(error_id).html('Enter valid address');
		return false;
	}
	else
	{
		$(error_id).html('');
		return true;
	}
}

function check_interest(value,error_id,error)
{
	var l = $('input[type = checkbox]:checked').length;
	if(l==0)
	{
		if(value == '')
		{
			$(error_id).html('Please fill your interest');
			return false;
		}
		else
		{
			$(error_id).html('');
			return true;
		}
	}
	else
	{	
		$(error_id).html('');
		return true;
	}
}

function check_captcha(value,error_id)
{
	if(value != "")
	{
		$(error_id).html('');
		return true;
	}
}



function validate()
{

	//check for correct pattern

	check_letters(fname.val(),"#fname_error_message",error_fname);
	check_mname(mname.val(),"#mname_error_message");
	check_letters(lname.val(),"#lname_error_message",error_lname);
	check_dob(dob.val(),"#dob_error_message",error_dob);
	check_password(password.val(),"#password_error_message",error_password);
	check_repassword(repassword.val(),password.val(),"#repassword_error_message",error_repassword);
	check_email(email.val(),"#email_error_message",error_email);
	check_phone(phone1.val(),"#phone1_error_message",error_phone1);
	check_phone2(phone2.val(),"#phone2_error_message");
	check_address(address1.val(),"#address1_error_message",error_address1);
	check_letters(city1.val(),"#city1_error_message",error_city1);
	check_letters(state1.val(),"#state1_error_message",error_state1);
	check_letters(country1.val(),"#country1_error_message",error_country1);
	check_pin(pincode1.val(),"#pincode1_error_message",error_pincode1);
	check_address(address2.val(),"#address2_error_message",error_address2);
	check_letters(city2.val(),"#city2_error_message",error_city2);
	check_letters(state2.val(),"#state2_error_message",error_state2);
	check_letters(country2.val(),"#country2_error_message",error_country2);
	check_pin(pincode2.val(),"#pincode2_error_message",error_pincode2);
	check_interest(interest.val(),"#interests_error_message",error_interest);
	check_captcha(captcha.val(),"#captcha_error_message",error_captcha);

	//check if the fields are empty

	check_empty(fname.val(),"#fname_error_message",error_fname);
	check_empty(lname.val(),"#lname_error_message",error_lname);
	check_empty(dob.val(),"#dob_error_message",error_dob);
	check_empty(password.val(),"#password_error_message",error_password);
	check_empty(repassword.val(),"#repassword_error_message",error_repassword);
	check_empty_gender("#gender_error_message",error_gender);
	check_empty(email.val(),"#email_error_message",error_email);
	check_empty(phone1.val(),"#phone1_error_message",error_phone1);
	check_empty(address1.val(),"#address1_error_message",error_address1);
	check_empty(city1.val(),"#city1_error_message",error_city1);
	check_empty(state1.val(),"#state1_error_message",error_state1);
	check_empty(country1.val(),"#country1_error_message",error_country1);
	check_empty(pincode1.val(),"#pincode1_error_message",error_pincode1);
	check_empty(address2.val(),"#address2_error_message",error_address2);
	check_empty(city2.val(),"#city2_error_message",error_city2);
	check_empty(state2.val(),"#state2_error_message",error_state2);
	check_empty(country2.val(),"#country2_error_message",error_country2);
	check_empty(pincode2.val(),"#pincode2_error_message",error_pincode2);
	check_interest(interest.val(),"#interests_error_message",error_interest);
	check_empty(captcha.val(),"#captcha_error_message",error_captcha);

	var captchaQ = generateCaptcha(1);
  	if(captchaQ == "false")
	{
    $("#captcha_error_message").html('Please enter correct answer');
    var a = generateCaptcha(0);
   	$("#captcha").html("");
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

$(function()
{
   generateCaptcha(0);
});

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
   ans = eval (z);
   $('#captchaq').html(z);
   if(/^[0-9]+$/.test(ans.toString()) === false )
	{
		generateCaptcha(0);
	}
   
  }
  else
  {
     if($("#captcha").val() != ans)
    {
      returnR = "false";
      $("#captcha_error_message").html('Please enter correct answer');
    }
    else
    {
    	$("#captcha_error_message").html('');
    }
  }
  return returnR;

}

$(document).on('change', '#fname', function()
{
	error_fname = check_letters(fname.val(),"#fname_error_message");
});

$(document).on('change', '#mname', function()
{
	check_mname(mname.val(),"#mname_error_message");
});

$(document).on('change', '#lname', function()
{
	error_lname = check_letters(lname.val(),"#lname_error_message");
});

$(document).on('change', '#dob', function()
{
	error_dob = check_dob(dob.val(),"#dob_error_message");
});

$(document).on('change', '#password', function()
{
	error_password = check_password(password.val(),"#password_error_message");
	if(password.val() != "")
	{
		$("#repassword").removeAttr("disabled");
	}
});

$(document).on('change', '#repassword', function()
{
	error_repassword = check_repassword(password.val(),repassword.val(),"#repassword_error_message");
});

$(document).on('change','#male',function()
{
	$("#gender_error_message").html('');
	error_gender = true;
});

$(document).on('change','#female',function()
{
	$("#gender_error_message").html('');
	error_gender = true;
});

$(document).on('change', '#mail', function()
{
	error_email = check_email(email.val(),"#email_error_message");
});

$(document).on('change', '#phone1', function()
{
	error_phone1 = check_phone(phone1.val(),"#phone1_error_message");
});

$(document).on('change', '#phone2', function()
{
	check_phone2(phone2.val(),"#phone2_error_message");
});

$(document).on('change', '#address1', function()
{
	error_address1 = check_address(address1.val(),"#address1_error_message");
});

$(document).on('change', '#city1', function()
{
	error_city1 = check_letters(city1.val(),"#city1_error_message");
});

$(document).on('change', '#state1', function()
{
	error_state1 = check_letters(state1.val(),"#state1_error_message");
});

$(document).on('change', '#country1', function()
{
	error_country1 = check_letters(country1.val(),"#country1_error_message");
});

$(document).on('change', '#pincode1', function()
{
	error_pincode1 = check_pin(pincode1.val(),"#pincode1_error_message");
});

$(document).on('change', '#address2', function()
{
	error_address2 = check_address(address2.val(),"#address2_error_message");
});

$(document).on('change', '#city2', function()
{
	error_city2 = check_letters(city2.val(),"#city2_error_message");
});

$(document).on('change', '#state2', function()
{
	error_state2 = check_letters(state2.val(),"#state2_error_message");
});

$(document).on('change', '#country2', function()
{
	error_country2 = check_letters(country2.val(),"#country2_error_message");
});

$(document).on('change', '#pincode2', function()
{
	error_pincode2 = check_pin(pincode2.val(),"#pincode2_error_message");
});

$(document).on('change', '#others', function()
{
	$("#interests_error_message").html('');
	error_interest = true;
});

$(document).on('change','user_interest',function() //disappear the error message
{
		$("#interests_error_message").html('');
		error_interest = true;
});

$(document).on('change','#books',function() //disappear the error message
{
		$("#interests_error_message").html('');
		error_interest = true;
});

$(document).on('change','#photography',function() //disappear the error message
{
		$("#interests_error_message").html('');
		error_interest = true;
});

$(document).on('change', '#captcha', function()
{
	if($("#captcha").val() != ans)
    {
     	 $("#captcha_error_message").html('Please enter correct answer');
    }
    else
    {
    	$("#captcha_error_message").html('');
    }
	error_captcha = true;
});

$(document).on('change','#no',function()  //checking permanent and current address for similarity
{
	$("#address2").removeAttr("disabled");
	$("#city2").removeAttr("disabled");
	$("#state2").removeAttr("disabled");
	$("#country2").removeAttr("disabled");
	$("#pincode2").removeAttr("disabled");

	$("#address2").val('');
	$("#city2").val('');
	$("#state2").val('');
	$("#country2").val('');
	$("#pincode2").val('');
});

$(document).on('change','#yes',function()
{
	$("#address2").attr('disabled', true);
	$("#city2").attr('disabled', true);
	$("#state2").attr('disabled', true);
	$("#country2").attr('disabled', true);
	$("#pincode2").attr('disabled', true);

	$("#address2").val(address1.val());
	$("#city2").val(city1.val());
	$("#state2").val(state1.val());
	$("#country2").val(country1.val());
	$("#pincode2").val(pincode1.val());

	$("#address2_error_message").html("");
	$("#city2_error_message").html("");
	$("#state2_error_message").html("");
	$("#country2_error_message").html("");
	$("#pincode2_error_message").html("");

	error_address2 = true;
	error_city2 = true;
	error_state2 = true;
	error_country2 = true;
	error_pincode2 = true;
});
