window.onload = function() {
    if(localStorage.getItem('mode')) {
        if (localStorage.getItem('mode') === 'dark'){
            document.querySelector("body").style.backgroundColor = 'rgb(56, 56, 56)'
            document.getElementById("text").style.backgroundColor = 'rgb(44, 44, 44)'
            document.getElementById("mode").style.backgroundColor = 'rgb(64, 64, 64)'
            document.getElementById("mode").innerHTML = 'jasny motyw'
        }
        else if(localStorage.getItem('mode') === 'bright'){
            document.querySelector("body").style.backgroundColor = 'rgb(223, 221, 235)'
            document.getElementById("text").style.backgroundColor = 'rgb(243, 231, 235)'
            document.getElementById("mode").style.backgroundColor = 'rgb(233, 221, 240)'
            document.getElementById("mode").innerHTML = 'ciemny motyw'
        }
    }
    else
        localStorage.setItem('mode', 'bright')

}


document.getElementById("mode").onclick = function() {
    if (localStorage.getItem('mode') === 'bright'){
        document.querySelector("body").style.backgroundColor = 'rgb(56, 56, 56)'
        document.getElementById("text").style.backgroundColor = 'rgb(44, 44, 44)'
        document.getElementById("mode").style.backgroundColor = 'rgb(64, 64, 64)'
        document.getElementById("mode").innerHTML = 'jasny motyw'
        localStorage.setItem('mode', 'dark')
    }
    else if(localStorage.getItem('mode') === 'dark'){
        document.querySelector("body").style.backgroundColor = 'rgb(223, 221, 235)'
        document.getElementById("text").style.backgroundColor = 'rgb(243, 231, 235)'
        document.getElementById("mode").style.backgroundColor = 'rgb(233, 221, 240)'
        document.getElementById("mode").innerHTML = 'ciemny motyw'
        localStorage.setItem('mode', 'bright')
    }
}