new Vue({
    el: '#container',
    data: {
        accepterCGV: 'Cochez pour accepter les CGV.',
        voirBtnSubmit: false,
        refuserCGV: 'Refuser nos CGV.',
        afficherURL: false
    },
    methods: {
        afficher: function() {
            this.accepterCGV = 'Vous avez accepter nos CGV.',
            this.voirBtnSubmit = true,
            this.refuserCGV = 'Refuser nos CGV.',
            this.afficherURL = false
        },

        refuser: function() {
            this.refuserCGV = 'Vous avez refuser nos CGV',
            this.afficherURL = true,
            this.accepterCGV = 'Cochez pour accepter les CGV.',
            this.voirBtnSubmit = false

        }
    }
});