function cadastro(){
    window.location.href = 'cadastro.html';
}

function eyePss(){
        var y = document.getElementById("senha");
        if (y.type === "password") {
        y.type = "text";
        document.getElementById("olhopss").src = "img/eye-outline.svg";
        } else {
        y.type = "password";
        document.getElementById("olhopss").src = "img/eye-off-outline.svg";
        }
};