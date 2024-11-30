let timeoutId; // Déclarer la variable globalement

function playVideo(videoId) {
    // Pause all other videos before playing the selected one
    for (let i = 1; i <= 6; i++) {
        if (i !== videoId) {
            pauseVideo(i);
        }
    }

    const video = document.getElementById(`video${videoId}`);
    const image = document.getElementById(`image${videoId}`);
    
    if (video) {
        video.style.display = "block"; // Afficher la vidéo
        video.play().catch(error => console.error('Error playing video:', error)); // Lancer la vidéo
    }

    if (image) {
        image.style.display = "none"; // Masquer l'image de la vignette
    }
}

function schedulePauseVideo(videoId) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => pauseVideo(videoId), 100); // Légère attente avant de mettre en pause
}

function pauseVideo(videoId) {
    const video = document.getElementById(`video${videoId}`);
    const image = document.getElementById(`image${videoId}`);
    
    if (video) {
        video.pause();
        video.currentTime = 0;
        video.style.display = "none"; // Masquer la vidéo
    }

    if (image) {
        image.style.display = "block"; // Afficher à nouveau l'image
    }
}

// Affichage du texte au survol
function showText(id) {
    document.getElementById("text" + id).classList.add("show-text");
    playVideo(id); // Lancer la vidéo lors du survol de la vignette
}

// Masquer le texte et mettre la vidéo en pause lorsque la souris quitte
function hideText(id) {
    setTimeout(function() {
        document.getElementById("text" + id).classList.remove("show-text");
        schedulePauseVideo(id); // Mettre en pause la vidéo après un léger délai
    }, 200);
}

// Fonction générique pour ouvrir un modal et charger son contenu
function openModal(page, modalId) {
    const modalContent = document.querySelector(`#${modalId} .modal-body #modalContent`);
    
    

    // Créer une instance de la modale Bootstrap
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();
    } else {
        console.error(`Modal avec l'ID "${modalId}" introuvable.`);
    }
}

// Fonctions spécifiques pour ouvrir chaque modal
function openModal1(page) {
    openModal(page, 'pageModal1');
}

function openModal2(page) {
    openModal(page, 'pageModal2');
}

function openModal3(page) {
    openModal(page, 'pageModal3');
}

function openModal4(page) {
    openModal(page, 'pageModal4');
}

function openModal5(page) {
    openModal(page, 'pageModal5');
}

function openModal6(page) {
    openModal(page, 'pageModal6');
}

function handleVignetteClick(id, page) {
    // Exemple d'action : ouverture d'un modal avec le contenu de la page
    openModal(page, `pageModal${id}`);
}