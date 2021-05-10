document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    header.addEventListener('click', e => {
        header.classList.remove('header--active');
    });

    document.querySelector('nav').addEventListener('click', e => {
        header.classList.remove('header--active');
    });

    document.getElementById('header__open-menu').addEventListener('click', e => {
        header.classList.add('header--active');
    });

    document.querySelectorAll('nav a, #header__open-menu').forEach(link => {
        link.addEventListener('click', e => {
            e.stopPropagation();
        })
    });
})