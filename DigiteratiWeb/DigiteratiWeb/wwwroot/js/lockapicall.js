﻿function lockdataread() {
    $.get("https://localhost:7091/api/Employee/GetEmployee", function (data, status) {

        if (data) {
            let code = ""
            for (let x in data) {
                code += "<tr>"
                code += "<td>" + data[x].employeeID + "</td>"
                code += "<td>" + data[x].employeeName + "</td>"
                code += "<td>" + data[x].status + "</td>"
                code += "<td>" + data[x].manager + "</td>"
                code += "<td>" + data[x].wfmManager + "</td>"
                code += "<td>" + data[x].email + "</td>"
                code += "<td>" + data[x].lockStatus + "</td>"
                code += "<td>" + data[x].experience + "</td>"
                code += "<td>" + data[x].profileId + "</td>"
                code += "<td>"
                for (let y in data[x].skills)
                    code += data[x].skills[y] + "  "
                code += "</td>"
                code += "<td> <button id=lockstatus> RequestLock </button> </td>"
                code += "</tr>"
            }
            $("#tdata").html(code)
        }

    });

    lockdataread()

    $(document).on('click', '#lockstatus', function () {
        var currow = $(this).closest('tr');
        var EmployeeId = currow.find("td:eq(0)").text();
        var name = currow.find("td:eq(1)").text();
        var Status = currow.find("td:eq(2)").text();
        var Manager = currow.find("td:eq(3)").text();
        var wfmmanager = currow.find("td:eq(4)").text();
        var email = currow.find("td:eq(5)").text();
        var lockStatus = currow.find("td:eq(6)").text();
        var Experience = currow.find("td:eq(7)").text();
        var ProfileId = currow.find("td:eq(8)").text();

        $.cookie("EmployeeId", EmployeeId);
        $.cookie("Status", status);
        $.cookie("Manager", Manager);

        window.location.href = "TextArea";
    });
}

