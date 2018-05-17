import { expect } from 'chai';

describe('the test environment', function() {
    it('should have a global "Event"', function() {
        expect(Event).not.to.be.undefined;
    });

    it('should have a global "HTMLElement"', function() {
        expect(HTMLElement).not.to.be.undefined;
    });

    it('should have a global "document"', function() {
        expect(document).not.to.be.undefined;
    });

    it('should have a global "navigator"', function() {
        expect(navigator).not.to.be.undefined;
    });

    it('should have a global "window" object', function() {
        expect(window).not.to.be.undefined;
    });
});
