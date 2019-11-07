function checkFirstName(){
    var firstName = $('#firstName').val();
    var reg = /^([a-zA-Z -.]){2,10}$/;
    if (reg.test(firstName)) {
        $('#firstNameError').text(' ');
        return true;
    }
    else {
        $('#firstNameError').text('First name should be 2 to 10 character');
        return false;
    }
}





$('#firstName').keyup(function () {
    checkFirstName();

})


function checkLastName (){
    var lastName = $('#lastName').val();
    var reg = /^([a-zA-Z -.]){2,10}$/;
    if(reg.test(lastName)) {
        $('#lastNameError').text(' ');
        return true;
    }
    else {
        $('#lastNameError').text('Last name should be 2 to 10 character');
        return false;
    }
}


$('#lastName').keyup(function () {
    checkLastName()
})

function checkEmailAddress(){
    var emailAddress = $('#emailAddress').val();
    var reg = /^([a-zA-A0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if(reg.test(emailAddress)) {
        $('#emailAddressError').text(' ');
        return true;
    }
    else {
        $('#emailAddressError').text('Email address is invalid');
        return false;
    }
}

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});



function checkPassword(){
    var password = $('#password').val();
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(reg.test(password)) {
        $('#PasswordError').text(' ');
        return true;
    }
    else {
        $('#PasswordError').text('Password formate is in valide');
        return false;
    }
}


$('#password').blur(function () {
    checkPassword();
});

$('#password').keyup(function () {
    $('#PasswordError').text(' ');

});

$('#password').click(function () {
    $('#PasswordError').text('password must have 1 lowercase & uppercase letter , 1 number & one special character like !,#,%,&')

});


function checkConfirmPassword(){
    var confirmPassword = $('#confirmPassword').val();
    var password = $('#password').val();
    if(password == confirmPassword){
        $('#confirmPasswordError').text(' ');
        return true;
    }
    else {
        $('#confirmPasswordError').text('password & confirm Password does not same')
        return false;
    }
}


$('#confirmPassword').blur(function () {
    checkConfirmPassword()
});

$('#confirmPassword').keyup(function () {
    $('#confirmPasswordError').text(' ');

});

$('#confirmPassword').click(function () {
    $('#confirmPasswordError').text('password & confirm password should be same')
});

$('#showHide').click(function () {
    var attrValue = $('#password').attr('type');
    if(attrValue == 'password') {
        $('#password').attr('type','text');
    }
    else {
        $('#password').attr('type','password');
    }
});
function checkGenderInfo(){
    var genderInfo = $('input[type"radio"]:checked').val();
    if(genderInfo == 'male' || genderInfo == 'femail') {
        $('#genderError').text(' ');
        return true;
    }
    else {
        $('#genderError').text('please give your gender info');
        return false;
    }
}

function checkDistricName(){
    var districValue = $('#distric').val();
    if(districValue == 'demo') {
        $('#districError').text('please give us your district info')
        return false;
    }
    else {
        $('#districErrorr').text(' ');
        return true;
    }
}

$('#form').submit(function () {
if(checkFirstName() == true && checkLastName() == true && checkEmailAddress() == true && checkPassword() == true && checkConfirmPassword() == true && checkGenderInfo() == true && checkDistricName() == true){
    return true;
}
else {
    return false;
}
});















$(window).scroll(function () {
    var menuposition = $('#menu').position();
    var windowMenuPosition = $(window).scrollTop();
    if (windowMenuPosition >= menuposition.top)
        $('#mainUl').css({
            'position': 'fixed',
            'top': '0px',
            'width'   :  '90%',

        });
    else {

        $('#mainUl').css({
            'position': 'relative',
            'top': '0px',
        });
    }
});