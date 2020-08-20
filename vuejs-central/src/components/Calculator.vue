<template>
  <div class="calculatrice">
    <div class="display">{{current || '0'}}</div>
    <div @click="effacer()" class= "btn">C</div>
    <div @click="signe()" class="btn">+/-</div>
    <div @click="pourcentage()" class="btn">%</div>
    <div @click="divisé()" class="btn operateur">÷</div>
    <div @click="append(7)" class="btn">7</div>
    <div @click="append(8)" class="btn">8</div>
    <div @click="append(9)" class="btn">9</div>
    <div @click="mult()" class="btn operateur">x</div>
    <div @click="append(4)" class="btn">4</div>
    <div @click="append(5)" class="btn">5</div>
    <div @click="append(6)" class="btn">6</div>
    <div @click="moins()" class="btn operateur">-</div>
    <div @click="append(1)" class="btn">1</div>
    <div @click="append(2)" class="btn">2</div>
    <div @click="append(3)" class="btn">3</div>
    <div @click="plus()" class="btn operateur">+</div>
    <div @click="append(0)" class="btn zero">0</div>
    <div @click="virgule()" class="btn">.</div>
    <div @click="egal()" class="btn operateur">=</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      previous: null, 
      current : '',
      operator: null,
      operatorClicked: false
    }
  },
  methods: {
    effacer(){
      this.current = '';
    },
    signe() {
      this.current = this.current.charAt(0) === '-' ? 
      this.current.slice(1) : `-${this.current}` ;
    },
    pourcentage(){
      this.current = `${parseFloat(this.current) / 100}`
    },
    append(number){
        if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    virgule(){
      //s'il n'existe pas encore de virgule , alors ...
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious(){
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divisé(){
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    mult(){
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    moins(){
      this.operator = (a, b) => a - b
      this.setPrevious();

    },
    plus(){
      this.operator = (a, b) => a + b      
      this.setPrevious();
    },

    egal(){
      this.current = `${this.operator(
        parseFloat(this.current), 
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculatrice{
  width : 600px;
  margin: 0 auto;
  display : grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px,auto);
}

.display {
  grid-column: 1 / 5;
  background-color: blue;
}

.btn {
  background-color: #eee;
  border: 1px solid #333;
}

.zero {
  grid-column: 1 / 3;
}

.operateur {
  background-color: orangered;
  color: whitesmoke;
}

.calculatrice h1{
  float:center;
}


</style>
