# zx-plantuml-cli
utilities for [PlantUML]

## Getting Started 

### Install on MacOS using [homebrew]
```
brew install plantuml
```

### Install on Windows using [chocolatey]
```
choco install plantuml
```

## Commands

### png2puml

To encode a sprite at gray level 16 from an [PNG] image 
> run command 
> `plantuml -encodesprite 16 $1.png > $1.puml` 
> equivalent to
> `java -jar plantuml.jar -encodesprite 16 $1.png > $1.puml`

#### Usage 
```
npx png2puml [--image <image path>] [--out <out dir>]
```
Such command interactively ask for :
1. Image Path (if not provided on command line).

## Reference 
* [PlantUML]
* [PlantUML CLI]


[PlantUML]: https://plantuml.com/ "PlantUML"
[homebrew]: https://brew.sh/
[chocolatey]: https://community.chocolatey.org/
[PNG]: https://en.wikipedia.org/wiki/Portable_Network_Graphics
[PlantUML CLI]: https://plantuml.com/command-line#6a26f548831e6a8c "PlantUML CLI"
