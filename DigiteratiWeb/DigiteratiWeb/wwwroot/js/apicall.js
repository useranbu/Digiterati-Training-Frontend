console.log("Code is executing")


function dataread() {
    $.get("https://localhost:7091/api/Employee/GetEmployee", function(data, status) {

        if (data) {
            let code = ""
            for (let x in data) {
                code += "<tr>"
                code += "<td>" + data[x].employeeId + "</td>"
                code += "<td>" + data[x].name + "</td>"
                code += "<td>" + data[x].status + "</td>"
                code += "<td>" + data[x].manager + "</td>"
                code += "<td>" + data[x].wfmmanager + "</td>"
                code += "<td>" + data[x].email + "</td>"
                code += "<td>" + data[x].lockstatus + "</td>"
                code += "<td>" + data[x].experience + "</td>"
                code += "<td>" + data[x].profile_Id + "</td>"
                code += "<td>"
                for (let y in data[x].skills)
                    code += data[x].skills[y] + "  "
                code += "</td>"
                code += "</tr>"
            }
            $("#tdata").html(code)
        }

    });
}

dataread()