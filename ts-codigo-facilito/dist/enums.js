//Alamacenar valores
var Users;
(function (Users) {
    Users[Users["NormalUser"] = 1] = "NormalUser";
    Users[Users["PayedUser"] = 3] = "PayedUser";
    Users["AdminUser"] = "Admin";
    Users["MegaUser"] = "Mega";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
console.log(myUser);
