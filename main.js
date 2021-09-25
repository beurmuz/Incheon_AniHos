const bodyTag = document.querySelector('body');
const h1Tag = document.querySelector('h1 a');
const footerTag = document.querySelector('footer');
const toolBar = document.querySelector('.toolbar');

function darkmode(self) {
    if(self.value === '☁️') {
        bodyTag.style.backgroundColor = 'black';
        footerTag.style.color = 'white';
        h1Tag.style.color = 'white';
        self.value = '🌞';
    } else {
        bodyTag.style.backgroundColor = 'white';
        footerTag.style.color = 'black';
        h1Tag.style.color = 'black';
        self.value = '☁️';
    }
}

function deleteToolbar() {
    toolBar.remove();
}