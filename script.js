function calculate() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    
    const diagonal = Math.floor(Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2)));
    const difference = diagonal - Math.max(length, width);
    
    const outputLarge = document.getElementById("output-large");
    outputLarge.value = diagonal + " inches";
    
    const outputSmall = document.getElementById("output-small");
    outputSmall.value = (Math.min(length, width) + difference) + " inches";
  }
  