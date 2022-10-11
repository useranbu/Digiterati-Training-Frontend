

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

