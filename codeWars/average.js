function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum =0;
    for (let i = 0; i < marks.length; i++) {        
        sum += marks[i];        
    }
    return Math.floor (sum / marks.length);
  }

  /* Альтернатива
  
    function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }

  */