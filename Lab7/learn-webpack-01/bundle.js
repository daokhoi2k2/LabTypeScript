(() => {
  "use strict";
  var i,
    e = new (function (i, e, t) {
      (this.firstName = "Thi"),
        (this.middleInitial = e),
        (this.lastName = t),
        (this.fullName = "ThiHongNguyen");
    })("Thi", "Hong", "Nguyen");
  document.body.innerHTML = "Hello, " + (i = e).firstName + " " + i.lastName;
})();
