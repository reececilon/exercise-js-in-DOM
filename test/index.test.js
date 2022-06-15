const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    test('it has a header title', () => {
        let title = document.getElementsByTagName('title')[0];
        expect(title.innerHTML).toBe('Exercises');
    })
})
