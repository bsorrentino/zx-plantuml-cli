#!/usr/bin/env node
// #!/usr/bin/env zx

import { $, argv, path, fs } from 'zx'

const PLANTUML_VERSION = '1.2021.15'
const PLANTUML_RUNTIME = path.join('/usr/local/Cellar',
    'plantuml',
    PLANTUML_VERSION,
    'libexec',
    'plantuml.jar');

// java -jar /usr/local/Cellar/plantuml/1.2021.11/libexec/plantuml.jar -encodesprite 16 $1.png > $1.puml

$.verbose = false

async function main() {

    // console.log(argv)
    if (argv._.length <= 0) {
        console.log(`
        usage:
    
        png2puml <image file name> [--out outdir]
        `)
        return
    }

    const basename = `${path.basename(argv._[0])}.puml`

    let outfile = basename
    if (argv.out) {
        await fs.ensureDir(argv.out)
        outfile = path.join(argv.out, basename)
    }

    const outstream = fs.createWriteStream(outfile)

    await $`java -jar ${PLANTUML_RUNTIME} -encodesprite 16 ${argv._[0]}`.pipe(outstream)


}

main()