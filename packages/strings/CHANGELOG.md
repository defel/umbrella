# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.5](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@1.0.4...@thi.ng/strings@1.0.5) (2019-03-10)

**Note:** Version bump only for package @thi.ng/strings





## [1.0.4](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@1.0.3...@thi.ng/strings@1.0.4) (2019-03-01)

**Note:** Version bump only for package @thi.ng/strings





## [1.0.3](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@1.0.2...@thi.ng/strings@1.0.3) (2019-02-05)

**Note:** Version bump only for package @thi.ng/strings





## [1.0.2](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@1.0.1...@thi.ng/strings@1.0.2) (2019-01-31)


### Bug Fixes

* **strings:** fix [#70](https://github.com/thi-ng/umbrella/issues/70), replace kebab() regex w/ legacy version ([3adabc4](https://github.com/thi-ng/umbrella/commit/3adabc4))





## [1.0.1](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@1.0.0...@thi.ng/strings@1.0.1) (2019-01-21)

**Note:** Version bump only for package @thi.ng/strings





# [1.0.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@0.7.1...@thi.ng/strings@1.0.0) (2019-01-21)


### Build System

* update package build scripts & outputs, imports in ~50 packages ([b54b703](https://github.com/thi-ng/umbrella/commit/b54b703))


### Features

* **strings:** add floatFixedWidth(), update float() ([816c9c0](https://github.com/thi-ng/umbrella/commit/816c9c0))


### BREAKING CHANGES

* enabled multi-outputs (ES6 modules, CJS, UMD)

- build scripts now first build ES6 modules in package root, then call
  `scripts/bundle-module` to build minified CJS & UMD bundles in `/lib`
- all imports MUST be updated to only refer to package level
  (not individual files anymore). tree shaking in user land will get rid of
  all unused imported symbols.


# [0.7.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@0.6.0...@thi.ng/strings@0.7.0) (2018-12-13)


### Bug Fixes

* **strings:** update kebab() ([1b298f7](https://github.com/thi-ng/umbrella/commit/1b298f7))


### Features

* **strings:** add slugify() ([8dcc73a](https://github.com/thi-ng/umbrella/commit/8dcc73a))





# [0.6.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@0.5.2...@thi.ng/strings@0.6.0) (2018-11-08)


### Features

* **strings:** add configurable units() HOF & presets ([33e915b](https://github.com/thi-ng/umbrella/commit/33e915b))


<a name="0.5.0"></a>
# [0.5.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@0.4.3...@thi.ng/strings@0.5.0) (2018-09-25)


### Features

* **strings:** add splice(), refactor repeat(), add tests ([0cce048](https://github.com/thi-ng/umbrella/commit/0cce048))





<a name="0.4.3"></a>
## [0.4.3](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@0.4.2...@thi.ng/strings@0.4.3) (2018-09-24)


### Bug Fixes

* **strings:** rename number parsers ([8cbfb97](https://github.com/thi-ng/umbrella/commit/8cbfb97))


<a name="0.3.0"></a>
# [0.3.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@0.2.0...@thi.ng/strings@0.3.0) (2018-08-24)


### Bug Fixes

* **strings:** buffer length (for null inputs) (`center()`) ([5209c42](https://github.com/thi-ng/umbrella/commit/5209c42))


### Features

* **strings:** add case converters ([653a175](https://github.com/thi-ng/umbrella/commit/653a175))
* **strings:** add truncateLeft() & wrap() stringers ([1a20bc2](https://github.com/thi-ng/umbrella/commit/1a20bc2))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@0.1.1...@thi.ng/strings@0.2.0) (2018-08-08)


### Features

* **strings:** add opt prefix arg for radix() ([5864f2c](https://github.com/thi-ng/umbrella/commit/5864f2c))




<a name="0.1.1"></a>
## [0.1.1](https://github.com/thi-ng/umbrella/compare/@thi.ng/strings@0.1.0...@thi.ng/strings@0.1.1) (2018-08-08)


### Bug Fixes

* **strings:** float type decl ([b2ebbfc](https://github.com/thi-ng/umbrella/commit/b2ebbfc))




<a name="0.1.0"></a>
# 0.1.0 (2018-08-08)


### Features

* **strings:** re-import & update [@thi](https://github.com/thi).ng/strings from MBP2010 ([40781eb](https://github.com/thi-ng/umbrella/commit/40781eb))
