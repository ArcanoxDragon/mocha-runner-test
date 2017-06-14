//require( "./0-hooks" );

describe( "module values", () => {
    let mod;

    before( "require module", () => {
        mod = require( "../src" );
    } );

    it( "should export abc = 123", () => {
        should.exist( mod.abc );
        mod.abc.should.equal( 123 );
    } );

    it( "should export ghi = \"jkl\"", () => {
        should.exist( mod.ghi );
        mod.ghi.should.equal( "jkl" );
    } );
} );