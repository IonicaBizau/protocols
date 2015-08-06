var Protocols = require("../lib")
  , Assert = require("assert")
  ;

it("should support mutiple protocols", function (cb) {
    Assert.deepEqual(Protocols("git+ssh://git@some-host.com/and-the-path/name"), ["git", "ssh"]);
    cb();
});

it("should support one protocol", function (cb) {
    Assert.deepEqual(Protocols("ssh://git@some-host.com/and-the-path/name"), ["ssh"]);
    cb();
});

it("should support taking the first protocol", function (cb) {
    Assert.deepEqual(Protocols("git+ssh://git@some-host.com/and-the-path/name", true), "git");
    cb();
});

it("should support taking the second protocol", function (cb) {
    Assert.deepEqual(Protocols("git+ssh://git@some-host.com/and-the-path/name", 1), "ssh");
    cb();
});
