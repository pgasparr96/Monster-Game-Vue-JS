new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    }, 
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        },
        attack(special) {
            // console.log(special, this.getRandom(5, 10))
            this.hurt('playerLife', 7, 12, false)
        },
        
        hurt(prop, min, max, especial) {
            const plus = especial ? 5 : 0 /* se verdadeiro, 5 : se falso, 0*/
            const hurt = this.getRandom(min + plus, max + plus) /* cálculo do valor */
            this[prop] = Math.max(this.playerlife - hurt, 0) /* playerLife nunca será negativo */
        },

        getRandom(min, max) { /* calcula valor randômico entre um mínimo e um máximo. */
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },

        // sanitize(x) {
        //     if (isNaN(x)) {
        //         return NaN;
        //     }
        //     return x;
        // }

    },
    watch: {
        hasResult(Value) {
            if (value) this.running = false
        }
    }
})