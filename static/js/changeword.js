const titlec = document.getElementById("titlec");
titlec.addEventListener("mouseover", function() {
    titlec.style.opacity = "0";
    setTimeout(function() {
        titlec.textContent = "君の膵臓をたべたい";
        titlec.style.opacity = "1";
    }, 1000);
});
titlec.addEventListener("mouseout", function() {
    titlec.style.opacity = "0";
    setTimeout(function() {
        titlec.textContent = "我想吃掉你的胰臟";
        titlec.style.opacity = "1";
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop(); // 获取当前页面的文件名
    var navLinks = document.getElementsByClassName("nav-link");

    for (var i = 0; i < navLinks.length; i++) {
        var page = navLinks[i].getAttribute("data-page");

        if (page === currentPage) {
            navLinks[i].classList.add("active");
        }
    }
});
