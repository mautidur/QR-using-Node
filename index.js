const qr = require("qrcode");
let data = {
    "name" : "sandy nugroho",
    "email" : "idontknow@gmail.com",
    "id" : 34587258612039
};
let stJson = JSON.stringify(data);
qr.toFile("qr.png",stJson,{type:"terminal"},function(err)
{
    if(err) return console.log("error");
});