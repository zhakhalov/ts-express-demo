# ts-express-demo

To deploy development environment use following commands:
```
$ git clone ...
```
to clone this repo
```
$ npm install 
```
to restore server-side dependencies
```
$ bower install
```
to restore client-side dependencies. If `bower` is not installed use `$ npm install bower -g` to install bower as global module.

```
$ tsd install
```
to resptore TypeScript typings rerefences. If `tsd` is not installed use `$ npm install tsd -g` to install bower as global module.


To install extra modules and typings application use
```
$ npm install <module-name> --save
$ bower install <module-name> --save
$ tsd install <module-name> --save
```
Use `--save`  flag to persist dependencies in `package.json` for further restoring them on another dev or prod environment.
