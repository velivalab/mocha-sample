var expect = require("chai").expect;

describe("uniqueId", function () {
	it("should generate a unique id every time it is called", function () {
		var idMap = {};
		var sufficientSampleSize = 15;
		var duplicationFound = false;
		for (var index = 0; index < sufficientSampleSize; ++index) {
			var id = Math.floor(Math.random() * 100);
            console.log('id = '+id);
			if (idMap.hasOwnProperty(id)) {
				duplicationFound = true;
				break;
			}
			idMap[id] = true;
		}
		expect(duplicationFound).to.not.be.ok;
	});
});