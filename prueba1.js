//askdnfknasd asd asdk mas


console.log(fnaritmeticas('+',9,2));
function fnaritmeticas(modo,v1,v2) {
    let resultado;
    if (typeof(v1)=='number' && typeof(v2)=='number') {
        
    switch (modo) {
        case '+':
            resultado = Number(v1)+Number(v2)
            break;
        case '-':
            resultado = Number(v1)-Number(v2)
            break;
        case '*':
            resultado = Number(v1)*Number(v2)
            break;
        case '/':
            resultado = Number(v1)/Number(v2)
            break;
        case '**':
            resultado = Number(v1)**Number(v2)
            break;
        default:
            break;
    }
    } else{
        resultado ='Los valores deben ser numeros'
    }
    return resultado;
}

