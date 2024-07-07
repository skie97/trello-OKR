console.log("OKR Score started.")

function okrColor(x) {
  if (x <= 0.3) {
    return 'red';
  } else if (x <= 0.6) {
    return 'orange';
  } else {
    return 'green';
  }
}

window.TrelloPowerUp.initialize({
    "card-buttons": function (t, options) {
      return [
        {
          icon: "./targetWithArrow.svg",
          text: "OKR Score",
          callback: function (t) {
            return t.popup({
              title: "OKR Score",
              url: "okrscore.html",
            });
          },
          condition: 'edit',
        },
      ];
    },
  "card-badges": function (t, options) {
    const pCurrent = t.get('card', 'shared', 'okrCurrentScore');
    const pMax = t.get('card', 'shared', 'okrMaxScore');
    return Promise.all([pCurrent, pMax]).then((values) => {
      const score = (values[0]/values[1]).toFixed(4);
      const scorePercent = (values[0]/values[1]*100).toFixed(2);
      return [
        {
          icon: "./targetWithArrow.svg",
          text: values[0] ? `${scorePercent}%` : "No Score",
          color: values[0] ? okrColor(score) : 'red',
        }
      ]
    })
  },
  "card-detail-badges": function (t, options) {
    const pCurrent = t.get('card', 'shared', 'okrCurrentScore');
    const pMax = t.get('card', 'shared', 'okrMaxScore');
    return Promise.all([pCurrent, pMax]).then((values) => {
      const score = (values[0]/values[1]).toFixed(4);
      const scorePercent = (values[0]/values[1]*100).toFixed(2);
      return [
        {
          title: 'OKR Score',
          // icon: "./targetWithArrow.svg",
          text: values[0] ? `${scorePercent}%` : "No Score",
          color: values[0] ? okrColor(score) : 'red',
          callback: function (t) {
            return t.popup({
              title: "OKR Score",
              url: "okrscore.html",
            });
          },
        }
      ]
    })
  },
});
  