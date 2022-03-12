var Sex;
(function (Sex) {
    Sex[Sex["N\u1EEF"] = 0] = "N\u1EEF";
    Sex[Sex["Nam"] = 1] = "Nam";
})(Sex || (Sex = {}));
var listStudent = [
    {
        avatar: "https://phuclong.com.vn/uploads/dish/005aaeed660473-trnhnphclong.png",
        fullName: "Nguyễn Văn Tèo",
        birthDay: "20-01-1995",
        sex: Sex.Nam,
        point: 8.5
    },
    {
        avatar: "https://phuclong.com.vn/uploads/dish/3c2d50a2c26783-hngtrsaphclongtrosaphclong.png",
        fullName: "Phạm Thị Nở",
        birthDay: "11-12-1985",
        sex: Sex.Nữ,
        point: 5.5
    },
    {
        avatar: "https://phuclong.com.vn/uploads/dish/5318362664d05b-trlongdu.png",
        fullName: "Trần Ngọc Quang",
        birthDay: "31-12-1980",
        sex: Sex.Nam,
        point: 7
    },
];
var resultEle = document.querySelector("#result");
var htmlResult = listStudent.map(function (item) {
    return "\n        <tr>\n            <th scope=\"row\">\n                <img style=\"width: 40px; height: 40px;\" src=\"".concat(item.avatar, "\" />\n            </th>\n            <td>").concat(item.fullName, "</td>\n            <td>").concat(item.birthDay, "</td>\n            <td>").concat(item.sex ? "Nam" : "Nữ", "</td>\n            <td>").concat(item.point, "</td>\n        </tr>\n    ");
}).join("");
resultEle.innerHTML = htmlResult;
