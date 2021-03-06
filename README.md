Newslynx Electron
===================

> A desktop version of [NewsLynx app](http://github.com/newslynx/newslynx-app) running on [Electron](https://github.com/atom/electron). 

#### [Download the latest release](https://github.com/newslynx/newslynx-electron/releases)

![](assets/merlynne-in-the-dock.png)

## Development

If you want to work on repo, install dependencies with:

```
npm install
```

### Configuration

Rename `config.sample.yaml` to `config.yaml` and set your own values. You can leave `api_url` blank if you would like the user to be prompted for this value when the app first launches.

### Running

Use this command to start up a version locally. 

```
npm start
```

### Building the app

Package into a desktop application with the following: 

```
npm run build
```


## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
