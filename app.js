var shpwrite = require('shp-write')

const options = {
    folder: 'myshapes',
    types: {
        point: 'mypoints',
        polygon: 'mypolygons',
        line: 'mylines'
    }
}

var mypoint = {
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
module.exports.mypoint = mypoint
module.exports.mapcoords = mapcoords
module.exports.outputfile = outputfile
module.exports.outfile = outfile

var mypoint2 = {
    "type": "Point",
    "coordinates": [-1.2952, 51.420643 ]
}
var myfc = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: mypoint,
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

var outfile = 'output/file.zip'

debugger

var mapcoords = function mapcoords() {
    //mypoint.coordinates = mypoint.coordinates.map(col => col.map(row => row.map( (cell,index) => index == 2 ? cell : cell * (1/60) )))
    mypoint.coordinates = mypoint.coordinates.map(col => col.map(row => row.map( (cell,index) => index == 2 ? cell : index % 2 ? cell + mypoint2.coordinates[1] : cell + mypoint2.coordinates[0] )))
}

mapcoords()

debugger

var outputfile = function outputfile(){
    const myfile = shpwrite.zip( myfc, options)

    const fs = require('fs')
    const path = require('path')

    fs.promises.mkdir(path.dirname(outfile), {recursive: true}).then(
        () => fs.promises.writeFile(outfile, myfile))
}

outputfile()