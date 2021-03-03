const helpers = require('../static/js/helpers');

describe ('helper functions', () => {
    describe('item helpers', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = '<h1 id="heading" style="background: white">JavaScript in the Browser</h1>';
        })

        test('check heading background changes on click', () => {
            helpers.updateHeading()
            expect(document.querySelector('#heading').style.background === 'pink');
        })

        test('check heading background changes back on mouseout', () => {
            helpers.defaultHeading()
            expect(document.querySelector('#heading').style.background === 'white');
        })

    })
})