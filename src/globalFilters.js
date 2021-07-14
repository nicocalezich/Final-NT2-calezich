import Vue from 'vue';

Vue.filter('codificar', function (value) {
    for (let i = 0; i < value.length; i++) {
        let char = value.charAt(i);
        let nuevoChar = null;
        switch (char) {
            case 'a':
                nuevoChar = 'u'
                break
            case 'e':
                nuevoChar = 'o'
                break
            case 'o':
                nuevoChar = 'e'
                break
            case 'u':
                nuevoChar = 'a'
                break
        }
            value = nuevoChar? value.substring(0, i) + nuevoChar + value.substring(i+1) : value
        
    }
    return value
})

Vue.filter('mayuscula', function(value) {
    return value.toUpperCase()
});

Vue.filter('minuscula', function(value) {
    return value.toLowerCase()
});

Vue.filter("mayusculaminuscula", function(value, primeraMayus) {
    value = value
      .split("")
      .map((char, i) => {
          if((i % 2 === 0) === primeraMayus){
              char = char.toUpperCase()
          }
          return char
      })
      .join("");

      return value
  });

  

