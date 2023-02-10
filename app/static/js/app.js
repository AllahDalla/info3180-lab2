/* Add your Application JavaScript */

window.addEventListener("load", ()=>{
    let btn = document.getElementById("btn")
    btn.addEventListener("click", ()=>{
        follower = document.getElementById("followers")
        var current = parseInt(follower.innerHTML);
        follower.innerHTML = current + 1
    })

})


