document.addEventListener('DOMContentLoaded', () => {
    const genreTrigger = document.getElementById('genreTrigger');
    const availabilityTrigger = document.getElementById('availabilityTrigger');
    const genreDropdown = document.getElementById('genreDropdown');
    const availabilityDropdown = document.getElementById('availabilityDropdown');
    const badgeContainer = document.querySelector('.badge-container');
    const inStockCheckbox = document.getElementById('inStockCheckbox');

    function toggleDropdown(dropdown, otherDropdown) {
        genreDropdown.classList.remove('show');
        availabilityDropdown.classList.remove('show');
        if (!dropdown.classList.contains('show')) {
            dropdown.classList.add('show');
        }
    }

    genreTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(genreDropdown, availabilityDropdown);
    });

    availabilityTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(availabilityDropdown, genreDropdown);
    });

    document.addEventListener('click', (e) => {
        if (!genreDropdown.contains(e.target) && !genreTrigger.contains(e.target)) {
            genreDropdown.classList.remove('show');
        }
        if (!availabilityDropdown.contains(e.target) && !availabilityTrigger.contains(e.target)) {
            availabilityDropdown.classList.remove('show');
        }
    });

    genreDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    availabilityDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    inStockCheckbox.addEventListener('change', () => {
        if (inStockCheckbox.checked) {
            if (!badgeContainer.querySelector('.badge')) {
                const badge = document.createElement('div');
                badge.classList.add('badge');
                badge.innerHTML = `<span class="badge-close">✕</span> ТОЛЬКО ТОВАРЫ В НАЛИЧИИ`;
                badgeContainer.appendChild(badge);
                badgeContainer.style.display = 'block';
                badge.addEventListener('click', () => {
                    badge.remove();
                    inStockCheckbox.checked = false;
                    if (badgeContainer.children.length === 0) {
                        badgeContainer.style.display = 'none';
                    }
                });
            }
        } else {
            const badge = badgeContainer.querySelector('.badge');
            if (badge) {
                badge.remove();
                if (badgeContainer.children.length === 0) {
                    badgeContainer.style.display = 'none';
                }
            }
        }
    });
});
