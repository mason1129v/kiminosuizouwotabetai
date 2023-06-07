function toggleMute() {
    var music = document.getElementById("music");
    var musicButton = document.getElementById("musicButton");
    var musicIcon = document.getElementById("musicIcon");

    if (music.muted) {
        music.muted = false;
        musicIcon.classList.remove("fa-music"); // 移除靜音圖示的 class
        musicIcon.classList.add("fa-volume-xmark"); // 新增播放圖示的 class
    } else {
        music.muted = true;
        musicIcon.classList.remove("fa-volume-xmark"); // 移除播放圖示的 class
        musicIcon.classList.add("fa-music"); // 新增靜音圖示的 class
    }
}



