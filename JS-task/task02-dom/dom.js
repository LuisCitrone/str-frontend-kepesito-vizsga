function changeOuterLinks() {}
const links = document.querySelectorAll('nav#link-list a');
    links.forEach( item => {
        if (item.innerHTML.includes('outer-link')) {
            item.setAttribute('target', '_blank');
            item.innerHTML = `<strong>${item.innerHTML}</strong>`;
        }
    })

export { changeOuterLinks };