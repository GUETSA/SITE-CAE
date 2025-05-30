let mediaItems = []; // Liste des médias (images/vidéos)
let currentIndex = 0; // Index du média actuellement affiché

function togglePhotos(albumTitle) {
    const preview = albumTitle.nextElementSibling;
    preview.classList.toggle("hidden");

    // Collecte des médias (images/vidéos) pour le lecteur
    mediaItems = [...preview.querySelectorAll(".photo img, .video video")];
}

function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById("media-modal");
    const viewer = document.getElementById("media-viewer");
    
    // Affiche l'image ou la vidéo
    const media = mediaItems[currentIndex].cloneNode(true);
    viewer.innerHTML = ""; // Nettoie le contenu précédent
    viewer.appendChild(media);
    
    modal.style.display = "flex"; // Affiche la modale
}

function closeModal() {
    const modal = document.getElementById("media-modal");
    modal.style.display = "none"; // Cache la modale
}

function showNext() {
    currentIndex = (currentIndex + 1) % mediaItems.length;
    openModal(currentIndex);
}

function showPrevious() {
    currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    openModal(currentIndex);
}

// Ajoutez des écouteurs de clics sur les images/vidéos
document.querySelectorAll(".photo img, .video video").forEach((media, index) => {
    media.addEventListener("click", () => openModal(index));
});
