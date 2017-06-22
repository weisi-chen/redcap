'use strict';

const expect = require('chai').expect;
const config = {
	host: 'redcap.uits.iu.edu',
	path: '/api/',
	token: process.env.REDCAP_API_KEY
}
const utils = require('../../../lib/utils')(config);

const exportModule = require('../../../lib/arms/export.js');

describe('arms#exportarms', function() {
	it('should be a function', function() {
		expect(exportModule).to.be.a('function');
	});

	var exportArms = exportModule(utils);

	it('should return a function', function() {
		expect(exportArms).to.be.a('function');
	});

	it('should return an array of arms', function(done) {
		var params = {
			'arms[]': 1
		}
		exportArms(params, function(error, res) {
			console.log(error);
			expect(error).to.be.null;
            expect(res).to.be.a('array').of.length(1);
			done();
		});
	});
});
