var assert = require('assert');
var mypoint = require('../app').mypoint

var mytestpoint = {
    "type": "Polygon",
    "coordinates": [
        [
            [-1.2952, 51.420643,0],
            [-0.2951999999999999, 51.420643,0],
            [-0.2951999999999999, 52.420643,0],
            [-1.2952, 52.420643,0],
            [-1.2952, 51.420643,0]
        ]
    ]
}

describe('shape2',function(){
    describe('#mypoint',function(){
        it('should be equal to this template',function(){
            assert.deepStrictEqual(mypoint,mytestpoint)
        })
    })
})