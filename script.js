window.addEventListener('scroll', () => {
    const mainNav = document.getElementById('main-nav');
    const headerHeight = document.querySelector('header').offsetHeight;

    if (window.scrollY > headerHeight) {
        mainNav.classList.add('sticky');
    } else {
        mainNav.classList.remove('sticky');
    }
});

function scrollToPost(postId) {
    document.getElementById(postId).scrollIntoView({ behavior: 'smooth' });
}

function filterPosts() {
    const query = document.getElementById('search').value.toLowerCase();
    const buttons = document.querySelectorAll('.search-bar button');
    buttons.forEach(button => {
        if (button.textContent.toLowerCase().includes(query)) {
            button.style.display = '';
        } else {
            button.style.display = 'none';
        }
    });
}
// Add horizontal scrolling behavior to the scrollable section
const scrollableButtons = document.querySelector('.scrollable-buttons');

scrollableButtons.addEventListener('wheel', (e) => {
    // Prevent vertical scrolling on the container
    e.preventDefault();

    // Translate vertical scroll (deltaY) into horizontal scroll
    scrollableButtons.scrollLeft += e.deltaY;
});
// Show/hide the "Back to Top" button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll smoothly to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
