# Netlify Local
Local Netlify service emulation.

**Experimental:** None of the supported Netlify Services are correctly implemented yet.

This project aims to be as _"hands off"_ as possible, simply emulating different parts of Netlify.

For help bundling your Javascript to work with Netlify Functions, checkout [8eecf0d2/webpack-netlify-lambda-plugin](https://github.com/8eecf0d2/webpack-netlify-lambda-plugin) or [netlify/netlify-lambda](https://github.com/netlify/netlify-lambda).

An example Netlify deployable application is available at [8eecf0d2/netlify-local-example](https://github.com/8eecf0d2/netlify-local-example).

### Install
```bash
yarn global add netlify-local
```

### Usage
```bash
netlify-local -n netlify.toml -w webpack.config.js
```

### Options
```bash
Usage: netlify-local [options]

Locally emulate Netlify services

Options:
  -V, --version        output the version number
  -n --netlify <path>  path to `netlify.toml` file (default `./netlify.toml`)
  -w --webpack <path>  path to webpack config file (default `./webpack.config.js`)
  -p --port <port>     port to serve from (default: 9000)
  -h, --help           output usage information
```

### Todo

- [ ] Write documentation
- [x] Publish example repository [8eecf0d2/netlify-local-example](https://github.com/8eecf0d2/netlify-local-example)

Implement the following Netlify features as correctly as possible

- [ ] Netlify static file server
- [ ] Netlify functions
- [ ] `netlify.toml` options (_context_, _redirect_, _headers_)

### Credit

This project is based entirely upon [netlify/netlify-lambda](https://github.com/netlify/netlify-lambda).
