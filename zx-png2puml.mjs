#!/usr/bin/env node

import 'zx/globals'


const PLANTUML_RUNTIME = 'plantuml'



const getVersion = async () => 
    await $`${PLANTUML_RUNTIME} -version`


export const askForImageFileName = async () => {
    if( argv.image ) {
        return argv.image
    }
    
    return await question('image path: ')

}

/**
 * cli for raw command: 
 * java -jar plantuml.jar -encodesprite 16 $1.png > $1.puml
 */
async function main() {

    await getVersion()
    
    $.verbose = false

    const image = await askForImageFileName()

    const basename = `${path.basename(image)}.puml`

    let outfile = basename
    if (argv.out) {
        await fs.ensureDir(argv.out)
        outfile = path.join(argv.out, basename)
    }
    else {
        outfile = path.join( path.dirname(image), basename )
    }

    const outstream = fs.createWriteStream(outfile)

    await $`${PLANTUML_RUNTIME} -encodesprite 16 ${image}`.pipe(outstream)


}

main()