[![npm](https://img.shields.io/npm/v/@bsorrentino/zx-plantuml-cli.svg)](https://www.npmjs.com/package/@bsorrentino/zx-plantuml-cli)&nbsp;
<img src="https://img.shields.io/github/forks/bsorrentino/zx-plantuml-cli.svg">&nbsp;
<img src="https://img.shields.io/github/stars/bsorrentino/zx-plantuml-cli.svg">&nbsp;
<a href="https://github.com/bsorrentino/zx-plantuml-cli/issues">
<img src="https://img.shields.io/github/issues/bsorrentino/zx-plantuml-cli.svg"></a>&nbsp;
![npm publishing](https://github.com/bsorrentino/zx-plantuml-cli/actions/workflows/npm-publish.yml/badge.svg)

# zx-plantuml-cli

[ZX] scripts providing utilities for [PlantUML]

## Getting Started 

### Install PlantuML on MacOS using [homebrew]
```
brew install plantuml
```

### Install PlantuML on Windows using [chocolatey]
```
choco install plantuml
```
### Install package
```
npm install @bsorrentino/zx-plantuml-cli -g
```

## Commands

### png2puml

To encode a sprite at gray level 16 from an [PNG] image 
> behind the scene it run command 
> ```
> plantuml -encodesprite 16 $1.png > $1.puml
>```
> that is equivalent at
> ```
> java -jar plantuml.jar -encodesprite 16 $1.png > $1.puml
> ```

#### Usage 
```
npx png2puml [--image <image path>] [--out <out dir>]
```
Such command interactively ask for :
1. Image Path (if not provided on command line).

## Reference 
* [PlantUML]
* [PlantUML CLI]

[ZX]: https://www.npmjs.com/package/zx
[PlantUML]: https://plantuml.com/ "PlantUML"
[homebrew]: https://brew.sh/
[chocolatey]: https://community.chocolatey.org/
[PNG]: https://en.wikipedia.org/wiki/Portable_Network_Graphics
[PlantUML CLI]: https://plantuml.com/command-line#6a26f548831e6a8c "PlantUML CLI"
