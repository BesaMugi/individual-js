const plant = {
    name: 'Малина',
    stage: 1,
    water: 1,
    dung: 0,
    ripeness: 0,

    getStage: function(){
        if(this.stage === 7){
            console.log('Время сбора урожая')
        }else if(this.stage < 7){
            this.stage++
            this.ripeness++
            this.water--
        }

        
    },

    getWatering: function(){
        if(this.water <= 0){
            console.log('Растение умерло, надо было поливать, ты проиграл!')
        }else{
            this.water++
        }
    },

    getGather: function(){
        if(this.gather !== this.stage){
            this.gather++
        }
    },

    getDung: function(){
        if(this.dung === 5){
            console.log('Не трать костную муку, твое растение уже выросло! Проверь статус растения.')
        }
        this.dung++
    },

    getRipeness: function(){
        if(this.ripeness >= 5){
            console.log('Урожай созрел!!!')
        }else{
            this.ripeness++
        }
    },

    getStatus: function(){
        console.log(`
        Название: ${this.name},
        Стадия: ${this.stage},
        Вода: ${this.water},
        Костная мука: ${this.dung},
        Рост: ${this.ripeness}
        `)
    }
};

plant.getStage()

plant.getWatering()

plant.getDung()

plant.getRipeness()
plant.getRipeness()

plant.getStatus()
