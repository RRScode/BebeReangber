
function expand(x){
    const sections = document.querySelectorAll("section");
    console.log(sections);
    
    sections.forEach((y) => {
        const child =y.children;
        if (y.id == x.id){
            child[0].style.height = "40px";
            child[1].style.display = "flex";
        } else {
            child[0].style.height = "200px";
            child[1].style.display = "none";    
        }
    })
} 
