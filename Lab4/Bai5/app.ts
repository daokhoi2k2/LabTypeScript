enum Sex {
  "Nữ",
  "Nam",
}
interface Student {
  avatar: string;
  fullName: string;
  birthDay: string;
  sex: Sex;
  point: number;
}

abstract class Store2<T> {
  protected abstract listStudent: T[];

  abstract getStore(): T[];
  abstract addItem(item: T): T[];
}

class StudentStore extends Store2<Student> {
  protected listStudent: Student[] = [
    {
      avatar: "https://phuclong.com.vn/uploads/dish/005aaeed660473-trnhnphclong.png",
      fullName: "Nguyễn Văn Tèo",
      birthDay: "20-01-1995",
      sex: Sex.Nam,
      point: 8.5,
    },
    {
      avatar: "https://phuclong.com.vn/uploads/dish/3c2d50a2c26783-hngtrsaphclongtrosaphclong.png",
      fullName: "Phạm Thị Nở",
      birthDay: "11-12-1985",
      sex: Sex.Nữ,
      point: 5.5,
    },
    {
      avatar: "https://phuclong.com.vn/uploads/dish/5318362664d05b-trlongdu.png",
      fullName: "Trần Ngọc Quang",
      birthDay: "31-12-1980",
      sex: Sex.Nam,
      point: 7,
    },
  ];
  getStore(): Student[] {
    return this.listStudent;
  }

  addItem(item: Student): Student[] {
    this.listStudent.push(item);
    return this.listStudent;
  }
}

const studentStore = new StudentStore();

const resultEle = document.querySelector("#result");

const htmlResult = studentStore
  .getStore()
  .map((item: Student): string => {
    return `
        <tr>
            <th scope="row">
                <img style="width: 40px; height: 40px;" src="${item.avatar}" />
            </th>
            <td>${item.fullName}</td>
            <td>${item.birthDay}</td>
            <td>${item.sex ? "Nam" : "Nữ"}</td>
            <td>${item.point}</td>
        </tr>
    `;
  })
  .join("");

resultEle.innerHTML = htmlResult;
