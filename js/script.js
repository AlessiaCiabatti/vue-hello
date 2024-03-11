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
      contatore: 0
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
  // saluto diventa una nuova stringa
  altroMessaggio(messaggioStr){
    this.saluto = `${messaggioStr} ${this.nome} come stai?`
  }
  }
}).mount('#app')