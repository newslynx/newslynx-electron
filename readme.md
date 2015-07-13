# Newslynx Electron

A desktop version of [NewsLynx app](http://github.com/newslynx/newslynx-app) running on [Electron](https://github.com/atom/electron). Scaffolded with [generator-electron](https://github.com/sindresorhus/generator-electron). Still a work in progress. To be released July 2015.


## Installation and config

Install dependencies with the following:

```
$ npm install
```

Rename [config.sample.yaml](config.sample.yaml) to `config.yaml` and change values to where your [NewsLynx API](http://github.com/newslynx/newslynx-core) lives and pick a new secret key string.

### Development

Use this command to start up a version locally.

```
$ npm start
```

### Build app

Package into a desktop application with the following: 

```
$ npm run build
```


## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
