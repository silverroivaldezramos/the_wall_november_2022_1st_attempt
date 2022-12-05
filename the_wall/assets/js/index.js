$(document).ready(function(){
    $("body")
        .on("click", "#sign_in_button", signIn)
});

/* DOCU: Sign In validation for user <br />
 * Triggered by: .on("click", "#sign_in_button", SignIn) <br />
 * Last Updated Date: December 3, 2022 
 * @author: Silver  
 */
function signIn(e){
    e.preventDefault();
    let user_email = $("#email").val();
    let user_password = $("#password").val();
    console.log(user_email, user_password);
    if(user_email == "silverroiramos13@gmail.com" && user_password == "12345"){
        console.log("correct");
        window.location.replace("wall.html");    
    }
    else{
        $(this).closest("form").attr('action','#');

        if(user_email != "silverroiramos13@gmail.com"){
        $(".error").text("Incorrect Email");
        $(".error").removeClass('hidden');
        $("#email").addClass("input_error");
        }

        else{
            $(".error").text("Incorrect Password");
            $(".error").removeClass('hidden');
            $("#password").addClass("input_error");
        }
    }
}