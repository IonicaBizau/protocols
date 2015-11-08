# protocols [![Support this project][donate-now]][paypal-donations]

Get the protocols of an input url.

## Installation

```sh
$ npm i protocols
```

## Example

```js
// Dependencies
var Protocols = require("protocols");

console.log(Protocols("git+ssh://git@some-host.com/and-the-path/name"));
// => ["git", "ssh"]

console.log(Protocols("http://ionicabizau.net", true));
// => "http"
```

## Documentation

### `Protocols(input, first)`
Returns the protocols of an input url.

#### Params
- **String** `input`: The input url.
- **Boolean|Number** `first`: If `true`, the first protocol will be returned. If number, it will represent the zero-based index of the protocols array.

#### Return
- **Array|String** The array of protocols or the specified protocol.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`is-ssh`](https://github.com/IonicaBizau/node-is-ssh)

 - [`parse-url`](https://github.com/IonicaBizau/node-parse-url)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md