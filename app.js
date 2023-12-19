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
    cardHeaderBackgroundColor() {
      return {
        // Aufwendige Art
        "bg-primary": this.totalVotes >= 50,
        "text-white": this.totalVotes >= 50,

        // Alternative:
        //"bg-primary text-white": this.totalVotes >= 50#

        // if (this.totalVotes >= 50) {
        // return ["bg-primary", "text-white"];
        // }
      };
    },
    cardTitleFontSize() {
      return { fontSize: this.totalVotes + "px" };
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
    /*
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      submission.votes++;
    },
    */

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

// Globale Component
app.component("SubmissionListItem", {
  // Optionen
  // Diese Props kann ich binden in der Komponente
  props: ["submission", "counter"],
  methods: {
    upvote() {
      this.submission.votes++;
    }
  },
  template: `
  <div class="d-flex">
  <div class="d-shrink-0">
    <img v-bind:src="submission.img" alt="" />
  </div>
  <div class="flex-grow-1 ms-3">
    <h5>
      {{ submission.title}}
      <span
        class="float-end text-primary"
        style="cursor: pointer"
        @click="upvote(submission.id)"
        ><i class="fa fa-chevron-up"></i
        ><strong>{{ submission.votes }}</strong></span
      >
    </h5>
    <div v-html="submission.desc"></div>
    <small class="text-muted"
      >Eingereicht von: {{ submission.author }}</small
    >
  </div>
</div>
  `,
});

// Liefert die Instanz zur Root-Componennt zurück
const vm = app.mount("#app");
