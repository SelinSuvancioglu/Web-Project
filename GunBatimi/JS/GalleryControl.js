
// Tüm <img> etiketlerini seç
const imgElements = document.querySelectorAll('img.photo');

// src'leri bir array'e ekle
const imageArray = Array.from(imgElements).map(img => img.src);

console.log(imageArray);

let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % imageArray.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageArray[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageArray[currentIndex];
}

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
