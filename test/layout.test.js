const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        test('it has a title', () => {
            const head = document.querySelector('head')
            expect(head).toBeTruthy();
            expect(head.textContent).toContain('JS in the Browser');
        });
    })

    describe('body', () => {
        test('header exists', () => {
            expect(document.querySelector('header')).toBeTruthy();
        });
    
        test('it has a h1 heading', () => {
            let header = document.querySelector('#heading');
            expect(header.textContent).toContain('JavaScript in the Browser');
        })

        test('it has a h2 greeting', () => {
            let header = document.querySelector('#greeting');
            expect(header.textContent).toContain('Hover me for a greeting.');
        })

        test('it has a main content block with three items', () => {
            let content = document.querySelector('#content');
            let items = content.querySelectorAll('p')
            expect(content).toBeTruthy();
            expect(items).toHaveLength(3);
        })
    })
})