# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.11](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@1.0.10...@thi.ng/rstream-dot@1.0.11) (2019-03-12)

**Note:** Version bump only for package @thi.ng/rstream-dot





## [1.0.10](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@1.0.9...@thi.ng/rstream-dot@1.0.10) (2019-03-10)

**Note:** Version bump only for package @thi.ng/rstream-dot





## [1.0.9](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@1.0.8...@thi.ng/rstream-dot@1.0.9) (2019-03-05)

**Note:** Version bump only for package @thi.ng/rstream-dot





## [1.0.8](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@1.0.7...@thi.ng/rstream-dot@1.0.8) (2019-03-03)

**Note:** Version bump only for package @thi.ng/rstream-dot





## [1.0.7](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@1.0.6...@thi.ng/rstream-dot@1.0.7) (2019-03-01)

**Note:** Version bump only for package @thi.ng/rstream-dot





## [1.0.6](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@1.0.5...@thi.ng/rstream-dot@1.0.6) (2019-02-26)

**Note:** Version bump only for package @thi.ng/rstream-dot





## [1.0.5](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@1.0.4...@thi.ng/rstream-dot@1.0.5) (2019-02-15)

**Note:** Version bump only for package @thi.ng/rstream-dot





## [1.0.4](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@1.0.3...@thi.ng/rstream-dot@1.0.4) (2019-02-10)

**Note:** Version bump only for package @thi.ng/rstream-dot





## [1.0.3](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@1.0.2...@thi.ng/rstream-dot@1.0.3) (2019-02-05)

**Note:** Version bump only for package @thi.ng/rstream-dot





## [1.0.2](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@1.0.1...@thi.ng/rstream-dot@1.0.2) (2019-01-31)

**Note:** Version bump only for package @thi.ng/rstream-dot





## [1.0.1](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@1.0.0...@thi.ng/rstream-dot@1.0.1) (2019-01-21)

**Note:** Version bump only for package @thi.ng/rstream-dot





# [1.0.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@0.2.64...@thi.ng/rstream-dot@1.0.0) (2019-01-21)


### Build System

* update package scripts, outputs, imports in remaining packages ([f912a84](https://github.com/thi-ng/umbrella/commit/f912a84))


### BREAKING CHANGES

* enable multi-outputs (ES6 modules, CJS, UMD)

- build scripts now first build ES6 modules in package root, then call
  `scripts/bundle-module` to build minified CJS & UMD bundles in `/lib`
- all imports MUST be updated to only refer to package level
  (not individual files anymore). tree shaking in user land will get rid of
  all unused imported symbols


<a name="0.2.0"></a>
# [0.2.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-dot@0.1.2...@thi.ng/rstream-dot@0.2.0) (2018-04-26)


### Features

* **rstream-dot:** add option to include stream values in diag ([d057d95](https://github.com/thi-ng/umbrella/commit/d057d95))


<a name="0.1.0"></a>
# 0.1.0 (2018-04-24)


### Features

* **rstream-dot:** add xform edge labels, extract types to api.ts ([7ffaa61](https://github.com/thi-ng/umbrella/commit/7ffaa61))
* **rstream-dot:** initial import [@thi](https://github.com/thi).ng/rstream-dot package ([e72478a](https://github.com/thi-ng/umbrella/commit/e72478a))
* **rstream-dot:** support multiple roots in walk() ([704025a](https://github.com/thi-ng/umbrella/commit/704025a))
