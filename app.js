var shpwrite = require('shp-write')

const options = {
    folder: 'myshapes',
    types: {
        point: 'mypoints',
        polygon: 'mypolygons',
        line: 'mylines'
    }
}

exports.mypoint = {
    "type": "Polygon",
    "coordinates": [
        [
            [0,0,0],
            [1,0,0],
            [1,1,0],
            [0,1,0],
            [0,0,0]
        ]
    ]
}

exports.outfile = "output/file.zip"

var mypoint2 = {
    "type": "Point",
    "coordinates": [-1.2952, 51.420643 ]
}
var myfc = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: exports.mypoint,
            properties: {
                name: 'tower89'
            }
        },
        {
            type: 'Feature',
            geometry: mypoint2,
            properties: {
                name: 'cabin89'
            }
        }
    ]
}
 

debugger

exports.exmapcoords = function () {
    //mypoint.coordinates = mypoint.coordinates.map(col => col.map(row => row.map( (cell,index) => index == 2 ? cell : cell * (1/60) )))
    exports.mypoint.coordinates = exports.mypoint.coordinates.map(col => col.map(row => row.map( (cell,index) => index == 2 ? cell : index % 2 ? cell + mypoint2.coordinates[1] : cell + mypoint2.coordinates[0] )))
}

exports.exmapcoords()

debugger

exports.exoutputfile = function (){
    const myfile = shpwrite.zip( myfc, options)

    const fs = require('fs')
    const path = require('path')

    fs.promises.mkdir(path.dirname(exports.outfile), {recursive: true}).then(
        () => fs.promises.writeFile(exports.outfile, myfile))
}

exports.exoutputfile()