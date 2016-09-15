var unidades = ["Huesca","Teruel","Zaragoza"];
var codigos = [22,44,50];

var seccion_principal ="Ficha de provincia de Aragon";
var seccion_no_prevista ="Otros datos no previstos";
var secciones =[seccion_principal,"Ficha de datos de reciclaje","Ficha de datos de consumo de carburante","Ficha de datos turisticos",seccion_no_prevista,"estadistica_provincias"];
var secciones_nombres =["","Datos de reciclaje","Datos de consumo de carburante","Datos turísticos","Otros datos de interés","Estadística"];

var seccion = new Array();

seccion["TOTAL HOMBRES PROVINCIA DE *"]="Ficha de provincia de Aragon";
seccion["TOTAL MUJERES  PROVINCIA DE *"]="Ficha de provincia de Aragon";
 
seccion["NUM_CONTENEDORES_VIDRIO_*_aaaa"]="Ficha de datos de reciclaje";
seccion["NUM_KG_VIDRIO_RECOGIDO_*_aaaa"]="Ficha de datos de reciclaje";

seccion["CONSUMO_GASOLINA_TOTAL_*_aaaa"]="Ficha de datos de consumo de carburante";
seccion["CONSUMO_GASOLINA_95_*_aaaa"]="Ficha de datos de consumo de carburante";
seccion["CONSUMO_GASOLINA_97_*_aaaa"]="Ficha de datos de consumo de carburante";
seccion["CONSUMO_GASOLINA_98_*_aaaa"]="Ficha de datos de consumo de carburante";
seccion["CONSUMO_GASOLEO_TIPOA_*_aaaa"]="Ficha de datos de consumo de carburante";
seccion["CONSUMO_GASOLEO_TIPOB_*_aaaa"]="Ficha de datos de consumo de carburante";
seccion["CONSUMO_GASOLEO_TIPOC_*_aaaa"]="Ficha de datos de consumo de carburante";
seccion["CONSUMO_GASOLEO_BIODIESEL_*_aaaa"]="Ficha de datos de consumo de carburante";
seccion["CONSUMO_GASOLEO_OTROS_GASOLEOS_*_aaaa"]="Ficha de datos de consumo de carburante";

seccion["PLAZAS_APARTAMENTOS_PROVINCIA_*_aaaa"]="Ficha de datos turisticos";
seccion["PLAZAS_CAMPINGS_PROVINCIA_*_aaaa"]="Ficha de datos turisticos";
seccion["PLAZAS_HOTEL_PROVINCIA_*_aaaa"]="Ficha de datos turisticos";
seccion["PLAZAS_TURISMO_RURAL_PROVINCIA_*_aaaa"]="Ficha de datos turisticos";
seccion["EST_APARTAMENTOS_PROVINCIA_*_aaaa"]="Ficha de datos turisticos";
seccion["EST_CAMPINGS_PROVINCIA_*_aaaa"]="Ficha de datos turisticos";
seccion["EST_HOTEL_PROVINCIA_*_aaaa"]="Ficha de datos turisticos";
seccion["EST_TURISMO_RURAL_PROVINCIA_*_aaaa"]="Ficha de datos turisticos";

var section_table_columns = new Array();
var section_table_headers = new Array();
var etiquetas = new Array();
