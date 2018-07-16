# Crypto compliance review tools

Pleasee refer to this [issue](https://github.com/nodejs/community-committee/issues/346) for more details.


## Todo

- [ ] Review the licenses in the existing repositories to confirm they are all OSI approved.
- [x] Create tooling to crawl through the GitHub repositories and Node.js to look for binaries.
- [ ] Review the list of binaries and identify if they contain source code.
  ( For binaries that include cryptography, validate that the corresponding source code is also provided. If 
  it is not, either add the source code or remove the binaries.
- [ ] Put a process in place that scans on a regular basis for new binaries so that they can be reviewed.

## Getting started

```
$ npm install
$ npm start
```