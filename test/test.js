var assert = require('assert');
var app = require('../app')

var chai = require('chai')
var reqpath = require('path')
var should = require('chai').should() //actually call the function


chai.use(require('chai-fs'))

var mytestpoint = {
    "type": "Polygon",
    "coordinates": [
        [
            [-1.2952, 51.420643, 0],
            [-0.2951999999999999, 51.420643, 0],
            [-0.2951999999999999, 52.420643, 0],
            [-1.2952, 52.420643, 0],
            [-1.2952, 51.420643, 0]
        ]
    ]
}

describe('shape2', function() {
    describe('#mypoint', function() {
        it('should be equal to this template', function() {
            assert.deepStrictEqual(app.mypoint, mytestpoint)
        })
    })
    describe('#outputfile', function() {
        it('should create a 3d shapefile', function() {
            app.exmapcoords()
            app.exoutputfile()

            var mydir = reqpath.dirname(app.outfile)
            var myfile = reqpath.basename(app.outfile)
            mydir.should.be.a.directory('Dir exists').and.include.contents([myfile], 'file exists');

        })
    })
})