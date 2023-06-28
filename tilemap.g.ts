// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000700060b0c120b0b120b0b0a0701040205040502030d0702040204040402020d140204020202020204130902040204040402020d0702020202050402050d080f0f11100f110f0f0e`, img`
2 2 2 2 2 2 2 2 2 2 
2 . 2 . . 2 . . . 2 
2 . 2 . 2 2 2 . . 2 
2 . 2 . . . . . 2 2 
2 . 2 . 2 2 2 . . 2 
2 . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile4,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "startTile":
            case "tile1":return tile1;
            case "floorTile":
            case "tile2":return tile2;
            case "goalTile":
            case "tile3":return tile3;
            case "coinTile":
            case "tile4":return tile4;
            case "transparency16":return transparency16;
            case "wallTile":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
