(function($) {
    "use strict";


    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('mailform');
    if(myParam==='success')
    {
        alert('Your email was sent successfully');
        window.location.assign('https://josephrhopkins88.github.io');
    }

// Contact Form Submition
function checkRequire(formId , targetResp){
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object')? $(formId):$('#'+formId);
    target.find('input , textarea , select').each(function(){
        if($(this).hasClass('require')){
            if($(this).val().trim() === ''){
                check = 1;
                $(this).focus();
                targetResp.html('You missed out some fields.');
                $(this).addClass('error');
                return false;
            }else{
                $(this).removeClass('error');
            }
        }
        if($(this).val().trim() !== ''){
            var valid = $(this).attr('data-valid');
            if(typeof valid != 'undefined'){
                if(!eval(valid).test($(this).val().trim())){
                    $(this).addClass('error');
                    $(this).focus();
                    check = 1;
                    targetResp.html($(this).attr('data-error'));
                    return false;
                }else{
                    $(this).removeClass('error');
                }
            }
        }
    });
    return check;
}
$(".submitForm").on("click", function() {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm , errroTarget);
    // if(check === 0){
    //     var formDetail = new FormData(targetForm[0]);
    //     formDetail.append('form_type' , _this.attr('form-type'));
    //     $.ajax({
    //         method : 'post',
    //         url : 'https://samko.com/JoeResume/contactForm.php',
    //         data:formDetail,
    //         cache:false,
    //         contentType: false,
    //         processData: false
    //     }).done(function(resp){
    //         if(resp === 1){
    //             targetForm.find('input').val('');
    //             targetForm.find('textarea').val('');
    //             errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
    //         }else{
    //             errroTarget.html('<p style="color:red;">Something went wrong please try again later.</p>');
    //         }
    //     });
    // }
});


})(jQuery);