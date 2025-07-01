function shareCard() {
  if (navigator.share) {
    navigator.share({
      title: "Carte de visite - Nicolas Umuc",
      text: "Découvrez ma carte de visite numérique",
      url: window.location.href
    })
    .then(() => console.log("Carte partagée !"))
    .catch((err) => console.error("Erreur de partage :", err));
  } else {
    alert("Le partage n'est pas supporté sur ce navigateur.");
  }
}
