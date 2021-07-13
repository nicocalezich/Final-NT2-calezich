import Vue from 'vue';

Vue.filter('codificar', function (value) {
    for (let i = 0; i < value.length; i++) {
        let char = value.charAt(i);
        let newChar = null;
        switch (char) {
            case 'a':
                newChar = 'u'
                break
            case 'e':
                newChar = 'o'
                break
            case 'o':
                newChar = 'e'
                break
            case 'u':
                newChar = 'a'
                break
        }
        if (newChar) {
            value = value.substring(0, i) + newChar + value.substring(i + 1)
        }
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
    return value
      .split("")
      .map((x, i) => {
        return (i % 2 === 0) === primeraMayus ? x.toUpperCase() : x;
      })
      .join("");
  });

  

