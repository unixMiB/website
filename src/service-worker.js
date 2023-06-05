self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  self.registration
    .unregister()
    .then(function () {
      return self.clients.matchAll();
    })
    .then(function (clients) {
      clients.forEach((client) => client.navigate(client.url));
    })
    .then(function () {
      const answer = window.confirm(
        `Il sito è stato aggiornato. ` +
        `Ricaricare per visualizzare la versione aggiornata?`
      );
      if (answer === true) {
        window.location.reload();
      }
    });
});
