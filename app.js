const app = Vue.createApp({
    // Optionen
    data: function() {
        return {
            submissions: submissions,
            totalVotes: 0,
            // aus seed.js wird die Konstante/Array submissions importiert
        };
    },
    /*
    computed: {
        // Hier rufen wir keine Methode auf und wird wie Daten/Variablen verwendet
        // Sie werden wie normale Properties verwendet, aber als Funktion definiert
        totalVotes() {
            console.log("Computed Property totalVotes() wurde ausgeführt!");
            return this.submissions.reduce((totalVotes, submission) => {
                return totalVotes + submission.votes;
            }, 0);
        }
    },
    */
    methods: {
        // Keine Arrow-Funktionen benutzen, weil es auf den Elternbereich zugreift App -> Window
        //console.log(this);
        upvote(infoText, event) {
            this.submissions[0].votes++;
            //console.log(infoText);
        }, 
        logConsole(text) {
            console.log(text);
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
        submissions: {
            handler(newValue, oldValue) {
                this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
                    return totalVotes + submission.votes;
                }, 0)
            },
            deep: true,
            immediate: true,
        },
        totalVotes(newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
        }

    }
})

// Liefert die Instanz zur Root-Componennt zurück
const vm = app.mount('#app');