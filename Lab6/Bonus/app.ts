const addBtnNavEle = document.querySelector("#addNavBtn") as HTMLElement;
const listBtnNavEle = document.querySelector("#listNavBtn") as HTMLElement;

const createFormEle = document.querySelector("#createForm") as HTMLElement;
const listEle = document.querySelector("#list") as HTMLElement;

// Handle Nav
const changeForm = (e) => {
  const ref: "add" | "list" = e.target.getAttribute("data-ref");

  createFormEle.style.display = "none";
  listEle.style.display = "none";

  if (ref == "add") createFormEle.style.display = "block";
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
// End handle nav

// Handle add nv
enum EClub {
  "Đà Nẵng",
  "TP HCM",
  "Hà Nội",
  "Nghệ An",
}

interface IEmployee {
  manv: string;
  fullName: string;
  club: EClub;
  salary: number;
  bonus: number;
  allowance: number;
  note: string;
}

abstract class AStorage<T> {
  protected abstract employees: T[];
  abstract addEmployee(emp: T): T[];
  abstract getList(): T[];
}

function fakeData(target: any, name: string) {
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

class StorageEmployee extends AStorage<IEmployee> {
  @fakeData
  protected employees: IEmployee[];

  public addEmployee(emp: IEmployee): IEmployee[] {
    this.employees.push(emp);
    return this.employees;
  }

  public getList(): IEmployee[] {
    return this.employees;
  };
}

const storeApp = new StorageEmployee();
console.log(storeApp)

const addBtnEle = document.querySelector("#addBtn") as HTMLElement;
const cancelBtnEle = document.querySelector("#cancelBtn") as HTMLElement;

addBtnEle.onclick = (e) => {
  e.preventDefault();
  const form = document.querySelector("#createForm") as HTMLFormElement;
  const fullNameEle = document.querySelector("#fullName") as HTMLInputElement;
  const manvEle = document.querySelector("#manv") as HTMLInputElement;
  const clubEle = document.querySelector("#club") as HTMLInputElement;
  const salaryEle = document.querySelector("#salary") as HTMLInputElement;
  const bonusEle = document.querySelector("#bonus") as HTMLInputElement;
  const allowanceEle = document.querySelector("#allowance") as HTMLInputElement;
  const noteEle = document.querySelector("#note") as HTMLInputElement;

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
// const addBtnEle
// End handle add nv
