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
    }
  }

}).mount('#app')