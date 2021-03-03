const helpers = require('../static/js/helpers');

describe ('helper functions', () => {
    describe('header helpers', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = '<h1 id="heading" style="background: white">JavaScript in the Browser</h1>';
        })

        test('check heading background changes on click', () => {
            helpers.updateHeading()
            expect(document.querySelector('#heading').style.background).toBe('pink');
        })

        test('check heading background changes back on mouseout', () => {
            helpers.defaultHeading()
            expect(document.querySelector('#heading').style.background).toBe('white');
        })

    })

    describe('greeting helpers', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = '<h2 id="greeting">Hover me for a greeting.</h2>';
        })

        test('check greeting changes on hover', () => {
            helpers.newGreeting()
            let message = document.querySelector('#greeting').textContent
            expect(message).toBe('Hello from Ravil and Chris!');
        })

    })

    describe('main content helpers', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = 
        `<main style="background: white;">
            <h2 id="greeting">Hover me for a greeting.</h2>
            <section id="content">
                <p id="item-1-para">Item one paragraph</p>
                <p id="item-2-para" class="bold">Item two paragraph</p>
                <p id="item-3-para">Item three paragraph</p>
            </section>
        </main>`;
        })

        test('check content becomes bold', () => {
            helpers.makeBold('item-1-para')
            expect(document.querySelector('#item-1-para').className).toBe('bold');
        })
        test('check content changes back from bold', () => {
            helpers.makeBold('item-2-para')
            expect(document.querySelector('#item-2-para').className).toBe('');
        })

        test('check createParagraph creates new p element', () => {
            expect(helpers.createParagraph('hello').tagName).toBe('P')
        }) 
        test('check createParagraph creates element with text content', () => {
            expect(helpers.createParagraph('hello').textContent).toBe('hello')
        }) 

        test('check addParagraph appends new element to main content block', () => {
            helpers.addParagraph('test')
            let content = document.getElementById('content')
            let contentChildren = content.querySelectorAll('P')
            expect(contentChildren).toHaveLength(4)
        })
    })
})