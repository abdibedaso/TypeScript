// Microsoft provides Visual Studio Code with TypeScript support built in.
    // https://www.typescriptlang.org/play

// To run locally you need
    // Text editor
    // TypeScript compiler
    
// Setup
    
    // npm install typescript -g    
        // Typescript runs using nodejs
        // We use npm to install it

    // tsc -v
        // To see version of Typescript compiler installed

    // tsc filename.ts   
        // -- Transpile the Typescript code to a .js file with the filename
    
    // tsc -w filename.ts 
        // So that the compiler listens for change continuously.
        // The compiler will start Watching for file changes. 
        

// To create a TypeScript configuration file:
// tsc –-init //it creates a tsconfig.json

// tsconfig.json
    // {
    //     "compilerOptions": {
        //     "module": "commonjs",
        //     "target": "es5",
        //     "noImplicitAny": false,
        //     "noEmitOnError": true,
        //     "sourceMap": true,
        //     "outDir": "./js",
    //     },
    //     "exclude": [ "node_modules" ]
    // }

    // target: .. We can configure things like the ECMA script format to which our code will be transformed to.
      
// Since all configurations live in this file 
// We could simply type: 
    // tsc 
        // it's going to automatically find all: *.ts and compile them to JavaScript.

    // tsc -w    
        // So that the compiler listens for change continuously.
        // The compiler will start watching for changes. 



