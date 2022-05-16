import './styles/styles.scss';

const accordion = document.querySelectorAll('.accordion');
console.log(accordion);

accordion.forEach((item) => {
    const iconButton =     item.querySelector('.icon-plus')
    iconButton.addEventListener('click', () =>{
        item.classList.toggle('active');
    })
})