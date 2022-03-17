var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const addBtnNavEle = document.querySelector("#addNavBtn");
const listBtnNavEle = document.querySelector("#listNavBtn");
const createFormEle = document.querySelector("#createForm");
const listEle = document.querySelector("#list");
const changeForm = (e) => {
    const ref = e.target.getAttribute("data-ref");
    createFormEle.style.display = "none";
    listEle.style.display = "none";
    if (ref == "add")
        createFormEle.style.display = "block";
    else {
        const resultTableEle = document.querySelector("#resultTable");
        const data = storeApp.getList();
        console.log(data);
        const html = data
            .map((emp, index) => {
            return `
            <tr>
                <th scope="row">${emp.manv}</th>
                <td>${emp.fullName}</td>
                <td>${emp.salary}</td>
                <td>${emp.bonus}</td>
                <td>${emp.allowance}</td>
            </tr>
        `;
        })
            .join("");
        resultTableEle.innerHTML = html;
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
class AStorage {
}
function fakeData(target, name) {
    Object.defineProperty(target, name, {
        value: [
            {
                allowance: 100,
                bonus: 400,
                club: EClub["TP HCM"],
                fullName: "Đào Đức Minh Khôi",
                manv: "10",
                note: "Không có gì",
                salary: 2000,
            },
            {
                allowance: 200,
                bonus: 200,
                club: EClub["Nghệ An"],
                fullName: "Kimetsu No Yaiba",
                manv: "11",
                note: "Tôi yêu anime, tôi yêu anime, tôi yêu anime",
                salary: 2400,
            },
            {
                allowance: 900,
                bonus: 350,
                club: EClub["Hà Nội"],
                fullName: "Joy boy",
                manv: "12",
                note: "Tôi sẽ trở thành vua hải tặc",
                salary: 4000,
            },
        ],
        writable: true,
        configurable: true,
    });
}
class StorageEmployee extends AStorage {
    addEmployee(emp) {
        this.employees.push(emp);
        return this.employees;
    }
    getList() {
        return this.employees;
    }
    ;
}
__decorate([
    fakeData,
    __metadata("design:type", Array)
], StorageEmployee.prototype, "employees", void 0);
const storeApp = new StorageEmployee();
console.log(storeApp);
const addBtnEle = document.querySelector("#addBtn");
const cancelBtnEle = document.querySelector("#cancelBtn");
addBtnEle.onclick = (e) => {
    e.preventDefault();
    const form = document.querySelector("#createForm");
    const fullNameEle = document.querySelector("#fullName");
    const manvEle = document.querySelector("#manv");
    const clubEle = document.querySelector("#club");
    const salaryEle = document.querySelector("#salary");
    const bonusEle = document.querySelector("#bonus");
    const allowanceEle = document.querySelector("#allowance");
    const noteEle = document.querySelector("#note");
    storeApp.addEmployee({
        fullName: fullNameEle.value,
        manv: manvEle.value,
        club: EClub[clubEle.value],
        salary: +salaryEle.value,
        bonus: +bonusEle.value,
        allowance: +allowanceEle.value,
        note: noteEle.value,
    });
    form.reset();
};
