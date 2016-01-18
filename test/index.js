var protocols = require("../lib")
  , tester = require("tester")
  ;

tester.describe("check urls", function (test) {
    test.it("should support mutiple protocols", function () {
        test.expect(protocols("git+ssh://git@some-host.com/and-the-path/name")).toEqual(["git", "ssh"]);
    });

    test.it("should support one protocol", function () {
        test.expect(protocols("ssh://git@some-host.com/and-the-path/name")).toEqual(["ssh"]);
    });

    test.it("should support taking the first protocol", function () {
        test.expect(protocols("git+ssh://git@some-host.com/and-the-path/name", true)).toBe("git");
    });

    test.it("should support taking the second protocol", function () {
        test.expect(protocols("git+ssh://git@some-host.com/and-the-path/name", 1)).toBe("ssh");
    });
});
