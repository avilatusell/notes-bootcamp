function translate(cadena){

var concat="";

for (var i = 0; i <= cadena.length; i++) {
   
   switch(cadena.charAt(i)){
		case "a":
    	case "e":
        case "i": 
        case "o":
        case "u":
        case " ":
            concat=concat+cadena.charAt(i);  
	        break;
        default:
        	if(i<cadena.length){       		
        		concat=concat+cadena.charAt(i)+"o"+cadena.charAt(i);
	            break;   
        	}
            
	}
}