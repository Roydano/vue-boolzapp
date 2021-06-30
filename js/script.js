const app = new Vue({



    el: '#app',


    data:{

        counter: 0,

        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Diego',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '15/01/2020 15:30:55',
                        text: 'Weeeeee Dieghito come stai?',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Bene grazie! Tu?',
                        status: 'received'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Non troppo entusiasmo!! XD',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Cmq volevo chiederti se volevi venire con noi al mare!',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Luigi',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Stasera...campetto?',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ora?',
                        status: 'received'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: '21',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Andata',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Gabriele',
                avatar: 'img/avatar_5.jpg',
                visible: true,
                messages: [

                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ohi',
                        status: 'received'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Ci sei?',
                        status: 'received'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Rispondi!',
                        status: 'received'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Daii!',
                        status: 'received'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Ohhhhhhhhhhhhhhhhhh',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Loredana',
                avatar: 'img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Allora?',
                        status: 'received'
                    },

                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Usciamo o no una di queste sere?',
                        status: 'received'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Carlo',
                avatar: 'img/avatar_8.jpg',
                visible: true,
                messages: [
                    
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ho bisogno di te! Ci sei??!',
                        status: 'received'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Come tutti! Certo dimmi pure',
                        status: 'sent'
                    }
                ],
            },


        ],


    },

    methods:{

        //! funzione per selezionare i contatti in base all'inidice
        changeContact(indice){

            this.counter = indice;
            console.log(this.counter)

        },

        //! Funzione per generare la data e l'ora attuale
        today(){
            let now = dayjs();
            return now.format('DD/MM/YYYY') + ' ' + now.format('HH:mm')
        },

        //! funzione per mandare e ricevere il messaggio
        sendMsg(){

            //? creo una variabile che vada a prendere il valore che inserisco nella chat bar

            let messageSend = document.getElementById('chat_text').value;
            // console.log(messageSend);

            //? creo una variabile che aggiunga il messaggio che andremo a scrivere come oggetto dell'array messages al contatto selezionato

            let newMessages = this.contacts[this.counter].messages;
            newMessages.push({text: messageSend, date: this.today(), status: 'sent'});
            //?in questo modo ogni volta che il messaggio viene pushato la barra si pulisce

            document.getElementById('chat_text').value = '';

            // console.log(newMessages);
            // console.log(newMessages.length);

            setTimeout(function(){
                newMessages.push({text: 'ok', status: 'received'})
            }, 1000);
            
        },


    }







});

