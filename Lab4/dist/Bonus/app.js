var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var addBtnNavEle = document.querySelector("#addNavBtn");
var listBtnNavEle = document.querySelector("#listNavBtn");
var createFormEle = document.querySelector("#createForm");
var listEle = document.querySelector("#list");
var changeForm = function (e) {
    var ref = e.target.getAttribute("data-ref");
    createFormEle.style.display = "none";
    listEle.style.display = "none";
    if (ref == "add")
        createFormEle.style.display = "block";
    else {
        var resultTableEle = document.querySelector("#resultTable");
        var data = storeApp.getList();
        console.log(data);
        var html_1 = data.map(function (emp, index) {
            return "\n            <tr>\n                <th scope=\"row\">".concat(emp.manv, "</th>\n                <td>").concat(emp.fullName, "</td>\n                <td>").concat(emp.salary, "</td>\n                <td>").concat(emp.bonus, "</td>\n                <td>").concat(emp.allowance, "</td>\n            </tr>\n        ");
        }).join("");
        resultTableEle.innerHTML = html_1;
        listEle.style.display = "table";
    }
};
addBtnNavEle.addEventListener("click", changeForm);
listBtnNavEle.addEventListener("click", changeForm);
var EClub;
(function (EClub) {
    EClub[EClub["\u0110\u00E0 N\u1EB5ng"] = 0] = "\u0110\u00E0 N\u1EB5ng";
    EClub[EClub["TP HCM"] = 1] = "TP HCM";
    EClub[EClub["H\u00E0 N\u1ED9i"] = 2] = "H\u00E0 N\u1ED9i";
    EClub[EClub["Ngh\u1EC7 An"] = 3] = "Ngh\u1EC7 An";
})(EClub || (EClub = {}));
var AStorage = (function () {
    function AStorage() {
    }
    return AStorage;
}());
var StorageEmployee = (function (_super) {
    __extends(StorageEmployee, _super);
    function StorageEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.employees = [
            {
                allowance: 100,
                bonus: 400,
                club: EClub["TP HCM"],
                fullName: "Đào Đức Minh Khôi",
                manv: "10",
                note: "Không có gì",
                salary: 2000
            },
            {
                allowance: 200,
                bonus: 200,
                club: EClub["Nghệ An"],
                fullName: "Kimetsu No Yaiba",
                manv: "11",
                note: "Tôi yêu anime, tôi yêu anime, tôi yêu anime",
                salary: 2400
            },
            {
                allowance: 900,
                bonus: 350,
                club: EClub["Hà Nội"],
                fullName: "Joy boy",
                manv: "12",
                note: "Tôi sẽ trở thành vua hải tặc",
                salary: 4000
            }
        ];
        _this.getList = function () {
            return _this.employees;
        };
        return _this;
    }
    StorageEmployee.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
        return this.employees;
    };
    return StorageEmployee;
}(AStorage));
var storeApp = new StorageEmployee();
var addBtnEle = document.querySelector("#addBtn");
var cancelBtnEle = document.querySelector("#cancelBtn");
addBtnEle.onclick = function (e) {
    e.preventDefault();
    var form = document.querySelector("#createForm");
    var fullNameEle = document.querySelector("#fullName");
    var manvEle = document.querySelector("#manv");
    var clubEle = document.querySelector("#club");
    var salaryEle = document.querySelector("#salary");
    var bonusEle = document.querySelector("#bonus");
    var allowanceEle = document.querySelector("#allowance");
    var noteEle = document.querySelector("#note");
    storeApp.addEmployee({
        fullName: fullNameEle.value,
        manv: manvEle.value,
        club: EClub[clubEle.value],
        salary: +salaryEle.value,
        bonus: +bonusEle.value,
        allowance: +allowanceEle.value,
        note: noteEle.value
    });
    form.reset();
};
