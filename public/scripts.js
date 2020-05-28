const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add('active')
    }
}


let totalPages = 17,
    selectedPage = 13,
    oldPage,
    pages = []


for(let currentPage = 1; currentPage <= totalPages; currentPage++) {

    if (totalPages > 7) {
        const firstAndLastPages = currentPage == 1 || currentPage == 2 || currentPage == (totalPages - 1) ||  currentPage == totalPages
    
        const pagesAfterSelectedPage = currentPage <= selectedPage + 1
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 1
    
        if (firstAndLastPages || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
    
            if(oldPage && (currentPage - oldPage) > 2){
                pages.push("...")
            }
    
            if(oldPage && (currentPage - oldPage) == 2){
                pages.push(oldPage + 1)
            }        
    
            pages.push(currentPage)
    
            oldPage = currentPage
    
        }
    }else {
        pages.push(currentPage)
    }
}

console.log(pages)