

function login() {
  
        alert($("#username").val());
        $.ajax({
            url: 'https://localhost:7091/api/User/authenticate',
            dataType: "json",
            type: "GET",
            contentType: "application/json",
            data: 'Username=' + $("#username").val() + '&Password=' +$("#password").val(),
            processData: false,
            success: function (data, textStatus, jQxhr) {
                alert(data.token)
                //$.cookie('token', data.)
                if (data.role == "manager") {
                    window.location.replace('Lock')
                }
                else {
                    window.location.replace('Index')
                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                alert("User successfully authenticated")
            }
        });

}


//$.ajax({
//    type: "POST",
//    dataType: 'json',
//    contentType: 'application/json',
//    url: "https://localhost:7105/api/User/Authenticate",
//    data: { username: $("#username").val(), password: $("#password").val() },
//    processData: false,
//    success: function (data, textStatus, jQxhr) {
//        var json = $.parseJSON(data)
//        alert("User successfully authenticated")
//        alert(data);

//        //if (data.Role == "Manager") {
//        //    window.location.replace('~/Index')
//        //}
//        //else {
//        //    window.location.replace('~/Pages//Wfm_Manager.cshtml')
//        //}


//    },
//    error: function (jqXhr, textStatus, errorThrown) {
//        alert("User unsuccessfull");
//    }

//});