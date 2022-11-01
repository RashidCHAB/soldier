const soldier = {
    name: 'Aslanbek',
    health: 10,
    supplies: 3,
    weapon: {
        model: 'AK-47y',
        cartridges: 30,
    },


    shoot: function () {
        if (this.weapon.cartridges > 0) {
            this.weapon.cartridges-- 
            console.log(`Пиу(Осталось ${this.weapon.cartridges} пуль.)`) }
        if (this.weapon.cartridges === 0) console.log('Обойма пуста, перезарядитесь.')
            
        
    },


    reload: function () {
        console.log("Перезарядка...")
        if (this.supplies > 0) {
            this.weapon.cartridges = 30;
            this.supplies--
            if (this.supplies === 0) {
                console.log('Не осталось припасов после перезарядки.')
            }
        }
        if (this.supplies === 0)
            console.log("Нет припасов для перезарядки!")

    },


    hurt: function () {
        if (this.health > 0) {
          this.health--
        console.log(`Пацаныыы я маслину поймал...(Осталось ${this.health} здоровья)`)  
        } 
        if (this.health === 0) console.log('Проиграно');
    },

}
