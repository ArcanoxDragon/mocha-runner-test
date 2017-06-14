//require( "./0-hooks" );

describe( "module functions", () => {
    var mod;

    before( "require module", () => {
        mod = require( "../src" );
    } );

    it( "should export def that returns 456", () => {
        should.exist( mod.def );
        mod.def.should.be.a( "function" );
        mod.def().should.equal( 456 );
    } );
} );