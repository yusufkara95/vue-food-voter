const app = Vue.createApp({
  // Optionen
  data: function () {
    return {
      submissions: submissions,
      // aus seed.js wird die Konstante/Array submissions importiert
    };
  },

  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        //console.log(a.id + " " + a.title + " " + a.votes);
        //console.log(b.id + " " + b.title + " " + b.votes);
        return b.votes - a.votes;
      });
    },
    // Hier rufen wir keine Methode auf und wird wie Daten/Variablen verwendet
    // Sie werden wie normale Properties verwendet, aber als Funktion definiert
    totalVotes() {
      // console.log("Computed Property totalVotes() wurde ausgeführt!");
      return this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    },
  },
  methods: {
    // Keine Arrow-Funktionen benutzen, weil es auf den Elternbereich zugreift App -> Window
    //console.log(this);
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      submission.votes++;
    },

    /*
        totalVotes() {
            console.log("Mehtode totalVotes() wurde ausgeführt!");
            return this.submissions.reduce((totalVotes, submission) => {
                return totalVotes + submission.votes;
            }, 0);
        }
        */
  },
  watch: {
    // Daten können wir hier beobachten
    /*
        submissions(newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
        },
        */
  },
});

// Liefert die Instanz zur Root-Componennt zurück
const vm = app.mount("#app");
