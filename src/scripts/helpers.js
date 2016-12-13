let helpers = {
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