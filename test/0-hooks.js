let path = require( "path" );
let process = require( "process" );
process.chdir( path.join( __dirname, ".." ) );

let chai = require( "chai" );

global.should = chai.should();

before( "before all tests", () => {
    console.log( "This should run once before all tests" );
} );

after( "after all tests", () => {
    console.log( "This should run after all tests" );
} );