# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.10](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@1.0.9...@thi.ng/cache@1.0.10) (2019-03-12)

**Note:** Version bump only for package @thi.ng/cache





## [1.0.9](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@1.0.8...@thi.ng/cache@1.0.9) (2019-03-10)

**Note:** Version bump only for package @thi.ng/cache





## [1.0.8](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@1.0.7...@thi.ng/cache@1.0.8) (2019-03-03)

**Note:** Version bump only for package @thi.ng/cache





## [1.0.7](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@1.0.6...@thi.ng/cache@1.0.7) (2019-03-01)

**Note:** Version bump only for package @thi.ng/cache





## [1.0.6](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@1.0.5...@thi.ng/cache@1.0.6) (2019-02-26)

**Note:** Version bump only for package @thi.ng/cache





## [1.0.5](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@1.0.4...@thi.ng/cache@1.0.5) (2019-02-15)

**Note:** Version bump only for package @thi.ng/cache





## [1.0.4](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@1.0.3...@thi.ng/cache@1.0.4) (2019-02-10)

**Note:** Version bump only for package @thi.ng/cache





## [1.0.3](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@1.0.2...@thi.ng/cache@1.0.3) (2019-02-05)

**Note:** Version bump only for package @thi.ng/cache





## [1.0.2](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@1.0.1...@thi.ng/cache@1.0.2) (2019-01-31)

**Note:** Version bump only for package @thi.ng/cache





## [1.0.1](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@1.0.0...@thi.ng/cache@1.0.1) (2019-01-21)

**Note:** Version bump only for package @thi.ng/cache





# [1.0.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@0.2.40...@thi.ng/cache@1.0.0) (2019-01-21)


### Bug Fixes

* **cache:** TLRU: expected behavior on getSet() ([c3762e9](https://github.com/thi-ng/umbrella/commit/c3762e9))


### Build System

* update package build scripts & outputs, imports in ~50 packages ([b54b703](https://github.com/thi-ng/umbrella/commit/b54b703))


### BREAKING CHANGES

* enabled multi-outputs (ES6 modules, CJS, UMD)

- build scripts now first build ES6 modules in package root, then call
  `scripts/bundle-module` to build minified CJS & UMD bundles in `/lib`
- all imports MUST be updated to only refer to package level
  (not individual files anymore). tree shaking in user land will get rid of
  all unused imported symbols.


<a name="0.2.0"></a>
# [0.2.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/cache@0.1.0...@thi.ng/cache@0.2.0) (2018-04-22)


### Bug Fixes

* **cache:** TLRUCache.get(), add tests, update package ([aa78d77](https://github.com/thi-ng/umbrella/commit/aa78d77))


### Features

* **cache:** add TLRUCache.prune(), fix ensureSize() ([9d53ae3](https://github.com/thi-ng/umbrella/commit/9d53ae3))


<a name="0.1.0"></a>
# 0.1.0 (2018-04-22)


### Bug Fixes

* **cache:** don't insert new val if > maxsize ([3947419](https://github.com/thi-ng/umbrella/commit/3947419))
* **cache:** recompute size in LRUCache.delete(), extract removeEntry() ([c4a9c07](https://github.com/thi-ng/umbrella/commit/c4a9c07))


### Features

* **cache:** add MRUCache, update package & readme ([26c4cfd](https://github.com/thi-ng/umbrella/commit/26c4cfd))
* **cache:** add TLRUCache ([574b5d9](https://github.com/thi-ng/umbrella/commit/574b5d9))
* **cache:** initial import [@thi](https://github.com/thi).ng/cache package ([7bbbfa8](https://github.com/thi-ng/umbrella/commit/7bbbfa8))
