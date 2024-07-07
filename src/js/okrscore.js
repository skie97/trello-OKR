var t = TrelloPowerUp.iframe();

window.okrscore.addEventListener("submit", function (event) {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  const pCurrent = t.set("card", "shared", "okrCurrentScore", window.okrCurrentScore.value);
  const pMax = t.set("card", "shared", "okrMaxScore", window.okrMaxScore.value);
  return Promise.all([pMax, pCurrent])
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
    const pCurrent = t.get("card", "shared", "okrCurrentScore");
    const pMax = t.get("card", "shared", "okrMaxScore");
    Promise.all([pCurrent, pMax])
        .then((values) => {
            window.okrCurrentScore.value = values[0];
            window.okrMaxScore.value = values[1];
            t.sizeTo("#okrscore").done();
        });
});
