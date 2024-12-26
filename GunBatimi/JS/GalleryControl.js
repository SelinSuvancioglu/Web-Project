
// Galeri açan fonksiyon
function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = imgElement.src;
}

// Galeriyi kapatan fonksiyon
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Modal dışında bir yere tıklanınca modal'ı kapatma 
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}