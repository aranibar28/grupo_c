function convertHeight(cm){return cm/100;}
var calculate=$('#calculate');var result=$('#xs-bmi-info');result.fadeOut();calculate.on('click',function(e){e.preventDefault();var weight=$('#xs-weight').val();var height=$('#xs-height').val();var height=convertHeight(height);if(height!==''&&weight!==''){bmi=parseFloat(weight/(height*height)).toFixed(2);if(bmi>25){result.html('<div class="xs-icon bg-warning"><spna class="icon icon-thumbs-down"></spna></div><p> <span class="text-warning"><strong>Oops! Estas en Sobrepeso.</strong></span> Tu IMC es: '+bmi+' </p>').fadeIn();}else if(bmi<18.5){result.html('<div class="xs-icon bg-info"><spna class="icon icon-thumbs-down"></spna></div><p> <span class="text-info"><strong>Oops! Peso Insuficiente.</strong></span> Tu IMC es: '+bmi+' </p>').fadeIn();}else{result.html('<div class="xs-icon xs-green-bg"><spna class="icon icon-thumbs-up"></spna></div><p> <span class="xs-green-color"><strong>Perfecto! Estas Saludable.</strong></span> Tu IMC es: '+bmi+' </p>').fadeIn();}}});
