function OpenMenuMobile() {
    document.querySelector('ul.menu nav').classList.add('open');
    document.querySelector('svg[onclick="OpenMenuMobile()"]').classList.add('open'); 
}
function CloseMenuMobile() {
    document.querySelector('ul.menu nav').classList.remove('open');
    document.querySelector('svg[onclick="OpenMenuMobile()"]').classList.remove('open'); 
    
}