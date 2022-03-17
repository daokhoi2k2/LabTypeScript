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
var Sex;
(function (Sex) {
    Sex[Sex["N\u1EEF"] = 0] = "N\u1EEF";
    Sex[Sex["Nam"] = 1] = "Nam";
})(Sex || (Sex = {}));
var Store2 = (function () {
    function Store2() {
    }
    return Store2;
}());
var StudentStore = (function (_super) {
    __extends(StudentStore, _super);
    function StudentStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listStudent = [
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
        return _this;
    }
    StudentStore.prototype.getStore = function () {
        return this.listStudent;
    };
    StudentStore.prototype.addItem = function (item) {
        this.listStudent.push(item);
        return this.listStudent;
    };
    return StudentStore;
}(Store2));
var studentStore = new StudentStore();
var resultEle = document.querySelector("#result");
var htmlResult = studentStore
    .getStore()
    .map(function (item) {
    return "\n        <tr>\n            <th scope=\"row\">\n                <img style=\"width: 40px; height: 40px;\" src=\"".concat(item.avatar, "\" />\n            </th>\n            <td>").concat(item.fullName, "</td>\n            <td>").concat(item.birthDay, "</td>\n            <td>").concat(item.sex ? "Nam" : "Nữ", "</td>\n            <td>").concat(item.point, "</td>\n        </tr>\n    ");
})
    .join("");
resultEle.innerHTML = htmlResult;
