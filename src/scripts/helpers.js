let helpers = {
    formatPrice : function (cents) {
      return "£" + ((cents/100)).toFixed(2).replace(/\B(?=(\d{3}) + (?!\d))/g, ",");
    },
    rando: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    getFunName : function () {
        var adjectives = ["adorable", "beautiful", "clean", "drab","elegant"];
        var nouns = ["women", "men", "children", "teeth", "feet", "people"];

        return `${this.rando(adjectives)} - ${this.rando(adjectives)} - ${this.rando(nouns)}`;
    }
}

export default helpers;