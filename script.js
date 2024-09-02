
const storiesContainer = document.getElementById('stories');  

// Function 
function extractStories() {  
    const articles = document.querySelectorAll('article'); 
    let storiesHtml = '';  

    articles.forEach(article => {  
        const title = article.querySelector('h2').innerText; 
        const summary = article.querySelector('p').innerText;   
        storiesHtml += `<h2>${title}</h2><p>${summary}</p>`;  
    });  

    storiesContainer.innerHTML = storiesHtml;  
}  
 
document.addEventListener('DOMContentLoaded', extractStories);
