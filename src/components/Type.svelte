<script>
  export let type;
</script>

<style>
  .tag {
    color: white;
  }

  .normal {
    background-color: #A8A878;
  }
  .fire {
    background-color: #F08030;
  }
  .fighting {
    background-color: #BF3027;
  }
  .water {
    background-color: #6890F0;
  }
  .flying {
    background-color: #A790F0;
  }
  .grass {
    background-color: #78C750;
  }
  .poison {
    background-color: #9F409F;
  }
  .electric {
    background-color: #F8D030;
  }
  .psychic {
    background-color: #F85888;
  }
  .rock {
    background-color: #B7A037;
  }
  .ice {
    background-color: #98D8D8;
  }
  .bug {
    background-color: #A7B820;
  }
  .dragon {
    background-color: #7037F8;
  }
  .ghost {
    background-color: #705998;
  }
  .dark {
    background-color: #715848;
  }
  .steel {
    background-color: #B8B7D0;
  }
  .fairy {
    background-color: #EE99AC;
  }
  .ground {
    background-color: #E0C068;
  }
</style>

<span class={`tag ${type}`}>{type}</span>
