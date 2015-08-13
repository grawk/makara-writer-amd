# makara-writer-amd

Creates AMD formatted language bundles from `.properties` files.

## API

### Default exported function

1. Provide the default exported function with a filesystem path:
`module.exports = function writeLocale(appRoot) {...`

2. Returns:
`function (locale, cb) {`

3. Call the returned function with a locale string (e.g. `fr-FR`) and errback function
4. Will transform all `.properties` files under the given locale directory (`appRoot/FR/fr/`) into AMD module `appRoot/.build/fr-FR/_languagepack.js`

### amdBuilder

`module.exports.amdBuilder = function (localeRoot, m, cb) {...`

`localeRoot {String}`:  filesystem folder under which your `COUNTRY/language` directories reside
`m {Array}`: where `m[1]` is a language code (en) and `m[2]` is a country code (US)
`cb {Function}`: called as errback if any downstream errors, otherwise returns a String of the AMD module
