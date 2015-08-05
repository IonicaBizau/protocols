var Protocols = require("../lib");

console.log(Protocols("git+ssh://git@some-host.com/and-the-path/name"));
// => ["git", "ssh"]

console.log(Protocols("http://ionicabizau.net", true));
// => "http"
