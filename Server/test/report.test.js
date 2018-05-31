var Seneca = require('seneca')
var assert = require('assert')
var chai = require('chai')


var expect = chai.expect;

function test_report_seneca (fin){
  return Seneca({log: 'test'})
  .test(fin)

  .use("entity")
  .use(require('../_report'))
}

describe('First test report', function() {

  it('Report test', function(fin){
    var seneca = test_report_seneca(fin)

    seneca.act({
      role: 'report'
    }, function(err, result){
      fin()
    })
  })
});
