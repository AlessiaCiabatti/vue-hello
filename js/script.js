const { createApp } = Vue;

// dentro createApp ci sarà tutto in codice, non scrivere mai fuori 
createApp({
// metodo data() che restituisce un oggetto
  data(){
    return{
      messaggio: '',
      saluto: 'Buongiorno',
      nome: 'Ugo',
      cognome: 'De Ughi',
      // testo direttiva in HTML
      testoHtml: '<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad blanditiis qui deserunt earum laborum. Soluta, nobis molestiae. Distinctio repudiandae rerum, eius nesciunt obcaecati omnis fuga amet cupiditate similique eaque ducimus!</p>',
      // classe
      coloreTesto: '',
      // link
      linkSito: 'https://vuejs.org/',
      // contaote 0
      contatore: 0,
      displayClock: '00:00:00',
      altraClasseCss: 'sottolineato',
      secondoContatore: 0,
    }
  },

  methods:{
    prova(){
      console.log('prova');
    },

  incrementoContatore(){
    // per usare i data all'interno di methods, devo richiamarli con this
    this.contatore++;
    console.log('incremento contatore', this.contatore);
  },

  // secondo contatore
  incrementoSecondoContatore(){
    this.secondoContatore++;
    console.log('incremento contatore', this.secondoContatore);
  },
  // saluto diventa una nuova stringa
  altroMessaggio(messaggioStr){
    this.saluto = `${messaggioStr} ${this.nome} come stai?`
  },
  // orologio: al caricaremnto segna l'ora
  printClock(){
    const d = new Date();
    let h = d.getHours() < 10 ? '0' +  d.getHours() :  d.getHours()
    let m = d.getMinutes() < 10 ? '0' +  d.getMinutes() :  d.getMinutes()
    let s = d.getSeconds() < 10 ? '0' +  d.getSeconds() :  d.getSeconds()
    this.displayClock = `${h}:${m}:${s}`
  },
  // faccio funzionare l'orologio
  startClock(){
    // la funzione di callback con un timing function, deve essere in un'arrow function
    setInterval(() => this.printClock(), 1000);
  }
  },


  // dopo i metodi c'è mounted, che è un metodo, viene invocato quando l'app è  montata
  mounted(){
    console.log('APP MONTATA');
    // per segnare l'ora la richiamo dentro mounted
    this.printClock();
    // richiamo anche questa funzione in mounted
    this. startClock();
  },

  // anche se l'ho scritto dopo, viene stamato prima
  created(){
    console.log('APP CREATA');
  }
}).mount('#app')