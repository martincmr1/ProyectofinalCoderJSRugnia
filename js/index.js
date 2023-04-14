/////////////////////////////ARRAY DE PRODUCTOS///////////////////////////////////////////////////////////////////////////////

function verProductosapi() {
  fetch("https://api-boxes-default-rtdb.firebaseio.com/productos.json")
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
    productosServer = jsonResponse;
    productos = productosServer; 
    console.log(productos);
  })
}

let productos = [];
let productosServer = [];

verProductosapi();


const PREMIUM = 2500
/*let productosss = [{codigo: "", descripcion: "", precio: "0"},  
{codigo:"14003",descripcion :"Cbio grasa 62 EP Surt+L4:L4356 (1kg) Grasas",precio:"65"},
{codigo:"14560",descripcion :"CAMBIO ELAION F50 D1 0W20 Ypf Bidon 4 Lt",precio:"19704"},
{codigo:"14522",descripcion :"CAMBIO ELAION F50 D1 0W20 Ypf Botella 1",precio:"5326"},
{codigo:"14564",descripcion :"CAMBIO ELAION F50 F 5W30 Ypf 4 Lt",precio:"19704"},
{codigo:"14561",descripcion :"CAMBIO ELAION F50 J 0W20 Ypf Botella 1 L",precio:"5072"},
{codigo:"14542",descripcion :"LUB Y DIAG ELAION F50 PLUS 4L",precio:"19704"},
{codigo:"15283",descripcion :"LUB+DIAG ELAION F10 15 w 40 4LTS 1 Un",precio:"9499"},
{codigo:"14519",descripcion :"LUB+DIAG ELAION F10 20W50 4 l 4 Un",precio:"7423"},
{codigo:"15289",descripcion :"LUB+DIAG ELAION F10 4lts NC 1 Un",precio:"9499"},
{codigo:"15312",descripcion :"LUB+DIAG ELAION F10 ND 1 Un",precio:"9499"},
{codigo:"15284",descripcion :"LUB+DIAG ELAION F30 4LTS 1 Un",precio:"11299"},
{codigo:"15290",descripcion :"LUB+DIAG ELAION F30 4LTS NC 1 Un",precio:"11299"},
{codigo:"15313",descripcion :"LUB+DIAG ELAION F30 ND 1 Un",precio:"11299"},
{codigo:"15314",descripcion :"LUB+DIAG ELAION F50 4 l ND Ypf 1 Un",precio:"18722"},
{codigo:"15285",descripcion :"LUB+DIAG ELAION F50 4LTS 1 Un",precio:"18722"},
{codigo:"15291",descripcion :"LUB+DIAG ELAION F50 4LTS NC 1 Un",precio:"18722"},
{codigo:"15315",descripcion :"LUB+DIAG ELAION F50 E 4 lt ND Ypf 1 Un",precio:"19704"},
{codigo:"15286",descripcion :"LUB+DIAG ELAION F50 E 4LTS 1 Un",precio:"19704"},
{codigo:"15292",descripcion :"LUB+DIAG ELAION F50 E 4LTS NC 1 Un",precio:"19704"},
{codigo:"15294",descripcion :"LUB+DIAG ELAION SUV 4 LTS NC 1 Un",precio:"1000"},
{codigo:"15288",descripcion :"LUB+DIAG ELAION SUV 4LTS 1 Un",precio:"1000"},
{codigo:"15317",descripcion :"LUB+DIAG ELAION SUV ND Ypf 1 Un",precio:"1000"},
{codigo:"15287",descripcion :"LUB+DIAG ELAION TORQUE 4 LTS 1 Un",precio:"540"},
{codigo:"15293",descripcion :"LUB+DIAG ELAION TORQUE 4LTS NC 1 Un",precio:"540"},
{codigo:"15316",descripcion :"LUB+DIAG ELAION TORQUE ND Ypf 1 Un",precio:"540"},
{codigo:"15259",descripcion :"Lub+Diag Extra Vida XV300 4lts Boxes",precio:"9593"},
{codigo:"15186",descripcion :"Lubr + Diag Elaion F50 D2 5W-30 Ypf Lt",precio:"19704"},
{codigo:"15187",descripcion :"Lubr + Diag. Elaion F50 D1 5w-30 Ypf Lt",precio:"19704"},
{codigo:"199999",descripcion :"ATF D-VI C6/4 Ypf 1 Un",precio:"17051"},
{codigo:"127899",descripcion :"Diesel YPF AT 40 4lts monogrados",precio:"5511"},
{codigo:"173795",descripcion :"ELAION AURO D1 020 4/4. Ypf Bidon 4 Lt",precio:"22349"},
{codigo:"170995",descripcion :"ELAION AURO D1 020 GEN 3 Ypf 4 Lt",precio:"22796"},
{codigo:"173695",descripcion :"ELAION AURO D1 530 4/4. Ypf Bidon 4 Lt",precio:"22349"},
{codigo:"171795",descripcion :"ELAION AURO D1 530 GEN 3 Ypf 4 Lt",precio:"22796"},
{codigo:"173895",descripcion :"ELAION AURO D2 530 4/4 Ypf Bidon 4 Lt",precio:"22349"},
{codigo:"172695",descripcion :"ELAION AURO DPF 530 4/4. Ypf Bidon 4 Lt",precio:"22999"},
{codigo:"171895",descripcion :"ELAION AURO FE 530 4/4 Ypf Bidon 4 Lt",precio:"22244"},
{codigo:"172895",descripcion :"ELAION AURO FR 530 4/4. Ypf 4 Lt",precio:"22138"},
{codigo:"172995",descripcion :"ELAION AURO FR 540 4/4. Ypf Bidon 4 Lt",precio:"22138"},
{codigo:"172795",descripcion :"ELAION AURO PLUS 540 4/4 Ypf Bidon 4 Lt",precio:"22244"},
{codigo:"125199",descripcion :"Elaion F 50 Competicion 5W-50 6/4L Ypf U",precio:"25373"},
{codigo:"103799",descripcion :"ELAION F10 15W-40 6/4 1 Un",precio:"10164"},
{codigo:"14192",descripcion :"ELAION F10 15W-40 LA NACION DESC $50 Ypf",precio:"251"},
{codigo:"14191",descripcion :"ELAION F10 20W-50 LA NACION DESC $50 Ypf",precio:"1045"},
{codigo:"108099",descripcion :"Elaion F10 20W-50 Ypf 4 Lt",precio:"7943"},
{codigo:"103899",descripcion :"ELAION F30 10W-40 6/4",precio:"12090"},
{codigo:"14193",descripcion :"ELAION F30 10W-40 LA NACION DESC $50 Ypf",precio:"1492"},
{codigo:"193299",descripcion :"ELAION F50 5W-30 Ypf 4 Lt",precio:"20033"},
{codigo:"104099",descripcion :"ELAION F50 5W-40 6/4 Ypf",precio:"20033"},
{codigo:"14190",descripcion :"ELAION F50 5W-40 LA NACION DESC $100 Ypf",precio:"2821"},
{codigo:"14195",descripcion :"ELAION F50 d1 5W-30 LA NACION DESC $100",precio:"2821"},
{codigo:"182499",descripcion :"ELAION F50 D1 GEN 2 Ypf 4 Lt",precio:"21084"},
{codigo:"182299",descripcion :"ELAION F50 d1 gen2 0W20 Ypf 4 Lt",precio:"21084"},
{codigo:"106399",descripcion :"ELAION F50 D2 4LTS. 1 Un",precio:"21084"},
{codigo:"14194",descripcion :"ELAION F50 d2 5W-30 LA NACION DESC $100",precio:"2821"},
{codigo:"182599",descripcion :"ELAION F50 DPF 5W30 4 Lt",precio:"22114"},
{codigo:"14189",descripcion :"ELAION F50 E 5W-30 LA NACION DESC $100 Y",precio:"2821"},
{codigo:"14187",descripcion :"ELAION F50 F 5W-30 LA NACION DESC $100 Y",precio:"2821"},
{codigo:"14186",descripcion :"ELAION F50 F 5W-40 LA NACION DESC $100 Y",precio:"2821"},
{codigo:"14185",descripcion :"ELAION F50 J 0W-20 LA NACION DESC $100 Y",precio:"2964"},
{codigo:"121999",descripcion :"ELAION F50 PLUS 5W-40 4L 4 Lt",precio:"21084"},
{codigo:"14188",descripcion :"ELAION F50 PLUS 5W-40 LA NACION DESC $10",precio:"2821"},
{codigo:"103999",descripcion :"ELAION F50E 5W30 4lts",precio:"21084"},
{codigo:"182199",descripcion :"ELAION F50F 5W-30 Ypf 4 Lt",precio:"21084"},
{codigo:"182699",descripcion :"ELAION F50F 5W40 Ypf 4 Lt",precio:"21084"},
{codigo:"182399",descripcion :"ELAION F50J 0W20 Ypf 4 Lt",precio:"20080"},
{codigo:"105699",descripcion :"Elaion SUV 5w40 4lts. Elaion",precio:"1000"},
{codigo:"105599",descripcion :"Elaion Torque 15W40 4lts. Elaion",precio:"540"},
{codigo:"13766",descripcion :"ESCALONADO PL ELAION F50 D1 5W30 4LT $60",precio:"3884"},
{codigo:"189299",descripcion :"Extra Vida XV300. Extra Vida 4 Lt",precio:"10264"},
{codigo:"189199",descripcion :"EXTRAVIDA XV400 TS C6/4 Ypf 4 Lt",precio:"11504"},
{codigo:"609558",descripcion :"Grasa 30 C 5kgs Grasas",precio:"6698"},
{codigo:"617061",descripcion :"Grasa 62 EP 5kgs Grasas",precio:"100,8"},
{codigo:"617058",descripcion :"GRASA 62EP Ypf 5 Kg",precio:"10431"},
{codigo:"125499",descripcion :"Hidro YPF ATF 4lts otros automotrices",precio:"6859"},
{codigo:"123099",descripcion :"Hipoidal 80W90 4lts otros automotrices",precio:"7097"},
{codigo:"123199",descripcion :"Hipoidal 85W140 4lts otros automotrices",precio:"7050"},
{codigo:"16619",descripcion :"SOC ACA PL ELAION AURO D1 020 GEN 3 4 LT",precio:"19175"},
{codigo:"13727",descripcion :"SOCIO ACA PL ELAION F 50J 0W40 10% DESC",precio:"16890"},
{codigo:"14545",descripcion :"SOCIO ACA PL ELAION F10 20W50 4 L DESC 1",precio:"6681"},
{codigo:"14478",descripcion :"SOCIO ACA PL ELAION F50 PLUS 4 L DESC 10",precio:"17734"},
{codigo:"194099",descripcion :"Super20w50 4 lts. Baja Gama Gasolina",precio:"5973"},
{codigo:"116099",descripcion :"Transmision 508/140 4lts otros automotri",precio:"4753"},
{codigo:"115699",descripcion :"Transmision 90 4lts Transmision",precio:"4442"},
{codigo:"107899",descripcion :"YPF HD S1 30 4lts Baja Gama Gasolina",precio:"5102"},
{codigo:"108299",descripcion :"YPF HD S1 40 4lts monogrados",precio:"5158"},
{codigo:"108699",descripcion :"YPF HD S1 50 4lts Baja Gama Gasolina",precio:"60"},
{codigo:"628093",descripcion :"* Grasa 107 EP 180kgs tambor Grasas",precio:"320009"},
{codigo:"602569",descripcion :"* GRASA 3 B18 KG Ypf 18 Kg",precio:"22866"},
{codigo:"135680",descripcion :"* Hidraulico BP 100 20lts Mantenimiento/",precio:"22748"},
{codigo:"132292",descripcion :"* Hidraulico BP 22 205lts tambor Manteni",precio:"185845"},
{codigo:"134692",descripcion :"* Hidraulico BP 32 205lts tambor Manteni",precio:"185845"},
{codigo:"118192",descripcion :"* Transmision EP 220 205lts tambor Trans",precio:"235747"},
{codigo:"118392",descripcion :"* Transmision EP 320 205lts tambor Trans",precio:"235747"},
{codigo:"102892",descripcion :"* YPF Normal 30 205lts tambor Baja Gama",precio:"168219"},
{codigo:"103692",descripcion :"* YPF Normal 50 205lts tambor Baja Gama",precio:"169850"},
{codigo:"14001",descripcion :"CBIO ELAION NAUTICO 2 T 20L Ypf 20 Lt",precio:"1776"},
{codigo:"14957",descripcion :"CBIO EXTRAVIDA XV 400 15W-40 Ypf TAMBOR",precio:"236197"},
{codigo:"13725",descripcion :"CBIO XV 400 TS Ypf 20 Lt",precio:"4980"},
{codigo:"133692",descripcion :"Celtis TR 81 205lts Mantenimiento/Proces",precio:"15951"},
{codigo:"164292",descripcion :"CILINDRO 1000 T205 Ypf 205 Lt",precio:"8552"},
{codigo:"127892",descripcion :"Diesel YPF AT 40 205lts Baja Gama Diesel",precio:"178603"},
{codigo:"127880",descripcion :"Diesel YPF AT 40 20lts Baja Gama Diesel",precio:"21480"},
{codigo:"171880",descripcion :"ELAION AURO FE 530 Ypf 20 Lt",precio:"80876"},
{codigo:"108080",descripcion :"Elaion F10 20W-50 Ypf 20 Lt",precio:"27986"},
{codigo:"103780",descripcion :"Elaion F10 B20 lts 1 Un",precio:"35267"},
{codigo:"103880",descripcion :"Elaion F30 B20 1 Un",precio:"44678"},
{codigo:"104080",descripcion :"Elaion F50 B20 Un",precio:"72858"},
{codigo:"103980",descripcion :"Elaion F50E B20 1 Un",precio:"76733"},
{codigo:"107680",descripcion :"ELAION MOTO 4T 10W-40 20 Lt",precio:"25605"},
{codigo:"107380",descripcion :"ELAION MOTO 4T 20W-50 Ypf 20 Lt",precio:"19086"},
{codigo:"105680",descripcion :"Elaion SUV B20 1 Un",precio:"3957"},
{codigo:"105580",descripcion :"Elaion Torque B20 Un",precio:"1899"},
{codigo:"189092",descripcion :"Extra Vida XV100 205lts Extra Vida",precio:"202893"},
{codigo:"189080",descripcion :"Extra Vida XV100 20lts Extra Vida",precio:"23497"},
{codigo:"189292",descripcion :"Extra Vida XV300 205lts Extra Vida",precio:"237321"},
{codigo:"189280",descripcion :"Extra Vida XV300 Extra Vida 20 Lt",precio:"26988"},
{codigo:"189680",descripcion :"Extra Vida XV500 10w40 20lts Extra Vida",precio:"57766"},
{codigo:"189692",descripcion :"Extra Vida XV500 205lts Extra Vida",precio:"465207"},
{codigo:"191192",descripcion :"EXTRAVIDA XV 400 15W-40 Ypf TAMBOR 205 L",precio:"252731"},
{codigo:"199180",descripcion :"EXTRAVIDA XV 500 5W-30 Ypf BALDE 20 Lt",precio:"56590"},
{codigo:"199192",descripcion :"EXTRAVIDA XV 500 5W-30 Ypf TAMBOR 205 Lt",precio:"453336"},
{codigo:"189892",descripcion :"EXTRAVIDA XV 600 10W-40 Ypf TAMBOR 205 L",precio:"474876"},
{codigo:"191180",descripcion :"EXTRAVIDA XV400 B20 Extra Vida",precio:"28784"},
{codigo:"188892",descripcion :"EXTRAVIDA XV500 LD 10W-40 T205 Ypf Lt",precio:"221056"},
{codigo:"627069",descripcion :"Grasa 102 18kgs balde Grasas",precio:"34262"},
{codigo:"628069",descripcion :"Grasa 107 EP 18kgs. Grasas",precio:"37874"},
{codigo:"609593",descripcion :"Grasa 30 C 180kgs tambor Grasas",precio:"203286"},
{codigo:"609569",descripcion :"Grasa 30 C 18kg balde Grasas",precio:"27660"},
{codigo:"615069",descripcion :"GRASA 60 EP B18 Ypf 18 Kg",precio:"29577"},
{codigo:"617093",descripcion :"Grasa 62 EP 180kgs tambor Grasas",precio:"321731"},
{codigo:"617069",descripcion :"Grasa 62 EP 18kg balde Grasas",precio:"32197"},
{codigo:"618069",descripcion :"Grasa 63 EP B18 kg",precio:"29526"},
{codigo:"632493",descripcion :"GRASA 63 FC T180 KG Ypf 1 Un",precio:"313980"},
{codigo:"604069",descripcion :"Grasa 8 18kgs balde . Grasas",precio:"21364"},
{codigo:"617293",descripcion :"Grasa Limit 2 180kgs tambor Grasas",precio:"330299"},
{codigo:"632589",descripcion :"GRASALGON T170 TAMBOR Ypf 170 Kg",precio:"208896"},
{codigo:"123392",descripcion :"Helicoidal M80W 205lts tambor Transmisio",precio:"218268"},
{codigo:"123380",descripcion :"Helicoidal M80W 20lts Transmision",precio:"25900"},
{codigo:"135292",descripcion :"Hidraulico BP 150 205lts tambor Mantenim",precio:"236624"},
{codigo:"134680",descripcion :"Hidraulico BP 32 20lts Mantenimiento/Pro",precio:"21337"},
{codigo:"116992",descripcion :"Hidraulico BP 37 205lts tambor Mantenimi",precio:"185845"},
{codigo:"116980",descripcion :"Hidraulico BP 37 20lts Mantenimiento/Pro",precio:"21337"},
{codigo:"135392",descripcion :"Hidraulico BP 46 205lts tambor Mantenimi",precio:"185845"},
{codigo:"135380",descripcion :"Hidraulico BP 46 20lts Mantenimiento/Pro",precio:"21924"},
{codigo:"135592",descripcion :"Hidraulico BP 68 205lts tambor Mantenimi",precio:"185845"},
{codigo:"135580",descripcion :"Hidraulico BP 68 20lts Mantenimiento/Pro",precio:"20753"},
{codigo:"131392",descripcion :"Hidraulico D 10 205lts Mantenimiento/Pro",precio:"14025"},
{codigo:"131680",descripcion :"HIDRAULICO D 46 20 LTS Lt",precio:"0"},
{codigo:"125492",descripcion :"Hidro ATF 205lts tambor Transmision",precio:"239261"},
{codigo:"125992",descripcion :"Hidro YPF 19 205lts tambor Transmision",precio:"189210"},
{codigo:"125980",descripcion :"Hidro YPF 19 20lts Transmision",precio:"21266"},
{codigo:"123092",descripcion :"Hipoidal 80W90 205lts tambor Transmision",precio:"227451"},
{codigo:"123080",descripcion :"Hipoidal 80W90 20lts Transmision",precio:"26262"},
{codigo:"123192",descripcion :"Hipoidal 85W140 205lts tambor Transmisio",precio:"227451"},
{codigo:"123180",descripcion :"Hipoidal 85W140 20lts Transmision",precio:"26262"},
{codigo:"132680",descripcion :"Hipoidal super 75W90 Transmision",precio:"158194"},
{codigo:"141792",descripcion :"KRATOS S38 T205 Ypf 205 Lt",precio:"8908"},
{codigo:"187092",descripcion :"LIBRADOR HTA TB Ypf 205 Lt",precio:"13737"},
{codigo:"616269",descripcion :"LIMIT 1 BALDE Ypf 18 Kg",precio:"32847"},
{codigo:"617269",descripcion :"Limit 2 18kgs Grasas",precio:"34989"},
{codigo:"628769",descripcion :"Limit MO 2 18kgs Grasas",precio:"46056"},
{codigo:"628793",descripcion :"Limit MO2 180kgs tambor Grasas",precio:"443368"},
{codigo:"144092",descripcion :"LISSOS 100 Ypf 205 Lt",precio:"8030"},
{codigo:"143992",descripcion :"Lissos 68 205lts tambor Mantenimiento/Pr",precio:"7907"},
{codigo:"146780",descripcion :"Merak 150 balde 20lts Mantenimiento/Proc",precio:"963"},
{codigo:"640669",descripcion :"NEREA CL AW 2 - B.18 Ypf 18 Kg",precio:"65995"},
{codigo:"152480",descripcion :"POLAR 68 BD Ypf 20 Lt",precio:"1399"},
{codigo:"194080",descripcion :"Super 20w50 20 lts Baja Gama Gasolina",precio:"25208"},
{codigo:"194092",descripcion :"Super 20w50 205 lts tambor Baja Gama Gas",precio:"201791"},
{codigo:"116092",descripcion :"Transmision 508/140 205lts tambor Transm",precio:"169060"},
{codigo:"116080",descripcion :"Transmision 508/140 20lts Transmision",precio:"19814"},
{codigo:"116492",descripcion :"Transmision 515/250 205lts tambor Transm",precio:"230500"},
{codigo:"116480",descripcion :"Transmision 515/250 20lts Transmision",precio:"24019"},
{codigo:"115692",descripcion :"Transmision 90 205lts tambor Transmision",precio:"160291"},
{codigo:"115680",descripcion :"Transmision 90 20lts Transmision",precio:"18847"},
{codigo:"117992",descripcion :"Transmision EP 150 205lts tambor Transmi",precio:"235747"},
{codigo:"118180",descripcion :"Transmision EP 220 20lts Transmision",precio:"25731"},
{codigo:"119192",descripcion :"Transmision EP 68 205lts tambor Transmis",precio:"214613"},
{codigo:"145980",descripcion :"Turbina R 32 20lts Mantenimiento/Proceso",precio:"849"},
{codigo:"146892",descripcion :"Turbina R 68 205lts tambor Mantenimiento",precio:"7992"},
{codigo:"189180",descripcion :"XV 400 TS BALDE Ypf 20 Lt",precio:"33020"},
{codigo:"13726",descripcion :"XV 400 TS TAMBOR Ypf 205 Lt",precio:"44000"},
{codigo:"189192",descripcion :"XV 400 TS TAMBOR Ypf 205 Lt",precio:"277633"},
{codigo:"106892",descripcion :"YPF HD S1 10w 205lts Baja Gama Gasolina",precio:"178753"},
{codigo:"107880",descripcion :"YPF HD S1 30 20lts Baja Gama Gasolina",precio:"22651"},
{codigo:"108292",descripcion :"YPF HD S1 40 205lts tambor Baja Gama Gas",precio:"180460"},
{codigo:"108280",descripcion :"YPF HD S1 40 20lts Baja Gama Gasolina",precio:"22651"},
{codigo:"108692",descripcion :"YPF HD S1 50 205lts tambor Baja Gama Gas",precio:"180460"},
{codigo:"108680",descripcion :"YPF HD S1 50 20lts Baja Gama Gasolina",precio:"22651"},
{codigo:"125480",descripcion :"YPF Hidro ATF 20lts Transmision",precio:"24221"},
{codigo:"192192",descripcion :"YPF Multiturbo 205lts tambor Baja Gama D",precio:"179026"},
{codigo:"192180",descripcion :"YPF Multiturbo 20lts Baja Gama Diesel",precio:"22396"},
{codigo:"103292",descripcion :"YPF Normal 40 205lts tambor Baja Gama Ga",precio:"169850"},
{codigo:"16449",descripcion :"CAMBIO ELAION COMPETICION 5W50 4 lt DESC",precio:"16600"},
{codigo:"14521",descripcion :"CAMBIO ELAION F10 20w50 4l DESC PERSONAL",precio:"5197"},
{codigo:"13600",descripcion :"CAMBIO ELAION F50 5w30 4l DESC 10% DESC",precio:"16850"},
{codigo:"13586",descripcion :"CAMBIO ELAION F50 5w30 4l DESC 20% DESC",precio:"14978"},
{codigo:"13603",descripcion :"CAMBIO ELAION F50 5w30 4l DESC DESC PERS",precio:"13106"},
{codigo:"14374",descripcion :"Cambio ELAION F50 d1 5W-30 4 lts LB Ypf",precio:"19704"},
{codigo:"14382",descripcion :"Cambio ELAION F50 d2 5W-30 4 lts LB Ypf",precio:"19704"},
{codigo:"13832",descripcion :"CAMBIO ELAION F50 DPF 5W30 4 Ypf 4 Lt",precio:"20667"},
{codigo:"14579",descripcion :"CAMBIO ELAION F50 F 5w30 4l DESC PERSONA",precio:"13793"},
{codigo:"14581",descripcion :"CAMBIO ELAION F50 F 5w40 4l DESC PERSONA",precio:"13793"},
{codigo:"14566",descripcion :"CAMBIO ELAION F50 F 5W40 Ypf Bidon 4 Lt",precio:"19704"},
{codigo:"14562",descripcion :"CAMBIO ELAION F50 J 0W20 Ypf 4 Lt",precio:"18766"},
{codigo:"14543",descripcion :"CAMBIO ELAION F50 PLUS 4 L Un",precio:"19704"},
{codigo:"14541",descripcion :"CAMBIO F 10 20 W 50 4 L",precio:"7423"},
{codigo:"14532",descripcion :"CAMBIO F50 PLUS 4 lt DESC PERSONAL 4 Lt",precio:"13793"},
{codigo:"13304",descripcion :"CB ELAION COMPETICION 5W-50 BOXES SC DES",precio:"24023"},
{codigo:"13305",descripcion :"CB ELAION COMPETICION 5W-50 BOXES SC DES",precio:"23373"},
{codigo:"13306",descripcion :"CB ELAION COMPETICION 5W-50 BOXES SC DES",precio:"22573"},
{codigo:"13377",descripcion :"CB ELAION COMPETICION 5W-50 BOXES SC DES",precio:"25173"},
{codigo:"13378",descripcion :"CB ELAION COMPETICION 5W-50 BOXES SC DES",precio:"24973"},
{codigo:"13379",descripcion :"CB ELAION COMPETICION 5W-50 BOXES SC DES",precio:"24623"},
{codigo:"13572",descripcion :"CB ELAION COMPETICION 5W-50 BOXES SC DES",precio:"19373"},
{codigo:"13707",descripcion :"CB ELAION COMPETICION 5W-50 BOXES SC DES",precio:"21373"},
{codigo:"16475",descripcion :"CBIO ELAION AURO D1 020 4/4 DESC 10% EES",precio:"18799"},
{codigo:"13979",descripcion :"CBIO ELAION AURO D1 020 4/4 DESC 20% EES",precio:"16710"},
{codigo:"16492",descripcion :"CBIO ELAION AURO D1 020 4/4 DESC PERSONA",precio:"14621"},
{codigo:"13531",descripcion :"CBIO ELAION AURO D1 020 4/4 Ypf 4 Lt",precio:"20887"},
{codigo:"13139",descripcion :"CBIO ELAION AURO D1 020 DESC SC $1350 -",precio:"20999"},
{codigo:"13136",descripcion :"CBIO ELAION AURO D1 020 DESC SC $200 - 1",precio:"22149"},
{codigo:"13141",descripcion :"CBIO ELAION AURO D1 020 DESC SC $2000 -",precio:"20349"},
{codigo:"13142",descripcion :"CBIO ELAION AURO D1 020 DESC SC $2800 -",precio:"19549"},
{codigo:"13137",descripcion :"CBIO ELAION AURO D1 020 DESC SC $400 - 2",precio:"21949"},
{codigo:"13143",descripcion :"CBIO ELAION AURO D1 020 DESC SC $4000 -",precio:"18349"},
{codigo:"13144",descripcion :"CBIO ELAION AURO D1 020 DESC SC $6000 -",precio:"16349"},
{codigo:"13138",descripcion :"CBIO ELAION AURO D1 020 DESC SC $750 - 4",precio:"21599"},
{codigo:"13209",descripcion :"CBIO ELAION AURO D1 020 DESC SC 30% + $1",precio:"0"},
{codigo:"13206",descripcion :"CBIO ELAION AURO D1 020 DESC SC 30% + $2",precio:"0"},
{codigo:"13210",descripcion :"CBIO ELAION AURO D1 020 DESC SC 30% + $2",precio:"0"},
{codigo:"13211",descripcion :"CBIO ELAION AURO D1 020 DESC SC 30% + $2",precio:"0"},
{codigo:"13207",descripcion :"CBIO ELAION AURO D1 020 DESC SC 30% + $4",precio:"0"},
{codigo:"13212",descripcion :"CBIO ELAION AURO D1 020 DESC SC 30% + $4",precio:"0"},
{codigo:"13213",descripcion :"CBIO ELAION AURO D1 020 DESC SC 30% + $6",precio:"0"},
{codigo:"13208",descripcion :"CBIO ELAION AURO D1 020 DESC SC 30% + $7",precio:"0"},
{codigo:"13242",descripcion :"CBIO ELAION AURO D1 020 DESC SC 30% Ypf",precio:"0"},
{codigo:"16622",descripcion :"CBIO ELAION AURO D1 020 GEN 3 4 lt desc",precio:"17044"},
{codigo:"16626",descripcion :"CBIO ELAION AURO D1 020 GEN 3 4 lt DESC",precio:"19175"},
{codigo:"16630",descripcion :"CBIO ELAION AURO D1 020 GEN 3 4 lt DESC",precio:"14914"},
{codigo:"16610",descripcion :"CBIO ELAION AURO D1 020 GEN 3 4 lt Ypf 4",precio:"21305"},
{codigo:"16588",descripcion :"CBIO ELAION AURO D1 020 GEN 3 DESC SC $1",precio:"21446"},
{codigo:"16586",descripcion :"CBIO ELAION AURO D1 020 GEN 3 DESC SC $2",precio:"19996"},
{codigo:"16587",descripcion :"CBIO ELAION AURO D1 020 GEN 3 DESC SC $2",precio:"20796"},
{codigo:"16591",descripcion :"CBIO ELAION AURO D1 020 GEN 3 DESC SC $2",precio:"22596"},
{codigo:"16585",descripcion :"CBIO ELAION AURO D1 020 GEN 3 DESC SC $4",precio:"18796"},
{codigo:"16590",descripcion :"CBIO ELAION AURO D1 020 GEN 3 DESC SC $4",precio:"22396"},
{codigo:"16584",descripcion :"CBIO ELAION AURO D1 020 GEN 3 DESC SC $6",precio:"16796"},
{codigo:"16589",descripcion :"CBIO ELAION AURO D1 020 GEN 3 DESC SC $7",precio:"22046"},
{codigo:"16493",descripcion :"CBIO ELAION AURO D1 530 12/1 DESC PERSON",precio:"3953"},
{codigo:"16477",descripcion :"CBIO ELAION AURO D1 530 4/4 DESC 10% EES",precio:"0"},
{codigo:"13981",descripcion :"CBIO ELAION AURO D1 530 4/4 DESC 20% EES",precio:"16710"},
{codigo:"16494",descripcion :"CBIO ELAION AURO D1 530 4/4 DESC PERSONA",precio:"14621"},
{codigo:"13533",descripcion :"CBIO ELAION AURO D1 530 4/4 Ypf 4 Lt",precio:"20887"},
{codigo:"13148",descripcion :"CBIO ELAION AURO D1 530 DESC SC $1350 -",precio:"20999"},
{codigo:"13145",descripcion :"CBIO ELAION AURO D1 530 DESC SC $200 - 1",precio:"22149"},
{codigo:"13149",descripcion :"CBIO ELAION AURO D1 530 DESC SC $2000 -",precio:"20349"},
{codigo:"13150",descripcion :"CBIO ELAION AURO D1 530 DESC SC $2800 -",precio:"19549"},
{codigo:"13146",descripcion :"CBIO ELAION AURO D1 530 DESC SC $400 - 2",precio:"21949"},
{codigo:"13151",descripcion :"CBIO ELAION AURO D1 530 DESC SC $4000 -",precio:"18349"},
{codigo:"13152",descripcion :"CBIO ELAION AURO D1 530 DESC SC $6000 -",precio:"16349"},
{codigo:"13147",descripcion :"CBIO ELAION AURO D1 530 DESC SC $750 - 4",precio:"21599"},
{codigo:"13217",descripcion :"CBIO ELAION AURO D1 530 DESC SC 30% + $1",precio:"0"},
{codigo:"13214",descripcion :"CBIO ELAION AURO D1 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13218",descripcion :"CBIO ELAION AURO D1 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13219",descripcion :"CBIO ELAION AURO D1 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13215",descripcion :"CBIO ELAION AURO D1 530 DESC SC 30% + $4",precio:"0"},
{codigo:"13220",descripcion :"CBIO ELAION AURO D1 530 DESC SC 30% + $4",precio:"0"},
{codigo:"13221",descripcion :"CBIO ELAION AURO D1 530 DESC SC 30% + $6",precio:"0"},
{codigo:"13216",descripcion :"CBIO ELAION AURO D1 530 DESC SC 30% + $7",precio:"0"},
{codigo:"13243",descripcion :"CBIO ELAION AURO D1 530 DESC SC 30% Ypf",precio:"0"},
{codigo:"16620",descripcion :"CBIO ELAION AURO D1 530 GEN 3 4 lt desc",precio:"17044"},
{codigo:"16628",descripcion :"CBIO ELAION AURO D1 530 GEN 3 4 lt DESC",precio:"14914"},
{codigo:"16608",descripcion :"CBIO ELAION AURO D1 530 GEN 3 4 lt Ypf 4",precio:"21305"},
{codigo:"16596",descripcion :"CBIO ELAION AURO D1 530 GEN 3 DESC SC $1",precio:"21446"},
{codigo:"16594",descripcion :"CBIO ELAION AURO D1 530 GEN 3 DESC SC $2",precio:"19996"},
{codigo:"16599",descripcion :"CBIO ELAION AURO D1 530 GEN 3 DESC SC $2",precio:"22596"},
{codigo:"16593",descripcion :"CBIO ELAION AURO D1 530 GEN 3 DESC SC $4",precio:"18796"},
{codigo:"16598",descripcion :"CBIO ELAION AURO D1 530 GEN 3 DESC SC $4",precio:"22396"},
{codigo:"16592",descripcion :"CBIO ELAION AURO D1 530 GEN 3 DESC SC $6",precio:"16796"},
{codigo:"16597",descripcion :"CBIO ELAION AURO D1 530 GEN 3 DESC SC $7",precio:"22046"},
{codigo:"13989",descripcion :"CBIO ELAION AURO D2 530 4/4 DESC 10% EES",precio:"18799"},
{codigo:"13747",descripcion :"CBIO ELAION AURO D2 530 4/4 DESC 20% EES",precio:"16710"},
{codigo:"16485",descripcion :"CBIO ELAION AURO D2 530 4/4 DESC PERSONA",precio:"14621"},
{codigo:"13525",descripcion :"CBIO ELAION AURO D2 530 4/4 Ypf 4 Lt",precio:"20887"},
{codigo:"13106",descripcion :"CBIO ELAION AURO D2 530 DESC SC $1350 -",precio:"20999"},
{codigo:"13103",descripcion :"CBIO ELAION AURO D2 530 DESC SC $200 - 1",precio:"22149"},
{codigo:"13107",descripcion :"CBIO ELAION AURO D2 530 DESC SC $2000 -",precio:"20349"},
{codigo:"13108",descripcion :"CBIO ELAION AURO D2 530 DESC SC $2800 -",precio:"19549"},
{codigo:"13104",descripcion :"CBIO ELAION AURO D2 530 DESC SC $400 - 2",precio:"21949"},
{codigo:"13109",descripcion :"CBIO ELAION AURO D2 530 DESC SC $4000 -",precio:"18349"},
{codigo:"13110",descripcion :"CBIO ELAION AURO D2 530 DESC SC $6000 -",precio:"16349"},
{codigo:"13105",descripcion :"CBIO ELAION AURO D2 530 DESC SC $750 - 4",precio:"21599"},
{codigo:"13180",descripcion :"CBIO ELAION AURO D2 530 DESC SC 30% + $1",precio:"0"},
{codigo:"13177",descripcion :"CBIO ELAION AURO D2 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13181",descripcion :"CBIO ELAION AURO D2 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13182",descripcion :"CBIO ELAION AURO D2 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13178",descripcion :"CBIO ELAION AURO D2 530 DESC SC 30% + $4",precio:"0"},
{codigo:"13183",descripcion :"CBIO ELAION AURO D2 530 DESC SC 30% + $4",precio:"0"},
{codigo:"13184",descripcion :"CBIO ELAION AURO D2 530 DESC SC 30% + $6",precio:"0"},
{codigo:"13179",descripcion :"CBIO ELAION AURO D2 530 DESC SC 30% + $7",precio:"0"},
{codigo:"13239",descripcion :"CBIO ELAION AURO D2 530 DESC SC 30% Ypf",precio:"0"},
{codigo:"16479",descripcion :"CBIO ELAION AURO DPF 530 4/4 DESC 10% EE",precio:"19345"},
{codigo:"13983",descripcion :"CBIO ELAION AURO DPF 530 4/4 DESC 20% EE",precio:"17196"},
{codigo:"16496",descripcion :"CBIO ELAION AURO DPF 530 4/4 DESC PERSON",precio:"15046"},
{codigo:"13535",descripcion :"CBIO ELAION AURO DPF 530 4/4 Ypf 4 Lt",precio:"21494"},
{codigo:"13156",descripcion :"CBIO ELAION AURO DPF 530 DESC SC $1350 -",precio:"21649"},
{codigo:"13153",descripcion :"CBIO ELAION AURO DPF 530 DESC SC $200 -",precio:"22799"},
{codigo:"13157",descripcion :"CBIO ELAION AURO DPF 530 DESC SC $2000 -",precio:"20999"},
{codigo:"13158",descripcion :"CBIO ELAION AURO DPF 530 DESC SC $2800 -",precio:"20199"},
{codigo:"13154",descripcion :"CBIO ELAION AURO DPF 530 DESC SC $400 -",precio:"22599"},
{codigo:"13159",descripcion :"CBIO ELAION AURO DPF 530 DESC SC $4000 -",precio:"18999"},
{codigo:"13160",descripcion :"CBIO ELAION AURO DPF 530 DESC SC $6000 -",precio:"16999"},
{codigo:"13155",descripcion :"CBIO ELAION AURO DPF 530 DESC SC $750 -",precio:"22249"},
{codigo:"13222",descripcion :"CBIO ELAION AURO DPF 530 DESC SC 30% + $",precio:"0"},
{codigo:"13223",descripcion :"CBIO ELAION AURO DPF 530 DESC SC 30% + $",precio:"0"},
{codigo:"13224",descripcion :"CBIO ELAION AURO DPF 530 DESC SC 30% + $",precio:"0"},
{codigo:"13225",descripcion :"CBIO ELAION AURO DPF 530 DESC SC 30% + $",precio:"0"},
{codigo:"13226",descripcion :"CBIO ELAION AURO DPF 530 DESC SC 30% + $",precio:"0"},
{codigo:"13227",descripcion :"CBIO ELAION AURO DPF 530 DESC SC 30% + $",precio:"0"},
{codigo:"13228",descripcion :"CBIO ELAION AURO DPF 530 DESC SC 30% + $",precio:"0"},
{codigo:"13229",descripcion :"CBIO ELAION AURO DPF 530 DESC SC 30% + $",precio:"0"},
{codigo:"13244",descripcion :"CBIO ELAION AURO DPF 530 DESC SC 30% Ypf",precio:"0"},
{codigo:"13987",descripcion :"CBIO ELAION AURO FE 530 4/4 DESC 10% EES",precio:"18710"},
{codigo:"13743",descripcion :"CBIO ELAION AURO FE 530 4/4 DESC 20% EES",precio:"16631"},
{codigo:"16483",descripcion :"CBIO ELAION AURO FE 530 4/4 DESC PERSONA",precio:"14552"},
{codigo:"13523",descripcion :"CBIO ELAION AURO FE 530 4/4 Ypf 4 Lt",precio:"20788"},
{codigo:"13098",descripcion :"CBIO ELAION AURO FE 530 DESC SC $1350 -",precio:"20894"},
{codigo:"13095",descripcion :"CBIO ELAION AURO FE 530 DESC SC $200 - 1",precio:"22044"},
{codigo:"13099",descripcion :"CBIO ELAION AURO FE 530 DESC SC $2000 -",precio:"20244"},
{codigo:"13100",descripcion :"CBIO ELAION AURO FE 530 DESC SC $2800 -",precio:"19444"},
{codigo:"13096",descripcion :"CBIO ELAION AURO FE 530 DESC SC $400 - 2",precio:"21844"},
{codigo:"13101",descripcion :"CBIO ELAION AURO FE 530 DESC SC $4000 -",precio:"18244"},
{codigo:"13102",descripcion :"CBIO ELAION AURO FE 530 DESC SC $6000 -",precio:"16244"},
{codigo:"13097",descripcion :"CBIO ELAION AURO FE 530 DESC SC $750 - 4",precio:"21494"},
{codigo:"13172",descripcion :"CBIO ELAION AURO FE 530 DESC SC 30% + $1",precio:"0"},
{codigo:"13169",descripcion :"CBIO ELAION AURO FE 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13173",descripcion :"CBIO ELAION AURO FE 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13174",descripcion :"CBIO ELAION AURO FE 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13170",descripcion :"CBIO ELAION AURO FE 530 DESC SC 30% + $4",precio:"0"},
{codigo:"13175",descripcion :"CBIO ELAION AURO FE 530 DESC SC 30% + $4",precio:"0"},
{codigo:"13176",descripcion :"CBIO ELAION AURO FE 530 DESC SC 30% + $6",precio:"9570"},
{codigo:"13171",descripcion :"CBIO ELAION AURO FE 530 DESC SC 30% + $7",precio:"0"},
{codigo:"13238",descripcion :"CBIO ELAION AURO FE 530 DESC SC 30% 4 Lt",precio:"0"},
{codigo:"16433",descripcion :"CBIO ELAION AURO FR 530 4/4 DESC 10% EES",precio:"18621"},
{codigo:"13930",descripcion :"CBIO ELAION AURO FR 530 4/4 DESC 20% EES",precio:"16552"},
{codigo:"16490",descripcion :"CBIO ELAION AURO FR 530 4/4 DESC PERSONA",precio:"14483"},
{codigo:"13529",descripcion :"CBIO ELAION AURO FR 530 4/4 Ypf 4 Lt",precio:"20690"},
{codigo:"13131",descripcion :"CBIO ELAION AURO FR 530 DESC SC $1350 -",precio:"20788"},
{codigo:"13119",descripcion :"CBIO ELAION AURO FR 530 DESC SC $200 - 1",precio:"21938"},
{codigo:"13132",descripcion :"CBIO ELAION AURO FR 530 DESC SC $2000 -",precio:"20138"},
{codigo:"13133",descripcion :"CBIO ELAION AURO FR 530 DESC SC $2800 -",precio:"19338"},
{codigo:"13120",descripcion :"CBIO ELAION AURO FR 530 DESC SC $400 - 2",precio:"21738"},
{codigo:"13134",descripcion :"CBIO ELAION AURO FR 530 DESC SC $4000 -",precio:"18138"},
{codigo:"13135",descripcion :"CBIO ELAION AURO FR 530 DESC SC $6000 -",precio:"16138"},
{codigo:"13121",descripcion :"CBIO ELAION AURO FR 530 DESC SC $750 - 4",precio:"21388"},
{codigo:"13196",descripcion :"CBIO ELAION AURO FR 530 DESC SC 30% + $1",precio:"0"},
{codigo:"13193",descripcion :"CBIO ELAION AURO FR 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13197",descripcion :"CBIO ELAION AURO FR 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13198",descripcion :"CBIO ELAION AURO FR 530 DESC SC 30% + $2",precio:"0"},
{codigo:"13194",descripcion :"CBIO ELAION AURO FR 530 DESC SC 30% + $4",precio:"0"},
{codigo:"13199",descripcion :"CBIO ELAION AURO FR 530 DESC SC 30% + $4",precio:"0"},
{codigo:"13200",descripcion :"CBIO ELAION AURO FR 530 DESC SC 30% + $6",precio:"0"},
{codigo:"13195",descripcion :"CBIO ELAION AURO FR 530 DESC SC 30% + $7",precio:"0"},
{codigo:"13241",descripcion :"CBIO ELAION AURO FR 530 DESC SC 30% 4 Lt",precio:"0"},
{codigo:"16481",descripcion :"CBIO ELAION AURO FR 540 4/4 DESC 10% EES",precio:"18621"},
{codigo:"13985",descripcion :"CBIO ELAION AURO FR 540 4/4 DESC 20% EES",precio:"16552"},
{codigo:"16498",descripcion :"CBIO ELAION AURO FR 540 4/4 DESC PERSONA",precio:"14483"},
{codigo:"13537",descripcion :"CBIO ELAION AURO FR 540 4/4 Ypf 4 Lt",precio:"20690"},
{codigo:"13164",descripcion :"CBIO ELAION AURO FR 540 DESC SC $1350 -",precio:"20788"},
{codigo:"13161",descripcion :"CBIO ELAION AURO FR 540 DESC SC $200 - 1",precio:"21938"},
{codigo:"13165",descripcion :"CBIO ELAION AURO FR 540 DESC SC $2000 -",precio:"20138"},
{codigo:"13166",descripcion :"CBIO ELAION AURO FR 540 DESC SC $2800 -",precio:"19338"},
{codigo:"13162",descripcion :"CBIO ELAION AURO FR 540 DESC SC $400 - 2",precio:"21738"},
{codigo:"13167",descripcion :"CBIO ELAION AURO FR 540 DESC SC $4000 -",precio:"18138"},
{codigo:"13168",descripcion :"CBIO ELAION AURO FR 540 DESC SC $6000 -",precio:"16138"},
{codigo:"13163",descripcion :"CBIO ELAION AURO FR 540 DESC SC $750 - 4",precio:"21388"},
{codigo:"13233",descripcion :"CBIO ELAION AURO FR 540 DESC SC 30% + $1",precio:"0"},
{codigo:"13230",descripcion :"CBIO ELAION AURO FR 540 DESC SC 30% + $2",precio:"0"},
{codigo:"13234",descripcion :"CBIO ELAION AURO FR 540 DESC SC 30% + $2",precio:"0"},
{codigo:"13235",descripcion :"CBIO ELAION AURO FR 540 DESC SC 30% + $2",precio:"0"},
{codigo:"13231",descripcion :"CBIO ELAION AURO FR 540 DESC SC 30% + $4",precio:"0"},
{codigo:"13236",descripcion :"CBIO ELAION AURO FR 540 DESC SC 30% + $4",precio:"0"},
{codigo:"13237",descripcion :"CBIO ELAION AURO FR 540 DESC SC 30% + $6",precio:"0"},
{codigo:"13232",descripcion :"CBIO ELAION AURO FR 540 DESC SC 30% + $7",precio:"0"},
{codigo:"13245",descripcion :"CBIO ELAION AURO FR 540 DESC SC 30% Ypf",precio:"0"},
{codigo:"13991",descripcion :"CBIO ELAION AURO PLUS 540 4/4 DESC 10% E",precio:"18710"},
{codigo:"13897",descripcion :"CBIO ELAION AURO PLUS 540 4/4 DESC 20% E",precio:"16631"},
{codigo:"16488",descripcion :"CBIO ELAION AURO PLUS 540 4/4 DESC PERSO",precio:"14552"},
{codigo:"13527",descripcion :"CBIO ELAION AURO PLUS 540 4/4 Ypf 4 Lt",precio:"20788"},
{codigo:"13114",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC $1350",precio:"20894"},
{codigo:"13111",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC $200 -",precio:"22044"},
{codigo:"13115",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC $2000",precio:"20244"},
{codigo:"13116",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC $2800",precio:"19444"},
{codigo:"13112",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC $400 -",precio:"21844"},
{codigo:"13117",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC $4000",precio:"18244"},
{codigo:"13118",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC $6000",precio:"16244"},
{codigo:"13113",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC $750 -",precio:"21494"},
{codigo:"13185",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC 30% +",precio:"0"},
{codigo:"13186",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC 30% +",precio:"0"},
{codigo:"13187",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC 30% +",precio:"0"},
{codigo:"13188",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC 30% +",precio:"0"},
{codigo:"13190",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC 30% +",precio:"0"},
{codigo:"13191",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC 30% +",precio:"0"},
{codigo:"13192",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC 30% +",precio:"0"},
{codigo:"16499",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC 30% +",precio:"0"},
{codigo:"13240",descripcion :"CBIO ELAION AURO PLUS 540 DESC SC 30% Yp",precio:"0"},
{codigo:"13778",descripcion :"CBIO ELAION COMPETICION 5W-50 DESC COMUN",precio:"3906"},
{codigo:"13877",descripcion :"CBIO ELAION F 50 J 0W20 RAPICLUB Ypf 4 L",precio:"16890"},
{codigo:"14863",descripcion :"CBIO ELAION F10 15 W 40 4lt 20% desc EES",precio:"7600"},
{codigo:"13313",descripcion :"CBIO ELAION F10 15W40 BOXES SC DESC $200",precio:"8164"},
{codigo:"13711",descripcion :"CBIO ELAION F10 15W40 BOXES SC DESC $280",precio:"7364"},
{codigo:"13316",descripcion :"CBIO ELAION F10 15W40 BOXES-SC DEC $1350",precio:"8814"},
{codigo:"15191",descripcion :"CBIO ELAION F10 15W40 BOXES-SC DEC $200",precio:"9964"},
{codigo:"13314",descripcion :"CBIO ELAION F10 15W40 BOXES-SC DEC $400",precio:"9764"},
{codigo:"13315",descripcion :"CBIO ELAION F10 15W40 BOXES-SC DEC $750",precio:"9414"},
{codigo:"14963",descripcion :"CBIO ELAION F10 15W-40 CARREFOUR DESC $1",precio:"1301"},
{codigo:"14947",descripcion :"CBIO ELAION F10 15W-40 LA NACION DESC $5",precio:"1351"},
{codigo:"14946",descripcion :"CBIO ELAION F10 20 W 50 4lt 20% desc EES",precio:"5939"},
{codigo:"13318",descripcion :"CBIO ELAION F10 20W50 BOXES SC DESC $135",precio:"6593"},
{codigo:"15196",descripcion :"CBIO ELAION F10 20W50 BOXES-SC DEC $200",precio:"7743"},
{codigo:"13321",descripcion :"CBIO ELAION F10 20W50 BOXES-SC DEC $2000",precio:"0"},
{codigo:"13713",descripcion :"CBIO ELAION F10 20W50 BOXES-SC DEC $2800",precio:"5143"},
{codigo:"13319",descripcion :"CBIO ELAION F10 20W50 BOXES-SC DEC $400",precio:"7543"},
{codigo:"13320",descripcion :"CBIO ELAION F10 20W50 BOXES-SC DEC $750",precio:"7193"},
{codigo:"14962",descripcion :"CBIO ELAION F10 20W-50 CARREFOUR DESC $1",precio:"995"},
{codigo:"13302",descripcion :"CBIO ELAION F10 20W50 DESC 10% BCO PROVI",precio:"903"},
{codigo:"14948",descripcion :"CBIO ELAION F10 20W-50 LA NACION DESC $5",precio:"1045"},
{codigo:"14576",descripcion :"CBIO ELAION F30 10 w 40 4 LTS 20% desc E",precio:"9040"},
{codigo:"13325",descripcion :"CBIO ELAION F30 10W40 BOXES-SC DEC $1350",precio:"10740"},
{codigo:"15198",descripcion :"CBIO ELAION F30 10W40 BOXES-SC DEC $200",precio:"11890"},
{codigo:"13322",descripcion :"CBIO ELAION F30 10W40 BOXES-SC DEC $2000",precio:"10090"},
{codigo:"13326",descripcion :"CBIO ELAION F30 10W40 BOXES-SC DEC $2800",precio:"9290"},
{codigo:"13323",descripcion :"CBIO ELAION F30 10W40 BOXES-SC DEC $400",precio:"11690"},
{codigo:"16569",descripcion :"CBIO ELAION F30 10W40 BOXES-SC DEC $4000",precio:"8090"},
{codigo:"16568",descripcion :"CBIO ELAION F30 10W40 BOXES-SC DEC $6000",precio:"6090"},
{codigo:"13324",descripcion :"CBIO ELAION F30 10W40 BOXES-SC DEC $750",precio:"11340"},
{codigo:"14964",descripcion :"CBIO ELAION F30 10W-40 CARREFOUR DESC $1",precio:"1442"},
{codigo:"13497",descripcion :"CBIO ELAION F30 10W40 DEC SC 30% + $1350",precio:"0"},
{codigo:"13544",descripcion :"CBIO ELAION F30 10W40 DEC SC 30% + $200",precio:"0"},
{codigo:"13496",descripcion :"CBIO ELAION F30 10W40 DEC SC 30% + $2000",precio:"0"},
{codigo:"13495",descripcion :"CBIO ELAION F30 10W40 DEC SC 30% + $2800",precio:"0"},
{codigo:"13499",descripcion :"CBIO ELAION F30 10W40 DEC SC 30% + $400",precio:"0"},
{codigo:"13498",descripcion :"CBIO ELAION F30 10W40 DEC SC 30% + $750",precio:"0"},
{codigo:"13303",descripcion :"CBIO ELAION F30 10W40 DESC 10% BCO PROVI",precio:"1347"},
{codigo:"13802",descripcion :"CBIO ELAION F30 10W40 DESC COMUNIDAD SC",precio:"1397"},
{codigo:"14200",descripcion :"CBIO ELAION F30 10W-40 LA NACION DESC $5",precio:"1492"},
{codigo:"14587",descripcion :"CBIO ELAION F50 5 w 40 4l 20% DESC EESS",precio:"14978"},
{codigo:"14345",descripcion :"Cbio ELAION F50 5 w 40 4Lt 1 Un",precio:"18722"},
{codigo:"13890",descripcion :"CBIO ELAION F50 5W-30 4l 10 %DESC EESS Y",precio:"16850"},
{codigo:"13898",descripcion :"CBIO ELAION F50 5W-30 4l 20 %DESC EESS Y",precio:"14978"},
{codigo:"13590",descripcion :"CBIO ELAION F50 5W30 BOXES-SC DEC $1350",precio:"18683"},
{codigo:"13593",descripcion :"CBIO ELAION F50 5W30 BOXES-SC DEC $200 -",precio:"19833"},
{codigo:"13589",descripcion :"CBIO ELAION F50 5W30 BOXES-SC DEC $2000",precio:"18033"},
{codigo:"13588",descripcion :"CBIO ELAION F50 5W30 BOXES-SC DEC $2800",precio:"17233"},
{codigo:"13592",descripcion :"CBIO ELAION F50 5W30 BOXES-SC DEC $400 -",precio:"19633"},
{codigo:"13587",descripcion :"CBIO ELAION F50 5W30 BOXES-SC DEC $4000",precio:"16033"},
{codigo:"13571",descripcion :"CBIO ELAION F50 5W30 BOXES-SC DEC $6000",precio:"14033"},
{codigo:"13591",descripcion :"CBIO ELAION F50 5W30 BOXES-SC DEC $750 -",precio:"19283"},
{codigo:"13892",descripcion :"CBIO ELAION F50 5W-30 Ypf 4 Lt",precio:"18722"},
{codigo:"13329",descripcion :"CBIO ELAION F50 5W40 BOXES-SC DEC $1350",precio:"18683"},
{codigo:"15267",descripcion :"CBIO ELAION F50 5W40 BOXES-SC DEC $200 -",precio:"19833"},
{codigo:"13330",descripcion :"CBIO ELAION F50 5W40 BOXES-SC DEC $2000",precio:"18033"},
{codigo:"13331",descripcion :"CBIO ELAION F50 5W40 BOXES-SC DEC $2800",precio:"17233"},
{codigo:"13327",descripcion :"CBIO ELAION F50 5W40 BOXES-SC DEC $400 -",precio:"19633"},
{codigo:"13714",descripcion :"CBIO ELAION F50 5W40 BOXES-SC DEC $4000",precio:"16033"},
{codigo:"13582",descripcion :"CBIO ELAION F50 5W40 BOXES-SC DEC $6000",precio:"14033"},
{codigo:"13328",descripcion :"CBIO ELAION F50 5W40 BOXES-SC DEC $750 -",precio:"19283"},
{codigo:"14961",descripcion :"CBIO ELAION F50 5W-40 CAREFOUR DESC $100",precio:"2821"},
{codigo:"13801",descripcion :"CBIO ELAION F50 5W40 DESC COMUNIDAD SC Y",precio:"3161"},
{codigo:"14949",descripcion :"CBIO ELAION F50 5W-40 LA NACION DESC $50",precio:"2871"},
{codigo:"13874",descripcion :"CBIO ELAION F50 5W-40 RAPICLUB Ypf 4 Lt",precio:"16850"},
{codigo:"14278",descripcion :"CBIO ELAION F50 d1 0 w 20 4l 20% DESC EE",precio:"15764"},
{codigo:"13349",descripcion :"CBIO ELAION F50 d1 0W20 BOXES-SC DEC $13",precio:"19734"},
{codigo:"13350",descripcion :"CBIO ELAION F50 d1 0W20 BOXES-SC DEC $20",precio:"19084"},
{codigo:"15448",descripcion :"CBIO ELAION F50 d1 0W20 BOXES-SC DEC $20",precio:"20884"},
{codigo:"13351",descripcion :"CBIO ELAION F50 d1 0W20 BOXES-SC DEC $28",precio:"18284"},
{codigo:"13347",descripcion :"CBIO ELAION F50 d1 0W20 BOXES-SC DEC $40",precio:"20684"},
{codigo:"13718",descripcion :"CBIO ELAION F50 d1 0W20 BOXES-SC DEC $40",precio:"17084"},
{codigo:"13578",descripcion :"CBIO ELAION F50 d1 0W20 BOXES-SC DEC $60",precio:"15084"},
{codigo:"13348",descripcion :"CBIO ELAION F50 d1 0W20 BOXES-SC DEC $75",precio:"20334"},
{codigo:"14959",descripcion :"CBIO ELAION F50 d1 0W-20 CARREFOUR DESC",precio:"2821"},
{codigo:"13784",descripcion :"CBIO ELAION F50 d1 0W20 DESC COMUNIDAD S",precio:"3161"},
{codigo:"14197",descripcion :"CBIO ELAION F50 d1 0W-20 LA NACION DESC",precio:"2821"},
{codigo:"14280",descripcion :"CBIO ELAION F50 d1 5 w 30 4l 20% DESC EE",precio:"15764"},
{codigo:"13344",descripcion :"CBIO ELAION F50 d1 5W30 BOXES-SC DEC $13",precio:"19734"},
{codigo:"13345",descripcion :"CBIO ELAION F50 d1 5W30 BOXES-SC DEC $20",precio:"19084"},
{codigo:"15342",descripcion :"CBIO ELAION F50 d1 5W30 BOXES-SC DEC $20",precio:"20884"},
{codigo:"13346",descripcion :"CBIO ELAION F50 d1 5W30 BOXES-SC DEC $28",precio:"18284"},
{codigo:"13342",descripcion :"CBIO ELAION F50 d1 5W30 BOXES-SC DEC $40",precio:"20684"},
{codigo:"13717",descripcion :"CBIO ELAION F50 d1 5W30 BOXES-SC DEC $40",precio:"17084"},
{codigo:"13579",descripcion :"CBIO ELAION F50 d1 5W30 BOXES-SC DEC $60",precio:"15084"},
{codigo:"13343",descripcion :"CBIO ELAION F50 d1 5W30 BOXES-SC DEC $75",precio:"20334"},
{codigo:"14991",descripcion :"CBIO ELAION F50 d1 5W-30 CARREFOUR DESC",precio:"2821"},
{codigo:"13788",descripcion :"CBIO ELAION F50 d1 5W30 DESC COMUNIDAD S",precio:"3161"},
{codigo:"14198",descripcion :"CBIO ELAION F50 d1 5W-30 LA NACION DESC",precio:"2821"},
{codigo:"14276",descripcion :"CBIO ELAION F50 d2 5 w 30 4 LTS 20% desc",precio:"15764"},
{codigo:"13867",descripcion :"CBIO ELAION F50 D2 5 W 30 RAPICLUB Ypf 1",precio:"17734"},
{codigo:"13354",descripcion :"CBIO ELAION F50 d2 5W30 BOXES-SC DEC $13",precio:"19734"},
{codigo:"13355",descripcion :"CBIO ELAION F50 d2 5W30 BOXES-SC DEC $20",precio:"19084"},
{codigo:"15543",descripcion :"CBIO ELAION F50 d2 5W30 BOXES-SC DEC $20",precio:"20884"},
{codigo:"13356",descripcion :"CBIO ELAION F50 d2 5W30 BOXES-SC DEC $28",precio:"18284"},
{codigo:"13352",descripcion :"CBIO ELAION F50 d2 5W30 BOXES-SC DEC $40",precio:"20684"},
{codigo:"13719",descripcion :"CBIO ELAION F50 d2 5W30 BOXES-SC DEC $40",precio:"17084"},
{codigo:"13353",descripcion :"CBIO ELAION F50 d2 5W30 BOXES-SC DEC $75",precio:"20334"},
{codigo:"14997",descripcion :"CBIO ELAION F50 d2 5W-30 CARREFOUR DESC",precio:"2821"},
{codigo:"13783",descripcion :"CBIO ELAION F50 d2 5W30 DESC COMUNIDAD S",precio:"3161"},
{codigo:"14199",descripcion :"CBIO ELAION F50 d2 5W-30 LA NACION DESC",precio:"2821"},
{codigo:"13374",descripcion :"CBIO ELAION F50 DPF 5W30 BOXES-SC DEC $1",precio:"20764"},
{codigo:"13375",descripcion :"CBIO ELAION F50 DPF 5W30 BOXES-SC DEC $2",precio:"20114"},
{codigo:"13376",descripcion :"CBIO ELAION F50 DPF 5W30 BOXES-SC DEC $2",precio:"19314"},
{codigo:"13827",descripcion :"CBIO ELAION F50 DPF 5W30 BOXES-SC DEC $2",precio:"21914"},
{codigo:"13372",descripcion :"CBIO ELAION F50 DPF 5W30 BOXES-SC DEC $4",precio:"21714"},
{codigo:"13708",descripcion :"CBIO ELAION F50 DPF 5W30 BOXES-SC DEC $4",precio:"18114"},
{codigo:"13573",descripcion :"CBIO ELAION F50 DPF 5W30 BOXES-SC DEC $6",precio:"16114"},
{codigo:"13373",descripcion :"CBIO ELAION F50 DPF 5W30 BOXES-SC DEC $7",precio:"21364"},
{codigo:"13779",descripcion :"CBIO ELAION F50 DPF 5W30 DESC COMUNIDAD",precio:"3340"},
{codigo:"14551",descripcion :"CBIO ELAION F50 E 5 w 30 4l DESC EESS 20",precio:"15764"},
{codigo:"13334",descripcion :"CBIO ELAION F50 E 5W30 BOXES-SC DEC $135",precio:"19734"},
{codigo:"13335",descripcion :"CBIO ELAION F50 E 5W30 BOXES-SC DEC $200",precio:"19084"},
{codigo:"15274",descripcion :"CBIO ELAION F50 E 5W30 BOXES-SC DEC $200",precio:"20884"},
{codigo:"13336",descripcion :"CBIO ELAION F50 E 5W30 BOXES-SC DEC $280",precio:"18284"},
{codigo:"13332",descripcion :"CBIO ELAION F50 E 5W30 BOXES-SC DEC $400",precio:"20684"},
{codigo:"13715",descripcion :"CBIO ELAION F50 E 5W30 BOXES-SC DEC $400",precio:"17084"},
{codigo:"13581",descripcion :"CBIO ELAION F50 E 5W30 BOXES-SC DEC $600",precio:"15084"},
{codigo:"13333",descripcion :"CBIO ELAION F50 E 5W30 BOXES-SC DEC $750",precio:"20334"},
{codigo:"14960",descripcion :"CBIO ELAION F50 E 5W-30 CARREFOUR DESC $",precio:"2821"},
{codigo:"13790",descripcion :"CBIO ELAION F50 E 5W30 DESC COMUNIDAD SC",precio:"3161"},
{codigo:"14950",descripcion :"CBIO ELAION F50 E 5W-30 LA NACION DESC $",precio:"2871"},
{codigo:"14206",descripcion :"CBIO ELAION F50 F 5w30 4l 20% DESC EESS",precio:"15764"},
{codigo:"13359",descripcion :"CBIO ELAION F50 F 5W30 BOXES-SC DEC $135",precio:"19734"},
{codigo:"13360",descripcion :"CBIO ELAION F50 F 5W30 BOXES-SC DEC $200",precio:"19084"},
{codigo:"13961",descripcion :"CBIO ELAION F50 F 5W30 BOXES-SC DEC $200",precio:"20884"},
{codigo:"13361",descripcion :"CBIO ELAION F50 F 5W30 BOXES-SC DEC $280",precio:"18284"},
{codigo:"13357",descripcion :"CBIO ELAION F50 F 5W30 BOXES-SC DEC $400",precio:"20684"},
{codigo:"13720",descripcion :"CBIO ELAION F50 F 5W30 BOXES-SC DEC $400",precio:"17084"},
{codigo:"13576",descripcion :"CBIO ELAION F50 F 5W30 BOXES-SC DEC $600",precio:"15084"},
{codigo:"13358",descripcion :"CBIO ELAION F50 F 5W30 BOXES-SC DEC $750",precio:"20334"},
{codigo:"15118",descripcion :"CBIO ELAION F50 F 5W-30 CARREFOUR DESC $",precio:"2821"},
{codigo:"13782",descripcion :"CBIO ELAION F50 F 5W30 DESC COMUNIDAD SC",precio:"3161"},
{codigo:"14952",descripcion :"CBIO ELAION F50 F 5W-30 LA NACION DESC $",precio:"2871"},
{codigo:"14204",descripcion :"CBIO ELAION F50 F 5w40 4l 20% DESC EESS",precio:"15764"},
{codigo:"13364",descripcion :"CBIO ELAION F50 F 5W40 BOXES-SC DEC $135",precio:"19734"},
{codigo:"13365",descripcion :"CBIO ELAION F50 F 5W40 BOXES-SC DEC $200",precio:"19084"},
{codigo:"13956",descripcion :"CBIO ELAION F50 F 5W40 BOXES-SC DEC $200",precio:"20884"},
{codigo:"13366",descripcion :"CBIO ELAION F50 F 5W40 BOXES-SC DEC $280",precio:"18284"},
{codigo:"13362",descripcion :"CBIO ELAION F50 F 5W40 BOXES-SC DEC $400",precio:"20684"},
{codigo:"13710",descripcion :"CBIO ELAION F50 F 5W40 BOXES-SC DEC $400",precio:"17084"},
{codigo:"13575",descripcion :"CBIO ELAION F50 F 5W40 BOXES-SC DEC $600",precio:"15084"},
{codigo:"13363",descripcion :"CBIO ELAION F50 F 5W40 BOXES-SC DEC $750",precio:"20334"},
{codigo:"15120",descripcion :"CBIO ELAION F50 F 5W-40 CARREFOUR DESC $",precio:"2821"},
{codigo:"13781",descripcion :"CBIO ELAION F50 F 5W40 DESC COMUNIDAD SC",precio:"3161"},
{codigo:"14953",descripcion :"CBIO ELAION F50 F 5W-40 LA NACION DESC $",precio:"2871"},
{codigo:"14208",descripcion :"CBIO ELAION F50 J 0w20 4l 20% DESC EESS",precio:"15013"},
{codigo:"13369",descripcion :"CBIO ELAION F50 J 0W20 BOXES-SC DEC $135",precio:"18730"},
{codigo:"13370",descripcion :"CBIO ELAION F50 J 0W20 BOXES-SC DEC $200",precio:"18080"},
{codigo:"13951",descripcion :"CBIO ELAION F50 J 0W20 BOXES-SC DEC $200",precio:"19880"},
{codigo:"13371",descripcion :"CBIO ELAION F50 J 0W20 BOXES-SC DEC $280",precio:"17280"},
{codigo:"13367",descripcion :"CBIO ELAION F50 J 0W20 BOXES-SC DEC $400",precio:"19680"},
{codigo:"13709",descripcion :"CBIO ELAION F50 J 0W20 BOXES-SC DEC $400",precio:"16080"},
{codigo:"13574",descripcion :"CBIO ELAION F50 J 0W20 BOXES-SC DEC $600",precio:"14080"},
{codigo:"13368",descripcion :"CBIO ELAION F50 J 0W20 BOXES-SC DEC $750",precio:"19330"},
{codigo:"15121",descripcion :"CBIO ELAION F50 J 0W-20 CARREFOUR DESC $",precio:"2964"},
{codigo:"13780",descripcion :"CBIO ELAION F50 J 0W20 DESC COMUNIDAD SC",precio:"3340"},
{codigo:"14954",descripcion :"CBIO ELAION F50 J 0W-20 LA NACION DESC $",precio:"2964"},
{codigo:"14210",descripcion :"CBIO ELAION F50 PLUS 5 w 40 4l 20% DESC",precio:"15764"},
{codigo:"13337",descripcion :"CBIO ELAION F50 PLUS 5W40 BOXES-SC DEC $",precio:"20684"},
{codigo:"13338",descripcion :"CBIO ELAION F50 PLUS 5W40 BOXES-SC DEC $",precio:"20334"},
{codigo:"13339",descripcion :"CBIO ELAION F50 PLUS 5W40 BOXES-SC DEC $",precio:"19734"},
{codigo:"13340",descripcion :"CBIO ELAION F50 PLUS 5W40 BOXES-SC DEC $",precio:"19084"},
{codigo:"13341",descripcion :"CBIO ELAION F50 PLUS 5W40 BOXES-SC DEC $",precio:"18284"},
{codigo:"13580",descripcion :"CBIO ELAION F50 PLUS 5W40 BOXES-SC DEC $",precio:"15084"},
{codigo:"13716",descripcion :"CBIO ELAION F50 PLUS 5W40 BOXES-SC DEC $",precio:"17084"},
{codigo:"15337",descripcion :"CBIO ELAION F50 PLUS 5W40 BOXES-SC DEC $",precio:"20884"},
{codigo:"15109",descripcion :"CBIO ELAION F50 PLUS 5W-40 CARREFOUR DES",precio:"2821"},
{codigo:"13789",descripcion :"CBIO ELAION F50 PLUS 5W40 DESC COMUNIDAD",precio:"3161"},
{codigo:"14951",descripcion :"CBIO ELAION F50 PLUS 5W-40 LA NACION DES",precio:"2871"},
{codigo:"14343",descripcion :"Cbio ELION F30 10w 40 4 Lts 1 Un",precio:"11299"},
{codigo:"13946",descripcion :"CBIO EXTRA VIDA XV 300 BOXES-SC DEC $100",precio:"1088"},
{codigo:"14333",descripcion :"Cbio Extra Vida XV300 4lts Extra Vida",precio:"9593"},
{codigo:"13880",descripcion :"CBIO EXTRAVIDA XV300 4 L 20% DESC EESS Y",precio:"7675"},
{codigo:"14202",descripcion :"CBIO EXTRAVIDA XV300 4 L 20% DESC EESS Y",precio:"7675"},
{codigo:"14150",descripcion :"Cbio Grasa 30 C 5kgs Grasas",precio:"6260"},
{codigo:"14152",descripcion :"Cbio Grasa 62 EP 5Kgs Grasas",precio:"9748"},
{codigo:"14016",descripcion :"Cbio HD S1 4lts Baja Gama Gasolina",precio:"4821"},
{codigo:"14067",descripcion :"Cbio Hidro YPF ATF 4lts Transmision",precio:"6410"},
{codigo:"14064",descripcion :"Cbio Hipoidal 4lts Transmision",precio:"6633"},
{codigo:"16565",descripcion :"CBIO SOC ACA ELAION AURO D1 020 4/4 10%",precio:"18799"},
{codigo:"16615",descripcion :"CBIO SOC ACA ELAION AURO D1 020 GEN 3 4",precio:"19175"},
{codigo:"13733",descripcion :"CBIO SOC ACA ELAION AURO D1 530 4/4 10%",precio:"18799"},
{codigo:"13541",descripcion :"CBIO SOC ACA ELAION AURO D2 530 4/4 10%",precio:"18799"},
{codigo:"13736",descripcion :"CBIO SOC ACA ELAION AURO DPF 530 4/4 10%",precio:"19345"},
{codigo:"13539",descripcion :"CBIO SOC ACA ELAION AURO FE 530 4/4 10%",precio:"18710"},
{codigo:"16566",descripcion :"CBIO SOC ACA ELAION AURO FR 530 4/4 10%",precio:"18621"},
{codigo:"13739",descripcion :"CBIO SOC ACA ELAION AURO FR 540 4/4 10%",precio:"18621"},
{codigo:"13543",descripcion :"CBIO SOC ACA ELAION AURO PLUS 540 4/4 10",precio:"18710"},
{codigo:"16613",descripcion :"CBIO SOCIO ACA ELAION AURO D1 530 GEN 3",precio:"19175"},
{codigo:"13894",descripcion :"CBIO SOCIO ACA LB ELAION F50 5W-30 4l 10",precio:"16850"},
{codigo:"14066",descripcion :"Cbio Transmision 508/140 4lts Transmisio",precio:"4442"},
{codigo:"14232",descripcion :"Cbio Transmision 90 4lts Transmision",precio:"4152"},
{codigo:"13866",descripcion :"CBIO XV 300 5 W30 RAPICLUB Ypf 4 Lt",precio:"8634"},
{codigo:"14441",descripcion :"Cbio. de Lavaparabrisas x 4lts",precio:"3372"},
{codigo:"14341",descripcion :"Cbio. ELAION F10 15w-40 4LTS 1 Un",precio:"9499"},
{codigo:"14347",descripcion :"Cbio. ELAION F50 E 5 w 30 4Lts. 1 Un",precio:"19704"},
{codigo:"16595",descripcion :"ELAION AURO D1 530 GEN 3 DESC SC $2000 -",precio:"20796"},
{codigo:"13938",descripcion :"ELAION F10 15w40 4l 10% DESC ESTACION Yp",precio:"8550"},
{codigo:"13724",descripcion :"ELAION F10 15W40 GRL GNC SC DESC $100 -1",precio:"2048"},
{codigo:"13888",descripcion :"ELAION F30 10w40 4l 10% DESC ESTACION Yp",precio:"10170"},
{codigo:"13886",descripcion :"ELAION F50 5w40 4l 10% DESC ESTACION Ypf",precio:"16850"},
{codigo:"16451",descripcion :"ELAION F50 COMPETICION 5w50 4l 20% DESC",precio:"18971"},
{codigo:"14584",descripcion :"ELAION F50 d1 0w20 4l 10% DESC ESTACION",precio:"17734"},
{codigo:"13882",descripcion :"ELAION F50 d1 5w30 4l 10% DESC ESTACION",precio:"17734"},
{codigo:"13810",descripcion :"ELAION F50 DPF 5w30 4l 10% DESC ESTACION",precio:"18601"},
{codigo:"13808",descripcion :"ELAION F50 DPF 5w30 4l 20% DESC ESTACION",precio:"16534"},
{codigo:"13806",descripcion :"ELAION F50 DPF 5w30 4l DESC PERSONAL Ypf",precio:"14467"},
{codigo:"13884",descripcion :"ELAION F50 E 5w30 4l 10% DESC ESTACION Y",precio:"17734"},
{codigo:"14589",descripcion :"ELAION F50 F 5w30 4l 10% DESC ESTACION Y",precio:"17734"},
{codigo:"14591",descripcion :"ELAION F50 F 5w40 4l 10% DESC ESTACION Y",precio:"17734"},
{codigo:"14586",descripcion :"ELAION F50 J 0w20 4l 10% DESC ESTACION Y",precio:"16890"},
{codigo:"15548",descripcion :"ELAION F50 PLUS 5w40 4l 10% DESC ESTACIO",precio:"17734"},
{codigo:"13775",descripcion :"ESCALONADO PL ELAION COMPETICION 4 LT $4",precio:"4996"},
{codigo:"13774",descripcion :"ESCALONADO PL ELAION COMPETICION 4 LT $6",precio:"4796"},
{codigo:"13754",descripcion :"ESCALONADO PL ELAION F 50 F 5W30 $600-70",precio:"3884"},
{codigo:"13770",descripcion :"ESCALONADO PL ELAION F 50DDPF 5W30 4LT $",precio:"4103"},
{codigo:"13758",descripcion :"ESCALONADO PL ELAION F 50J 0W20 4 LT $60",precio:"4103"},
{codigo:"13762",descripcion :"ESCALONADO PL ELAION F50 D1 0W20 4 LT $6",precio:"3884"},
{codigo:"13771",descripcion :"ESCALONADO PL ELAION F50 DPF 5W30 4LT$40",precio:"4303"},
{codigo:"13751",descripcion :"ESCALONADO PL ELAION F50 F 4LT $400- 600",precio:"4084"},
{codigo:"13755",descripcion :"ESCALONADO PL ELAION F50 F 5W 30 4 LT $4",precio:"4084"},
{codigo:"13750",descripcion :"ESCALONADO PL ELAION F50 F 5W 40 4 LT $6",precio:"3671"},
{codigo:"13759",descripcion :"ESCALONADO PL ELAION F50 J 0W 20 4 LT $4",precio:"4303"},
{codigo:"13767",descripcion :"ESCALONADO PL ELAION F50D1 5W30 4LT $400",precio:"4084"},
{codigo:"13763",descripcion :"ESCALONADO PL F50 D1 0 W 20 4LT $400 -50",precio:"4084"},
{codigo:"13786",descripcion :"EXTRAVIDA XV 300 4LT DESC PERSONAL Ypf 4",precio:"6716"},
{codigo:"14513",descripcion :"LUB+DIAG ELAION F10 20w50 4 lt DESC",precio:"5939"},
{codigo:"14515",descripcion :"LUB+DIAG ELAION F10 20w50 4 lt DESC 30%",precio:"5939"},
{codigo:"14526",descripcion :"LUB+DIAG ELAION F10 20w50 4lt DESC 10% A",precio:"6681"},
{codigo:"14524",descripcion :"LUB+DIAG ELAION F10 20w50 4lt DESC PERSO",precio:"5197"},
{codigo:"14530",descripcion :"LUB+DIAG ELAION F50 PLUS 4 lt DESC PERSO",precio:"13793"},
{codigo:"14528",descripcion :"LUB+DIAG ELAION F50 PLUS 4lt DESC 10% AC",precio:"17734"},
{codigo:"16617",descripcion :"SOC ACA PL ELAION AURO D1 530 GEN 3 4LT",precio:"19175"},
{codigo:"14474",descripcion :"SOCIO ACA LB ELAION F10 20W50 4 L DESC 1",precio:"6681"},
{codigo:"13598",descripcion :"SOCIO ACA LB ELAION F50 5W30 4L DESC 10%",precio:"16850"},
{codigo:"14557",descripcion :"SOCIO ACA LB ELAION F50 d1 0W20 4L DESC",precio:"17734"},
{codigo:"14567",descripcion :"SOCIO ACA LB ELAION F50 F 5W30 4L DESC 1",precio:"17734"},
{codigo:"14569",descripcion :"SOCIO ACA LB ELAION F50 F 5W40 4L DESC 1",precio:"17734"},
{codigo:"14571",descripcion :"SOCIO ACA LB ELAION F50 J 0W20 4L DESC 1",precio:"16890"},
{codigo:"14476",descripcion :"SOCIO ACA LB ELAION F50 PLUS 4 L DESC 10",precio:"17734"},
{codigo:"16553",descripcion :"Socio Aca Lub F10 20W-50 4 Lt 10% Desc E",precio:"6681"},
{codigo:"13596",descripcion :"SOCIO ACA PL ELAION F50 5W30 4L DESC 10%",precio:"16850"},
{codigo:"13804",descripcion :"SOCIO ACA PL ELAION F50 DPF 4 L DESC 10%",precio:"18601"},
{codigo:"127796",descripcion :"* Diesel YPF AT 30 1lt Baja Gama Diesel",precio:"272"},
{codigo:"125396",descripcion :"ATF D-III HIDRAULICO & TRANSMICION Ypf 1",precio:"2487"},
{codigo:"125392",descripcion :"ATF D-III T205 Ypf 1 Un",precio:"365004"},
{codigo:"199996",descripcion :"ATF D-VI C12/1 Ypf 1 Un",precio:"4830"},
{codigo:"127896",descripcion :"Diesel YPF AT 40 1lt monogrados",precio:"1664"},
{codigo:"173796",descripcion :"ELAION AURO D1 020 12/1. Ypf 1 Lt",precio:"6041"},
{codigo:"170996",descripcion :"ELAION AURO D1 020 GEN 3 Ypf 1 Lt",precio:"6162"},
{codigo:"173696",descripcion :"ELAION AURO D1 530 12/1. Ypf Botella 1 L",precio:"6041"},
{codigo:"171796",descripcion :"ELAION AURO D1 530 GEN 3 Ypf 1 Lt",precio:"6162"},
{codigo:"173896",descripcion :"ELAION AURO D2 530 12/1 Ypf Botella 1 Un",precio:"6041"},
{codigo:"172696",descripcion :"ELAION AURO DPF 530 12/1. Ypf Botella 1",precio:"6230"},
{codigo:"171896",descripcion :"ELAION AURO FE 530 12/1 Ypf Botella 1 Lt",precio:"6012"},
{codigo:"172896",descripcion :"ELAION AURO FR 530 12/1. Ypf Botella 1 L",precio:"5984"},
{codigo:"172996",descripcion :"ELAION AURO FR 540 12/1. Ypf Botella 1 L",precio:"5984"},
{codigo:"172796",descripcion :"ELAION AURO PLUS 540 12/1 Ypf Botella 1",precio:"6012"},
{codigo:"103796",descripcion :"ELAION F10 15W-40 12/1",precio:"2825"},
{codigo:"108096",descripcion :"Elaion F10 20W-50 Ypf 1 Lt",precio:"2184"},
{codigo:"103896",descripcion :"ELAION F30 10W-40 12/1",precio:"3307"},
{codigo:"193296",descripcion :"ELAION F50 5W 30 Ypf 1 Lt",precio:"5406"},
{codigo:"104096",descripcion :"ELAION F50 5W-40 12/1 Ypf Lt",precio:"5406"},
{codigo:"182496",descripcion :"ELAION F50 D1 GEN 2 Ypf 1 Lt",precio:"5699"},
{codigo:"182296",descripcion :"ELAION F50 d1 gen2 0W20 Ypf 1 Lt",precio:"5699"},
{codigo:"106396",descripcion :"ELAION F50 D2 1 LT Unidad Lt",precio:"5699"},
{codigo:"182596",descripcion :"ELAION F50 DPF 5W30 Ypf Un",precio:"5990"},
{codigo:"121996",descripcion :"ELAION F50 PLUS 5W-40 1L Lt",precio:"5699"},
{codigo:"103996",descripcion :"ELAION F50E 5W-30 12/1 1 Lt",precio:"5699"},
{codigo:"182196",descripcion :"ELAION F50F 5 W 30 1L Ypf 1 Lt",precio:"5699"},
{codigo:"182696",descripcion :"ELAION F50F 5W40 Ypf 1 Lt",precio:"5699"},
{codigo:"182396",descripcion :"ELAION F50J 0W20 Ypf 1 Lt",precio:"5427"},
{codigo:"182896",descripcion :"ELAION MOTO HORQUILLA 10W Ypf 1 Lt",precio:"1562"},
{codigo:"182840",descripcion :"ELAION MOTO HORQUILLA 10W Ypf 500 cc",precio:"906"},
{codigo:"105696",descripcion :"Elaion SUV 1lt 5W40. Elaion Lt",precio:"275"},
{codigo:"105596",descripcion :"Elaion Torque 15W40 1lt. Elaion",precio:"150"},
{codigo:"189296",descripcion :"Extra Vida XV300 1lt Extra Vida",precio:"2916"},
{codigo:"189196",descripcion :"EXTRAVIDA XV400 TS Ypf 1 Lt",precio:"3268"},
{codigo:"609542",descripcion :"Grasa 30 C 2kgs grasas",precio:"3148"},
{codigo:"617042",descripcion :"Grasa 62 EP 2kgs Grasas",precio:"5009"},
{codigo:"102096",descripcion :"Heliciodal 75W90 1lt Transmision",precio:"3986"},
{codigo:"123396",descripcion :"Helicoidal M80W 1lt otros lubes",precio:"1906"},
{codigo:"133296",descripcion :"HELICOIDAL STL 75W-90 Ypf 1 Lt",precio:"8387"},
{codigo:"123096",descripcion :"Hipoidal 80W90 1lt otros automotrices",precio:"2076"},
{codigo:"14516",descripcion :"LUB+DIAG ELAION F10 20w50 1 lt DESC 30%",precio:"1633"},
{codigo:"16601",descripcion :"SOC ACA PL ELAION AURO D1 020 GEN 3 1 LT",precio:"5184"},
{codigo:"16618",descripcion :"SOC ACA PL ELAION AURO D1 530 GEN 3 1 LT",precio:"5184"},
{codigo:"14546",descripcion :"SOCIO ACA PL ELAION F10 20W50 1 L DESC 1",precio:"1837"},
{codigo:"194096",descripcion :"Super 20w50 1lt Multigrados Varios",precio:"1933"},
{codigo:"101996",descripcion :"YPF ATF DIII 1lt caja de cambio Transmis",precio:"1500"},
{codigo:"107896",descripcion :"YPF HD S1 30 1lt Baja Gama Gasolina",precio:"1876"},
{codigo:"108296",descripcion :"YPF HD S1 40 1lt monogrados",precio:"1876"},
{codigo:"108696",descripcion :"YPF HD S1 50 1lt Baja Gama Gasolina",precio:"1876"},
{codigo:"125496",descripcion :"YPF Hidro ATF 1lt Transmision",precio:"2004"},
{codigo:"103200",descripcion :"* YPF Normal 40 nueva vision",precio:"0"},
{codigo:"194153",descripcion :"ELAION F10 GRANEL 15 w 40 PL",precio:"2148"},
{codigo:"194253",descripcion :"ELAION F30 GRANEL PL Ypf",precio:"2646"},
{codigo:"13723",descripcion :"ESC ELAION F10 GRANEL 15W40 GNC SC DESC",precio:"1948"},
{codigo:"13721",descripcion :"ESC ELAION F30 GRANEL 10W40 GNC SC DESC",precio:"2446"},
{codigo:"13722",descripcion :"ESC ELAION F30 GRANEL 10W40 GNC SC DESC",precio:"2546"},
{codigo:"617000",descripcion :"Grasa 62 EP Surt (1kg) Ypf Grasas Un",precio:"400"},
{codigo:"108200",descripcion :"HD Suplemento 1 40 Surtidor nueva vision",precio:"1084"},
{codigo:"123353",descripcion :"Helicoidal M80W Surt de tambor Transmisi",precio:"0"},
{codigo:"123053",descripcion :"Hipoidal 80W90 Surt de tambor Transmisio",precio:"550"},
{codigo:"123153",descripcion :"Hipoidal 85W140 Surt de tambor Transmisi",precio:"120"},
{codigo:"194000",descripcion :"Super 20w50 surtidor de TB Baja Gama Gas",precio:"1270"},
{codigo:"16447",descripcion :"CAMBIO ELAION COMPETICION 5W50 1 lt DESC",precio:"4854"},
{codigo:"14523",descripcion :"CAMBIO ELAION F10 20w50 1l DESC PERSONAL",precio:"1429"},
{codigo:"14464",descripcion :"Cambio Elaion F10 20W-50 1lt 1 Un",precio:"2041"},
{codigo:"13599",descripcion :"CAMBIO ELAION F50 5w30 1l DESC 10% DESC",precio:"4547"},
{codigo:"13601",descripcion :"CAMBIO ELAION F50 5w30 1l DESC 20% DESC",precio:"4042"},
{codigo:"13602",descripcion :"CAMBIO ELAION F50 5w30 1l DESC PERSONAL",precio:"3537"},
{codigo:"14375",descripcion :"CAMBIO ELAION F50 d1 5W-30 1 lt LB Ypf L",precio:"5326"},
{codigo:"14383",descripcion :"CAMBIO ELAION F50 d2 5W-30 1 lt LB Ypf L",precio:"5326"},
{codigo:"13833",descripcion :"CAMBIO ELAION F50 DPF 5W30 1 lt Ypf 1 Lt",precio:"5599"},
{codigo:"14580",descripcion :"CAMBIO ELAION F50 F 5w30 1l DESC PERSONA",precio:"3729"},
{codigo:"14563",descripcion :"CAMBIO ELAION F50 F 5W30 Ypf Botella 1 L",precio:"5326"},
{codigo:"14582",descripcion :"CAMBIO ELAION F50 F 5w40 1l DESC PERSONA",precio:"3729"},
{codigo:"14565",descripcion :"CAMBIO ELAION F50 F 5W40 Ypf 1 Lt",precio:"5326"},
{codigo:"14578",descripcion :"CAMBIO ELAION F50 J 0w20 1l DESC PERSONA",precio:"3551"},
{codigo:"14544",descripcion :"CAMBIO ELAION F50 PLUS 1 L",precio:"5326"},
{codigo:"14533",descripcion :"CAMBIO F50 PLUS 1 lt DESC PERSONAL",precio:"3729"},
{codigo:"16446",descripcion :"Cambio Limit MO2 24/400 1 Un",precio:"1515"},
{codigo:"60013",descripcion :"Cbio Aceite Diferencial otros lubes",precio:"2200"},
{codigo:"16458",descripcion :"CBIO ATF D III HIDRAULICO Y TRANSMISION",precio:"2324"},
{codigo:"16457",descripcion :"CBIO ELAION AURO D1 020 12/1 DESC 10% EE",precio:"5082"},
{codigo:"13978",descripcion :"CBIO ELAION AURO D1 020 12/1 DESC 20% EE",precio:"4517"},
{codigo:"16491",descripcion :"CBIO ELAION AURO D1 020 12/1 DESC PERSON",precio:"3953"},
{codigo:"13530",descripcion :"CBIO ELAION AURO D1 020 12/1 Ypf 1 Lt",precio:"5646"},
{codigo:"16627",descripcion :"CBIO ELAION AURO D1 020 GEN 3 1 lt DESC",precio:"5184"},
{codigo:"16631",descripcion :"CBIO ELAION AURO D1 020 GEN 3 1 lt DESC",precio:"4032"},
{codigo:"16611",descripcion :"CBIO ELAION AURO D1 020 GEN 3 1 lt Ypf 1",precio:"5759"},
{codigo:"16623",descripcion :"CBIO ELAION AURO D1 020 GEN 3 1lt desc 2",precio:"4608"},
{codigo:"16476",descripcion :"CBIO ELAION AURO D1 530 12/1 DESC 10% EE",precio:"5082"},
{codigo:"16567",descripcion :"CBIO ELAION AURO D1 530 12/1 DESC 20% EE",precio:"0"},
{codigo:"13532",descripcion :"CBIO ELAION AURO D1 530 12/1 Ypf 1 Lt",precio:"5646"},
{codigo:"16621",descripcion :"CBIO ELAION AURO D1 530 GEN 3 1 lt desc",precio:"4608"},
{codigo:"16625",descripcion :"CBIO ELAION AURO D1 530 GEN 3 1 lt DESC",precio:"5184"},
{codigo:"16629",descripcion :"CBIO ELAION AURO D1 530 GEN 3 1 lt DESC",precio:"4032"},
{codigo:"16609",descripcion :"CBIO ELAION AURO D1 530 GEN 3 1 lt Ypf 1",precio:"5759"},
{codigo:"16624",descripcion :"CBIO ELAION AURO D1 530 GEN 3 4 lt DESC",precio:"19175"},
{codigo:"13988",descripcion :"CBIO ELAION AURO D2 530 12/1 DESC 10% EE",precio:"5082"},
{codigo:"13746",descripcion :"CBIO ELAION AURO D2 530 12/1 DESC 20% EE",precio:"4517"},
{codigo:"16484",descripcion :"CBIO ELAION AURO D2 530 12/1 DESC PERSON",precio:"3953"},
{codigo:"13524",descripcion :"CBIO ELAION AURO D2 530 12/1 Ypf 1 Lt",precio:"5646"},
{codigo:"16478",descripcion :"CBIO ELAION AURO DPF 530 12/1 DESC 10% E",precio:"5241"},
{codigo:"13982",descripcion :"CBIO ELAION AURO DPF 530 12/1 DESC 20% E",precio:"4659"},
{codigo:"16495",descripcion :"CBIO ELAION AURO DPF 530 12/1 DESC PERSO",precio:"4077"},
{codigo:"13534",descripcion :"CBIO ELAION AURO DPF 530 12/1 Ypf 1 Lt",precio:"5823"},
{codigo:"13986",descripcion :"CBIO ELAION AURO FE 530 12/1 DESC 10% EE",precio:"5058"},
{codigo:"13742",descripcion :"CBIO ELAION AURO FE 530 12/1 DESC 20% EE",precio:"4496"},
{codigo:"16482",descripcion :"CBIO ELAION AURO FE 530 12/1 DESC PERSON",precio:"3934"},
{codigo:"13522",descripcion :"CBIO ELAION AURO FE 530 12/1 Ypf 1 Lt",precio:"5619"},
{codigo:"16432",descripcion :"CBIO ELAION AURO FR 530 12/1 DESC 10% EE",precio:"5033"},
{codigo:"13927",descripcion :"CBIO ELAION AURO FR 530 12/1 DESC 20% EE",precio:"4474"},
{codigo:"16489",descripcion :"CBIO ELAION AURO FR 530 12/1 DESC PERSON",precio:"3915"},
{codigo:"13528",descripcion :"CBIO ELAION AURO FR 530 12/1 Ypf 1 Lt",precio:"5592"},
{codigo:"16480",descripcion :"CBIO ELAION AURO FR 540 12/1 DESC 10% EE",precio:"5033"},
{codigo:"13984",descripcion :"CBIO ELAION AURO FR 540 12/1 DESC 20% EE",precio:"4474"},
{codigo:"16497",descripcion :"CBIO ELAION AURO FR 540 12/1 DESC PERSON",precio:"3915"},
{codigo:"13536",descripcion :"CBIO ELAION AURO FR 540 12/1 Ypf 1 Lt",precio:"5592"},
{codigo:"13990",descripcion :"CBIO ELAION AURO PLUS 540 12/1 DESC 10%",precio:"5058"},
{codigo:"13891",descripcion :"CBIO ELAION AURO PLUS 540 12/1 DESC 20%",precio:"4496"},
{codigo:"16486",descripcion :"CBIO ELAION AURO PLUS 540 12/1 DESC PERS",precio:"3934"},
{codigo:"13526",descripcion :"CBIO ELAION AURO PLUS 540 12/1 Ypf 1 Lt",precio:"5619"},
{codigo:"14440",descripcion :"Cbio ELAION F10 15 w 40 1 Lt 1 Un",precio:"2640"},
{codigo:"14864",descripcion :"CBIO ELAION F10 15 W 40 1lt 20% desc EES",precio:"2112"},
{codigo:"14340",descripcion :"Cbio ELAION F10 15w-40 1 Lt. 1 Un",precio:"2640"},
{codigo:"14575",descripcion :"CBIO ELAION F10 20 W 50 1lt 20% desc EES",precio:"1633"},
{codigo:"14583",descripcion :"CBIO ELAION F30 10 w 40 1 LTS 20% desc E",precio:"2473"},
{codigo:"14559",descripcion :"CBIO ELAION F50 5 w 40 1l 20% DESC EESS",precio:"4042"},
{codigo:"13896",descripcion :"CBIO ELAION F50 5W-30 1l 10 %DESC EESS Y",precio:"4547"},
{codigo:"13899",descripcion :"CBIO ELAION F50 5W-30 1l 20 %DESC EESS Y",precio:"4042"},
{codigo:"13893",descripcion :"CBIO ELAION F50 5W-30 1l Ypf 1 Lt",precio:"5052"},
{codigo:"14344",descripcion :"Cbio ELAION F50 5w40 1Lt 1 Un",precio:"5052"},
{codigo:"14277",descripcion :"CBIO ELAION F50 d1 0 w 20 1l 20% DESC EE",precio:"4261"},
{codigo:"14279",descripcion :"CBIO ELAION F50 d1 5 w 30 1l 20% DESC EE",precio:"4261"},
{codigo:"14273",descripcion :"CBIO ELAION F50 d2 5 w 30 1 LTS 20% desc",precio:"4261"},
{codigo:"13803",descripcion :"CBIO ELAION F50 DPF 1l DESC ACA 10% Ypf",precio:"5040"},
{codigo:"14281",descripcion :"CBIO ELAION F50 E 5 w 30 1l 20% DESC EES",precio:"4261"},
{codigo:"14346",descripcion :"Cbio ELAION F50 E 5w30 1 Lt 1 Un",precio:"5326"},
{codigo:"14205",descripcion :"CBIO ELAION F50 F 5w30 1l 20% DESC EESS",precio:"4261"},
{codigo:"14203",descripcion :"CBIO ELAION F50 F 5w40 1l 20% DESC EESS",precio:"4261"},
{codigo:"14207",descripcion :"CBIO ELAION F50 J 0w20 1l 20% DESC EESS",precio:"4058"},
{codigo:"14209",descripcion :"CBIO ELAION F50 PLUS 5 w 40 1l 20% DESC",precio:"4261"},
{codigo:"14332",descripcion :"Cbio Extra Vida XV300 1lt Extra Vida",precio:"2725"},
{codigo:"13879",descripcion :"CBIO EXTRAVIDA XV300 1L 20% DESC EESS Yp",precio:"2180"},
{codigo:"14201",descripcion :"CBIO EXTRAVIDA XV300 1L 20% DESC EESS Yp",precio:"2180"},
{codigo:"14151",descripcion :"Cbio Grasa 30 C 2Kgs balde Grasas",precio:"2942"},
{codigo:"14153",descripcion :"Cbio Grasa 62 EP 2Kgs Grasas",precio:"4681"},
{codigo:"14261",descripcion :"Cbio Heliciodal 75W90 1lt Transmision",precio:"3725"},
{codigo:"14061",descripcion :"Cbio Helicoidal M80W 1lt Transmision",precio:"1782"},
{codigo:"14062",descripcion :"Cbio Hidro YPF ATF 1lt Transmision",precio:"1873"},
{codigo:"14060",descripcion :"Cbio Hipoidal 80W90 1lt Transmision",precio:"1940"},
{codigo:"13712",descripcion :"CBIO SOC ACA ELAION AURO D1 020 12/1 10%",precio:"5082"},
{codigo:"13732",descripcion :"CBIO SOC ACA ELAION AURO D1 530 12/1 10%",precio:"5082"},
{codigo:"16614",descripcion :"CBIO SOC ACA ELAION AURO D1 530 GEN 3 1",precio:"5184"},
{codigo:"13540",descripcion :"CBIO SOC ACA ELAION AURO D2 530 12/1 10%",precio:"5082"},
{codigo:"13735",descripcion :"CBIO SOC ACA ELAION AURO DPF 530 12/1 10",precio:"5241"},
{codigo:"13538",descripcion :"CBIO SOC ACA ELAION AURO FE 530 12/1 10%",precio:"5058"},
{codigo:"16564",descripcion :"CBIO SOC ACA ELAION AURO FR 530 12/1 10%",precio:"5033"},
{codigo:"13738",descripcion :"CBIO SOC ACA ELAION AURO FR 540 12/1 10%",precio:"5033"},
{codigo:"13542",descripcion :"CBIO SOC ACA ELAION AURO PLUS 540 12/1 1",precio:"5058"},
{codigo:"16616",descripcion :"CBIO SOCIO ACA ELAION AURO D1 020 GEN 3",precio:"5184"},
{codigo:"13895",descripcion :"CBIO SOCIO ACA LB ELAION F50 5W-30 1l 10",precio:"4547"},
{codigo:"14228",descripcion :"Cbio YPF ATF DIII 1lt caja de cambio Tra",precio:"1500"},
{codigo:"14342",descripcion :"Cbio. ELAION F30 10w-40 1LT 1 Un",precio:"3091"},
{codigo:"13889",descripcion :"ELAION F10 15w40 1l 10% DESC ESTACION Yp",precio:"2376"},
{codigo:"14504",descripcion :"ELAION F10 20 W 50 1lt 10% desc EESS",precio:"1837"},
{codigo:"14505",descripcion :"ELAION F10 20 W 50 4lt 10% desc EESS",precio:"6681"},
{codigo:"13887",descripcion :"ELAION F30 10w40 1l 10% DESC ESTACION Yp",precio:"8346"},
{codigo:"16487",descripcion :"ELAION F30 10W40 GRANEL BOXES Ypf 1 Lt",precio:"2646"},
{codigo:"13885",descripcion :"ELAION F50 5w40 1l 10% DESC ESTACION Ypf",precio:"4547"},
{codigo:"14585",descripcion :"ELAION F50 d1 0w20 1l 10% DESC ESTACION",precio:"4794"},
{codigo:"13881",descripcion :"ELAION F50 d1 5w30 1l 10% DESC ESTACION",precio:"4794"},
{codigo:"14503",descripcion :"ELAION F50 d2 1 LTS 10% desc EESS Elaion",precio:"4794"},
{codigo:"14502",descripcion :"ELAION F50 d2 4 LTS 10% desc EESS Elaion",precio:"17734"},
{codigo:"13809",descripcion :"ELAION F50 DPF 5w30 1l 10% DESC ESTACION",precio:"5040"},
{codigo:"13807",descripcion :"ELAION F50 DPF 5w30 1l 20% DESC ESTACION",precio:"4480"},
{codigo:"13805",descripcion :"ELAION F50 DPF 5w30 1l DESC PERSONAL Ypf",precio:"3920"},
{codigo:"13883",descripcion :"ELAION F50 E 5w30 1l 10% DESC ESTACION Y",precio:"4794"},
{codigo:"14590",descripcion :"ELAION F50 F 5w30 1l 10% DESC ESTACION Y",precio:"4794"},
{codigo:"14592",descripcion :"ELAION F50 F 5w40 1l 10% DESC ESTACION Y",precio:"4794"},
{codigo:"14588",descripcion :"ELAION F50 J 0w20 1l 10% DESC ESTACION Y",precio:"4565"},
{codigo:"15549",descripcion :"ELAION F50 PLUS 5w40 1l 10% DESC ESTACIO",precio:"4794"},
{codigo:"60000",descripcion :"Engrase Auto chico grasas",precio:"1600"},
{codigo:"60003",descripcion :"Engrase Auto grande grasas",precio:"1800"},
{codigo:"59999",descripcion :"Engrase Camion completo grasas",precio:"3500"},
{codigo:"10542",descripcion :"Engrase Camioneta grande grasas",precio:"2200"},
{codigo:"10545",descripcion :"Engrase Camioneta mediana grasas",precio:"2000"},
{codigo:"13764",descripcion :"ESCALONADO ELAION PL d10W 20 1LT$6000 -",precio:"612"},
{codigo:"13760",descripcion :"ESCALONADO ELAION PL F50 J 0W20 1LT $600",precio:"674"},
{codigo:"13761",descripcion :"ESCALONADO ELAION PL F50J 0W20 1LT$400 -",precio:"874"},
{codigo:"13769",descripcion :"ESCALONADO PL ELAI F 50 D 5W 30 1LT $400",precio:"812"},
{codigo:"13777",descripcion :"ESCALONADO PL ELAION COMP 5W-50 1 LT $40",precio:"1178"},
{codigo:"13776",descripcion :"ESCALONADO PL ELAION COMP 5W-50 1 LT $60",precio:"978"},
{codigo:"13734",descripcion :"ESCALONADO PL ELAION F10 15W-40 1LT $400",precio:"204"},
{codigo:"13737",descripcion :"ESCALONADO PL ELAION F30 10W-40 1LT $400",precio:"283"},
{codigo:"13749",descripcion :"ESCALONADO PL ELAION F50 5W-40 1LT $400-",precio:"750"},
{codigo:"13748",descripcion :"ESCALONADO PL ELAION F50 5W-40 1LT $600-",precio:"550"},
{codigo:"13765",descripcion :"ESCALONADO PL ELAION F50 D1 0W 20 1LT$ 4",precio:"812"},
{codigo:"13768",descripcion :"ESCALONADO PL ELAION F50 D1 5W 30 1 LT $",precio:"612"},
{codigo:"13731",descripcion :"ESCALONADO PL ELAION F50 D2 5W 30 1LT $4",precio:"812"},
{codigo:"13730",descripcion :"ESCALONADO PL ELAION F50 D2 5W30 1LT$600",precio:"612"},
{codigo:"13740",descripcion :"ESCALONADO PL ELAION F50 PLUS 5W-40 1LT",precio:"612"},
{codigo:"13741",descripcion :"ESCALONADO PL ELAION F50 PLUS 5W-40 1LT",precio:"812"},
{codigo:"13772",descripcion :"ESCALONADO PL ELAION F50DPF 5 w 30 1LT $",precio:"674"},
{codigo:"13773",descripcion :"ESCALONADO PL ELAION F50DPF 5w 30 1 lt $",precio:"874"},
{codigo:"13745",descripcion :"ESCALONADO PL ELAION F50E 5W-30 1LT $400",precio:"812"},
{codigo:"13744",descripcion :"ESCALONADO PL ELAION F50E 5W-30 1LT $600",precio:"612"},
{codigo:"13757",descripcion :"ESCALONADO PL ELAION F50F 5 W 30 1LT $40",precio:"812"},
{codigo:"13756",descripcion :"ESCALONADO PL ELAION F50F 5W-30 1LT $600",precio:"612"},
{codigo:"13753",descripcion :"ESCALONADO PL ELAION F50F 5W-40 1 LT $40",precio:"812"},
{codigo:"13752",descripcion :"ESCALONADO PL ELAION F50F 5W-40 1 LT $60",precio:"612"},
{codigo:"13796",descripcion :"EXTRAVIDA XV 300 1LT DESC PERSONAL Ypf 1",precio:"1908"},
{codigo:"14520",descripcion :"LUB+DIAG ELAION F10 20W50 1 l 1 Lt",precio:"2041"},
{codigo:"14514",descripcion :"LUB+DIAG ELAION F10 20w50 1 lt DESC",precio:"1633"},
{codigo:"14527",descripcion :"LUB+DIAG ELAION F10 20w50 1lt DESC 10% A",precio:"1837"},
{codigo:"14525",descripcion :"LUB+DIAG ELAION F10 20w50 1lt DESC PERSO",precio:"1429"},
{codigo:"14494",descripcion :"LUB+DIAG ELAION F10 20w50 3 x 1lt DESC A",precio:"5511"},
{codigo:"14487",descripcion :"LUB+DIAG ELAION F10 20w50 3 x 1lt DESC P",precio:"1429"},
{codigo:"14488",descripcion :"LUB+DIAG ELAION F10 3 x 1lt DESC ACA 10%",precio:"7128"},
{codigo:"14481",descripcion :"LUB+DIAG ELAION F10 3 x 1lt DESC PERSONA",precio:"1848"},
{codigo:"14489",descripcion :"LUB+DIAG ELAION F30 3 x 1lt DESC ACA 10%",precio:"8346"},
{codigo:"14482",descripcion :"LUB+DIAG ELAION F30 3 x 1lt DESC PERSONA",precio:"2164"},
{codigo:"14490",descripcion :"LUB+DIAG ELAION F50 3 x 1lt DESC ACA 10%",precio:"13641"},
{codigo:"14483",descripcion :"LUB+DIAG ELAION F50 3 x 1lt DESC PERSONA",precio:"3537"},
{codigo:"14492",descripcion :"LUB+DIAG ELAION F50 d1 3 x 1lt DESC ACA",precio:"15978"},
{codigo:"14485",descripcion :"LUB+DIAG ELAION F50 d1 3 x 1lt DESC PERS",precio:"3729"},
{codigo:"14493",descripcion :"LUB+DIAG ELAION F50 d2 3 x 1lt DESC ACA",precio:"14381"},
{codigo:"14486",descripcion :"LUB+DIAG ELAION F50 d2 3 x 1lt DESC PERS",precio:"3729"},
{codigo:"14491",descripcion :"LUB+DIAG ELAION F50 E 3 x 1lt DESC ACA 1",precio:"14381"},
{codigo:"14484",descripcion :"LUB+DIAG ELAION F50 E 3 x 1lt DESC PERSO",precio:"3729"},
{codigo:"14531",descripcion :"LUB+DIAG ELAION F50 PLUS 1 lt DESC PERSO",precio:"3729"},
{codigo:"14529",descripcion :"LUB+DIAG ELAION F50 PLUS 1lt DESC 10% AC",precio:"4794"},
{codigo:"14539",descripcion :"LUB+DIAG ELAION F50 PLUS 3 x 1lt DESC AC",precio:"14381"},
{codigo:"14540",descripcion :"LUB+DIAG ELAION F50 PLUS 3 x 1lt DESC PE",precio:"11185"},
{codigo:"14475",descripcion :"SOCIO ACA LB ELAION F10 20W50 1 L DESC 1",precio:"1837"},
{codigo:"13597",descripcion :"SOCIO ACA LB ELAION F50 5W30 1L DESC 10%",precio:"4547"},
{codigo:"14558",descripcion :"SOCIO ACA LB ELAION F50 d1 0W20 1L DESC",precio:"4794"},
{codigo:"14568",descripcion :"SOCIO ACA LB ELAION F50 F 5W30 1L DESC 1",precio:"4794"},
{codigo:"14570",descripcion :"SOCIO ACA LB ELAION F50 F 5W40 1L DESC 1",precio:"4794"},
{codigo:"14572",descripcion :"SOCIO ACA LB ELAION F50 J 0W20 1L DESC 1",precio:"4565"},
{codigo:"14477",descripcion :"SOCIO ACA LB ELAION F50 PLUS 1 L DESC 10",precio:"4794"},
{codigo:"13595",descripcion :"SOCIO ACA PL ELAION F50 5W30 1L DESC 10%",precio:"4547"},
{codigo:"16450",descripcion :"BOXES CAFE CORTESIA Ypf 1 Un",precio:"0,01"},
{codigo:"32000",descripcion :"Cargador Usb Serviclub 1 Un",precio:"0"},
{codigo:"14377",descripcion :"Cbio ELAION F50 d1 5W-30 1 lt Socio ACA",precio:"4794"},
{codigo:"14376",descripcion :"Cbio ELAION F50 d1 5W-30 4 lts 10% descu",precio:"17734"},
{codigo:"14385",descripcion :"Cbio ELAION F50 D2 5W-30 1 lt Socio ACA",precio:"4794"},
{codigo:"14384",descripcion :"Cbio ELAION F50 d2 5W-30 4 lts 10% descu",precio:"17734"},
{codigo:"14431",descripcion :"ELAION F 50 1Lt Desc personal YPF 1 Un",precio:"3537"},
{codigo:"14434",descripcion :"ELAION F 50 E 4 LTS Desc Personal YPF 1",precio:"13793"},
{codigo:"14050",descripcion :"ELAION F10 1 LT 10% desc EESS Elaion",precio:"2376"},
{codigo:"14427",descripcion :"Elaion F10 1Lt Desc Personal YPF 1 Un",precio:"1848"},
{codigo:"14428",descripcion :"ELAION F10 4 LTS Des Personal YPF 1 Un",precio:"6650"},
{codigo:"14106",descripcion :"ELAION F10 4lts 10% desc EESS Elaion",precio:"8550"},
{codigo:"14429",descripcion :"ELAION F30 1 lT Desc Personal YPF 1 Un",precio:"2164"},
{codigo:"14051",descripcion :"ELAION F30 1lt 10% desc EESS Elaion",precio:"2782"},
{codigo:"14430",descripcion :"ELAION F30 4 LTS Desc Personal YPF 1 Un",precio:"7910"},
{codigo:"14107",descripcion :"ELAION F30 4lts 10% desc EESS Elaion",precio:"10170"},
{codigo:"14052",descripcion :"ELAION F50 1lt 10% desc EESS Elaion",precio:"4547"},
{codigo:"14432",descripcion :"ELAION F50 4 Lts Desc Personal YPF 1 Un",precio:"13106"},
{codigo:"14220",descripcion :"ELAION F50 4lts 10% desc EESS Elaion",precio:"16850"},
{codigo:"14381",descripcion :"ELAION F50 d1 5W-30 1 lt Desc personal Y",precio:"3729"},
{codigo:"14379",descripcion :"ELAION F50 d1 5W-30 1 Lt Soc ACA 10% des",precio:"4794"},
{codigo:"14380",descripcion :"ELAION F50 d1 5W-30 4 LTS Desc Personal",precio:"13793"},
{codigo:"14378",descripcion :"ELAION F50 d1 5W-30 4 lts Soc ACA 10% De",precio:"17734"},
{codigo:"14389",descripcion :"ELAION F50 d2 5W-30 1 lt Desc personal Y",precio:"3729"},
{codigo:"14387",descripcion :"ELAION F50 d2 5W-30 1 Lt Soc ACA 10% des",precio:"4794"},
{codigo:"14388",descripcion :"ELAION F50 d2 5W-30 4 LTS Desc Personal",precio:"13793"},
{codigo:"14386",descripcion :"ELAION F50 d2 5W-30 4 lts Soc ACA 10% De",precio:"17734"},
{codigo:"14053",descripcion :"ELAION F50 E 1lt 10% desc EESS Elaion",precio:"4794"},
{codigo:"14433",descripcion :"ELAION F50 E 1Lt Desc Personal YPF 1 Un",precio:"3729"},
{codigo:"14224",descripcion :"ELAION F50E 4 LTS 10% desc EESS Elaion 4",precio:"17734"},
{codigo:"14442",descripcion :"Elaion Moto 4T 10W-50 desc Personal Ypf",precio:"2583"},
{codigo:"12177",descripcion :"ESCANEO PROMO EMP Ypf 1 Un",precio:"900"},
{codigo:"12169",descripcion :"ESCANEO SERV REV FLOTA PROPIA Ypf 1 Un",precio:"1950"},
{codigo:"12160",descripcion :"ESCANEO YER RETRIBUCION NC Ypf 1 Un",precio:"500"},
{codigo:"12167",descripcion :"ESCANEO Ypf 1 Un",precio:"1950"},
{codigo:"7622",descripcion :"Estacionamiento Club Camion 10% desc 1 H",precio:"27"},
{codigo:"14338",descripcion :"Extra Vida XV300 4lts 10% desc EESS",precio:"8634"},
{codigo:"15260",descripcion :"Lub+Diag Extra Vida XV300 4lts desc Pers",precio:"6716"},
{codigo:"15263",descripcion :"Lub+Diag Extra Vida XV300 4lts EESS desc",precio:"8634"},
{codigo:"15110",descripcion :"Lub+diag extra vida XV300 4lts Extra Vid",precio:"9593"},
{codigo:"15262",descripcion :"Lub+Diag Extra Vida XV300 4lts socio ACA",precio:"8634"},
{codigo:"15575",descripcion :"SERVICIO BOXES A DOMICILIO Ypf 1 Un",precio:"100"},
{codigo:"12166",descripcion :"SERVICIO DOMICILIARIO Ypf 1 Un",precio:"200"},
{codigo:"12085",descripcion :"Socio Aca Extra Vida XV300 1lt 10% desc",precio:"2453"},
{codigo:"12084",descripcion :"Socio Aca Extra Vida XV300 4lts 10% desc",precio:"8634"},
{codigo:"15295",descripcion :"Socio ACA LB F10 1lt 20% desc Elaion 1 U",precio:"2376"},
{codigo:"15296",descripcion :"Socio Aca LB F10 4 lts 10% desc Elaion 1",precio:"8550"},
{codigo:"15297",descripcion :"Socio Aca LB F30 1lt 10% desc elaion 1 U",precio:"2782"},
{codigo:"15298",descripcion :"Socio Aca LB F30 4Lts 10% Desc elaion 1",precio:"10170"},
{codigo:"15299",descripcion :"Socio Aca Lb F50 1lt 10% Desc Elaion 1 U",precio:"4547"},
{codigo:"15318",descripcion :"Socio Aca LB F50 4Lts 10% Desc Elaion 1",precio:"16850"},
{codigo:"15320",descripcion :"Socio Aca LB F50 E 4 LTS 10% Desc Elaion",precio:"17734"},
{codigo:"15319",descripcion :"Socio Aca LB F50 E1lt 10% Desc Elaion 1",precio:"4794"},
{codigo:"12081",descripcion :"Socio Aca LB HD S1 1lt 10% desc Baja Gam",precio:"1579"},
{codigo:"12082",descripcion :"Socio Aca LB HD S1 4lts 10% desc Baja Ga",precio:"4339"},
{codigo:"12144",descripcion :"Socio Aca LB Helicoidal M80W 1lt 10% des",precio:"1604"},
{codigo:"12145",descripcion :"Socio Aca LB Hidro YPF ATF 4lts 10% desc",precio:"5769"},
{codigo:"12118",descripcion :"Socio Aca LB Hipoidal 80W90 1lt 10% desc",precio:"1746"},
{codigo:"12012",descripcion :"Socio Aca LB YPF Hidro ATF 1lt 10% desc",precio:"1686"},
{codigo:"16549",descripcion :"Socio Aca Lub F10 20W-50 1 Lt 10% Desc E",precio:"1837"},
{codigo:"15303",descripcion :"Socio Serviclub / ACA Fuel Econ 4lts 20%",precio:"0"},
{codigo:"14466",descripcion :"Cambio Elaion F10 20W-50 20 lt 1 Un",precio:"26155"},
{codigo:"14459",descripcion :"Cambio Elaion Nutico 2T Balde 20 lts Ypf",precio:"37071"},
{codigo:"14399",descripcion :"CAMBIO HD 30 Ypf BALDE 20 Lt",precio:"21169"},
{codigo:"14461",descripcion :"Cambio HELICOIDAL M 80W Ypf 205 Un",precio:"203989"},
{codigo:"14462",descripcion :"Cambio Hidraulico BP 32otros lubes Ypf 2",precio:"173687"},
{codigo:"14093",descripcion :"Cbio Diesel YPF AT 205lts Baja Gama Dies",precio:"166918"},
{codigo:"14086",descripcion :"Cbio Diesel YPF AT 40 20lts balde Baja G",precio:"20075"},
{codigo:"16612",descripcion :"CBIO ELAION AURO FE 530 20 L Ypf 1 Lt",precio:"75585"},
{codigo:"14352",descripcion :"Cbio Elaion F10 B20",precio:"35267"},
{codigo:"14373",descripcion :"Cbio Elaion F30 20 lts Elaion",precio:"41755"},
{codigo:"14358",descripcion :"Cbio Elaion F50 20 lts Elaion",precio:"68092"},
{codigo:"14359",descripcion :"Cbio Elaion F50 E Balde 20 lts Elaion",precio:"71713"},
{codigo:"14337",descripcion :"Cbio Extra Vida XV100 205lts Extra Vida",precio:"189620"},
{codigo:"14336",descripcion :"Cbio Extra Vida XV100 20lts Extra Vida",precio:"21960"},
{codigo:"14335",descripcion :"Cbio Extra Vida XV300 205lts Extra Vida",precio:"221796"},
{codigo:"14334",descripcion :"Cbio Extra Vida XV300 20lts Extra Vida",precio:"25223"},
{codigo:"14331",descripcion :"Cbio Extra Vida XV500 205lts Extra Vida",precio:"434773"},
{codigo:"14955",descripcion :"CBIO EXTRAVIDA XV 500 5W-30 Ypf BALDE 20",precio:"52888"},
{codigo:"14956",descripcion :"CBIO EXTRAVIDA XV 500 5W-30 Ypf TAMBOR 2",precio:"423678"},
{codigo:"14958",descripcion :"CBIO EXTRAVIDA XV 600 10W-40 Ypf TAMBOR",precio:"443809"},
{codigo:"14140",descripcion :"Cbio Frigorifico 68 205lts Mantenimiento",precio:"7705"},
{codigo:"14149",descripcion :"Cbio Grasa 30 C 18Kgs balde Grasas Un",precio:"25850"},
{codigo:"14463",descripcion :"CBIO GRASA 30 C Ypf TAMBOR 180 Kg",precio:"189987"},
{codigo:"17783",descripcion :"CBIO GRASA 60 EP B18 Ypf 18 Kg",precio:"27642"},
{codigo:"14605",descripcion :"Cbio Grasa 62 EP 180kgs tambor",precio:"300683"},
{codigo:"14090",descripcion :"Cbio Grasa 62 EP 18kgs balde Grasas",precio:"30091"},
{codigo:"14355",descripcion :"Cbio Grasa 63 EP B18 kg Un",precio:"27594"},
{codigo:"14098",descripcion :"Cbio HD S1 205lts Baja Gama Gasolina",precio:"168654"},
{codigo:"14075",descripcion :"Cbio HD S1 20lts balde Baja Gama Gasolin",precio:"21169"},
{codigo:"13811",descripcion :"CBIO HIDRAULICO BP 100 Ypf 20 Lt",precio:"987"},
{codigo:"14146",descripcion :"Cbio Hidraulico BP 46 20lts balde Manten",precio:"20490"},
{codigo:"13812",descripcion :"CBIO HIDRAULICO BP 46 Ypf 205 Lt",precio:"7482"},
{codigo:"14095",descripcion :"Cbio Hidraulico BP 68 205lts Mantenimien",precio:"173687"},
{codigo:"14110",descripcion :"Cbio Hidraulico BP 68 20lts balde Manten",precio:"19396"},
{codigo:"14439",descripcion :"Cbio Hidraulico BP32 Ypf BALDE 20 Lt",precio:"19941"},
{codigo:"14096",descripcion :"Cbio Hidro YPF 19 205lts Mantenimiento/P",precio:"176832"},
{codigo:"14091",descripcion :"Cbio Hidro YPF 19 20lts balde Transmisio",precio:"19875"},
{codigo:"14094",descripcion :"Cbio Hidro YPF ATF 205lts Transmision",precio:"223608"},
{codigo:"14081",descripcion :"Cbio Hidro YPF ATF 20lts balde Transmisi",precio:"22636"},
{codigo:"14097",descripcion :"Cbio Hipoidal 80W90 205lts Transmision",precio:"212571"},
{codigo:"14077",descripcion :"Cbio Hipoidal 80W90 20lts balde Transmis",precio:"24544"},
{codigo:"14602",descripcion :"Cbio Hipoidal 85W140 205lts Transmision",precio:"212571"},
{codigo:"14144",descripcion :"Cbio Hipoidal 85W140 20lts balde Transmi",precio:"24544"},
{codigo:"14262",descripcion :"Cbio Hipoidal super 75W90 Transmision",precio:"129859"},
{codigo:"14127",descripcion :"Cbio Multiturbo 205lts Baja Gama Diesel",precio:"167314"},
{codigo:"14089",descripcion :"Cbio Multiturbo 20lts balde Baja Gama Di",precio:"20931"},
{codigo:"14124",descripcion :"Cbio Normal 205lts Baja Gama Gasolina",precio:"158739"},
{codigo:"14084",descripcion :"Cbio Transmision 140 20lts balde Transmi",precio:"18518"},
{codigo:"14238",descripcion :"Cbio Transmision 508/140 205lts Transmis",precio:"158000"},
{codigo:"14231",descripcion :"Cbio Transmision 90 20lts balde Transmis",precio:"17614"},
{codigo:"14134",descripcion :"Cbio Turbina R 32 20lts balde Mantenimie",precio:"849"},
{codigo:"13865",descripcion :"ELAION F10 20W-50 Ypf 20 Lt",precio:"26155"},
{codigo:"628669",descripcion :"GRASA PEX G PSP BALDE 18 Kg",precio:"4761"},
{codigo:"142892",descripcion :"KRATOS IP 04 TR Ypf TAMBOR PROCESOS 205",precio:"6387"},
{codigo:"640569",descripcion :"NEREA CL EP 2 - BALDE. GRASA 18 Kg",precio:"65073"},
{codigo:"13728",descripcion :"DIAGNOSTICO BOXES SERVICLUB SIN CARGO Yp",precio:"1016"},
{codigo:"14196",descripcion :"ELAION F50 d1 0W-20 LA NACION DESC $100",precio:"2821"},
{codigo:"12168",descripcion :"SERVICIO ESCANEO AUTOMOTRIZ Ypf 1 Un",precio:"3900"},
{codigo:"15326",descripcion :"Socio Aca F10 LP 4lts 10% Desc Elaion 1",precio:"8550"},
{codigo:"14465",descripcion :"SOCIO ACA PL ELAION F50 PLUS 1 L DESC 10",precio:"4794"},
{codigo:"16505",descripcion :"Socio Aca PL Extra Plus 1 lts 10% desc E",precio:"0"},
{codigo:"15325",descripcion :"socio Aca Pl F10 1Lt 10% Elaion 1 Un",precio:"2376"},
{codigo:"15327",descripcion :"Socio Aca PL F30 1 LT 10% Desc Elaion 1",precio:"2782"},
{codigo:"15328",descripcion :"Socio Aca PL F30 4 Lts 10% Desc Elaion 1",precio:"10170"},
{codigo:"15329",descripcion :"Socio Aca Pl F50 1Lt 10% Desc Elaion 1 U",precio:"4547"},
{codigo:"15330",descripcion :"Socio Aca PL F50 4 LTS 10% Desc Elaion 1",precio:"16850"},
{codigo:"15331",descripcion :"Socio Aca PL F50 E 1 Lt 10% Desc Elaion",precio:"4794"},
{codigo:"15332",descripcion :"Socio Aca PL F50 E 4 Lts 10% Desc Elaion",precio:"17734"},
{codigo:"16513",descripcion :"Socio Aca PL HD S1 1lt 10% desc Baja Gam",precio:"1579"},
{codigo:"16514",descripcion :"Socio Aca PL HD S1 4lts 10% desc Baja Ga",precio:"4339"},
{codigo:"16515",descripcion :"Socio Aca PL Helicoidal M80W 1lt 10% des",precio:"1604"},
{codigo:"16516",descripcion :"Socio Aca PL Hidro YPF ATF 4lts 10% desc",precio:"5769"},
{codigo:"16517",descripcion :"Socio Aca PL Hipoidal 80W90 1lt 10% desc",precio:"1746"},
{codigo:"16520",descripcion :"Socio Aca PL Super 20w50 1lt 10% desc Ba",precio:"1627"},
{codigo:"16521",descripcion :"Socio Aca PL Super 20w50 4lts 10% desc B",precio:"5024"},
{codigo:"16522",descripcion :"Socio Aca PL YPF Hidro ATF 1lt 10% desc",precio:"1686"},
{codigo:"188101",descripcion :"Aromatizador 1 Un",precio:"1356"},
{codigo:"16443",descripcion :"CBIO AROMAT AMB P/AUT 36/10G PROMO APP Y",precio:"0"},
{codigo:"13794",descripcion :"CBIO AROMATIZADOR AMBIENTAL P/AUTOS 10G",precio:"746"},
{codigo:"13795",descripcion :"CBIO Aromatizador Spray 100cc - Ypf 1 Un",precio:"1267"},
{codigo:"13793",descripcion :"CBIO CERA BRILLO FINAL 500 ML Ypf",precio:"1189"},
{codigo:"16440",descripcion :"CBIO ELAION MOTO 4T 10W-40 1l Ypf 1 Un",precio:"3690"},
{codigo:"16439",descripcion :"CBIO ELAION MOTO 4T 10W-50 1l Ypf 1 Un",precio:"3690"},
{codigo:"16441",descripcion :"CBIO ELAION MOTO 4T 20W-50 1l Ypf 1 Un",precio:"1796"},
{codigo:"16434",descripcion :"CBIO ELAION MOTO CADENAS Ypf Aerosol 220",precio:"1855"},
{codigo:"16442",descripcion :"CBIO ELAION NAUTICO 2T SEMISINTETICO 1L",precio:"3781"},
{codigo:"15272",descripcion :"CBIO KRIOX AUTOMOTRIZ ORGANICO AMARILLO",precio:"1931"},
{codigo:"15271",descripcion :"CBIO KRIOX AUTOMOTRIZ ORGANICO VIOLETA Y",precio:"1931"},
{codigo:"14148",descripcion :"Cbio Kriox Inor 20lts B20 complementario",precio:"31675"},
{codigo:"14085",descripcion :"Cbio Kriox Inorganico 1 Lt complementari",precio:"1821"},
{codigo:"14111",descripcion :"Cbio Kriox Inorganico 500cc complementar",precio:"1264"},
{codigo:"14357",descripcion :"Cbio Kriox Organico 1Lt complementarios",precio:"1931"},
{codigo:"13792",descripcion :"CBIO LAVA AUTOS 500ML",precio:"1189"},
{codigo:"16438",descripcion :"CBIO LAVA PARABRISAS 50ML Ypf 1 Un",precio:"930"},
{codigo:"14236",descripcion :"Cbio Limit MO 2 18kgrs Grasas",precio:"43043"},
{codigo:"13791",descripcion :"CBIO LIMPIA MOTORES 400 ML Ypf",precio:"1494"},
{codigo:"16431",descripcion :"CBIO LIMPIA TAPIZADOS 400 ML Ypf",precio:"1494"},
{codigo:"14109",descripcion :"Cbio Liq Freno 500cc complementarios",precio:"1040"},
{codigo:"14063",descripcion :"Cbio Liq Frenos 1lt complementarios",precio:"1831"},
{codigo:"14069",descripcion :"Cbio Liq Frenos 200cc complementarios",precio:"584"},
{codigo:"14042",descripcion :"Cbio Liq frenos DOT4 1lt complementarios",precio:"3908"},
{codigo:"14040",descripcion :"Cbio Liq frenos DOT4 200cc complementari",precio:"1165"},
{codigo:"14041",descripcion :"Cbio Liq frenos DOT4 500cc complementari",precio:"2225"},
{codigo:"16435",descripcion :"CBIO MULTIPROPOSITO LIMIT 220ML Ypf",precio:"1053"},
{codigo:"16436",descripcion :"CBIO RENOVADOR C/SILIC. LAVANDA 400 ML Y",precio:"1494"},
{codigo:"16437",descripcion :"CBIO RENOVADOR C/SILIC. VAINILLA 400 ML",precio:"1494"},
{codigo:"14170",descripcion :"Cbio YPF Lavaparabrisas 1lt complementar",precio:"1020"},
{codigo:"505740",descripcion :"Cera brillo final 0.5 Lt 1 Un",precio:"1272"},
{codigo:"106492",descripcion :"Elaion 2T 205 lts 1 Un",precio:"373380"},
{codigo:"125196",descripcion :"Elaion Competicion 5W-50 12/1L Ypf Un",precio:"7418"},
{codigo:"107922",descripcion :"ELAION MOTO 2T 100cc Ypf",precio:"394"},
{codigo:"107996",descripcion :"ELAION MOTO 2T 1LT Un",precio:"1463"},
{codigo:"107925",descripcion :"ELAION MOTO 2T 200cc",precio:"518"},
{codigo:"107992",descripcion :"Elaion Moto 2T 205 lts. complementarios",precio:"189830"},
{codigo:"107980",descripcion :"Elaion Moto 2t Ypf Balde 20 l complement",precio:"20731"},
{codigo:"107796",descripcion :"ELAION MOTO 4T (100% SINTETICO 10 W 50)",precio:"3949"},
{codigo:"107340",descripcion :"ELAION MOTO 4T (Mineral 20w50) 500 cc Yp",precio:"1231"},
{codigo:"107696",descripcion :"ELAION MOTO 4T (semisint 10w40) 1 lt Un",precio:"2495"},
{codigo:"107396",descripcion :"Elaion Moto 4T 20W-50 Ypf 1 Lt",precio:"1922"},
{codigo:"108408",descripcion :"Elaion Moto Cadenas aerosol Ypf 220 cc U",precio:"1985"},
{codigo:"108740",descripcion :"ELAION MOTO TRANSMISION 80W 500 cc",precio:"1194"},
{codigo:"106496",descripcion :"ELAION NAUTICO 1LT Un",precio:"2707"},
{codigo:"106480",descripcion :"ELAION Nautico 2T B20",precio:"39665"},
{codigo:"106596",descripcion :"ELAION NAUTICO 2T SEMISINTETICO 1 Un",precio:"4046"},
{codigo:"106696",descripcion :"ELAION NAUTICO 4T 1LTS Un",precio:"2452"},
{codigo:"106680",descripcion :"Elaion Nautico 4T B20.",precio:"36557"},
{codigo:"628700",descripcion :"GRASA LIMIT MO 2 X 400 Ypf 1 Un",precio:"1234"},
{codigo:"185240",descripcion :"Kriox 3 Inorganico 0.5lt Ypf complementa",precio:"1352"},
{codigo:"185296",descripcion :"Kriox 3 Inorganico 1 lt Ypf complementar",precio:"1949"},
{codigo:"185480",descripcion :"Kriox 3 Organico Fucsia balde B20 Lt 1 U",precio:"35995"},
{codigo:"185592",descripcion :"KRIOX ATI TR F Pilar TAMBOR 205 Lt",precio:"372006"},
{codigo:"184596",descripcion :"KRIOX AUTOMOTRIZ ORGANICO AMARILLO Ypf 1",precio:"2066"},
{codigo:"184696",descripcion :"KRIOX AUTOMOTRIZ ORGANICO VIOLETA Ypf 1",precio:"2066"},
{codigo:"185280",descripcion :"Kriox Inorganico 20lts balde complementa",precio:"33892"},
{codigo:"185496",descripcion :"Kriox Organico Fucsia 1Lt Ypf complement",precio:"2066"},
{codigo:"504940",descripcion :"Lava autos 1/2 litro 1 Un",precio:"1272"},
{codigo:"504896",descripcion :"Lavaparabrisas 1lt YPF Ypf 1 Un",precio:"1091"},
{codigo:"504899",descripcion :"Lavaparabrisas 4lt Ypf complementarios 1",precio:"3609"},
{codigo:"187909",descripcion :"Lavaparabrisas hiperconcentrado 0.05lt c",precio:"995"},
{codigo:"628707",descripcion :"Limit MO-2 24/400 Grasas 1 Un",precio:"1621"},
{codigo:"14425",descripcion :"Limit Mult 400cc obsequio Grasas",precio:"0"},
{codigo:"505036",descripcion :"Limpiamotores 400 Ml",precio:"1598"},
{codigo:"505236",descripcion :"Limpiatapizados 400 Ml",precio:"1598"},
{codigo:"186640",descripcion :"Liquido frenos 0.5 Lt Ypf complementario",precio:"1113"},
{codigo:"186696",descripcion :"Liquido frenos 1 Lt Ypf complementarios",precio:"1960"},
{codigo:"114796",descripcion :"Liquido frenos DOT4 1lt Ypf complementar",precio:"4182"},
{codigo:"114731",descripcion :"Liquido frenos DOT4 200cc Ypf complement",precio:"1246"},
{codigo:"114740",descripcion :"Liquido frenos DOT4 500cc Ypf complement",precio:"2381"},
{codigo:"186631",descripcion :"Liquidos para frenos 0.2 Lt Ypf compleme",precio:"625"},
{codigo:"13729",descripcion :"MANTENIMIENTO Y RECARGA AA Ypf 1 Un",precio:"1216"},
{codigo:"112396",descripcion :"Nautico 4T 10w 30 1lts 1 Un",precio:"32"},
{codigo:"16452",descripcion :"OBSEQUIO BOXES LAVA PARABRISAS 1 L Ypf 1",precio:"0,01"},
{codigo:"188000",descripcion :"Perfume ambiental para autos Ypf 1 Un",precio:"798"},
{codigo:"505136",descripcion :"Renovador de Siliconas Lavanda 400 Ml",precio:"1598"},
{codigo:"505636",descripcion :"Renovador de Siliconas Vainilla 400 Ml",precio:"1598"},
{codigo:"505408",descripcion :"YPF Multiproposito MULTIPROPOSITO LIMIT",precio:"1127"},
{codigo:"15018",descripcion :"Cbio de Aceite (Mano de obra) Boxes",precio:"3000"},
{codigo:"15019",descripcion :"Cbio Filtro aceite (Mano de obra) Boxes",precio:"1000"},
{codigo:"16238",descripcion :"FIL A 1206 PUROLATOR Mann 1 Un",precio:"240"},
{codigo:"15583",descripcion :"FIL AC 03C115562 VW 1 Un",precio:"590"},
{codigo:"15584",descripcion :"FIL AC 03L115562 VW 1 Un",precio:"336"},
{codigo:"15656",descripcion :"FIL AC 03L115562 VW 1 Un",precio:"296"},
{codigo:"15585",descripcion :"FIL AC 0491155612 VW 1 Un",precio:"195"},
{codigo:"15586",descripcion :"FIL AC 06D115562 VW 1 Un",precio:"427"},
{codigo:"15587",descripcion :"FIL AC 06J115403Q VW 1 Un",precio:"509"},
{codigo:"15588",descripcion :"FIL AC 06L115562 Mann 1 Un",precio:"450"},
{codigo:"15589",descripcion :"FIL AC 070115562 VW 1 Un",precio:"430"},
{codigo:"15590",descripcion :"FIL AC 078115561J VW 1 Un",precio:"450"},
{codigo:"4011558231200",descripcion :"FIL AC CF 1000 Mann 1 Un",precio:"6079"},
{codigo:"16265",descripcion :"FIL AC CF 1200 Mann 1 Un",precio:"8813"},
{codigo:"16241",descripcion :"FIL AC F1020 PUROLA Mann 1 Un",precio:"211"},
{codigo:"15398",descripcion :"FIL AC H 12 111 Mann Unidad Un",precio:"3399"},
{codigo:"4011558810306",descripcion :"FIL AC HU 1077/2 z Mann 1 Un",precio:"4274"},
{codigo:"4011558016739",descripcion :"FIL AC HU 514 Y Mann 1 Un",precio:"5471"},
{codigo:"4011558038052",descripcion :"FIL AC HU 6009 z Mann 1 Un",precio:"2715"},
{codigo:"16270",descripcion :"FIL AC HU 6011 z Mann 1 Un",precio:"2012"},
{codigo:"4011558091972",descripcion :"FIL AC HU 6012 z Kit Mann 1 Un",precio:"3918"},
{codigo:"4011558025656",descripcion :"FIL AC HU 6013 z Mann 1 Un",precio:"3245"},
{codigo:"4011558067403",descripcion :"FIL AC HU 6015 z Kit Mann 1 Un",precio:"5853"},
{codigo:"15980",descripcion :"FIL AC HU 6017 z Mann 1 Un",precio:"3289"},
{codigo:"15370",descripcion :"FIL AC HU 612/2X Mann Unidad Un",precio:"522"},
{codigo:"4011558032357",descripcion :"FIL AC HU 7019 z Mann 1 Un",precio:"3750"},
{codigo:"4011558045876",descripcion :"FIL AC HU 7025 z Mann 1 Un",precio:"4687"},
{codigo:"16250",descripcion :"FIL AC HU 7029 z Mann 1 Un",precio:"3510"},
{codigo:"16290",descripcion :"FIL AC HU 7030 z Mann 1 Un",precio:"11557"},
{codigo:"4011558042189",descripcion :"FIL AC HU 7044 z Mann 1 Un",precio:"1298"},
{codigo:"16298",descripcion :"FIL AC HU 711/6 z Mann 1 Un",precio:"5187"},
{codigo:"15387",descripcion :"FIL AC HU 713/1X Mann Aceite Un",precio:"3065"},
{codigo:"15366",descripcion :"FIL AC HU 721/5X Mann Unidad Un",precio:"7048"},
{codigo:"16283",descripcion :"FIL AC HU 8001 x Mann 1 Un",precio:"7394"},
{codigo:"4011558020064",descripcion :"FIL AC HU 8005 z Mann 1 Un",precio:"4854"},
{codigo:"16229",descripcion :"FIL AC HU 8006 z Mann 1 Un",precio:"3938"},
{codigo:"16294",descripcion :"FIL AC HU 816 z KIT Mann 1 Un",precio:"5141"},
{codigo:"15353",descripcion :"FIL AC HU 816/2X Mann Unidad Un",precio:"2524"},
{codigo:"15371",descripcion :"FIL AC HU 816X Mann Unidad Un",precio:"3301"},
{codigo:"15591",descripcion :"FIL AC L28115561F VW 1 Un",precio:"249"},
{codigo:"15592",descripcion :"FIL AC L6A115561B VW 1 Un",precio:"180"},
{codigo:"15593",descripcion :"FIL AC L71115562C VW 1 Un",precio:"205"},
{codigo:"15594",descripcion :"FIL AC L74115562 VW 1 Un",precio:"264"},
{codigo:"4011558840105",descripcion :"FIL AC MH 67 Mann 1 Un",precio:"2467"},
{codigo:"16304",descripcion :"FIL AC PH/11457 Motorcraft 1 Un",precio:"896"},
{codigo:"15647",descripcion :"FIL AC VW 030115561K VW 1 Un",precio:"214"},
{codigo:"4011558715908",descripcion :"FIL AC W 1170 Mann 1 Un",precio:"6546"},
{codigo:"16286",descripcion :"FIL AC W 6011 Mann 1 Un",precio:"183"},
{codigo:"4011558056872",descripcion :"FIL AC W 6019 Mann 1 Un",precio:"3499"},
{codigo:"4011558077884",descripcion :"FIL AC W 610/10 Mann",precio:"2700"},
{codigo:"16257",descripcion :"FIL AC W 610/3 WIX Mann 1 Un",precio:"90"},
{codigo:"4011558043179",descripcion :"FIL AC W 7032 Mann 1 Un",precio:"2289"},
{codigo:"4011558076658",descripcion :"FIL AC W 7053 Mann 1 Un",precio:"1615"},
{codigo:"4011558094072",descripcion :"FIL AC W 7056 Mann 1 Un",precio:"2965"},
{codigo:"4011558084172",descripcion :"FIL AC W 7058 Mann 1 Un",precio:"1677"},
{codigo:"4011558744502",descripcion :"FIL AC W 712/75 Mann 1 Un",precio:"1325"},
{codigo:"15364",descripcion :"FIL AC W 712/91 Unidad Un",precio:"297"},
{codigo:"4011558338411",descripcion :"FIL AC W66/2 Mann 1 Un",precio:"652"},
{codigo:"15819",descripcion :"FIL AC WA42482 Mann 1 Un",precio:"359"},
{codigo:"15820",descripcion :"FIL AC WA42483 Mann 1 Un",precio:"129"},
{codigo:"15921",descripcion :"FIL AC WA42484 Ypf 1 Un",precio:"297"},
{codigo:"15821",descripcion :"FIL AC WA42486 Mann 1 Un",precio:"223"},
{codigo:"15822",descripcion :"FIL AC WA42487 Mann 1 Un",precio:"201"},
{codigo:"15940",descripcion :"FIL AC WA42980 Mann 1 Un",precio:"11248"},
{codigo:"15965",descripcion :"FIL AC WA43011 Mann 1 Un",precio:"140"},
{codigo:"16422",descripcion :"FIL AC WIX 51515 Mann 1 Un",precio:"863"},
{codigo:"7893390208254",descripcion :"FIL AC WIX WA10514 Mann 1 Un",precio:"3252"},
{codigo:"15818",descripcion :"FIL AC WIX WA42481 Mann 1 Un",precio:"119"},
{codigo:"15823",descripcion :"FIL AC WIX WA42488 Mann 1 Un",precio:"103"},
{codigo:"15824",descripcion :"FIL AC WIX WA42489 Mann 1 Un",precio:"125"},
{codigo:"15825",descripcion :"FIL AC WIX WA42490 Mann 1 Un",precio:"153"},
{codigo:"15827",descripcion :"FIL AC WIX WA42493 Mann 1 Un",precio:"408"},
{codigo:"15828",descripcion :"FIL AC WIX WA42494 Mann 1 Un",precio:"140"},
{codigo:"15829",descripcion :"FIL AC WIX WA42495 Mann 1 Un",precio:"134"},
{codigo:"15830",descripcion :"FIL AC WIX WA42496 Mann 1 Un",precio:"188"},
{codigo:"15831",descripcion :"FIL AC WIX WA42497 Mann 1 Un",precio:"303"},
{codigo:"15832",descripcion :"FIL AC WIX WA42498 Mann 1 Un",precio:"180"},
{codigo:"15833",descripcion :"FIL AC WIX WA42499 Mann 1 Un",precio:"95"},
{codigo:"15834",descripcion :"FIL AC WIX WA42500 Mann 1 Un",precio:"155"},
{codigo:"15835",descripcion :"FIL AC WIX WA42501 Mann 1 Un",precio:"119"},
{codigo:"15836",descripcion :"FIL AC WIX WA42502 Mann 1 Un",precio:"190"},
{codigo:"15837",descripcion :"FIL AC WIX WA42503 Mann 1 Un",precio:"117"},
{codigo:"15838",descripcion :"FIL AC WIX WA42504 Mann 1 Un",precio:"158"},
{codigo:"15841",descripcion :"FIL AC WIX WA42507 Mann 1 Un",precio:"195"},
{codigo:"15842",descripcion :"FIL AC WIX WA42508 Mann 1 Un",precio:"188"},
{codigo:"15843",descripcion :"FIL AC WIX WA42509 Mann 1 Un",precio:"181"},
{codigo:"15844",descripcion :"FIL AC WIX WA42510 Mann 1 Un",precio:"137"},
{codigo:"15845",descripcion :"FIL AC WIX WA42511 Mann 1 Un",precio:"178"},
{codigo:"15846",descripcion :"FIL AC WIX WA42512 Mann 1 Un",precio:"255"},
{codigo:"15847",descripcion :"FIL AC WIX WA42513 Mann 1 Un",precio:"241"},
{codigo:"15848",descripcion :"FIL AC WIX WA42514 Mann 1 Un",precio:"176"},
{codigo:"15849",descripcion :"FIL AC WIX WA42515 Mann 1 Un",precio:"146"},
{codigo:"15850",descripcion :"FIL AC WIX WA42516 Mann 1",precio:"232"},
{codigo:"15851",descripcion :"FIL AC WIX WA42517 Mann 1 Un",precio:"1317"},
{codigo:"15852",descripcion :"FIL AC WIX WA42518 Mann 1 Un",precio:"605"},
{codigo:"15853",descripcion :"FIL AC WIX WA42519 Mann 1 Un",precio:"392"},
{codigo:"15854",descripcion :"FIL AC WIX WA42520 Mann 1 Un",precio:"431"},
{codigo:"15855",descripcion :"FIL AC WIX WA42525 Mann 1 Un",precio:"329"},
{codigo:"15856",descripcion :"FIL AC WIX WA42529 Mann 1 Un",precio:"246"},
{codigo:"15857",descripcion :"FIL AC WIX WA42530 Mann 1 Un",precio:"555"},
{codigo:"15858",descripcion :"FIL AC WIX WA42531 Mann 1 Un",precio:"428"},
{codigo:"15859",descripcion :"FIL AC WIX WA42532 Mann 1 Un",precio:"567"},
{codigo:"15860",descripcion :"FIL AC WIX WA42535 Mann 1 Un",precio:"567"},
{codigo:"15861",descripcion :"FIL AC WIX WA42536 Mann 1 Un",precio:"216"},
{codigo:"15862",descripcion :"FIL AC WIX WA42538 Mann 1 Un",precio:"305"},
{codigo:"15929",descripcion :"FIL AC WIX WA42963 Mann 1 Un",precio:"139"},
{codigo:"15930",descripcion :"FIL AC WIX WA42964 Mann 1 Un",precio:"149"},
{codigo:"15931",descripcion :"FIL AC WIX WA42965 Mann 1 Un",precio:"111"},
{codigo:"15932",descripcion :"FIL AC WIX WA42968 Mann 1 Un",precio:"130"},
{codigo:"15933",descripcion :"FIL AC WIX WA42973 Mann 1 Un",precio:"146"},
{codigo:"15934",descripcion :"FIL AC WIX WA42974 Mann 1 Un",precio:"100"},
{codigo:"15935",descripcion :"FIL AC WIX WA42975 Mann 1 Un",precio:"136"},
{codigo:"15936",descripcion :"FIL AC WIX WA42976 Mann 1 Un",precio:"255"},
{codigo:"15937",descripcion :"FIL AC WIX WA42977 Mann 1 Un",precio:"244"},
{codigo:"15938",descripcion :"FIL AC WIX WA42978 Mann 1 Un",precio:"360"},
{codigo:"15939",descripcion :"FIL AC WIX WA42979 Mann 1 Un",precio:"109"},
{codigo:"15941",descripcion :"FIL AC WIX WA42983 Mann 1 Un",precio:"100"},
{codigo:"15942",descripcion :"FIL AC WIX WA42984 Mann 1 Un",precio:"140"},
{codigo:"15943",descripcion :"FIL AC WIX WA42985 Mann 1 Un",precio:"129"},
{codigo:"15944",descripcion :"FIL AC WIX WA42986 Mann 1 Un",precio:"138"},
{codigo:"15945",descripcion :"FIL AC WIX WA42987 Mann 1 Un",precio:"102"},
{codigo:"15946",descripcion :"FIL AC WIX WA42988 Mann 1 Un",precio:"130"},
{codigo:"15947",descripcion :"FIL AC WIX WA42989 Mann 1 Un",precio:"144"},
{codigo:"15948",descripcion :"FIL AC WIX WA42990 Mann 1 Un",precio:"109"},
{codigo:"15949",descripcion :"FIL AC WIX WA42991 Mann 1 Un",precio:"108"},
{codigo:"15950",descripcion :"FIL AC WIX WA42992 Mann 1 Un",precio:"119"},
{codigo:"15951",descripcion :"FIL AC WIX WA42993 Mann 1 Un",precio:"89"},
{codigo:"15952",descripcion :"FIL AC WIX WA42994 Mann 1 Un",precio:"92"},
{codigo:"15953",descripcion :"FIL AC WIX WA42995 Mann 1 Un",precio:"82"},
{codigo:"15954",descripcion :"FIL AC WIX WA42996 Mann 1 Un",precio:"98"},
{codigo:"15955",descripcion :"FIL AC WIX WA42997 Mann 1 Un",precio:"92"},
{codigo:"15956",descripcion :"FIL AC WIX WA42998 Mann 1 Un",precio:"97"},
{codigo:"15957",descripcion :"FIL AC WIX WA42999 Mann 1 Un",precio:"129"},
{codigo:"15958",descripcion :"FIL AC WIX WA43000 Mann 1 Un",precio:"102"},
{codigo:"15959",descripcion :"FIL AC WIX WA43001 Mann 1 Un",precio:"146"},
{codigo:"15960",descripcion :"FIL AC WIX WA43005 Mann 1 Un",precio:"130"},
{codigo:"15961",descripcion :"FIL AC WIX WA43006 Mann 1 Un",precio:"254"},
{codigo:"15962",descripcion :"FIL AC WIX WA43007 Mann 1 Un",precio:"441"},
{codigo:"15963",descripcion :"FIL AC WIX WA43009 Mann 1 Un",precio:"172"},
{codigo:"15964",descripcion :"FIL AC WIX WA43010 Mann 1 Un",precio:"331"},
{codigo:"15966",descripcion :"FIL AC WIX WA43012 Mann 1 Un",precio:"196"},
{codigo:"15967",descripcion :"FIL AC WIX WA43013 Mann 1 Un",precio:"191"},
{codigo:"15968",descripcion :"FIL AC WIX WA43014 Mann 1 Un",precio:"124"},
{codigo:"15970",descripcion :"FIL AC WIX WA43016 Mann 1 Un",precio:"363"},
{codigo:"15971",descripcion :"FIL AC WIX WA43017 Mann 1 Un",precio:"331"},
{codigo:"15972",descripcion :"FIL AC WIX WA43018 Mann 1 Un",precio:"338"},
{codigo:"15973",descripcion :"FIL AC WIX WA43019 Mann 1 Un",precio:"107"},
{codigo:"15974",descripcion :"FIL AC WIX WA43020 Mann 1 Un",precio:"474"},
{codigo:"15975",descripcion :"FIL AC WIX WA43021 Mann 1 Un",precio:"139"},
{codigo:"15976",descripcion :"FIL AC WIX WA43022 Mann 1 Un",precio:"205"},
{codigo:"15977",descripcion :"FIL AC WIX WA43023 Mann 1 Un",precio:"165"},
{codigo:"15983",descripcion :"FIL AC WIX WA43024 Mann 1 Un",precio:"197"},
{codigo:"15984",descripcion :"FIL AC WIX WA43025 Mann 1 Un",precio:"88"},
{codigo:"16427",descripcion :"FIL AC WIX WL10121 Mann 1 Un",precio:"2171"},
{codigo:"16303",descripcion :"FIL AC WIX WL10134 Mann 1 Un",precio:"414"},
{codigo:"7893390402553",descripcion :"FIL AC WIX WL10160 Mann 1 Un",precio:"416"},
{codigo:"16321",descripcion :"FIL AC WIX WL10162 Mann 1 Un",precio:"200"},
{codigo:"7893390602724",descripcion :"FIL AC WIX WL10167 Mann 1 Un",precio:"272"},
{codigo:"16292",descripcion :"FIL AC WIX WL10174 Mann 1 Un",precio:"147"},
{codigo:"765809969131",descripcion :"FIL AC WIX WL10467A Mann 1 Un",precio:"1087"},
{codigo:"765809969049",descripcion :"FIL AC WIX WL10470A Mann 1 Un",precio:"1204"},
{codigo:"765809966116",descripcion :"FIL AC WIX WL10482 Mann 1 Un",precio:"1422"},
{codigo:"765809966086",descripcion :"FIL AC WIX WL10483 Mann 1 Un",precio:"1293"},
{codigo:"16310",descripcion :"FIL AC WIX WL54145 Mann 1 Un",precio:"943"},
{codigo:"16421",descripcion :"FIL AC WIX WL54225 Mann 1 Un",precio:"317"},
{codigo:"16326",descripcion :"FIL AC WIX WL57000-20 Mann 1 Un",precio:"200"},
{codigo:"16314",descripcion :"FIL AC WIX WL57000-3/4-S Mann 1 Un",precio:"180"},
{codigo:"7893390602816",descripcion :"FIL AC WIX WL57060 Mann 1 Un",precio:"1356"},
{codigo:"5050026007571",descripcion :"FIL AC WIX WL7008 Mann 1 Un",precio:"1871"},
{codigo:"5050026008400",descripcion :"FIL AC WIX WL7086 Mann 1 Un",precio:"1024"},
{codigo:"5050026009629",descripcion :"FIL AC WIX WL7204 Mann 1 Un",precio:"511"},
{codigo:"5050026341996",descripcion :"FIL AC WIX WL7254 Mann 1 Un",precio:"417"},
{codigo:"16279",descripcion :"FIL AC WIX WL7305 Mann 1 Un",precio:"1299"},
{codigo:"5050026347295",descripcion :"FIL AC WIX WL7413 Mann 1 Un",precio:"1191"},
{codigo:"16312",descripcion :"FIL AC WIX WL7414 Mann 1 Un",precio:"5603"},
{codigo:"16313",descripcion :"FIL AC WIX WL7424 Mann 1 Un",precio:"2573"},
{codigo:"5050026350080",descripcion :"FIL AC WIX WL7433 Mann 1 Un",precio:"6257"},
{codigo:"5904608745804",descripcion :"FIL AC WIX WL7458 Mann 1 Un",precio:"2702"},
{codigo:"5050026353418",descripcion :"FIL AC WIX WL7470 Mann 1 Un",precio:"2040"},
{codigo:"16426",descripcion :"FIL AC WIX WL7476 Mann 1 Un",precio:"2280"},
{codigo:"16318",descripcion :"FIL AC WIX WL7494 Mann 1 Un",precio:"4579"},
{codigo:"16306",descripcion :"FIL AC WIX WL7503",precio:"710"},
{codigo:"5904608750402",descripcion :"FIL AC WIX WL7504 Mann 1 Un",precio:"1770"},
{codigo:"5904608750709",descripcion :"FIL AC WIX WL7507 Mann 1 Un",precio:"1996"},
{codigo:"16288",descripcion :"FIL AC WIX WL7508 Mann 1 Un",precio:"1469"},
{codigo:"5904608753007",descripcion :"FIL AC WIX WL7530 Mann 1 Un",precio:"2068"},
{codigo:"5050026009308",descripcion :"FIL AC WIX WL7570 Mann 1 Un",precio:"1283"},
{codigo:"5904608757203",descripcion :"FIL AC WIX WL7572 Mann 1 Un",precio:"850"},
{codigo:"5904608757302",descripcion :"FIL AC WIX WL7573 Mann 1 Un",precio:"4087"},
{codigo:"5904608757609",descripcion :"FIL AC WIX WL7576 Mann 1 Un",precio:"1505"},
{codigo:"765809969162",descripcion :"FIL AC WL10466A WIX Mann 1 Un",precio:"1246"},
{codigo:"765809966208",descripcion :"FIL AC WL10479 WIX Mann 1 Un",precio:"1607"},
{codigo:"765809965966",descripcion :"FIL AC WL10487 Mann 1 Un",precio:"1448"},
{codigo:"765809963573",descripcion :"FIL AC WL10489A Mann 1 Un",precio:"1059"},
{codigo:"16416",descripcion :"FIL AC WL57303 Mann 1 Un",precio:"1754"},
{codigo:"5050026008325",descripcion :"FIL AC WL7081 Mann",precio:"1926"},
{codigo:"7893390402614",descripcion :"FIL AC WL7293 Mann 1 Un",precio:"1205"},
{codigo:"5050026345024",descripcion :"FIL AC WL7300 Mann 1 Un",precio:"1754"},
{codigo:"5050026351230",descripcion :"FIL AC WL7443 Mann 1 Un",precio:"2306"},
{codigo:"5904608747907",descripcion :"FIL AC WL7479 Mann 1 Un",precio:"2804"},
{codigo:"4011558800406",descripcion :"FIL AC WP 914 Mann 1 Un",precio:"8514"},
{codigo:"15582",descripcion :"FIL ACEITE 030115561T VW 1 Un",precio:"187"},
{codigo:"15429",descripcion :"FIL ACEITE HU 514X Mann Un",precio:"5409"},
{codigo:"15574",descripcion :"FIL ACEITE HU 7020 z Mann 1 Un",precio:"4447"},
{codigo:"15571",descripcion :"FIL ACEITE HU 7027 z Mann 1 Un",precio:"5339"},
{codigo:"15442",descripcion :"FIL ACEITE W 7013/1 Mann Un",precio:"1605"},
{codigo:"15437",descripcion :"FIL ACEITE W 940/69 Mann Un",precio:"4363"},
{codigo:"15602",descripcion :"FIL AI 1K0129620D VW 1 Un",precio:"481"},
{codigo:"15419",descripcion :"FIL AI C 17 006 Mann 1 Un",precio:"308"},
{codigo:"4011558026899",descripcion :"FIL AI C 26 014 Mann 1 Un",precio:"2471"},
{codigo:"15985",descripcion :"FIL CO WIX WA43198 Mann 1 Un",precio:"268"},
{codigo:"15358",descripcion :"FIL CO WK 940/41X Mann Unidad Un",precio:"6504"},
{codigo:"15404",descripcion :"FIL HU 7002 Z AC Mann Un",precio:"1923"},
{codigo:"4011558014759",descripcion :"FIL HU 9001 x Mann 1 Un",precio:"7766"},
{codigo:"15562",descripcion :"FIL L 1078 ACEITE Motorcraft 1 Un",precio:"393"},
{codigo:"15544",descripcion :"FIL L 12222 PUROLATOR ACEITE 1 Un",precio:"110"},
{codigo:"15408",descripcion :"FIL MANN AC HU 7005 X Aceite Un",precio:"16793"},
{codigo:"15411",descripcion :"FIL MANN AC W 914/28 Aceite Unidad Un",precio:"5773"},
{codigo:"15524",descripcion :"Fil Mann Aceite W 6020",precio:"1719"},
{codigo:"15502",descripcion :"Fil Mann Aceite W 712/95 Un",precio:"2038"},
{codigo:"15378",descripcion :"FIL PUROLATOR AC L 19213 Mann Unidad Un",precio:"119"},
{codigo:"16280",descripcion :"FIL PUROLATOR AC L10241 Mann 1 Un",precio:"108"},
{codigo:"15609",descripcion :"FIL W 6021 ACEITE Mann 1 Un",precio:"5026"},
{codigo:"4011558729509",descripcion :"FIL WIX AC W 712/52 Mann 1 Un",precio:"1769"},
{codigo:"4011558792404",descripcion :"FIL WIX AC WA 9140 Mann 1 Un",precio:"2237"},
{codigo:"5050026008875",descripcion :"FIL WIX AC WL7129 Mann 1 Un",precio:"804"},
{codigo:"5050026009278",descripcion :"FIL WIX AC WL7169 Mann 1 Un",precio:"1275"},
{codigo:"5050026350431",descripcion :"FIL WIX WL7429 Mann 1 Un",precio:"2190"},
{codigo:"5050026352442",descripcion :"FIL WIX WL7459 Mann 1 Un",precio:"331"},
{codigo:"765809969254",descripcion :"FILAC WIX WL10463A Mann 1 Un",precio:"1209"},
{codigo:"8876",descripcion :"FILTERO ACEITE 1420 Un",precio:"6390"},
{codigo:"18482",descripcion :"FILTRO AC 719/6X Mann",precio:"2764"},
{codigo:"15098",descripcion :"Filtro AC H 601/4 Mann",precio:"826"},
{codigo:"15093",descripcion :"Filtro AC H 947/1 Mann",precio:"3234"},
{codigo:"15114",descripcion :"Filtro AC HU 712/6 X Mann",precio:"6001"},
{codigo:"15145",descripcion :"Filtro AC HU 712/7 X Mann",precio:"3763"},
{codigo:"15088",descripcion :"Filtro AC HU 719/8 X Mann",precio:"3163"},
{codigo:"15097",descripcion :"Filtro AC HU 815/2 X Mann",precio:"4774"},
{codigo:"15124",descripcion :"Filtro AC HU 820 X Mann",precio:"4935"},
{codigo:"15085",descripcion :"Filtro AC HU 821 X Mann",precio:"3260"},
{codigo:"15115",descripcion :"Filtro AC W 1035 Mann",precio:"6961"},
{codigo:"15091",descripcion :"Filtro AC W 610/2 Mann",precio:"5192"},
{codigo:"15089",descripcion :"Filtro AC W 712/4 Mann",precio:"3540"},
{codigo:"15170",descripcion :"FILTRO AC W 719/45 Mann 1 Un",precio:"5614"},
{codigo:"15162",descripcion :"Filtro AC W 830/3 Mann",precio:"7723"},
{codigo:"15119",descripcion :"Filtro AC W 920/14 Mann",precio:"3359"},
{codigo:"15090",descripcion :"Filtro AC W 921/80 Mann",precio:"7453"},
{codigo:"15116",descripcion :"Filtro AC W 925/A Mann",precio:"3859"},
{codigo:"18497",descripcion :"FILTRO AC W 927/1 Mann",precio:"2280"},
{codigo:"15092",descripcion :"Filtro AC W 929/3 Mann",precio:"5000"},
{codigo:"15094",descripcion :"Filtro AC W 950/18 Mann",precio:"3456"},
{codigo:"18967",descripcion :"FILTRO AC W918/1 Mann Un",precio:"3784"},
{codigo:"18963",descripcion :"FILTRO AC W940/34 Mann",precio:"3412"},
{codigo:"9888",descripcion :"FILTRO ACEITE  87",precio:"4590"},
{codigo:"18455",descripcion :"Filtro aceite  AC H 1019 Mann",precio:"3871"},
{codigo:"18456",descripcion :"Filtro aceite  AC H 1038 Mann",precio:"2626"},
{codigo:"18457",descripcion :"Filtro aceite  AC H 1039/2 Mann",precio:"3352"},
{codigo:"18458",descripcion :"Filtro aceite  AC H 1059/1 Mann",precio:"9303"},
{codigo:"18459",descripcion :"Filtro aceite  AC H 187 Mann",precio:"2118,7"},
{codigo:"18460",descripcion :"Filtro aceite  AC H 199 Mann",precio:"109"},
{codigo:"18461",descripcion :"Filtro aceite  AC H 2014 Mann",precio:"9146"},
{codigo:"18462",descripcion :"Filtro aceite  AC H 614n Mann",precio:"6505"},
{codigo:"18464",descripcion :"Filtro aceite  AC H 720 Mann",precio:"1792"},
{codigo:"18465",descripcion :"Filtro aceite  AC H 76/1 Mann",precio:"98,5"},
{codigo:"18467",descripcion :"Filtro aceite  AC H 829/1 Mann",precio:"2536"},
{codigo:"18468",descripcion :"Filtro aceite  AC H 85 Mann",precio:"2402"},
{codigo:"18470",descripcion :"Filtro aceite  AC H 929 Mann",precio:"5460"},
{codigo:"18471",descripcion :"Filtro aceite  AC H 932/5 Mann",precio:"6069"},
{codigo:"18472",descripcion :"Filtro aceite  AC H 943/7 Mann",precio:"7099"},
{codigo:"18473",descripcion :"Filtro aceite  AC H 952 Mann",precio:"91,9"},
{codigo:"18474",descripcion :"Filtro aceite  AC H 973 Mann",precio:"5602"},
{codigo:"18475",descripcion :"Filtro aceite  AC HU 610 Mann",precio:"6690"},
{codigo:"18477",descripcion :"Filtro aceite  AC HU 611 Mann",precio:"2914"},
{codigo:"18476",descripcion :"Filtro aceite  AC HU 611/1 Mann",precio:"4448"},
{codigo:"18478",descripcion :"Filtro aceite  AC HU 612 Mann",precio:"2646"},
{codigo:"18479",descripcion :"Filtro aceite  AC HU 615/2 Mann",precio:"81"},
{codigo:"18481",descripcion :"Filtro aceite  AC HU 711 Mann",precio:"4523"},
{codigo:"18483",descripcion :"Filtro aceite  AC HU 715/4 Mann",precio:"6384"},
{codigo:"18490",descripcion :"Filtro aceite  AC HU 718 Mann",precio:"10569"},
{codigo:"18485",descripcion :"Filtro aceite  AC HU 718/1k Mann",precio:"2479"},
{codigo:"18486",descripcion :"Filtro aceite  AC HU 718/1n Mann",precio:"3186"},
{codigo:"18487",descripcion :"Filtro aceite  AC HU 718/1z Mann",precio:"4085"},
{codigo:"18488",descripcion :"Filtro aceite  AC HU 718/2 Mann",precio:"5084"},
{codigo:"18489",descripcion :"Filtro aceite  AC HU 718/5 Mann",precio:"7018"},
{codigo:"18491",descripcion :"Filtro aceite  AC HU 719/5 Mann",precio:"6240"},
{codigo:"18492",descripcion :"Filtro aceite  AC HU 719/7 Mann",precio:"4032"},
{codigo:"18493",descripcion :"Filtro aceite  AC HU 721 Mann",precio:"7471"},
{codigo:"18494",descripcion :"Filtro aceite  AC HU 721/2 Mann",precio:"3481"},
{codigo:"18495",descripcion :"Filtro aceite  AC HU 721/4 Mann",precio:"5701"},
{codigo:"18496",descripcion :"Filtro aceite  AC HU 722 Mann",precio:"4134"},
{codigo:"18499",descripcion :"Filtro aceite  AC HU 727/1 Mann",precio:"4757"},
{codigo:"18500",descripcion :"Filtro aceite  AC HU 818 Mann",precio:"5877"},
{codigo:"18501",descripcion :"Filtro aceite  AC HU 819 Mann",precio:"6972"},
{codigo:"18503",descripcion :"Filtro aceite  AC HU 842 Mann",precio:"8879"},
{codigo:"18504",descripcion :"Filtro aceite  AC HU 848/1 Mann",precio:"6604"},
{codigo:"18505",descripcion :"Filtro aceite  AC HU 921 Mann",precio:"4109"},
{codigo:"18506",descripcion :"Filtro aceite  AC HU 924/2 Mann",precio:"8974"},
{codigo:"18508",descripcion :"Filtro aceite  AC HU 925/4 Mann",precio:"4854"},
{codigo:"18509",descripcion :"Filtro aceite  AC HU 926/3 Mann",precio:"6513"},
{codigo:"18510",descripcion :"Filtro aceite  AC HU 930/3 Mann",precio:"5638"},
{codigo:"18513",descripcion :"Filtro aceite  AC HU 932/6 Mann",precio:"9897"},
{codigo:"18512",descripcion :"Filtro aceite  AC HU 932/6n Mann",precio:"9805"},
{codigo:"18514",descripcion :"Filtro aceite  AC HU 938/1 Mann",precio:"5244"},
{codigo:"18515",descripcion :"Filtro aceite  AC HU 938/4 Mann",precio:"72,5"},
{codigo:"18530",descripcion :"Filtro aceite  AC PF 1050/1n Mann",precio:"8171"},
{codigo:"18532",descripcion :"Filtro aceite  AC PF 1055/1 Mann",precio:"764"},
{codigo:"18531",descripcion :"Filtro aceite  AC PF 1055/1n Mann",precio:"899"},
{codigo:"18565",descripcion :"Filtro aceite  AC W 1026 Mann",precio:"684"},
{codigo:"18566",descripcion :"Filtro aceite  AC W 1114/80 Mann",precio:"11764"},
{codigo:"18567",descripcion :"Filtro aceite  AC W 1126 Mann",precio:"5076"},
{codigo:"18568",descripcion :"Filtro aceite  AC W 1126/4 Mann",precio:"4320"},
{codigo:"18571",descripcion :"Filtro aceite  AC W 610/1 Mann",precio:"4391"},
{codigo:"18573",descripcion :"Filtro aceite  AC W 610/4 Mann",precio:"2930"},
{codigo:"18575",descripcion :"Filtro aceite  AC W 610/82 Mann",precio:"45,5"},
{codigo:"18577",descripcion :"Filtro aceite  AC W 66 Mann",precio:"1624"},
{codigo:"18579",descripcion :"Filtro aceite  AC W 67/2 Mann",precio:"4164"},
{codigo:"18583",descripcion :"Filtro aceite  AC W 712 Mann",precio:"5083"},
{codigo:"18584",descripcion :"Filtro aceite  AC W 712/12 Mann",precio:"2225"},
{codigo:"18585",descripcion :"Filtro aceite  AC W 712/16 Mann",precio:"3703"},
{codigo:"18586",descripcion :"Filtro aceite  AC W 712/19 Mann",precio:"445"},
{codigo:"18587",descripcion :"Filtro aceite  AC W 712/2 Mann",precio:"39,7"},
{codigo:"18588",descripcion :"Filtro aceite  AC W 712/21 Mann",precio:"4821"},
{codigo:"18590",descripcion :"Filtro aceite  AC W 712/37 Mann",precio:"1902"},
{codigo:"18591",descripcion :"Filtro aceite  AC W 712/38 Mann",precio:"57"},
{codigo:"18592",descripcion :"Filtro aceite  AC W 712/41 Mann",precio:"3650"},
{codigo:"18593",descripcion :"Filtro aceite  AC W 712/43 Mann",precio:"1500"},
{codigo:"18594",descripcion :"Filtro aceite  AC W 712/47 Mann",precio:"3850"},
{codigo:"18596",descripcion :"Filtro aceite  AC W 712/6 Mann",precio:"5193"},
{codigo:"18597",descripcion :"Filtro aceite  AC W 712/73 Mann",precio:"1777"},
{codigo:"18598",descripcion :"Filtro aceite  AC W 712/8 Mann",precio:"664"},
{codigo:"18599",descripcion :"Filtro aceite  AC W 712/9 Mann",precio:"3844"},
{codigo:"18603",descripcion :"Filtro aceite  AC W 713/18 Mann",precio:"2756"},
{codigo:"18605",descripcion :"Filtro aceite  AC W 713/23 Mann",precio:"78,9"},
{codigo:"18606",descripcion :"Filtro aceite  AC W 713/4 Mann",precio:"1927"},
{codigo:"18607",descripcion :"Filtro aceite  AC W 713/9 Mann",precio:"4838"},
{codigo:"18608",descripcion :"Filtro aceite  AC W 714/2 Mann",precio:"3759"},
{codigo:"18609",descripcion :"Filtro aceite  AC W 714/4 Mann",precio:"3263"},
{codigo:"18610",descripcion :"Filtro aceite  AC W 717/2 Mann",precio:"3488"},
{codigo:"18611",descripcion :"Filtro aceite  AC W 718/3 Mann",precio:"237"},
{codigo:"18612",descripcion :"Filtro aceite  AC W 719/11 Mann",precio:"700"},
{codigo:"18613",descripcion :"Filtro aceite  AC W 719/12 Mann",precio:"3829"},
{codigo:"18614",descripcion :"Filtro aceite  AC W 719/13 Mann",precio:"4783"},
{codigo:"18615",descripcion :"Filtro aceite  AC W 719/14 Mann",precio:"5079"},
{codigo:"18616",descripcion :"Filtro aceite  AC W 719/15 Mann",precio:"48,9"},
{codigo:"18618",descripcion :"Filtro aceite  AC W 719/29 Mann",precio:"4514"},
{codigo:"18619",descripcion :"Filtro aceite  AC W 719/30 Mann",precio:"1827"},
{codigo:"18620",descripcion :"Filtro aceite  AC W 719/33 Mann",precio:"4438"},
{codigo:"18623",descripcion :"Filtro aceite  AC W 724/4 Mann",precio:"4129"},
{codigo:"18625",descripcion :"Filtro aceite  AC W 79 Mann",precio:"1936"},
{codigo:"18627",descripcion :"Filtro aceite  AC W 811/81 Mann",precio:"3786"},
{codigo:"18628",descripcion :"Filtro aceite  AC W 811/84 Mann",precio:"169,5"},
{codigo:"18629",descripcion :"Filtro aceite  AC W 811/85 Mann",precio:"84,6"},
{codigo:"18630",descripcion :"Filtro aceite  AC W 813/6 Mann",precio:"39,7"},
{codigo:"18631",descripcion :"Filtro aceite  AC W 815 Mann",precio:"600"},
{codigo:"18632",descripcion :"Filtro aceite  AC W 815/3 Mann",precio:"4712"},
{codigo:"18633",descripcion :"Filtro aceite  AC W 815/80 Mann",precio:"1760"},
{codigo:"18634",descripcion :"Filtro aceite  AC W 815/82 Mann",precio:"2218"},
{codigo:"18635",descripcion :"Filtro aceite  AC W 816/80 Mann",precio:"3222"},
{codigo:"18636",descripcion :"Filtro aceite  AC W 818/16 Mann",precio:"556"},
{codigo:"18637",descripcion :"Filtro aceite  AC W 818/4 Mann",precio:"74,2"},
{codigo:"18638",descripcion :"Filtro aceite  AC W 818/8 Mann",precio:"32,3"},
{codigo:"18639",descripcion :"Filtro aceite  AC W 818/82 Mann",precio:"4352"},
{codigo:"18640",descripcion :"Filtro aceite  AC W 818/84 Mann",precio:"78,6"},
{codigo:"18641",descripcion :"Filtro aceite  AC W 830/1 Mann",precio:"4160"},
{codigo:"18642",descripcion :"Filtro aceite  AC W 840 Mann",precio:"208,6"},
{codigo:"18643",descripcion :"Filtro aceite  AC W 910/1 Mann",precio:"2253"},
{codigo:"18644",descripcion :"Filtro aceite  AC W 914/13 Mann",precio:"2520"},
{codigo:"18645",descripcion :"Filtro aceite  AC W 914/24 Mann",precio:"104,5"},
{codigo:"18646",descripcion :"Filtro aceite  AC W 914/26 Mann",precio:"3811"},
{codigo:"18647",descripcion :"Filtro aceite  AC W 914/7 Mann",precio:"1405"},
{codigo:"18648",descripcion :"Filtro aceite  AC W 915/9 Mann",precio:"379"},
{codigo:"18649",descripcion :"Filtro aceite  AC W 917 Mann",precio:"3370"},
{codigo:"18650",descripcion :"Filtro aceite  AC W 917/1 Mann",precio:"4929"},
{codigo:"18651",descripcion :"Filtro aceite  AC W 920/11 Mann",precio:"3858"},
{codigo:"18652",descripcion :"Filtro aceite  AC W 920/16 Mann",precio:"81,7"},
{codigo:"18653",descripcion :"Filtro aceite  AC W 920/21 Mann",precio:"2100"},
{codigo:"18654",descripcion :"Filtro aceite  AC W 920/25 Mann",precio:"2051"},
{codigo:"18655",descripcion :"Filtro aceite  AC W 920/3 Mann",precio:"61,7"},
{codigo:"18656",descripcion :"Filtro aceite  AC W 920/31 Mann",precio:"3816"},
{codigo:"18657",descripcion :"Filtro aceite  AC W 920/32 Mann",precio:"3617"},
{codigo:"18658",descripcion :"Filtro aceite  AC W 920/34 Mann",precio:"3236"},
{codigo:"18659",descripcion :"Filtro aceite  AC W 920/38 Mann",precio:"5258"},
{codigo:"18660",descripcion :"Filtro aceite  AC W 920/41 Mann",precio:"556"},
{codigo:"18661",descripcion :"Filtro aceite  AC W 920/45 Mann",precio:"4046"},
{codigo:"18662",descripcion :"Filtro aceite  AC W 920/6 Mann",precio:"4812"},
{codigo:"18663",descripcion :"Filtro aceite  AC W 920/7 Mann",precio:"2765"},
{codigo:"18664",descripcion :"Filtro aceite  AC W 920/8 Mann",precio:"3483"},
{codigo:"18668",descripcion :"Filtro aceite  AC W 923 Mann",precio:"4471"},
{codigo:"18669",descripcion :"Filtro aceite  AC W 928/1 Mann",precio:"4493"},
{codigo:"18670",descripcion :"Filtro aceite  AC W 930/20 Mann",precio:"3029"},
{codigo:"18671",descripcion :"Filtro aceite  AC W 930/21 Mann",precio:"4651"},
{codigo:"18672",descripcion :"Filtro aceite  AC W 930/26 Mann",precio:"8279"},
{codigo:"18673",descripcion :"Filtro aceite  AC W 930/6 Mann",precio:"532"},
{codigo:"18674",descripcion :"Filtro aceite  AC W 932 Mann",precio:"3382"},
{codigo:"18675",descripcion :"Filtro aceite  AC W 932/81 Mann",precio:"360"},
{codigo:"18676",descripcion :"Filtro aceite  AC W 933/1 Mann",precio:"5361"},
{codigo:"18677",descripcion :"Filtro aceite  AC W 933/2 Mann",precio:"1022"},
{codigo:"18678",descripcion :"Filtro aceite  AC W 933/4 Mann",precio:"115,2"},
{codigo:"18679",descripcion :"Filtro aceite  AC W 933/80 Mann",precio:"142,4"},
{codigo:"18680",descripcion :"Filtro aceite  AC W 934 Mann",precio:"4289"},
{codigo:"18681",descripcion :"Filtro aceite  AC W 936/4 Mann",precio:"3716"},
{codigo:"18682",descripcion :"Filtro aceite  AC W 936/5 Mann",precio:"3537"},
{codigo:"18684",descripcion :"Filtro aceite  AC W 940/1 Mann",precio:"2384"},
{codigo:"18685",descripcion :"Filtro aceite  AC W 940/18 Mann",precio:"3708"},
{codigo:"18686",descripcion :"Filtro aceite  AC W 940/23 Mann",precio:"4088"},
{codigo:"18687",descripcion :"Filtro aceite  AC W 940/29 Mann",precio:"8216"},
{codigo:"18688",descripcion :"Filtro aceite  AC W 940/44 Mann",precio:"5103"},
{codigo:"18689",descripcion :"Filtro aceite  AC W 940/81 Mann",precio:"3508"},
{codigo:"18690",descripcion :"Filtro aceite  AC W 950/14 Mann",precio:"7351"},
{codigo:"18691",descripcion :"Filtro aceite  AC W 950/35 Mann",precio:"1174"},
{codigo:"18692",descripcion :"Filtro aceite  AC W 950/4 Mann",precio:"5879"},
{codigo:"18693",descripcion :"Filtro aceite  AC W 950/7 Mann",precio:"3692"},
{codigo:"18856",descripcion :"Filtro aceite  AC WP 1026 Mann",precio:"12531"},
{codigo:"18858",descripcion :"Filtro aceite  AC WP 1144 Mann",precio:"5986"},
{codigo:"18859",descripcion :"Filtro aceite  AC WP 713 Mann",precio:"4106"},
{codigo:"18860",descripcion :"Filtro aceite  AC WP 914/80 Mann",precio:"10430"},
{codigo:"18861",descripcion :"Filtro aceite  AC WP 920/80 Mann",precio:"8283"},
{codigo:"18862",descripcion :"Filtro aceite  AC WP 928/80 Mann",precio:"8274"},
{codigo:"18863",descripcion :"Filtro aceite  AC WP 928/81 Mann",precio:"7130"},
{codigo:"18864",descripcion :"Filtro aceite  AC WP 928/82 Mann",precio:"9235"},
{codigo:"18865",descripcion :"Filtro aceite  AC WP 928/83 Mann",precio:"12891"},
{codigo:"18866",descripcion :"Filtro aceite  AC WP 931 Mann",precio:"296"},
{codigo:"18867",descripcion :"Filtro aceite  AC WP 940/4 Mann",precio:"235,6"},
{codigo:"18868",descripcion :"Filtro aceite  AC ZR 700 Mann",precio:"14813"},
{codigo:"9800",descripcion :"FILTRO ACEITE 1--",precio:"270"},
{codigo:"9810",descripcion :"FILTRO ACEITE 10",precio:"675"},
{codigo:"9811",descripcion :"FILTRO ACEITE 11",precio:"720"},
{codigo:"8861",descripcion :"FILTRO ACEITE 1120 Unidad Un",precio:"5040"},
{codigo:"8862",descripcion :"FILTRO ACEITE 1140 Un",precio:"5130"},
{codigo:"8863",descripcion :"FILTRO ACEITE 1160 Unidad Un",precio:"5220"},
{codigo:"8864",descripcion :"FILTRO ACEITE 1180 Un",precio:"5310"},
{codigo:"9812",descripcion :"FILTRO ACEITE 12",precio:"765"},
{codigo:"8865",descripcion :"FILTRO ACEITE 1200 Un",precio:"5400"},
{codigo:"8866",descripcion :"FILTRO ACEITE 1220 Un",precio:"5490"},
{codigo:"8867",descripcion :"FILTRO ACEITE 1240 Un",precio:"5580"},
{codigo:"8868",descripcion :"FILTRO ACEITE 1260 Un",precio:"5670"},
{codigo:"8869",descripcion :"FILTRO ACEITE 1280 Un",precio:"5760"},
{codigo:"9813",descripcion :"FILTRO ACEITE 13",precio:"810"},
{codigo:"8870",descripcion :"FILTRO ACEITE 1300 Un",precio:"5850"},
{codigo:"8871",descripcion :"FILTRO ACEITE 1320 Un",precio:"5940"},
{codigo:"8872",descripcion :"FILTRO ACEITE 1340 Un",precio:"6030"},
{codigo:"8873",descripcion :"FILTRO ACEITE 1360 Unidad Lt",precio:"6120"},
{codigo:"8874",descripcion :"FILTRO ACEITE 1380 Un",precio:"6210"},
{codigo:"9814",descripcion :"FILTRO ACEITE 14",precio:"855"},
{codigo:"8875",descripcion :"FILTRO ACEITE 1400 Un",precio:"6300"},
{codigo:"8877",descripcion :"FILTRO ACEITE 1440 Un",precio:"6480"},
{codigo:"8878",descripcion :"FILTRO ACEITE 1460 Un",precio:"6570"},
{codigo:"8879",descripcion :"FILTRO ACEITE 1480 Un",precio:"6660"},
{codigo:"9815",descripcion :"FILTRO ACEITE 15",precio:"900"},
{codigo:"8880",descripcion :"FILTRO ACEITE 1500 Un",precio:"6750"},
{codigo:"9816",descripcion :"FILTRO ACEITE 16",precio:"945"},
{codigo:"9817",descripcion :"FILTRO ACEITE 17",precio:"990"},
{codigo:"9818",descripcion :"FILTRO ACEITE 18",precio:"1035"},
{codigo:"9819",descripcion :"FILTRO ACEITE 19",precio:"1080"},
{codigo:"9801",descripcion :"FILTRO ACEITE 2",precio:"315"},
{codigo:"9820",descripcion :"FILTRO ACEITE 20",precio:"1125"},
{codigo:"9821",descripcion :"FILTRO ACEITE 21",precio:"1170"},
{codigo:"9823",descripcion :"FILTRO ACEITE 22",precio:"1215"},
{codigo:"9824",descripcion :"FILTRO ACEITE 23",precio:"1260"},
{codigo:"9825",descripcion :"FILTRO ACEITE 24",precio:"1305"},
{codigo:"9826",descripcion :"FILTRO ACEITE 25",precio:"1350"},
{codigo:"9827",descripcion :"FILTRO ACEITE 26",precio:"1395"},
{codigo:"9828",descripcion :"FILTRO ACEITE 27",precio:"1440"},
{codigo:"9829",descripcion :"FILTRO ACEITE 28",precio:"1485"},
{codigo:"9830",descripcion :"FILTRO ACEITE 29",precio:"1530"},
{codigo:"9802",descripcion :"FILTRO ACEITE 3",precio:"360"},
{codigo:"9831",descripcion :"FILTRO ACEITE 30",precio:"1575"},
{codigo:"9832",descripcion :"FILTRO ACEITE 31",precio:"1620"},
{codigo:"9833",descripcion :"FILTRO ACEITE 32",precio:"1665"},
{codigo:"9834",descripcion :"FILTRO ACEITE 33",precio:"1710"},
{codigo:"9835",descripcion :"FILTRO ACEITE 34",precio:"1755"},
{codigo:"9836",descripcion :"FILTRO ACEITE 35",precio:"1800"},
{codigo:"9837",descripcion :"FILTRO ACEITE 36",precio:"1845"},
{codigo:"9838",descripcion :"FILTRO ACEITE 37",precio:"1890"},
{codigo:"9839",descripcion :"FILTRO ACEITE 38",precio:"1935"},
{codigo:"9840",descripcion :"FILTRO ACEITE 39",precio:"1980"},
{codigo:"9803",descripcion :"FILTRO ACEITE 4",precio:"405"},
{codigo:"9841",descripcion :"FILTRO ACEITE 40",precio:"2025"},
{codigo:"9842",descripcion :"FILTRO ACEITE 41",precio:"2070"},
{codigo:"9843",descripcion :"FILTRO ACEITE 42",precio:"2115"},
{codigo:"9845",descripcion :"FILTRO ACEITE 44",precio:"2160"},
{codigo:"9846",descripcion :"FILTRO ACEITE 45",precio:"2205"},
{codigo:"9847",descripcion :"FILTRO ACEITE 46",precio:"2250"},
{codigo:"9848",descripcion :"FILTRO ACEITE 47",precio:"2295"},
{codigo:"9849",descripcion :"FILTRO ACEITE 48",precio:"2340"},
{codigo:"9850",descripcion :"FILTRO ACEITE 49",precio:"2385"},
{codigo:"9804",descripcion :"FILTRO ACEITE 5",precio:"450"},
{codigo:"9851",descripcion :"FILTRO ACEITE 50",precio:"2430"},
{codigo:"9852",descripcion :"FILTRO ACEITE 51",precio:"2475"},
{codigo:"765809513488",descripcion :"Filtro aceite 51348 Wix Mann 1 Un",precio:"238"},
{codigo:"9853",descripcion :"FILTRO ACEITE 52",precio:"2520"},
{codigo:"9854",descripcion :"FILTRO ACEITE 53",precio:"2565"},
{codigo:"9855",descripcion :"FILTRO ACEITE 54",precio:"2610"},
{codigo:"9856",descripcion :"FILTRO ACEITE 55",precio:"2655"},
{codigo:"9857",descripcion :"FILTRO ACEITE 56",precio:"2700"},
{codigo:"9858",descripcion :"FILTRO ACEITE 57",precio:"2745"},
{codigo:"9859",descripcion :"FILTRO ACEITE 58",precio:"2790"},
{codigo:"9860",descripcion :"FILTRO ACEITE 59",precio:"2835"},
{codigo:"9805",descripcion :"FILTRO ACEITE 6",precio:"495"},
{codigo:"9861",descripcion :"FILTRO ACEITE 60",precio:"2880"},
{codigo:"9862",descripcion :"FILTRO ACEITE 61",precio:"2925"},
{codigo:"9863",descripcion :"FILTRO ACEITE 62",precio:"2970"},
{codigo:"9864",descripcion :"FILTRO ACEITE 63",precio:"3015"},
{codigo:"9865",descripcion :"FILTRO ACEITE 64",precio:"3060"},
{codigo:"9866",descripcion :"FILTRO ACEITE 65",precio:"3105"},
{codigo:"9867",descripcion :"FILTRO ACEITE 66",precio:"3150"},
{codigo:"9868",descripcion :"FILTRO ACEITE 67",precio:"3195"},
{codigo:"9869",descripcion :"FILTRO ACEITE 68",precio:"3240"},
{codigo:"9870",descripcion :"FILTRO ACEITE 69",precio:"3285"},
{codigo:"9807",descripcion :"FILTRO ACEITE 7",precio:"540"},
{codigo:"9871",descripcion :"FILTRO ACEITE 70",precio:"3330"},
{codigo:"9872",descripcion :"FILTRO ACEITE 71",precio:"3375"},
{codigo:"9873",descripcion :"FILTRO ACEITE 72",precio:"3420"},
{codigo:"9874",descripcion :"FILTRO ACEITE 73",precio:"3465"},
{codigo:"9875",descripcion :"FILTRO ACEITE 74",precio:"3510"},
{codigo:"9876",descripcion :"FILTRO ACEITE 75",precio:"3555"},
{codigo:"9877",descripcion :"FILTRO ACEITE 76",precio:"3600"},
{codigo:"9878",descripcion :"FILTRO ACEITE 77",precio:"3690"},
{codigo:"9879",descripcion :"FILTRO ACEITE 78",precio:"3780"},
{codigo:"9880",descripcion :"FILTRO ACEITE 79",precio:"3870"},
{codigo:"9808",descripcion :"FILTRO ACEITE 8",precio:"585"},
{codigo:"9881",descripcion :"FILTRO ACEITE 80",precio:"3960"},
{codigo:"9882",descripcion :"FILTRO ACEITE 81",precio:"4050"},
{codigo:"9883",descripcion :"FILTRO ACEITE 82",precio:"4140"},
{codigo:"9884",descripcion :"FILTRO ACEITE 83",precio:"4230"},
{codigo:"9885",descripcion :"FILTRO ACEITE 84",precio:"4320"},
{codigo:"9886",descripcion :"FILTRO ACEITE 85",precio:"4410"},
{codigo:"9887",descripcion :"FILTRO ACEITE 86",precio:"4500"},
{codigo:"9889",descripcion :"FILTRO ACEITE 88",precio:"4680"},
{codigo:"9890",descripcion :"FILTRO ACEITE 89",precio:"4770"},
{codigo:"9809",descripcion :"FILTRO ACEITE 9",precio:"630"},
{codigo:"9891",descripcion :"FILTRO ACEITE 90",precio:"4860"},
{codigo:"9892",descripcion :"FILTRO ACEITE 91",precio:"4950"},
{codigo:"18463",descripcion :"Filtro aceite AC H 614 x Mann Lt",precio:"5613"},
{codigo:"18469",descripcion :"Filtro aceite AC H 918/7 Mann",precio:"44,9"},
{codigo:"4011558073442",descripcion :"Filtro aceite AC HU 10 002 z Mann 1 Un",precio:"4367"},
{codigo:"18956",descripcion :"FILTRO ACEITE AC HU 932/8X Mann",precio:"3233"},
{codigo:"19731",descripcion :"Filtro aceite AC PH-3569 Fram",precio:"621"},
{codigo:"19750",descripcion :"Filtro aceite AC PH-4553 Fram Lt",precio:"1091"},
{codigo:"19751",descripcion :"Filtro aceite AC PH-4558 Fram",precio:"737"},
{codigo:"19755",descripcion :"Filtro aceite AC PH-4703 Fram",precio:"401"},
{codigo:"19766",descripcion :"Filtro aceite AC PH-49 A Fram 1 Un",precio:"950"},
{codigo:"19770",descripcion :"Filtro aceite AC PH-4967 Fram Un",precio:"95"},
{codigo:"19789",descripcion :"Filtro aceite AC PH-5443 Fram",precio:"43,9"},
{codigo:"19790",descripcion :"Filtro aceite AC PH-5511 Fram",precio:"1085"},
{codigo:"18580",descripcion :"Filtro aceite AC W 68/3 Mann Lt",precio:"412"},
{codigo:"16237",descripcion :"Filtro aceite C 22 009 Mann 1 Un",precio:"5698"},
{codigo:"11928",descripcion :"Filtro aceite CH 2801 Fram 1 Un",precio:"374"},
{codigo:"19506",descripcion :"Filtro aceite CH 2927 A Fram 1 Un",precio:"550"},
{codigo:"19508",descripcion :"Filtro aceite CH 2962 Fram 1 Un",precio:"970"},
{codigo:"19509",descripcion :"Filtro aceite CH 2963 Fram 1 Un",precio:"980"},
{codigo:"19518",descripcion :"Filtro aceite CH 5262 Fram 1 Un",precio:"500"},
{codigo:"19530",descripcion :"Filtro aceite CH 803 APL Fram 1 Un",precio:"300"},
{codigo:"16428",descripcion :"Filtro aceite CS/12054 Motorcraft 1 Un",precio:"1642"},
{codigo:"4011558067434",descripcion :"Filtro aceite HU 6014 Z Mann 1 Un",precio:"7844"},
{codigo:"15367",descripcion :"Filtro aceite HU 612/2x Mann 1 Un",precio:"1784"},
{codigo:"15407",descripcion :"Filtro aceite HU 7008 Z Mann 1 Un",precio:"2980"},
{codigo:"4011558056841",descripcion :"Filtro aceite HU 7012 z Mann 1 Un",precio:"3884"},
{codigo:"4011558067465",descripcion :"Filtro aceite HU 7033 z Mann 1 Un",precio:"4061"},
{codigo:"15067",descripcion :"Filtro aceite HU 711/51 x Mann 1 Un",precio:"1717"},
{codigo:"4011558294304",descripcion :"Filtro aceite HU 715/5 x Mann 1 Un",precio:"9598"},
{codigo:"18484",descripcion :"Filtro aceite HU 716/2 x Mann 1 Un",precio:"1885"},
{codigo:"15075",descripcion :"FILTRO ACEITE HU 719/3X Mann",precio:"7543"},
{codigo:"18498",descripcion :"Filtro aceite HU 726/2 Mann 1 Un",precio:"2984"},
{codigo:"15058",descripcion :"FILTRO ACEITE HU 831X Mann",precio:"11078"},
{codigo:"15078",descripcion :"Filtro Aceite HU 920X Mann",precio:"6423"},
{codigo:"15015",descripcion :"FILTRO ACEITE HU 923X Mann",precio:"3685"},
{codigo:"18511",descripcion :"Filtro aceite HU 931/5 x Mann 1 Un",precio:"3319"},
{codigo:"18960",descripcion :"Filtro aceite HU 945/2 x Mann 1 Un",precio:"3800"},
{codigo:"18516",descripcion :"Filtro aceite HU 951 Mann 1 Un",precio:"4546"},
{codigo:"15077",descripcion :"Filtro Aceite HU612/1X Mann",precio:"7105"},
{codigo:"18989",descripcion :"FILTRO ACEITE L 1064 PUROLATOR",precio:"93"},
{codigo:"18990",descripcion :"FILTRO ACEITE L 1065 PUROLATOR",precio:"104"},
{codigo:"18991",descripcion :"FILTRO ACEITE L 1066 PUROLATOR",precio:"112"},
{codigo:"18992",descripcion :"FILTRO ACEITE L 1067 PUROLATOR",precio:"117"},
{codigo:"18895",descripcion :"FILTRO ACEITE L 1069 PUROLATOR",precio:"49,6"},
{codigo:"18896",descripcion :"FILTRO ACEITE L 1070 PUROLATOR",precio:"392"},
{codigo:"18996",descripcion :"FILTRO ACEITE L 1092 PUROLATOR",precio:"119"},
{codigo:"18997",descripcion :"FILTRO ACEITE L 1093 PUROLATOR",precio:"140"},
{codigo:"18998",descripcion :"FILTRO ACEITE L 1094 PUROLATOR",precio:"147"},
{codigo:"18999",descripcion :"FILTRO ACEITE L 1100 PUROLATOR",precio:"111"},
{codigo:"18885",descripcion :"FILTRO ACEITE L 14459 PUROLATOR",precio:"126"},
{codigo:"18993",descripcion :"FILTRO ACEITE L 14619 PUROLATOR",precio:"118"},
{codigo:"18994",descripcion :"FILTRO ACEITE L 14670 PUROLATOR",precio:"134"},
{codigo:"18950",descripcion :"FILTRO ACEITE L 20252 PUROLATOR",precio:"106"},
{codigo:"18887",descripcion :"FILTRO ACEITE L 25195 PUROLATOR",precio:"200"},
{codigo:"18995",descripcion :"FILTRO ACEITE L 30001 PUROLATOR",precio:"132"},
{codigo:"18888",descripcion :"FILTRO ACEITE L 34631 PUROLATOR",precio:"158"},
{codigo:"11011",descripcion :"Filtro aceite PH 2811 Fram 1 Un",precio:"320"},
{codigo:"19714",descripcion :"Filtro aceite PH 2883 Fram 1 Un",precio:"985"},
{codigo:"19758",descripcion :"Filtro aceite PH 4847 A Fram 1 Un",precio:"800"},
{codigo:"19774",descripcion :"Filtro aceite PH 5103 Fram 1 Un",precio:"950"},
{codigo:"19820",descripcion :"Filtro aceite PH 7136 Fram 1 Un",precio:"540"},
{codigo:"11941",descripcion :"Filtro aceite PH/4701 Motorcraft 1 Un",precio:"1119"},
{codigo:"18570",descripcion :"Filtro aceite W 1323 Mann 1 Un",precio:"6756"},
{codigo:"18572",descripcion :"Filtro aceite W 610/3 Mann 1 Un",precio:"1501"},
{codigo:"18578",descripcion :"Filtro aceite W 67/1 Mann 1 Un",precio:"1882"},
{codigo:"15084",descripcion :"Filtro aceite W 68 Mann 1 Un",precio:"1807"},
{codigo:"18581",descripcion :"Filtro aceite W 68/80 Mann 1 Un",precio:"2321"},
{codigo:"4011558758004",descripcion :"Filtro aceite W 7003 Mann 1 Un",precio:"1909"},
{codigo:"15400",descripcion :"Filtro aceite W 7008 Mann 1 Un",precio:"1841"},
{codigo:"4011558044220",descripcion :"Filtro aceite W 7015 Mann 1 Un",precio:"2900"},
{codigo:"15507",descripcion :"Filtro aceite W 7030 Mann 1 Un",precio:"2868"},
{codigo:"18589",descripcion :"Filtro aceite W 712/22 Mann 1 Un",precio:"545"},
{codigo:"18595",descripcion :"Filtro aceite W 712/53 Mann 1 Un",precio:"1392"},
{codigo:"15076",descripcion :"FILTRO ACEITE W 712/82 Mann",precio:"3575"},
{codigo:"15143",descripcion :"Filtro aceite W 712/83 Mann 1 Un",precio:"1794"},
{codigo:"18601",descripcion :"Filtro aceite W 713/15 Mann 1 Un",precio:"3729"},
{codigo:"18602",descripcion :"Filtro aceite W 713/16 Mann 1 Un",precio:"2131"},
{codigo:"18604",descripcion :"Filtro aceite W 713/19 Mann 1 Un",precio:"2289"},
{codigo:"18617",descripcion :"Filtro aceite W 719/27 Mann 1 Un",precio:"1954"},
{codigo:"18622",descripcion :"Filtro aceite W 719/5 Mann 1 Un",precio:"1640"},
{codigo:"11522",descripcion :"Filtro aceite W 75/2 Mann 1 Un",precio:"282"},
{codigo:"18624",descripcion :"Filtro aceite W 75/3 Mann 1 Un",precio:"1388"},
{codigo:"4011558024178",descripcion :"Filtro aceite W 8017 Mann 1 Un",precio:"2021"},
{codigo:"4011558080112",descripcion :"Filtro aceite W 9069 Mann 1 Un",precio:"10514"},
{codigo:"15357",descripcion :"Filtro aceite W 920/48 Mann 1 Un",precio:"5131"},
{codigo:"18683",descripcion :"Filtro aceite W 940 Mann 1 Un",precio:"2955"},
{codigo:"18940",descripcion :"Filtro aceite W 950/26 Mann",precio:"4475"},
{codigo:"18694",descripcion :"Filtro aceite W 962 Mann 1 Un",precio:"2927"},
{codigo:"15068",descripcion :"FILTRO ACEITE W711/80 Mann",precio:"162"},
{codigo:"15056",descripcion :"FILTRO ACEITE W719/50 Mann",precio:"2443"},
{codigo:"15066",descripcion :"FILTRO ACEITE W811/80 Mann",precio:"2537"},
{codigo:"7893390600409",descripcion :"Filtro aceite WA 923 Mann 1 Un",precio:"3544"},
{codigo:"16311",descripcion :"Filtro aceite WL56000-20 WIX Mann 1 Un",precio:"170"},
{codigo:"16242",descripcion :"Filtro aceite WL57000-18 Wix Mann 1 Un",precio:"135"},
{codigo:"4011558703806",descripcion :"Filtro aceite WL7070 Wix Mann 1 Un",precio:"1398"},
{codigo:"4011558725907",descripcion :"Filtro aceite WL7074 Wix Mann 1 Un",precio:"1118"},
{codigo:"5050026008929",descripcion :"Filtro aceite WL7134 WIX Mann 1 Un",precio:"917"},
{codigo:"16317",descripcion :"Filtro aceite WL7203 Wix Mann 1 Un",precio:"1316"},
{codigo:"18857",descripcion :"Filtro aceite WP 1045 Mann 1 Un",precio:"2672"},
{codigo:"4011558027797",descripcion :"Filtro aceite WP 12 121 Mann 1 Un",precio:"16212"},
{codigo:"15168",descripcion :"Filtro aceite WP 12 300 Mann 1 Un",precio:"11456"},
{codigo:"15063",descripcion :"FILTRO AIRE W75/5 Mann",precio:"3302"},
{codigo:"15099",descripcion :"Filtro HAB CU 3567 Mann",precio:"2803"},
{codigo:"14984",descripcion :"Filtro Mann Aceite 615/13x Un",precio:"167"},
{codigo:"15517",descripcion :"Filtro Mann Aceite HU 6002 z",precio:"610"},
{codigo:"15521",descripcion :"Filtro Mann Aceite HU 6006 z Un",precio:"1757"},
{codigo:"14993",descripcion :"Filtro Mann Aceite HU 6007x Un",precio:"5533"},
{codigo:"14992",descripcion :"Filtro Mann Aceite HU 615/13x Un",precio:"167"},
{codigo:"15503",descripcion :"Filtro Mann Aceite HU 618 Un",precio:"5289"},
{codigo:"15514",descripcion :"Filtro Mann Aceite HU 7010z Un",precio:"3185"},
{codigo:"15470",descripcion :"Filtro Mann Aceite HU 712/11x Un",precio:"7932"},
{codigo:"14998",descripcion :"Filtro Mann Aceite HU 822/5x Un",precio:"196"},
{codigo:"14989",descripcion :"Filtro Mann Aceite HU 925/4y Un",precio:"159"},
{codigo:"15469",descripcion :"Filtro Mann Aceite L 1056 Un",precio:"95,3"},
{codigo:"14995",descripcion :"Filtro Mann Aceite L1099 Un",precio:"84"},
{codigo:"15498",descripcion :"Filtro Mann Aceite W 610 Un",precio:"85"},
{codigo:"15508",descripcion :"Filtro Mann Aceite W 610/7",precio:"3067"},
{codigo:"15497",descripcion :"Filtro Mann Aceite W 712/94 Un",precio:"6839"},
{codigo:"16470",descripcion :"KIT AMAROK 2.0 TDI- WA48110 + WL7476 + W",precio:"3966"},
{codigo:"7790184753375",descripcion :"Kit Mann Hilux 2.5TD / 3.0 TDI Mann 1 Un",precio:"1890"},
{codigo:"7790184753283",descripcion :"Kit Wix Gol Trend 1.6 Mann 1 Un",precio:"870"},
{codigo:"7790184753320",descripcion :"Kit Wix Hilux 2.5TD / 3.0 TDI Mann 1 Un",precio:"1434"},
{codigo:"16455",descripcion :"Kit YAMAHA AIRE/ACEITE Mann 1 Un",precio:"9838"},
{codigo:"7893390209695",descripcion :"FIL AA WP2094 Mann 1 Un",precio:"1816"},
{codigo:"5050026349299",descripcion :"FIL AC WL7422 Mann 1 Un",precio:"1590"},
{codigo:"15595",descripcion :"FIL AI 032129620B VW 1 Un",precio:"276"},
{codigo:"15596",descripcion :"FIL AI 058133843 VW 1 Un",precio:"367"},
{codigo:"15597",descripcion :"FIL AI 06F133843A VW 1 Un",precio:"564"},
{codigo:"15598",descripcion :"FIL AI 07K129620 VW 1 Un",precio:"514"},
{codigo:"16256",descripcion :"FIL AI 1C 22 034 Mann 1 Un",precio:"4241"},
{codigo:"15599",descripcion :"FIL AI 1F0129620 VW 1 Un",precio:"681"},
{codigo:"15600",descripcion :"FIL AI 1J0129620A VW",precio:"434"},
{codigo:"15633",descripcion :"FIL AI 1J0819644A VW 1 Un",precio:"496"},
{codigo:"15601",descripcion :"FIL AI 1K0129620 VV 1 Un",precio:"749"},
{codigo:"15634",descripcion :"FIL AI 1K0819644B VW 1 Un",precio:"338"},
{codigo:"15635",descripcion :"FIL AI 1K1819653B VW 1 Un",precio:"578"},
{codigo:"4011558016494",descripcion :"FIL AI 22 007 Mann 1 Un",precio:"7333"},
{codigo:"15603",descripcion :"FIL AI 2H0129620A VW",precio:"572"},
{codigo:"15604",descripcion :"FIL AI 377129620 VW 1 Un",precio:"243"},
{codigo:"15605",descripcion :"FIL AI 377129620A VW 1 Un",precio:"345"},
{codigo:"15606",descripcion :"FIL AI 377129620E VW 1 Un",precio:"258"},
{codigo:"15636",descripcion :"FIL AI 377819638 VW 1 Un",precio:"278"},
{codigo:"15793",descripcion :"FIL AI 46461 Mann 1 Un",precio:"1972"},
{codigo:"15637",descripcion :"FIL AI 6R0820367 VW 1 Un",precio:"278"},
{codigo:"15638",descripcion :"FIL AI 7H0819631 VW 1 Un",precio:"373"},
{codigo:"15639",descripcion :"FIL AI 7H0819631A VW 1 Un",precio:"625"},
{codigo:"15607",descripcion :"FIL AI 7L0129620 VW 1 Un",precio:"954"},
{codigo:"15611",descripcion :"FIL AI 7L0129620A VW 1 Un",precio:"487"},
{codigo:"15612",descripcion :"FIL AI 7M3129620 VW 1 Un",precio:"498"},
{codigo:"15640",descripcion :"FIL AI 7M3819644A VW 1 Un",precio:"594"},
{codigo:"16315",descripcion :"FIL AI A1167 PUROLATOR Mann 1 Un",precio:"345"},
{codigo:"16243",descripcion :"FIL AI A1745 Mann 1 Un",precio:"189"},
{codigo:"15431",descripcion :"FIL AI A45780 Motorcraft Un",precio:"382"},
{codigo:"15415",descripcion :"FIL AI C 1145/6 Mann Unidad Un",precio:"5770"},
{codigo:"15401",descripcion :"FIL AI C 14 005 Mann Un",precio:"7398"},
{codigo:"4011558026349",descripcion :"FIL AI C 15 007 Mann 1 Un",precio:"6809"},
{codigo:"15421",descripcion :"FIL AI C 15 143/1 Mann Un",precio:"13569"},
{codigo:"4011558061852",descripcion :"FIL AI C 16 010/1 Mann 1 Un",precio:"4625"},
{codigo:"4011558084448",descripcion :"FIL AI C 16 012 Mann 1 Un",precio:"7179"},
{codigo:"16249",descripcion :"FIL AI C 16 114 x Mann 1 Un",precio:"6346"},
{codigo:"4011558043292",descripcion :"FIL AI C 17 008 Mann 1 Un",precio:"3098"},
{codigo:"4011558071035",descripcion :"FIL AI C 17 010 Mann 1 Un",precio:"8228"},
{codigo:"4011558073862",descripcion :"FIL AI C 17 012/1 Mann 1 Un",precio:"5981"},
{codigo:"4011558071127",descripcion :"FIL AI C 17 013 Mann 1 Un",precio:"6614"},
{codigo:"16418",descripcion :"FIL AI C 17 021 Mann 1 Un",precio:"1877"},
{codigo:"4011558352998",descripcion :"FIL AI C 17 021/3 Mann 1 Un",precio:"2385"},
{codigo:"4011558389208",descripcion :"FIL AI C 17 237 Mann 1 Un",precio:"8858"},
{codigo:"4011558805135",descripcion :"FIL AI C 17 308/1 Mann 1 Un",precio:"7374"},
{codigo:"4011558015688",descripcion :"FIL AI C 17 337/2 Mann 1 Un",precio:"17371"},
{codigo:"4011558077648",descripcion :"FIL AI C 18 103 Mann 1 Un",precio:"2030"},
{codigo:"16274",descripcion :"FIL AI C 18 142 Mann 1 Un",precio:"899"},
{codigo:"15395",descripcion :"FIL AI C 18 450/1 Mann Unidad Un",precio:"10566"},
{codigo:"15417",descripcion :"FIL AI C 18114 Mann Unidad Un",precio:"14328"},
{codigo:"15359",descripcion :"FIL AI C 20 0002 Motorcraft Un",precio:"171"},
{codigo:"4011558129606",descripcion :"FIL AI C 20 325/2 Mann 1 Un",precio:"8914"},
{codigo:"16258",descripcion :"FIL AI C 2029 Mann 1 Un",precio:"5791"},
{codigo:"15361",descripcion :"FIL AI C 2030 Mann Unidad Un",precio:"6925"},
{codigo:"4011558041311",descripcion :"FIL AI C 21 001 Mann 1 Un",precio:"5851"},
{codigo:"7893390201873",descripcion :"FIL AI C 21 367 Mann 1 Un",precio:"17055"},
{codigo:"4011558048525",descripcion :"FIL AI C 22 018 Mann 1 Un",precio:"5698"},
{codigo:"4011558082673",descripcion :"FIL AI C 22 031 Mann 1 Un",precio:"820"},
{codigo:"4011558340506",descripcion :"FIL AI C 22 031/1 Mann 1 Un",precio:"3475"},
{codigo:"4011558073350",descripcion :"FIL AI C 22 035 Mann 1 Un",precio:"4158"},
{codigo:"16307",descripcion :"FIL AI C 2212 Mann 1 Un",precio:"4260"},
{codigo:"15423",descripcion :"FIL AI C 2214 Mann Un",precio:"3862"},
{codigo:"4011558350208",descripcion :"FIL AI C 2287 Mann 1 Un",precio:"7545"},
{codigo:"4011558342371",descripcion :"FIL AI C 23 023 Mann 1 Un",precio:"1134"},
{codigo:"16268",descripcion :"FIL AI C 23 440/1 Mann 1 Un",precio:"13120"},
{codigo:"4011558383404",descripcion :"FIL AI C 2330 Mann 1 Un",precio:"4882"},
{codigo:"15643",descripcion :"FIL AI C 24 025 Mann 1 Un",precio:"8073"},
{codigo:"15396",descripcion :"FIL AI C 24 100 Mann Unidad Un",precio:"3086"},
{codigo:"4011558055240",descripcion :"FIL AI C 24 567 Mann 1 Un",precio:"3303"},
{codigo:"4011558338381",descripcion :"FIL AI C 24 700 Mann",precio:"2925"},
{codigo:"4011558226107",descripcion :"FIL AI C 24 745/1 Mann 1 Un",precio:"17429"},
{codigo:"4011558054946",descripcion :"FIL AI C 25 654 Mann 1 Un",precio:"2467"},
{codigo:"15416",descripcion :"FIL AI C 26 003 Mann Unidad Un",precio:"8533"},
{codigo:"4011558026868",descripcion :"FIL AI C 26 013 Mann 1 Un",precio:"2879"},
{codigo:"16253",descripcion :"FIL AI C 26 032 Mann 1 Un",precio:"6485"},
{codigo:"4011558062484",descripcion :"FIL AI C 26 033 Mann 1 Un",precio:"4995"},
{codigo:"15352",descripcion :"FIL AI C 26 106 Mann Unidad Un",precio:"5099"},
{codigo:"4011558086305",descripcion :"FIL AI C 26 135 Mann 1 Un",precio:"2592"},
{codigo:"15039",descripcion :"FIL AI C 2620 Mann",precio:"781"},
{codigo:"7893390204041",descripcion :"FIL AI C 2620/1 Mann 1 Un",precio:"4890"},
{codigo:"4011558380205",descripcion :"FIL AI C 2672/1 Mann 1 Un",precio:"2778"},
{codigo:"16419",descripcion :"FIL AI C 27 002 Mann 1 Un",precio:"5561"},
{codigo:"4011558042363",descripcion :"FIL AI C 27 026 Mann 1 Un",precio:"9443"},
{codigo:"16252",descripcion :"FIL AI C 27 030 Mann 1 Un",precio:"3341"},
{codigo:"4011558802431",descripcion :"FIL AI C 27 063 Ypf 1 Un",precio:"3513"},
{codigo:"15391",descripcion :"FIL AI C 27 107 Mann Unidad Un",precio:"5505"},
{codigo:"16293",descripcion :"FIL AI C 27 125 Mann 1 Un",precio:"6333"},
{codigo:"4011558416409",descripcion :"FIL AI C 2716 Mann 1 Un",precio:"3415"},
{codigo:"4011558811693",descripcion :"FIL AI C 2716/1 Mann 1 Un",precio:"7252"},
{codigo:"15428",descripcion :"FIL AI C 2733 Mann Un",precio:"3073"},
{codigo:"4011558039066",descripcion :"FIL AI C 28 004 Mann 1 Un",precio:"13098"},
{codigo:"16232",descripcion :"FIL AI C 28 100 Mann 1 Un",precio:"4408"},
{codigo:"4011558383909",descripcion :"FIL AI C 28 125 Mann 1 Un",precio:"2878"},
{codigo:"4011558007508",descripcion :"FIL AI C 28 160/1 Mann 1 Un",precio:"4538"},
{codigo:"15654",descripcion :"FIL AI C 29 005 Mann 1 Un",precio:"342"},
{codigo:"4011558038588",descripcion :"FIL AI C 29 019 Mann 1 Un",precio:"2926"},
{codigo:"15368",descripcion :"FIL AI C 29 168 Mann Unidad Un",precio:"6843"},
{codigo:"15650",descripcion :"FIL AI C 2987/1 Mann 1 Un",precio:"3798"},
{codigo:"4011558035082",descripcion :"FIL AI C 30 012 Mann 1 Un",precio:"7024"},
{codigo:"15426",descripcion :"FIL AI C 30 161 Mann Un",precio:"6342"},
{codigo:"15644",descripcion :"FIL AI C 31 024 Mann 1 Un",precio:"1070"},
{codigo:"16261",descripcion :"FIL AI C 32 008 Mann 1 Un",precio:"7023"},
{codigo:"15418",descripcion :"FIL AI C 32 130 Mann Unidad Un",precio:"7307"},
{codigo:"7893390205901",descripcion :"FIL AI C 32 1420/1 Mann 1 Un",precio:"7813"},
{codigo:"15580",descripcion :"FIL AI C 3210 Mann 1 Un",precio:"810"},
{codigo:"15369",descripcion :"FIL AI C 3230 Mann Unidad Un",precio:"14362"},
{codigo:"4011558036645",descripcion :"FIL AI C 33 007 Mann 1 Un",precio:"4889"},
{codigo:"15659",descripcion :"FIL AI C 33 017 Mann 1 Un",precio:"3927"},
{codigo:"4011558014605",descripcion :"FIL AI C 3397 Mann 1 Un",precio:"7327"},
{codigo:"15412",descripcion :"FIL AI C 3495 Mann Aire Un",precio:"2638"},
{codigo:"15173",descripcion :"FIL AI C 35 110 Mann 1 Un",precio:"7485"},
{codigo:"15409",descripcion :"FIL AI C 36 002 Mann Aire Un",precio:"3880"},
{codigo:"4011558015329",descripcion :"FIL AI C 36 004 Mann 1 Un",precio:"11122"},
{codigo:"4011558029838",descripcion :"FIL AI C 36 006/1 Mann 1 Un",precio:"5136"},
{codigo:"4011558062545",descripcion :"FIL AI C 36 007 KIT Mann 1 Un",precio:"7446"},
{codigo:"7893390200883",descripcion :"FIL AI C 37 1774 Mann 1 Un",precio:"45823"},
{codigo:"16423",descripcion :"FIL AI C 38 004 Mann 1 Un",precio:"3065"},
{codigo:"16251",descripcion :"FIL AI C 3880 Mann 1 Un",precio:"6352"},
{codigo:"4011558012649",descripcion :"FIL AI C 39 002 Mann 1 Un",precio:"5987"},
{codigo:"16282",descripcion :"FIL AI C 39 219 Mann 1 Un",precio:"8174"},
{codigo:"4011558070854",descripcion :"FIL AI C 42 002 Mann 1 Un",precio:"4697"},
{codigo:"4011558003449",descripcion :"FIL AI C 43 139 Mann 1 Un",precio:"4844"},
{codigo:"16239",descripcion :"FIL AI C 5082/2 Mann 1 Un",precio:"4630"},
{codigo:"15405",descripcion :"FIL AI C29 008 Mann Unidad Un",precio:"6090"},
{codigo:"15649",descripcion :"FIL AI CA/11072 Motorcraft",precio:"1431"},
{codigo:"16459",descripcion :"FIL AI CA/11258// Motorcraft 1 Un",precio:"2248"},
{codigo:"16430",descripcion :"FIL AI CA/12104 Motorcraft 1 Un",precio:"1876"},
{codigo:"16454",descripcion :"FIL AI CN15/9601/AA/ Motorcraft 1 Un",precio:"2026"},
{codigo:"15655",descripcion :"FIL AI CU 20 001 Mann 1 Un",precio:"3337"},
{codigo:"4011558078331",descripcion :"FIL AI CU 20 030 Mann 1 Un",precio:"1407"},
{codigo:"4011558308407",descripcion :"FIL AI CU 2035 Mann 1 Un",precio:"2104"},
{codigo:"15576",descripcion :"FIL AI CU 21 000-2 Mann 1 Un",precio:"2940"},
{codigo:"15646",descripcion :"FIL AI CU 21 003 Mann 1 Un",precio:"4267"},
{codigo:"4011558540906",descripcion :"FIL AI CU 2141 Mann 1 Un",precio:"2482"},
{codigo:"15652",descripcion :"FIL AI CU 22 019 Mann 1 Un",precio:"2344"},
{codigo:"4011558093266",descripcion :"FIL AI CU 22 028 Mann 1 Un",precio:"5073"},
{codigo:"4011558073206",descripcion :"FIL AI CU 22 032 Mann 1 Un",precio:"2186"},
{codigo:"15422",descripcion :"FIL AI CU 2227 Mann Un",precio:"2988"},
{codigo:"15610",descripcion :"FIL AI CU 2245 HABIT Mann 1 Un",precio:"2739"},
{codigo:"7893390206144",descripcion :"FIL AI CU 23 002 Mann 1 Un",precio:"541"},
{codigo:"4011558312602",descripcion :"FIL AI CU 2316 Mann 1 Un",precio:"4668"},
{codigo:"4011558258801",descripcion :"FIL AI CU 2344 Mann 1 Un",precio:"657"},
{codigo:"16273",descripcion :"FIL AI CU 2358 Mann 1 Un",precio:"3985"},
{codigo:"4011558816797",descripcion :"FIL AI CU 24 027 Mann 1 Un",precio:"2672"},
{codigo:"4011558002039",descripcion :"FIL AI CU 2418-2 Mann 1 Un",precio:"3534"},
{codigo:"15653",descripcion :"FIL AI CU 2454 Mann 1 Un",precio:"3339"},
{codigo:"4011558029081",descripcion :"FIL AI CU 25 002 Mann 1 Un",precio:"3814"},
{codigo:"4011558042998",descripcion :"FIL AI CU 25 012 Mann 1 Un",precio:"1932"},
{codigo:"16230",descripcion :"FIL AI CU 26 006 Mann 1 Un",precio:"1832"},
{codigo:"16240",descripcion :"FIL AI CU 26 010 Mann 1 Un",precio:"2634"},
{codigo:"4011558089368",descripcion :"FIL AI CU 26 021 Mann 1 Un",precio:"2907"},
{codigo:"16236",descripcion :"FIL AI CU 2622 Mann 1 Un",precio:"4614"},
{codigo:"15642",descripcion :"FIL AI CU 2672 Mann 1 Un",precio:"2824"},
{codigo:"15425",descripcion :"FIL AI CU 2734 Mann Un",precio:"3777"},
{codigo:"16295",descripcion :"FIL AI CU 29 003-2 Mann 1 Un",precio:"4562"},
{codigo:"16231",descripcion :"FIL AI CU 2945 Mann 1 Un",precio:"1834"},
{codigo:"4011558542504",descripcion :"FIL AI CU 2952 Mann 1 Un",precio:"2420"},
{codigo:"15577",descripcion :"FIL AI CU 3039-2 Mann 1 Un",precio:"604"},
{codigo:"4011558306502",descripcion :"FIL AI CU 3461 Mann 1 Un",precio:"4070"},
{codigo:"15427",descripcion :"FIL AI CU 4151 Mann Un",precio:"1903"},
{codigo:"4011558250003",descripcion :"FIL AI CU 4442 Mann 1 Un",precio:"3070"},
{codigo:"4011558311902",descripcion :"FIL AI CU 4594 Mann 1 Un",precio:"3448"},
{codigo:"4011558307301",descripcion :"FIL AI CU 6724 Mann 1 Un",precio:"5491"},
{codigo:"15651",descripcion :"FIL AI CU 8430 Mann 1 Un",precio:"7308"},
{codigo:"7893390206601",descripcion :"FIL AI CUK 20 011 Mann 1 Un",precio:"3536"},
{codigo:"4011558032265",descripcion :"FIL AI CUK 24 003 Mann 1 Un",precio:"3614"},
{codigo:"4011558030971",descripcion :"FIL AI CUK 26 007 Mann 1 Un",precio:"9177"},
{codigo:"16289",descripcion :"FIL AI CUK 26 009 Mann",precio:"3820"},
{codigo:"4011558061197",descripcion :"FIL AI CUK 28 001 Mann 1 Un",precio:"4375"},
{codigo:"4011558031367",descripcion :"FIL AI CUK 29 005 Mann 1 Un",precio:"8360"},
{codigo:"4011558072025",descripcion :"FIL AI CUK 31 003 Mann 1 Un",precio:"4968"},
{codigo:"15360",descripcion :"FIL AI FA 1904 Mann Unidad Un",precio:"148,7"},
{codigo:"5904608978103",descripcion :"FIL AI IX WA9781 Mann",precio:"4247"},
{codigo:"15613",descripcion :"FIL AI L1J129620 VW 1 Un",precio:"323"},
{codigo:"15614",descripcion :"FIL AI L5Z129620 VW",precio:"270"},
{codigo:"15615",descripcion :"FIL AI L5Z129620A VW 1 Un",precio:"325"},
{codigo:"15641",descripcion :"FIL AI L6Q820367B VW 1 Un",precio:"350"},
{codigo:"16228",descripcion :"FIL AI MAN C 30 005 Mann 1 Un",precio:"4182"},
{codigo:"15362",descripcion :"FIL AI MANN C25 115 Unidad Un",precio:"2977"},
{codigo:"16465",descripcion :"FIL AI R/FA/47 MOTORCRAFT Motorcraft 1 U",precio:"1830"},
{codigo:"4011558652609",descripcion :"FIL AI TB1374 X Mann 1 Un",precio:"12370"},
{codigo:"765809306356",descripcion :"FIL AI WA 10394 Mann 1 Un",precio:"5602"},
{codigo:"15796",descripcion :"FIL AI WA10460 Mann 1 Un",precio:"4830"},
{codigo:"15721",descripcion :"FIL AI WA10483 Mann 1 Un",precio:"3551"},
{codigo:"15724",descripcion :"FIL AI WA10508 Mann 1 Un",precio:"1908"},
{codigo:"15668",descripcion :"FIL AI WA10550 Mann 1 Un",precio:"3144"},
{codigo:"15683",descripcion :"FIL AI WA42054 Mann 1 Un",precio:"1221"},
{codigo:"15811",descripcion :"FIL AI WA42169 Mann 1 Un",precio:"142"},
{codigo:"15879",descripcion :"FIL AI WA42802 Mann 1 Un",precio:"298"},
{codigo:"15883",descripcion :"FIL AI WA42809 Mann 1 Un",precio:"527"},
{codigo:"15904",descripcion :"FIL AI WA42832 Mann 1 Un",precio:"166"},
{codigo:"15751",descripcion :"FIL AI WA48665 Mann 1 Un",precio:"761"},
{codigo:"15763",descripcion :"FIL AI WA6238 Mann 1 Un",precio:"1621"},
{codigo:"5050026003450",descripcion :"FIL AI WA6339 Mann 1 Un",precio:"2753"},
{codigo:"15767",descripcion :"FIL AI WA6540 Mann 1 Un",precio:"1611"},
{codigo:"15768",descripcion :"FIL AI WA6562 Mann 1 Un",precio:"2605"},
{codigo:"15769",descripcion :"FIL AI WA6668 Mann 1 Un",precio:"1450"},
{codigo:"15771",descripcion :"FIL AI WA6674 Mann 1 Un",precio:"3776"},
{codigo:"15772",descripcion :"FIL AI WA6684 Mann 1 Un",precio:"1754"},
{codigo:"15776",descripcion :"FIL AI WA6704 Mann 1 Un",precio:"2147"},
{codigo:"5050026346373",descripcion :"FIL AI WA9423 Mann 1 Un",precio:"3058"},
{codigo:"15780",descripcion :"FIL AI WA9458 Mann 1 Un",precio:"2805"},
{codigo:"15781",descripcion :"FIL AI WA9530 Mann 1 Un",precio:"2820"},
{codigo:"5904608968906",descripcion :"FIL AI WA9689 Mann 1 Un",precio:"2309"},
{codigo:"15663",descripcion :"FIL AI WIX 24765 Mann 1 Un",precio:"2853"},
{codigo:"15660",descripcion :"FIL AI WIX 24767 Mann 1 Un",precio:"662"},
{codigo:"15787",descripcion :"FIL AI WIX 42148 Mann 1 Un",precio:"309"},
{codigo:"15789",descripcion :"FIL AI WIX 42153 Mann 1 Un",precio:"272"},
{codigo:"15689",descripcion :"FIL AI WIX 42295 Mann 1 Un",precio:"3746"},
{codigo:"15693",descripcion :"FIL AI WIX 42389 Mann 1 Un",precio:"2174"},
{codigo:"15694",descripcion :"FIL AI WIX 42725 Mann 1 Un",precio:"5049"},
{codigo:"15695",descripcion :"FIL AI WIX 42843 Mann 1 Un",precio:"2851"},
{codigo:"15696",descripcion :"FIL AI WIX 42846 Mann 1 Un",precio:"4941"},
{codigo:"15790",descripcion :"FIL AI WIX 42892 Mann 1 Un",precio:"4940"},
{codigo:"15791",descripcion :"FIL AI WIX 42909 Mann 1 Un",precio:"379"},
{codigo:"15792",descripcion :"FIL AI WIX 46011 Mann 1 Un",precio:"2539"},
{codigo:"15698",descripcion :"FIL AI WIX 46116 Mann 1 Un",precio:"2083"},
{codigo:"15699",descripcion :"FIL AI WIX 46156 Mann 1 Un",precio:"1830"},
{codigo:"15700",descripcion :"FIL AI WIX 46207 Mann 1 Un",precio:"3331"},
{codigo:"15701",descripcion :"FIL AI WIX 46699 Ypf 1 Un",precio:"3266"},
{codigo:"15702",descripcion :"FIL AI WIX 46914 Ypf 1 Un",precio:"12888"},
{codigo:"15684",descripcion :"FIL AI WIX 46930 Mann 1 Un",precio:"7819"},
{codigo:"15703",descripcion :"FIL AI WIX 49058 Mann 1 Un",precio:"1191"},
{codigo:"15704",descripcion :"FIL AI WIX 49065 Ypf 1 Un",precio:"3350"},
{codigo:"15705",descripcion :"FIL AI WIX 49067 Mann 1 Un",precio:"3642"},
{codigo:"15706",descripcion :"FIL AI WIX 49070 Mann 1 Un",precio:"2925"},
{codigo:"15707",descripcion :"FIL AI WIX 49172 Mann 1 Un",precio:"4015"},
{codigo:"15710",descripcion :"FIL AI WIX WA 10440 Mann 1 Un",precio:"1502"},
{codigo:"15711",descripcion :"FIL AI WIX WA 10454 Mann 1 Un",precio:"1758"},
{codigo:"5050026346496",descripcion :"FIL AI WIX WA 9439 Mann 1 Un",precio:"2292"},
{codigo:"7790184753269",descripcion :"FIL AI WIX WA 9503 Mann 1 Un",precio:"2107"},
{codigo:"15708",descripcion :"FIL AI WIX WA10038 Mann 1 Un",precio:"878"},
{codigo:"76580930635",descripcion :"FIL AI WIX WA10394 Mann 1 Un",precio:"1733"},
{codigo:"15712",descripcion :"FIL AI WIX WA10455 Mann 1 Un",precio:"2390"},
{codigo:"15794",descripcion :"FIL AI WIX WA10456 Mann 1 Un",precio:"3841"},
{codigo:"15795",descripcion :"FIL AI WIX WA10457 Ypf 1 Un",precio:"1826"},
{codigo:"15713",descripcion :"FIL AI WIX WA10462 Mann 1 Un",precio:"1826"},
{codigo:"15714",descripcion :"FIL AI WIX WA10464 Mann 1 Un",precio:"3633"},
{codigo:"15716",descripcion :"FIL AI WIX WA10473 Mann 1 Un",precio:"1900"},
{codigo:"15717",descripcion :"FIL AI WIX WA10475 Mann 1 Un",precio:"1388"},
{codigo:"15718",descripcion :"FIL AI WIX WA10476 Mann 1 Un",precio:"1826"},
{codigo:"15719",descripcion :"FIL AI WIX WA10477 Mann 1 Un",precio:"1591"},
{codigo:"15720",descripcion :"FIL AI WIX WA10481 Mann 1 Un",precio:"417"},
{codigo:"15797",descripcion :"FIL AI WIX WA10482 Mann 1 Un",precio:"536"},
{codigo:"15798",descripcion :"FIL AI WIX WA10484 Mann 1 Un",precio:"371"},
{codigo:"15722",descripcion :"FIL AI WIX WA10499 Mann 1 Un",precio:"1785"},
{codigo:"15723",descripcion :"FIL AI WIX WA10506 Mann 1 Un",precio:"1468"},
{codigo:"15725",descripcion :"FIL AI WIX WA10512 Mann 1 Un",precio:"1415"},
{codigo:"15726",descripcion :"FIL AI WIX WA10513 Mann 1 Un",precio:"1545"},
{codigo:"15727",descripcion :"FIL AI WIX WA10520 Mann 1 Un",precio:"2568"},
{codigo:"15728",descripcion :"FIL AI WIX WA10521 Mann 1 Un",precio:"1817"},
{codigo:"15729",descripcion :"FIL AI WIX WA10522 Mann 1 Un",precio:"2205"},
{codigo:"15730",descripcion :"FIL AI WIX WA10523 Mann 1 Un",precio:"798"},
{codigo:"15799",descripcion :"FIL AI WIX WA10524 Mann 1 Un",precio:"3969"},
{codigo:"15731",descripcion :"FIL AI WIX WA10536 Mann 1 Un",precio:"627"},
{codigo:"15732",descripcion :"FIL AI WIX WA10537 Mann 1 Un",precio:"1065"},
{codigo:"15733",descripcion :"FIL AI WIX WA10540 Mann 1 Un",precio:"1521"},
{codigo:"15734",descripcion :"FIL AI WIX WA10543 Mann 1 Un",precio:"1541"},
{codigo:"15800",descripcion :"FIL AI WIX WA10544 Mann 1 Un",precio:"1758"},
{codigo:"15735",descripcion :"FIL AI WIX WA10547 Mann 1 Un",precio:"1543"},
{codigo:"15736",descripcion :"FIL AI WIX WA10549 Mann 1 Un",precio:"1567"},
{codigo:"7893390900486",descripcion :"FIL AI WIX WA11150 (10) Mann 1 Un",precio:"1774"},
{codigo:"7790184754136",descripcion :"FIL AI WIX WA11234 Mann 1 Un",precio:"1924"},
{codigo:"15801",descripcion :"FIL AI WIX WA42001 Mann 1 Un",precio:"2322"},
{codigo:"15802",descripcion :"FIL AI WIX WA42135 Mann 1 Un",precio:"1451"},
{codigo:"15803",descripcion :"FIL AI WIX WA42136 Mann 1 Un",precio:"142"},
{codigo:"15804",descripcion :"FIL AI WIX WA42137 Mann 1 Un",precio:"100"},
{codigo:"15805",descripcion :"FIL AI WIX WA42138 Mann 1 Un",precio:"298"},
{codigo:"15806",descripcion :"FIL AI WIX WA42139 Mann",precio:"218"},
{codigo:"15807",descripcion :"FIL AI WIX WA42140 Mann 1 Un",precio:"312"},
{codigo:"15808",descripcion :"FIL AI WIX WA42154 Mann 1 Un",precio:"532"},
{codigo:"15809",descripcion :"FIL AI WIX WA42160 Mann 1 Un",precio:"122"},
{codigo:"15810",descripcion :"FIL AI WIX WA42165 Mann 1 Un",precio:"134"},
{codigo:"15737",descripcion :"FIL AI WIX WA42170 Mann 1 Un",precio:"1750"},
{codigo:"15813",descripcion :"FIL AI WIX WA42172 Mann 1 Un",precio:"145"},
{codigo:"15814",descripcion :"FIL AI WIX WA42183 Mann 1 Un",precio:"399"},
{codigo:"15815",descripcion :"FIL AI WIX WA42187 Mann 1 Un",precio:"141"},
{codigo:"15816",descripcion :"FIL AI WIX WA42190 Mann 1 Un",precio:"304"},
{codigo:"15738",descripcion :"FIL AI WIX WA42295 Mann 1 Un",precio:"2002"},
{codigo:"15740",descripcion :"FIL AI WIX WA42472 Mann 1 Un",precio:"982"},
{codigo:"15880",descripcion :"FIL AI WIX WA42804 Mann 1 Un",precio:"308"},
{codigo:"15881",descripcion :"FIL AI WIX WA42807 Mann 1 Un",precio:"170"},
{codigo:"15882",descripcion :"FIL AI WIX WA42808 Mann 1 Un",precio:"207"},
{codigo:"15884",descripcion :"FIL AI WIX WA42810 Mann 1 Un",precio:"242"},
{codigo:"15885",descripcion :"FIL AI WIX WA42811 1 Un",precio:"172"},
{codigo:"15886",descripcion :"FIL AI WIX WA42812 Mann 1 Un",precio:"242"},
{codigo:"15887",descripcion :"FIL AI WIX WA42813 Mann 1 Un",precio:"161"},
{codigo:"15889",descripcion :"FIL AI WIX WA42814 Mann 1 Un",precio:"197"},
{codigo:"15888",descripcion :"FIL AI WIX WA42815 Mann 1 Un",precio:"232"},
{codigo:"15890",descripcion :"FIL AI WIX WA42816 Mann 1 Un",precio:"221"},
{codigo:"15891",descripcion :"FIL AI WIX WA42817 Mann 1 Un",precio:"127"},
{codigo:"15892",descripcion :"FIL AI WIX WA42818 Mann 1 Un",precio:"233"},
{codigo:"15893",descripcion :"FIL AI WIX WA42819 Mann 1 Un",precio:"192"},
{codigo:"15894",descripcion :"FIL AI WIX WA42820 Mann 1 Un",precio:"221"},
{codigo:"15895",descripcion :"FIL AI WIX WA42822 Mann 1 Un",precio:"263"},
{codigo:"15896",descripcion :"FIL AI WIX WA42823 Mann 1 Un",precio:"208"},
{codigo:"15897",descripcion :"FIL AI WIX WA42824 Mann 1 Un",precio:"145"},
{codigo:"15898",descripcion :"FIL AI WIX WA42825 Mann 1 Un",precio:"129"},
{codigo:"15899",descripcion :"FIL AI WIX WA42826 Mann 1 Un",precio:"221"},
{codigo:"15741",descripcion :"FIL AI WIX WA42827 Mann 1 Un",precio:"1771"},
{codigo:"15901",descripcion :"FIL AI WIX WA42828 Ypf 1 Un",precio:"161"},
{codigo:"15902",descripcion :"FIL AI WIX WA42829 Mann 1 Un",precio:"166"},
{codigo:"15903",descripcion :"FIL AI WIX WA42830 Mann 1 Un",precio:"180"},
{codigo:"15905",descripcion :"FIL AI WIX WA42833 Mann 1 Un",precio:"194"},
{codigo:"15906",descripcion :"FIL AI WIX WA42834 Mann 1 Un",precio:"174"},
{codigo:"15907",descripcion :"FIL AI WIX WA42836 Mann 1 Un",precio:"221"},
{codigo:"15908",descripcion :"FIL AI WIX WA42837 Mann 1 Un",precio:"180"},
{codigo:"15909",descripcion :"FIL AI WIX WA42838 Mann 1 Un",precio:"151"},
{codigo:"15910",descripcion :"FIL AI WIX WA42839 Mann 1 Un",precio:"154"},
{codigo:"15911",descripcion :"FIL AI WIX WA42840 Mann 1 Un",precio:"208"},
{codigo:"15912",descripcion :"FIL AI WIX WA42841 Mann 1 Un",precio:"335"},
{codigo:"15913",descripcion :"FIL AI WIX WA42843 Mann 1 Un",precio:"152"},
{codigo:"15914",descripcion :"FIL AI WIX WA42844 Mann 1 Un",precio:"226"},
{codigo:"15915",descripcion :"FIL AI WIX WA42845 Mann 1 Un",precio:"208"},
{codigo:"15916",descripcion :"FIL AI WIX WA42846 Mann 1 Un",precio:"210"},
{codigo:"15918",descripcion :"FIL AI WIX WA42849 Mann 1 Un",precio:"166"},
{codigo:"15919",descripcion :"FIL AI WIX WA42850 Mann 1 Un",precio:"208"},
{codigo:"15920",descripcion :"FIL AI WIX WA42851 Mann 1 Un",precio:"198"},
{codigo:"15922",descripcion :"FIL AI WIX WA42852 Mann 1 Un",precio:"230"},
{codigo:"15923",descripcion :"FIL AI WIX WA42853 Mann 1 Un",precio:"254"},
{codigo:"15924",descripcion :"FIL AI WIX WA42854 Mann 1 Un",precio:"209"},
{codigo:"15925",descripcion :"FIL AI WIX WA42855 Mann 1 Un",precio:"263"},
{codigo:"15926",descripcion :"FIL AI WIX WA42856 Mann 1 Un",precio:"200"},
{codigo:"15927",descripcion :"FIL AI WIX WA42857 Mann 1 Un",precio:"292"},
{codigo:"15928",descripcion :"FIL AI WIX WA42858 Mann 1 Un",precio:"188"},
{codigo:"15742",descripcion :"FIL AI WIX WA46327 Mann 1 Un",precio:"2209"},
{codigo:"7893390207691",descripcion :"FIL AI WIX WA46525 Mann 1 Un",precio:"4031"},
{codigo:"15745",descripcion :"FIL AI WIX WA48090 Mann 1 Un",precio:"2427"},
{codigo:"15746",descripcion :"FIL AI WIX WA48095 Mann 1 Un",precio:"2226"},
{codigo:"15747",descripcion :"FIL AI WIX WA48105 Mann 1 Un",precio:"695"},
{codigo:"15691",descripcion :"FIL AI WIX WA48110 Ypf 1 Un",precio:"3395"},
{codigo:"15748",descripcion :"FIL AI WIX WA48160 Mann 1 Un",precio:"1754"},
{codigo:"15749",descripcion :"FIL AI WIX WA48175 Mann 1 Un",precio:"1601"},
{codigo:"7790184003265",descripcion :"FIL AI WIX WA48240 Mann 1 Un",precio:"3670"},
{codigo:"15752",descripcion :"FIL AI WIX WA48775 Mann 1 Un",precio:"1817"},
{codigo:"15753",descripcion :"FIL AI WIX WA48820 Mann 1 Un",precio:"2084"},
{codigo:"15755",descripcion :"FIL AI WIX WA48890 Mann 1 Un",precio:"1151"},
{codigo:"15756",descripcion :"FIL AI WIX WA48900 Mann 1 Un",precio:"1555"},
{codigo:"15664",descripcion :"FIL AI WIX WA48950 Mann 1 Un",precio:"1843"},
{codigo:"15757",descripcion :"FIL AI WIX WA48960 Mann 1 Un",precio:"456"},
{codigo:"15758",descripcion :"FIL AI WIX WA48980 Mann 1 Un",precio:"2079"},
{codigo:"15759",descripcion :"FIL AI WIX WA49016 Mann 1 Un",precio:"3521"},
{codigo:"15760",descripcion :"FIL AI WIX WA49020 Mann 1 Un",precio:"2250"},
{codigo:"15666",descripcion :"FIL AI WIX WA49025 Mann 1 Un",precio:"1016"},
{codigo:"15761",descripcion :"FIL AI WIX WA49876 Mann 1 Un",precio:"3207"},
{codigo:"15762",descripcion :"FIL AI WIX WA6185 Mann 1 Un",precio:"2161"},
{codigo:"15764",descripcion :"FIL AI WIX WA6246 Mann 1 Un",precio:"1734"},
{codigo:"15765",descripcion :"FIL AI WIX WA6336 Mann 1 Un",precio:"1560"},
{codigo:"15766",descripcion :"FIL AI WIX WA6375 Mann 1 Un",precio:"2478"},
{codigo:"15662",descripcion :"FIL AI WIX WA6435 Mann 1 Un",precio:"2671"},
{codigo:"16227",descripcion :"FIL AI WIX WA6668 Mann 1 Un",precio:"82"},
{codigo:"15770",descripcion :"FIL AI WIX WA6673 Mann 1 Un",precio:"4078"},
{codigo:"15773",descripcion :"FIL AI WIX WA6688 Mann 1 Un",precio:"1425"},
{codigo:"15774",descripcion :"FIL AI WIX WA6693 Mann 1 Un",precio:"668"},
{codigo:"15775",descripcion :"FIL AI WIX WA6694M Mann 1 Un",precio:"2211"},
{codigo:"7790184004156",descripcion :"FIL AI WIX WA6697 Mann 1 Un",precio:"1965"},
{codigo:"15777",descripcion :"FIL AI WIX WA6738 Mann 1 Un",precio:"1929"},
{codigo:"15778",descripcion :"FIL AI WIX WA6761 Mann 1 Un",precio:"1943"},
{codigo:"15779",descripcion :"FIL AI WIX WA9449 Mann 1 Un",precio:"4335"},
{codigo:"15692",descripcion :"FIL AI WIX WA9496 Mann 1 Un",precio:"1312"},
{codigo:"15782",descripcion :"FIL AI WIX WA9558 Mann 1 Un",precio:"2555"},
{codigo:"15783",descripcion :"FIL AI WIX WA9589 Mann 1 Un",precio:"4243"},
{codigo:"15784",descripcion :"FIL AI WIX WA9606 Mann 1 Un",precio:"813"},
{codigo:"5050026352619",descripcion :"FIL AI WIX WA9623 Mann 1 Un",precio:"4484"},
{codigo:"16226",descripcion :"FIL AI WIX WA9653 Mann 1 Un",precio:"3321"},
{codigo:"15785",descripcion :"FIL AI WIX WA9655 Mann 1 Un",precio:"2688"},
{codigo:"15786",descripcion :"FIL AI WIX WA9663 Mann 1 Un",precio:"2302"},
{codigo:"16319",descripcion :"FIL AI WIX WA9707 Mann 1 Un",precio:"624"},
{codigo:"5904608974402",descripcion :"FIL AI WIX WA9744 Mann 1 Un",precio:"2420"},
{codigo:"5904608976406",descripcion :"FIL AI WIX WA9764 Mann 1 Un",precio:"4725"},
{codigo:"5904608976604",descripcion :"FIL AI WIX WA9766 Mann 1 Un",precio:"3491"},
{codigo:"5904608978202",descripcion :"FIL AI WIX WA9782 Mann 1 Un",precio:"1810"},
{codigo:"5904608981202",descripcion :"FIL AI WIX WA9812 Mann 1 Un",precio:"7063"},
{codigo:"5904608986900",descripcion :"FIL AI WIX WA9869 Mann 1 Un",precio:"3133"},
{codigo:"5904608987501",descripcion :"FIL AI WIX WA9875 Mann 1 Un",precio:"3864"},
{codigo:"7893390209626",descripcion :"FIL AI WIX WP10283 Mann 1 Un",precio:"2124"},
{codigo:"16272",descripcion :"FIL AI WIX WP10303 Mann 1 Un",precio:"2445"},
{codigo:"5904608208903",descripcion :"FIL AI WIX WP2089 Mann 1 Un",precio:"2611"},
{codigo:"7893390209565",descripcion :"FIL AI WIX WP6800 Mann 1 Un",precio:"1447"},
{codigo:"7893390209596",descripcion :"FIL AI WIX WP6926 Mann 1 Un",precio:"1622"},
{codigo:"5050026345888",descripcion :"FIL AI WIX WP9142 Mann 1 Un",precio:"1663"},
{codigo:"5050026349367",descripcion :"FIL AI WIX WP9256 Mann 1 Un",precio:"2550"},
{codigo:"5050026349862",descripcion :"FIL AI WIX WP9280 Mann 1 Un",precio:"1789"},
{codigo:"15900",descripcion :"FIL AI WIXM WA42827 Mann 1 Un",precio:"221"},
{codigo:"7893390209183",descripcion :"FIL AI WP10285 Ypf 1 Un",precio:"1509"},
{codigo:"15685",descripcion :"FIL AI WP24483 Mann 1 Un",precio:"1431"},
{codigo:"16417",descripcion :"FIL AI WP9036 Mann 1 Un",precio:"1601"},
{codigo:"5050026350424",descripcion :"FIL AI WP9290 Mann 1 Un",precio:"1431"},
{codigo:"15817",descripcion :"FIL AIA WIX WA42191 Mann 1 Un",precio:"229"},
{codigo:"16308",descripcion :"FIL AIi C 17021 Mann 1 Un",precio:"206"},
{codigo:"4011558028305",descripcion :"FIL AIR C 16 007 Mann 1 Un",precio:"8537"},
{codigo:"4011558801830",descripcion :"FIL AIR C 16 134/2 Mann 1 Un",precio:"4045"},
{codigo:"4011558008673",descripcion :"FIL AIR C 2201 Mann 1 Un",precio:"6562"},
{codigo:"4011558221409",descripcion :"FIL AIR C 2229 Mann 1 Un",precio:"3127"},
{codigo:"4011558359102",descripcion :"FIL AIR C 2245 Mann 1",precio:"8472"},
{codigo:"4011558172206",descripcion :"FIL AIR C 23 610 Mann 1 Un",precio:"7929"},
{codigo:"4011558038885",descripcion :"FIL AIR C 24 026 Mann 1 Un",precio:"3640"},
{codigo:"4011558010928",descripcion :"FIL AIR C 2436/1 Mann 1 Un",precio:"6670"},
{codigo:"4011558036706",descripcion :"FIL AIR C 26 022 Mann 1 Un",precio:"2663"},
{codigo:"4011558388805",descripcion :"FIL AIR C 2735 Mann 1 Un",precio:"5438"},
{codigo:"4011558074555",descripcion :"FIL AIR C 28 035 Mann 1 Un",precio:"7219"},
{codigo:"4011558070168",descripcion :"FIL AIR C 30 027 Mann 1 Un",precio:"5408"},
{codigo:"4011558419202",descripcion :"FIL AIR C 3210 Mann 1 Un",precio:"12243"},
{codigo:"4011558077730",descripcion :"FIL AIR C 38 011 Mann 1 Un",precio:"16320"},
{codigo:"7893390202450",descripcion :"FIL AIR CF 600/1 Mann 1 Un",precio:"6362"},
{codigo:"4011558078300",descripcion :"FIL AIR CU 13 002 Mann 1 Un",precio:"2944"},
{codigo:"4011558078423",descripcion :"FIL AIR CU 16 005 Mann 1 Un",precio:"2572"},
{codigo:"4011558012915",descripcion :"FIL AIR CU 1629 Mann 1 Un",precio:"2623"},
{codigo:"4011558405700",descripcion :"FIL AIR CU 2240 Mann 1 Un",precio:"2466"},
{codigo:"4011558300807",descripcion :"FIL AIR CU 2435 Mann 1 Un",precio:"2514"},
{codigo:"4011558807948",descripcion :"FIL AIR CU 2545/1 Mann 1 Un",precio:"2021"},
{codigo:"4011558066659",descripcion :"FIL AIR CUK 22 011 Mann 1 Un",precio:"1371"},
{codigo:"7790184003197",descripcion :"FIL AIR WA10068 Mann 1 Un",precio:"7515"},
{codigo:"765809988668",descripcion :"FIL AIR WA10908 Mann 1 Un",precio:"4072"},
{codigo:"765809968288",descripcion :"FIL AIR WA11065A Mann 1 Un",precio:"1595"},
{codigo:"7893390000124",descripcion :"FIL AIR WA11149 Mann 1 Un",precio:"737"},
{codigo:"5050026347417",descripcion :"FIL AIR WA9462 Mann 1 Un",precio:"3161"},
{codigo:"5904608965400",descripcion :"FIL AIR WA9654 Mann 1 Un",precio:"3122"},
{codigo:"5904608967909",descripcion :"FIL AIR WA9679 Mann 1 Un",precio:"2678"},
{codigo:"7790184753863",descripcion :"FIL AIR WA9754 Mann 1 Un",precio:"2273"},
{codigo:"5050026352374",descripcion :"FIL AIR WIX WP9356 Mann 1 Un",precio:"1335"},
{codigo:"15453",descripcion :"FIL AIRE A 1156 Mann Un",precio:"196"},
{codigo:"15454",descripcion :"FIL AIRE A 1211 Mann Un",precio:"204"},
{codigo:"15381",descripcion :"FIL AIRE A 25635 PUROLATOR Mann Unidad U",precio:"81,2"},
{codigo:"15455",descripcion :"FIL AIRE A 39203 Mann Un",precio:"269"},
{codigo:"15456",descripcion :"FIL AIRE A 39211 Mann Un",precio:"195"},
{codigo:"15457",descripcion :"FIL AIRE A 45650 PUROLATOR Un",precio:"444"},
{codigo:"15554",descripcion :"FIL AIRE A1171 PUROLATOR 1 Un",precio:"170"},
{codigo:"15432",descripcion :"FIL AIRE A1176 Mann Un",precio:"172"},
{codigo:"15459",descripcion :"FIL AIRE A24278 Mann Un",precio:"230"},
{codigo:"15573",descripcion :"FIL AIRE C 14 004 Mann 1 Un",precio:"459"},
{codigo:"15443",descripcion :"FIL AIRE C 14 114 Mann Un",precio:"9176"},
{codigo:"15438",descripcion :"FIL AIRE C 17 137/1X Mann Un",precio:"13677"},
{codigo:"15447",descripcion :"FIL AIRE C 24 028 Mann Un",precio:"386"},
{codigo:"15406",descripcion :"FIL AIRE C 2559 Mann Un",precio:"4366"},
{codigo:"15440",descripcion :"FIL AIRE C 26 007 Mann Un",precio:"4034"},
{codigo:"15552",descripcion :"FIL AIRE C 27 009 Mann 1 Un",precio:"4892"},
{codigo:"15434",descripcion :"FIL AIRE C 28 010 Mann Un",precio:"8866"},
{codigo:"15559",descripcion :"FIL AIRE C 2929 Mann 1 Un",precio:"387"},
{codigo:"15441",descripcion :"FIL AIRE C 3273 Mann Un",precio:"4925"},
{codigo:"15410",descripcion :"FIL AIRE C 3275 Mann Unidad Un",precio:"3387"},
{codigo:"15572",descripcion :"FIL AIRE CU 2330 Mann 1 Un",precio:"545"},
{codigo:"15445",descripcion :"FIL AIRE CU 2436 Mann Un",precio:"3383"},
{codigo:"15444",descripcion :"FIL AIRE CUK 26 005 Mann Un",precio:"4712"},
{codigo:"11236",descripcion :"FIL AIRE MANN C 13 114/7",precio:"26"},
{codigo:"15697",descripcion :"FIL AIWIX 46057 Mann 1 Un",precio:"2615"},
{codigo:"15686",descripcion :"FIL AL WIX WA10466 Mann 1 Un",precio:"7801"},
{codigo:"16263",descripcion :"FIL C 2567 Mann 1 Un",precio:"4480"},
{codigo:"15541",descripcion :"FIL C 27 003/1 AIRE Mann 1 Un",precio:"6898"},
{codigo:"15558",descripcion :"FIL C 28 011 AIRE Mann 1 Un",precio:"6182"},
{codigo:"15547",descripcion :"FIL C 34 007 AIRE Mann 1 Un",precio:"2458"},
{codigo:"15529",descripcion :"FIL C-30 130/3 AIRE Mann 1 Un",precio:"2674"},
{codigo:"16225",descripcion :"FIL CA WIX 49192 Mann 1 Un",precio:"3793"},
{codigo:"15533",descripcion :"FIL CU 22 013 AIRE Mann 1 Un",precio:"2452"},
{codigo:"15545",descripcion :"FIL CU 2433 AIRE HAB Mann 1 Un",precio:"842"},
{codigo:"15539",descripcion :"FIL CU 2442 HABITACULO Mann 1 Un",precio:"3406"},
{codigo:"4011558542108",descripcion :"FIL CU 2450 Mann 1 Un",precio:"4469"},
{codigo:"4011558304201",descripcion :"FIL CU 2757 Mann 1 Un",precio:"2653"},
{codigo:"15557",descripcion :"FIL CU 2897 AIRE HAB. Mann 1 Un",precio:"6364"},
{codigo:"15528",descripcion :"FIL CU 3569 Mann 1 Un",precio:"5401"},
{codigo:"15546",descripcion :"FIL CU 3858 HAB Mann 1 Un",precio:"433"},
{codigo:"15384",descripcion :"FIL HA C 21 116/1 Mann Unidad Un",precio:"5556"},
{codigo:"15372",descripcion :"FIL HA C 24 005 Mann Unidad Un",precio:"3069"},
{codigo:"15385",descripcion :"FIL HA CU 1919 Mann Unidad Un",precio:"1699"},
{codigo:"4011558540203",descripcion :"FIL HA CU 1936 Mann Unidad Un",precio:"3651"},
{codigo:"15393",descripcion :"FIL HA CU 3032 Mann Unidad Un",precio:"3385"},
{codigo:"15192",descripcion :"FIL HAB CUK 2680 Mann Unidad 1 Un",precio:"4568"},
{codigo:"18928",descripcion :"Fil Mann AI C 14 130",precio:"10377"},
{codigo:"18929",descripcion :"Fil Mann AI C 1430",precio:"9871"},
{codigo:"18947",descripcion :"Fil Mann AI C 1724",precio:"5774"},
{codigo:"18930",descripcion :"Fil Mann AI C 1733",precio:"1916"},
{codigo:"18937",descripcion :"Fil Mann AI C 25 126",precio:"110,1"},
{codigo:"18933",descripcion :"Fil Mann AI C 2512",precio:"2994"},
{codigo:"18945",descripcion :"Fil Mann AI C 2998/5",precio:"1996"},
{codigo:"15365",descripcion :"FIL MANN AI C 30 135 Unidad Un",precio:"12709"},
{codigo:"18936",descripcion :"Fil Mann AI C 43 102",precio:"3494"},
{codigo:"15363",descripcion :"FIL MANN AI C25 117/2 Mann Unidad Un",precio:"7341"},
{codigo:"15505",descripcion :"Fil Mann Aire C 24 012 Un",precio:"3382"},
{codigo:"15501",descripcion :"Fil Mann Aire C 29 015 Un",precio:"3324"},
{codigo:"18948",descripcion :"Fil Mann HA CU 2440",precio:"2537"},
{codigo:"15347",descripcion :"FIL MANN HAB CUK 2862 Mann Lt",precio:"3669"},
{codigo:"15348",descripcion :"FIL MANN HAB CUK 2882",precio:"3636"},
{codigo:"15375",descripcion :"FIL PUROLATOR AI A 1085 Mann Unidad Un",precio:"129"},
{codigo:"15377",descripcion :"FIL PUROLATOR AI A 1131 Mann Unidad Un",precio:"212"},
{codigo:"15376",descripcion :"FIL PUROLATOR AI A 1157 Mann Unidad Un",precio:"134"},
{codigo:"15433",descripcion :"FIL PUROLATOR AI A25653 Un",precio:"342"},
{codigo:"15379",descripcion :"FIL PUROLATOR HA I 19220 Mann Unidad Un",precio:"277"},
{codigo:"7893390201903",descripcion :"FIL SEG CF 1560 Mann 1 Un",precio:"13026"},
{codigo:"765809513341",descripcion :"FIL WIX 51334 Mann 1 Un",precio:"1812"},
{codigo:"15709",descripcion :"FIL WIX AI WA10255 Mann 1 Un",precio:"2280"},
{codigo:"15715",descripcion :"FIL WIX AI WA10467 Mann 1 Un",precio:"2639"},
{codigo:"15690",descripcion :"FIL WIX AI WA48555 Mann 1 Un",precio:"1636"},
{codigo:"5050026010564",descripcion :"FIL WIX AI WP6895 Mann 1 Un",precio:"2492"},
{codigo:"15739",descripcion :"FIL WIX WA42351 Mann 1 Un",precio:"3708"},
{codigo:"15750",descripcion :"FIL WIX WA48450 Mann 1 Un",precio:"237"},
{codigo:"15688",descripcion :"FIL WIX WA6563 Mann 1 Un",precio:"4697"},
{codigo:"5050026347264",descripcion :"FIL WIX WF8308 Mann 1 Un",precio:"4842"},
{codigo:"7893390209558",descripcion :"FIL WIX WP24590 Mann 1 Un",precio:"971"},
{codigo:"15669",descripcion :"FIL WIX WP9112 Mann 1 Un",precio:"2064"},
{codigo:"4011558747206",descripcion :"FILAC W 940/4 Mann 1 Un",precio:"3253"},
{codigo:"15917",descripcion :"FILAI WIX WA42848 Mann 1 Un",precio:"16570"},
{codigo:"765809968080",descripcion :"FILAI WIXWA11070A Mana 1 Un",precio:"2169"},
{codigo:"18988",descripcion :"FILTRO ACEITE L 1063 PUROLATOR",precio:"102"},
{codigo:"15095",descripcion :"Filtro AI C 1361 Mann",precio:"12278"},
{codigo:"15158",descripcion :"Filtro AI C 20 326 Mann",precio:"3575"},
{codigo:"15138",descripcion :"Filtro AI C 21 003 Mann",precio:"4308"},
{codigo:"15164",descripcion :"Filtro AI C 21493 Mann",precio:"21676"},
{codigo:"15082",descripcion :"Filtro AI C 2448 Mann",precio:"8185"},
{codigo:"18954",descripcion :"FILTRO AI C 2538 Mann Unidad",precio:"6304"},
{codigo:"15171",descripcion :"FILTRO AI C 27 1340 Mann 1 Un",precio:"14760"},
{codigo:"18198",descripcion :"FILTRO AI C 2987 Mann",precio:"207,7"},
{codigo:"15113",descripcion :"Filtro AI C 32 108 Mann",precio:"277,8"},
{codigo:"15081",descripcion :"Filtro AI C 3282 Mann",precio:"2915"},
{codigo:"15150",descripcion :"Filtro AI C 36 005-",precio:"1136"},
{codigo:"15153",descripcion :"Filtro AI C 3877/1 Mann",precio:"6622"},
{codigo:"15140",descripcion :"Filtro AI C 41 110 Mann",precio:"5372"},
{codigo:"18138",descripcion :"FILTRO AI C 4151 Mann",precio:"525"},
{codigo:"18965",descripcion :"FILTRO AI C2631 Mann",precio:"6171"},
{codigo:"15126",descripcion :"Filtro AI C2680 Mann",precio:"158"},
{codigo:"15144",descripcion :"Filtro AI C2975 Mann",precio:"4995"},
{codigo:"15167",descripcion :"Filtro AI CF200/1 Mann 1 Un",precio:"6257"},
{codigo:"9900",descripcion :"FILTRO AIRE 1-",precio:"270"},
{codigo:"9909",descripcion :"FILTRO AIRE 10",precio:"675"},
{codigo:"9910",descripcion :"FILTRO AIRE 11",precio:"720"},
{codigo:"8999",descripcion :"FILTRO AIRE 1140 Un",precio:"5130"},
{codigo:"9000",descripcion :"FILTRO AIRE 1160 Un",precio:"5220"},
{codigo:"9001",descripcion :"FILTRO AIRE 1180 Un",precio:"5310"},
{codigo:"9911",descripcion :"FILTRO AIRE 12",precio:"765"},
{codigo:"9002",descripcion :"FILTRO AIRE 1200 Un",precio:"5400"},
{codigo:"9003",descripcion :"FILTRO AIRE 1220 Un",precio:"5490"},
{codigo:"9004",descripcion :"FILTRO AIRE 1240 Un",precio:"5580"},
{codigo:"9005",descripcion :"FILTRO AIRE 1260 Un",precio:"5670"},
{codigo:"9006",descripcion :"FILTRO AIRE 1280 Un",precio:"5760"},
{codigo:"9912",descripcion :"FILTRO AIRE 13",precio:"810"},
{codigo:"9007",descripcion :"FILTRO AIRE 1300 Un",precio:"5850"},
{codigo:"9008",descripcion :"FILTRO AIRE 1320 Un",precio:"5940"},
{codigo:"9009",descripcion :"FILTRO AIRE 1340 Un",precio:"6030"},
{codigo:"9010",descripcion :"FILTRO AIRE 1360 Un",precio:"6120"},
{codigo:"9011",descripcion :"FILTRO AIRE 1380 Un",precio:"6210"},
{codigo:"9913",descripcion :"FILTRO AIRE 14",precio:"855"},
{codigo:"9012",descripcion :"FILTRO AIRE 1400 Un",precio:"6300"},
{codigo:"9013",descripcion :"FILTRO AIRE 1420 Un",precio:"6390"},
{codigo:"9014",descripcion :"FILTRO AIRE 1440 Un",precio:"6480"},
{codigo:"9015",descripcion :"FILTRO AIRE 1460 Un",precio:"6570"},
{codigo:"9016",descripcion :"FILTRO AIRE 1480 Un",precio:"6660"},
{codigo:"9914",descripcion :"FILTRO AIRE 15",precio:"900"},
{codigo:"9017",descripcion :"FILTRO AIRE 1500 Un",precio:"6750"},
{codigo:"9018",descripcion :"FILTRO AIRE 1520 Un",precio:"6840"},
{codigo:"9915",descripcion :"FILTRO AIRE 16",precio:"945"},
{codigo:"9916",descripcion :"FILTRO AIRE 17",precio:"990"},
{codigo:"9917",descripcion :"FILTRO AIRE 18",precio:"1035"},
{codigo:"9918",descripcion :"FILTRO AIRE 19",precio:"1080"},
{codigo:"9901",descripcion :"FILTRO AIRE 2",precio:"315"},
{codigo:"9919",descripcion :"FILTRO AIRE 20",precio:"1125"},
{codigo:"9920",descripcion :"FILTRO AIRE 21",precio:"1170"},
{codigo:"9921",descripcion :"FILTRO AIRE 22-",precio:"1215"},
{codigo:"9922",descripcion :"FILTRO AIRE 23",precio:"1260"},
{codigo:"9923",descripcion :"FILTRO AIRE 24",precio:"1305"},
{codigo:"9924",descripcion :"FILTRO AIRE 25",precio:"1350"},
{codigo:"9925",descripcion :"FILTRO AIRE 26",precio:"1395"},
{codigo:"9926",descripcion :"FILTRO AIRE 27",precio:"1440"},
{codigo:"9927",descripcion :"FILTRO AIRE 28",precio:"1485"},
{codigo:"9928",descripcion :"FILTRO AIRE 29",precio:"1530"},
{codigo:"9902",descripcion :"FILTRO AIRE 3",precio:"360"},
{codigo:"9929",descripcion :"FILTRO AIRE 30",precio:"1575"},
{codigo:"9930",descripcion :"FILTRO AIRE 31",precio:"1620"},
{codigo:"9931",descripcion :"FILTRO AIRE 32",precio:"1665"},
{codigo:"9932",descripcion :"FILTRO AIRE 33",precio:"1710"},
{codigo:"9933",descripcion :"FILTRO AIRE 34",precio:"1755"},
{codigo:"9934",descripcion :"FILTRO AIRE 35",precio:"1800"},
{codigo:"9935",descripcion :"FILTRO AIRE 36",precio:"1845"},
{codigo:"9936",descripcion :"FILTRO AIRE 37",precio:"1890"},
{codigo:"9937",descripcion :"FILTRO AIRE 38",precio:"1935"},
{codigo:"9938",descripcion :"FILTRO AIRE 39",precio:"1980"},
{codigo:"9903",descripcion :"FILTRO AIRE 4",precio:"405"},
{codigo:"9939",descripcion :"FILTRO AIRE 40",precio:"2025"},
{codigo:"9940",descripcion :"FILTRO AIRE 41",precio:"2070"},
{codigo:"9941",descripcion :"FILTRO AIRE 42",precio:"2115"},
{codigo:"9942",descripcion :"FILTRO AIRE 43",precio:"2160"},
{codigo:"9943",descripcion :"FILTRO AIRE 44",precio:"2205"},
{codigo:"9944",descripcion :"FILTRO AIRE 45",precio:"2250"},
{codigo:"9945",descripcion :"FILTRO AIRE 46",precio:"2295"},
{codigo:"9946",descripcion :"FILTRO AIRE 47",precio:"2340"},
{codigo:"9947",descripcion :"FILTRO AIRE 48",precio:"2385"},
{codigo:"9948",descripcion :"FILTRO AIRE 49",precio:"2430"},
{codigo:"9904",descripcion :"FILTRO AIRE 5",precio:"450"},
{codigo:"9949",descripcion :"FILTRO AIRE 50",precio:"2475"},
{codigo:"9950",descripcion :"FILTRO AIRE 51",precio:"2520"},
{codigo:"9951",descripcion :"FILTRO AIRE 52",precio:"2565"},
{codigo:"9952",descripcion :"FILTRO AIRE 53",precio:"2610"},
{codigo:"9953",descripcion :"FILTRO AIRE 54",precio:"2655"},
{codigo:"9954",descripcion :"FILTRO AIRE 55",precio:"2700"},
{codigo:"9955",descripcion :"FILTRO AIRE 56",precio:"2745"},
{codigo:"9956",descripcion :"FILTRO AIRE 57",precio:"2790"},
{codigo:"9957",descripcion :"FILTRO AIRE 58",precio:"2835"},
{codigo:"9958",descripcion :"FILTRO AIRE 59",precio:"2880"},
{codigo:"9905",descripcion :"FILTRO AIRE 6",precio:"495"},
{codigo:"9959",descripcion :"FILTRO AIRE 60",precio:"2925"},
{codigo:"9960",descripcion :"FILTRO AIRE 61",precio:"2970"},
{codigo:"9961",descripcion :"FILTRO AIRE 62",precio:"3015"},
{codigo:"9962",descripcion :"FILTRO AIRE 63",precio:"3060"},
{codigo:"9963",descripcion :"FILTRO AIRE 64",precio:"3105"},
{codigo:"9964",descripcion :"FILTRO AIRE 65",precio:"3150"},
{codigo:"9965",descripcion :"FILTRO AIRE 66",precio:"3195"},
{codigo:"9966",descripcion :"FILTRO AIRE 67",precio:"3240"},
{codigo:"9967",descripcion :"FILTRO AIRE 68",precio:"3285"},
{codigo:"9968",descripcion :"FILTRO AIRE 69",precio:"3330"},
{codigo:"9906",descripcion :"FILTRO AIRE 7",precio:"540"},
{codigo:"9969",descripcion :"FILTRO AIRE 70",precio:"3375"},
{codigo:"9970",descripcion :"FILTRO AIRE 71",precio:"3420"},
{codigo:"9971",descripcion :"FILTRO AIRE 72",precio:"3465"},
{codigo:"9972",descripcion :"FILTRO AIRE 73",precio:"3510"},
{codigo:"9973",descripcion :"FILTRO AIRE 74",precio:"3555"},
{codigo:"9974",descripcion :"FILTRO AIRE 75",precio:"3600"},
{codigo:"9975",descripcion :"FILTRO AIRE 76",precio:"3690"},
{codigo:"9976",descripcion :"FILTRO AIRE 77",precio:"3780"},
{codigo:"9977",descripcion :"FILTRO AIRE 78",precio:"3870"},
{codigo:"9978",descripcion :"FILTRO AIRE 79",precio:"3960"},
{codigo:"9907",descripcion :"FILTRO AIRE 8",precio:"585"},
{codigo:"9979",descripcion :"FILTRO AIRE 80",precio:"4050"},
{codigo:"9980",descripcion :"FILTRO AIRE 81",precio:"4140"},
{codigo:"9981",descripcion :"FILTRO AIRE 82",precio:"4230"},
{codigo:"9982",descripcion :"FILTRO AIRE 83",precio:"4320"},
{codigo:"9983",descripcion :"FILTRO AIRE 84",precio:"4410"},
{codigo:"9984",descripcion :"FILTRO AIRE 85",precio:"4500"},
{codigo:"9985",descripcion :"FILTRO AIRE 86",precio:"4590"},
{codigo:"9986",descripcion :"FILTRO AIRE 87",precio:"4680"},
{codigo:"9987",descripcion :"FILTRO AIRE 88",precio:"4770"},
{codigo:"9988",descripcion :"FILTRO AIRE 89",precio:"4860"},
{codigo:"9908",descripcion :"FILTRO AIRE 9",precio:"630"},
{codigo:"9989",descripcion :"FILTRO AIRE 90",precio:"4950"},
{codigo:"9990",descripcion :"FILTRO AIRE 91",precio:"5040"},
{codigo:"18973",descripcion :"FILTRO AIRE A 1004 PUROLATOR",precio:"96"},
{codigo:"18974",descripcion :"FILTRO AIRE A 1005 PUROLATOR",precio:"122"},
{codigo:"18975",descripcion :"FILTRO AIRE A 1006 PUROLATOR",precio:"98"},
{codigo:"18976",descripcion :"FILTRO AIRE A 1007 PUROLATOR",precio:"133"},
{codigo:"18977",descripcion :"FILTRO AIRE A 1008 PUROLATOR",precio:"141"},
{codigo:"18978",descripcion :"FILTRO AIRE A 1009 PUROLATOR",precio:"148"},
{codigo:"18979",descripcion :"FILTRO AIRE A 1010 PUROLATOR",precio:"192"},
{codigo:"18980",descripcion :"FILTRO AIRE A 1012 PUROLATOR",precio:"149"},
{codigo:"18981",descripcion :"FILTRO AIRE A 1014 PUROLATOR",precio:"350"},
{codigo:"18982",descripcion :"FILTRO AIRE A 1015 PUROLATOR",precio:"124"},
{codigo:"18983",descripcion :"FILTRO AIRE A 1017 PUROLATOR",precio:"169"},
{codigo:"18918",descripcion :"FILTRO AIRE A 1019 PUROLATOR",precio:"168"},
{codigo:"18919",descripcion :"FILTRO AIRE A 1020 PUROLATOR",precio:"180"},
{codigo:"18920",descripcion :"FILTRO AIRE A 1023 PUROLATOR",precio:"135"},
{codigo:"18921",descripcion :"FILTRO AIRE A 1024 PUROLATOR",precio:"444"},
{codigo:"18903",descripcion :"FILTRO AIRE A 1025 PUROLATOR",precio:"498"},
{codigo:"18889",descripcion :"FILTRO AIRE A 1026 PUROLATOR",precio:"591"},
{codigo:"18904",descripcion :"FILTRO AIRE A 1027 PUROLATOR",precio:"650"},
{codigo:"18766",descripcion :"FILTRO AIRE A 1028 PUROLATOR",precio:"546"},
{codigo:"18890",descripcion :"FILTRO AIRE A 1029 PUROLATOR",precio:"871"},
{codigo:"18891",descripcion :"FILTRO AIRE A 1030 PUROLATOR",precio:"1114"},
{codigo:"18892",descripcion :"FILTRO AIRE A 1032 PUROLATOR",precio:"1186"},
{codigo:"18893",descripcion :"FILTRO AIRE A 1033 PUROLATOR",precio:"1476"},
{codigo:"18913",descripcion :"FILTRO AIRE A 1036 PUROLATOR",precio:"338"},
{codigo:"18914",descripcion :"FILTRO AIRE A 1037 PUROLATOR",precio:"465"},
{codigo:"18915",descripcion :"FILTRO AIRE A 1038 PUROLATOR",precio:"582"},
{codigo:"18916",descripcion :"FILTRO AIRE A 1039 PUROLATOR",precio:"775"},
{codigo:"18917",descripcion :"FILTRO AIRE A 1041 PUROLATOR",precio:"349"},
{codigo:"18912",descripcion :"FILTRO AIRE A 1077 PUROLATOR",precio:"149"},
{codigo:"18925",descripcion :"FILTRO AIRE A 1079 PUROLATOR",precio:"169"},
{codigo:"18926",descripcion :"FILTRO AIRE A 1081 PUROLATOR",precio:"117"},
{codigo:"18900",descripcion :"FILTRO AIRE A 1082 PUROLATOR",precio:"195"},
{codigo:"18984",descripcion :"FILTRO AIRE A 1086 PUROLATOR",precio:"156"},
{codigo:"18985",descripcion :"FILTRO AIRE A 1088 PUROLATOR",precio:"111"},
{codigo:"18901",descripcion :"FILTRO AIRE A 1097 PUROLATOR",precio:"160"},
{codigo:"18869",descripcion :"FILTRO AIRE A 1099 PUROLATOR",precio:"119"},
{codigo:"18986",descripcion :"FILTRO AIRE A 1100 PUROLATOR",precio:"125"},
{codigo:"18987",descripcion :"FILTRO AIRE A 1101 PUROLATOR",precio:"179"},
{codigo:"18870",descripcion :"FILTRO AIRE A 1106 PUROLATOR",precio:"125"},
{codigo:"18902",descripcion :"FILTRO AIRE A 1108 PUROLATOR",precio:"182"},
{codigo:"18922",descripcion :"FILTRO AIRE A 1122 PUROLATOR",precio:"249"},
{codigo:"18871",descripcion :"FILTRO AIRE A 1123 PUROLATOR",precio:"221"},
{codigo:"18923",descripcion :"FILTRO AIRE A 1129 PUROLATOR",precio:"217"},
{codigo:"18872",descripcion :"FILTRO AIRE A 1132 PUROLATOR",precio:"137"},
{codigo:"18905",descripcion :"FILTRO AIRE A 1133 PUROLATOR",precio:"382"},
{codigo:"18873",descripcion :"FILTRO AIRE A 1134 PUROLATOR",precio:"244"},
{codigo:"18874",descripcion :"FILTRO AIRE A 1135 PUROLATOR",precio:"239"},
{codigo:"18875",descripcion :"FILTRO AIRE A 1136 PUROLATOR",precio:"29,1"},
{codigo:"18924",descripcion :"FILTRO AIRE A 1137 PUROLATOR",precio:"429"},
{codigo:"18906",descripcion :"FILTRO AIRE A 1144 PUROLATOR",precio:"825"},
{codigo:"18907",descripcion :"FILTRO AIRE A 1145 PUROLATOR",precio:"541"},
{codigo:"18908",descripcion :"FILTRO AIRE A 1146 PUROLATOR",precio:"1129"},
{codigo:"18909",descripcion :"FILTRO AIRE A 1147 PUROLATOR",precio:"875"},
{codigo:"18910",descripcion :"FILTRO AIRE A 1149 PUROLATOR",precio:"936"},
{codigo:"18911",descripcion :"FILTRO AIRE A 1150 PUROLATOR",precio:"1569"},
{codigo:"15413",descripcion :"FILTRO AIRE A 1153 PUROLATOR",precio:"181"},
{codigo:"19018",descripcion :"Filtro aire A 1192 PUROLATOR Mann Un",precio:"336"},
{codigo:"16445",descripcion :"Filtro aire A 1751 Purolator Mann 1 Un",precio:"991"},
{codigo:"18001",descripcion :"Filtro Aire AI C 11 120 Mann Un",precio:"6120"},
{codigo:"18002",descripcion :"Filtro Aire AI C 1145/5 Mann",precio:"85,7"},
{codigo:"18004",descripcion :"Filtro Aire AI C 1159 Mann",precio:"170"},
{codigo:"18005",descripcion :"Filtro Aire AI C 1176/3 Mann",precio:"9182"},
{codigo:"18006",descripcion :"Filtro Aire AI C 1184 Mann",precio:"4370"},
{codigo:"18007",descripcion :"Filtro Aire AI C 12 102 Mann",precio:"1435"},
{codigo:"18008",descripcion :"Filtro Aire AI C 12 107 Mann",precio:"4908"},
{codigo:"18009",descripcion :"Filtro Aire AI C 1241 Mann",precio:"2143"},
{codigo:"18010",descripcion :"Filtro Aire AI C 1243 Mann",precio:"321"},
{codigo:"18011",descripcion :"Filtro Aire AI C 1245 Mann",precio:"1395"},
{codigo:"18012",descripcion :"Filtro Aire AI C 1274 Mann",precio:"343"},
{codigo:"18013",descripcion :"Filtro Aire AI C 1281 Mann",precio:"24118"},
{codigo:"18014",descripcion :"Filtro Aire AI C 1286/1 Mann",precio:"3335"},
{codigo:"18015",descripcion :"Filtro Aire AI C 13 100 Mann",precio:"4808"},
{codigo:"18016",descripcion :"Filtro Aire AI C 13 103 Mann",precio:"1115"},
{codigo:"18017",descripcion :"Filtro Aire AI C 13 103/1 Mann",precio:"14962"},
{codigo:"18018",descripcion :"Filtro Aire AI C 13 109 Mann",precio:"1062"},
{codigo:"18019",descripcion :"Filtro Aire AI C 13 114/4 Mann",precio:"5787"},
{codigo:"18020",descripcion :"Filtro Aire AI C 13 114/7 Mann",precio:"6607"},
{codigo:"18021",descripcion :"Filtro Aire AI C 13 122 Mann",precio:"1001"},
{codigo:"18022",descripcion :"Filtro Aire AI C 1362 Mann",precio:"5773"},
{codigo:"18023",descripcion :"Filtro Aire AI C 1372 Mann",precio:"101,7"},
{codigo:"18024",descripcion :"Filtro Aire AI C 1380 Mann",precio:"2890"},
{codigo:"18025",descripcion :"Filtro Aire AI C 1380/1 Mann",precio:"250"},
{codigo:"18026",descripcion :"Filtro Aire AI C 1381 Mann",precio:"6863"},
{codigo:"18027",descripcion :"Filtro Aire AI C 1387 Mann",precio:"6780"},
{codigo:"18028",descripcion :"Filtro Aire AI C 1399 Mann",precio:"449"},
{codigo:"18029",descripcion :"Filtro Aire AI C 1399/2 Mann",precio:"3936"},
{codigo:"18030",descripcion :"Filtro Aire AI C 14 109 Mann",precio:"912"},
{codigo:"18031",descripcion :"Filtro Aire AI C 14 159 Mann",precio:"4565"},
{codigo:"18032",descripcion :"Filtro Aire AI C 14 160 Mann",precio:"2467"},
{codigo:"18033",descripcion :"Filtro Aire AI C 14 171 Mann",precio:"1009"},
{codigo:"18034",descripcion :"Filtro Aire AI C 14 176 Mann",precio:"9146"},
{codigo:"18035",descripcion :"Filtro Aire AI C 14 177 Mann",precio:"1131"},
{codigo:"18036",descripcion :"Filtro Aire AI C 14 178 Mann",precio:"6696"},
{codigo:"18037",descripcion :"Filtro Aire AI C 14 179 Mann",precio:"8858"},
{codigo:"18038",descripcion :"Filtro Aire AI C 14 179/2 Mann",precio:"14782"},
{codigo:"18040",descripcion :"Filtro Aire AI C 14 200 Mann",precio:"3723"},
{codigo:"18041",descripcion :"Filtro Aire AI C 1426 Mann",precio:"303"},
{codigo:"18043",descripcion :"Filtro Aire AI C 1440 Mann",precio:"44,5"},
{codigo:"18044",descripcion :"Filtro Aire AI C 1448 Mann",precio:"1090"},
{codigo:"18045",descripcion :"Filtro Aire AI C 1451 Mann",precio:"262"},
{codigo:"18046",descripcion :"Filtro Aire AI C 1460 Mann",precio:"3611"},
{codigo:"18047",descripcion :"Filtro Aire AI C 1468 Mann",precio:"7564"},
{codigo:"18048",descripcion :"Filtro Aire AI C 1472 Mann",precio:"5752"},
{codigo:"18049",descripcion :"Filtro Aire AI C 1480 Mann",precio:"71,8"},
{codigo:"18050",descripcion :"Filtro Aire AI C 15 105/1 Mann",precio:"1850"},
{codigo:"18051",descripcion :"Filtro Aire AI C 15 120 Mann",precio:"11584"},
{codigo:"18053",descripcion :"Filtro Aire AI C 15 127/2 Mann",precio:"7173"},
{codigo:"18054",descripcion :"Filtro Aire AI C 15 143 Mann",precio:"179,6"},
{codigo:"18055",descripcion :"Filtro Aire AI C 15 165/3 Mann",precio:"9605"},
{codigo:"18056",descripcion :"Filtro Aire AI C 15 300 Mann",precio:"5865"},
{codigo:"18057",descripcion :"Filtro Aire AI C 1528/2 Mann",precio:"27,5"},
{codigo:"18058",descripcion :"Filtro Aire AI C 1550 Mann Un",precio:"2882"},
{codigo:"18059",descripcion :"Filtro Aire AI C 1559/1 Mann",precio:"113,3"},
{codigo:"18060",descripcion :"Filtro Aire AI C 1589/2 Mann",precio:"151"},
{codigo:"18061",descripcion :"Filtro Aire AI C 1589/3 Mann",precio:"10527"},
{codigo:"18062",descripcion :"Filtro Aire AI C 16 113 Mann",precio:"2682"},
{codigo:"18063",descripcion :"Filtro Aire AI C 16 113/1 Mann",precio:"139,6"},
{codigo:"18064",descripcion :"Filtro Aire AI C 16 120 Mann",precio:"551,1"},
{codigo:"18065",descripcion :"Filtro Aire AI C 16 122 Mann",precio:"216,3"},
{codigo:"18066",descripcion :"Filtro Aire AI C 16 133 Mann",precio:"216,4"},
{codigo:"18067",descripcion :"Filtro Aire AI C 16 136 Mann",precio:"5478"},
{codigo:"18068",descripcion :"Filtro Aire AI C 16 136/1 Mann",precio:"127,3"},
{codigo:"18069",descripcion :"Filtro Aire AI C 16 136/2 Mann",precio:"689"},
{codigo:"18070",descripcion :"Filtro Aire AI C 16 144 Mann",precio:"727"},
{codigo:"18071",descripcion :"Filtro Aire AI C 16 166 Mann",precio:"9667"},
{codigo:"18073",descripcion :"Filtro Aire AI C 16 244 Mann",precio:"5545"},
{codigo:"18074",descripcion :"Filtro Aire AI C 16 247/1 Mann",precio:"10239"},
{codigo:"18075",descripcion :"Filtro Aire AI C 1614 Mann",precio:"336"},
{codigo:"18076",descripcion :"Filtro Aire AI C 1638 Mann",precio:"16,3"},
{codigo:"18077",descripcion :"Filtro Aire AI C 1699 Mann",precio:"8642"},
{codigo:"18078",descripcion :"Filtro Aire AI C 17 129 Mann",precio:"5268"},
{codigo:"18079",descripcion :"Filtro Aire AI C 17 201 Mann",precio:"13477"},
{codigo:"18080",descripcion :"Filtro Aire AI C 17 225/3 Mann",precio:"10596"},
{codigo:"18081",descripcion :"Filtro Aire AI C 17 232 Mann",precio:"3023"},
{codigo:"18082",descripcion :"Filtro Aire AI C 17 278 Mann",precio:"5788"},
{codigo:"18083",descripcion :"Filtro Aire AI C 17 308 Mann",precio:"3400"},
{codigo:"18084",descripcion :"Filtro Aire AI C 1760 Mann",precio:"2225"},
{codigo:"18085",descripcion :"Filtro Aire AI C 1760/1 Mann",precio:"2434"},
{codigo:"18086",descripcion :"Filtro Aire AI C 1761 Mann",precio:"156,3"},
{codigo:"18087",descripcion :"Filtro Aire AI C 18 121 Mann",precio:"801"},
{codigo:"18089",descripcion :"Filtro Aire Ai C 18 146/2 Mann Un",precio:"157,5"},
{codigo:"18090",descripcion :"Filtro Aire AI C 18 146/3 Mann",precio:"434,2"},
{codigo:"18091",descripcion :"Filtro Aire AI C 18 161 Mann",precio:"2952"},
{codigo:"18092",descripcion :"Filtro Aire AI C 18 244 Mann",precio:"2863"},
{codigo:"18093",descripcion :"Filtro Aire AI C 18 263 Mann",precio:"7785"},
{codigo:"18094",descripcion :"Filtro Aire AI C 18 263/1 Mann",precio:"7790"},
{codigo:"18095",descripcion :"Filtro Aire AI C 1820 Mann",precio:"548"},
{codigo:"18096",descripcion :"Filtro Aire AI C 1823 Mann",precio:"792"},
{codigo:"18098",descripcion :"Filtro Aire AI C 1832/1 Mann",precio:"3020"},
{codigo:"18099",descripcion :"Filtro Aire AI C 1839 Mann",precio:"12,5"},
{codigo:"18100",descripcion :"Filtro Aire AI C 1858/1 Mann",precio:"0"},
{codigo:"18102",descripcion :"Filtro Aire AI C 1891 Mann",precio:"2262"},
{codigo:"18103",descripcion :"Filtro Aire AI C 19 175 Mann",precio:"1603"},
{codigo:"18104",descripcion :"Filtro Aire AI C 1924 Mann",precio:"449"},
{codigo:"18105",descripcion :"Filtro Aire AI C 1932 Mann",precio:"133,2"},
{codigo:"18106",descripcion :"Filtro Aire AI C 1935 Mann",precio:"885"},
{codigo:"18107",descripcion :"Filtro Aire AI C 1939 Mann",precio:"419"},
{codigo:"18111",descripcion :"Filtro Aire AI C 1955-2 Mann",precio:"5409"},
{codigo:"18112",descripcion :"Filtro Aire AI C 1972 Mann",precio:"1121"},
{codigo:"18113",descripcion :"Filtro Aire AI C 1980 Mann",precio:"1056"},
{codigo:"18114",descripcion :"Filtro Aire AI C 1989 Mann",precio:"118,1"},
{codigo:"18115",descripcion :"Filtro Aire AI C 1990 Mann",precio:"1466"},
{codigo:"18116",descripcion :"Filtro Aire AI C 20 164 Mann",precio:"2368"},
{codigo:"18117",descripcion :"Filtro Aire AI C 2021 Mann",precio:"4171"},
{codigo:"18118",descripcion :"Filtro Aire AI C 2041 Mann",precio:"486"},
{codigo:"18119",descripcion :"Filtro Aire AI C 2055 Mann",precio:"5209"},
{codigo:"18120",descripcion :"Filtro Aire AI C 2056 Mann",precio:"2396"},
{codigo:"18121",descripcion :"Filtro Aire AI C 2068 Mann",precio:"1917"},
{codigo:"18122",descripcion :"Filtro Aire AI C 2074 Mann",precio:"8067"},
{codigo:"18124",descripcion :"Filtro Aire AI C 21 100 Mann",precio:"310"},
{codigo:"18125",descripcion :"Filtro Aire AI C 21 104/2 Mann Lt",precio:"6590"},
{codigo:"18126",descripcion :"Filtro Aire AI C 21 107 Mann",precio:"56,7"},
{codigo:"18127",descripcion :"Filtro Aire AI C 21 116 Mann",precio:"78"},
{codigo:"18128",descripcion :"Filtro Aire AI C 21 146 Mann",precio:"591"},
{codigo:"18129",descripcion :"Filtro Aire AI C 21 185 Mann",precio:"1729"},
{codigo:"18130",descripcion :"Filtro Aire AI C 2118 Mann",precio:"879"},
{codigo:"18131",descripcion :"Filtro Aire AI C 2119 Mann",precio:"2666"},
{codigo:"18132",descripcion :"Filtro Aire AI C 2120 Mann",precio:"1740"},
{codigo:"18133",descripcion :"Filtro Aire AI C 2121 Mann",precio:"792"},
{codigo:"18134",descripcion :"Filtro Aire AI C 2127 Mann",precio:"520"},
{codigo:"18135",descripcion :"Filtro Aire AI C 2129 Mann",precio:"317"},
{codigo:"18136",descripcion :"Filtro Aire AI C 2136/1 Mann",precio:"5762"},
{codigo:"18137",descripcion :"Filtro Aire AI C 2138/3 Mann",precio:"6839"},
{codigo:"18139",descripcion :"Filtro Aire AI C 2159 Mann",precio:"1992"},
{codigo:"18141",descripcion :"Filtro Aire AI C 2192 Mann",precio:"2407"},
{codigo:"18142",descripcion :"Filtro Aire AI C 2192/2 Mann",precio:"2805"},
{codigo:"18143",descripcion :"Filtro Aire AI C 22 117 Mann",precio:"3467"},
{codigo:"18144",descripcion :"Filtro Aire AI C 22 181 Mann",precio:"1773"},
{codigo:"18145",descripcion :"Filtro Aire AI C 22 212 Mann",precio:"3538"},
{codigo:"18146",descripcion :"Filtro Aire AI C 22 267 Mann",precio:"17168"},
{codigo:"18147",descripcion :"Filtro Aire AI C 2223 Mann",precio:"903"},
{codigo:"18148",descripcion :"Filtro Aire AI C 2226 Mann",precio:"953"},
{codigo:"18149",descripcion :"Filtro Aire AI C 2227 Mann",precio:"200"},
{codigo:"18150",descripcion :"Filtro Aire AI C 2237 Mann",precio:"3969"},
{codigo:"18152",descripcion :"Filtro Aire AI C 2262 Mann",precio:"6133"},
{codigo:"18153",descripcion :"Filtro Aire AI C 2282 Mann",precio:"3623"},
{codigo:"18154",descripcion :"Filtro Aire AI C 2295 Mann",precio:"2709"},
{codigo:"18155",descripcion :"Filtro Aire AI C 2295/3 Mann",precio:"3912"},
{codigo:"18156",descripcion :"Filtro Aire AI C 23 121/1 Mann",precio:"5861"},
{codigo:"18157",descripcion :"Filtro Aire AI C 23 121/2 Mann",precio:"4732"},
{codigo:"18158",descripcion :"Filtro Aire AI C 23 135 Mann",precio:"1922"},
{codigo:"18159",descripcion :"Filtro Aire AI C 23 148 Mann",precio:"7318"},
{codigo:"18160",descripcion :"Filtro Aire AI C 2329 Mann",precio:"3985"},
{codigo:"18161",descripcion :"Filtro Aire AI C 2332 Mann",precio:"6233"},
{codigo:"18162",descripcion :"Filtro Aire AI C 2334 Mann",precio:"61,7"},
{codigo:"18163",descripcion :"Filtro Aire AI C 2334/1 Mann",precio:"222,7"},
{codigo:"18164",descripcion :"Filtro Aire AI C 2335 Mann",precio:"5966"},
{codigo:"18166",descripcion :"Filtro Aire AI C 2337 Mann",precio:"5383"},
{codigo:"18167",descripcion :"Filtro Aire AI C 2339 Mann",precio:"584"},
{codigo:"18168",descripcion :"Filtro Aire AI C 2339/1 Mann",precio:"48,4"},
{codigo:"18169",descripcion :"Filtro Aire AI C 2353 Mann Lt",precio:"163,8"},
{codigo:"18170",descripcion :"Filtro Aire AI C 2355 Mann",precio:"39,2"},
{codigo:"18172",descripcion :"Filtro Aire AI C 2368 Mann",precio:"1585"},
{codigo:"18173",descripcion :"Filtro Aire AI C 24 106 Mann",precio:"4248"},
{codigo:"18174",descripcion :"Filtro Aire AI C 24 123 Mann",precio:"71,5"},
{codigo:"18175",descripcion :"Filtro Aire AI C 24 124 Mann",precio:"1721"},
{codigo:"18176",descripcion :"Filtro Aire AI C 24 128 Mann",precio:"5421"},
{codigo:"18177",descripcion :"Filtro Aire AI C 24 196 Mann Un",precio:"8144"},
{codigo:"18178",descripcion :"Filtro Aire AI C 24 203 Mann",precio:"10894"},
{codigo:"18179",descripcion :"Filtro Aire AI C 2421 Mann",precio:"1565"},
{codigo:"18180",descripcion :"Filtro Aire AI C 2426 Mann",precio:"1217"},
{codigo:"18181",descripcion :"Filtro Aire AI C 2428 Mann",precio:"911"},
{codigo:"18182",descripcion :"Filtro Aire AI C 2429 Mann",precio:"969"},
{codigo:"18183",descripcion :"Filtro Aire AI C 2436 Mann",precio:"99,1"},
{codigo:"18184",descripcion :"Filtro Aire AI C 2438 Mann",precio:"6660"},
{codigo:"18185",descripcion :"Filtro Aire AI C 2440/1 Mann",precio:"3258"},
{codigo:"18186",descripcion :"Filtro Aire AI C 2443 Mann",precio:"4300"},
{codigo:"18187",descripcion :"Filtro Aire AI C 2443/1 Mann",precio:"2878"},
{codigo:"18188",descripcion :"Filtro Aire AI C 2445 Mann",precio:"716"},
{codigo:"18189",descripcion :"Filtro Aire AI C 2446 Mann",precio:"69,3"},
{codigo:"18190",descripcion :"Filtro Aire AI C 2446/1 Mann",precio:"531"},
{codigo:"18191",descripcion :"Filtro Aire AI C 2452/1 Mann",precio:"588"},
{codigo:"18192",descripcion :"Filtro Aire AI C 2456 Mann",precio:"4086"},
{codigo:"18193",descripcion :"Filtro Aire AI C 2469 Mann",precio:"5172"},
{codigo:"18194",descripcion :"Filtro Aire AI C 2477 Mann",precio:"6895"},
{codigo:"18195",descripcion :"Filtro Aire AI C 2483 Mann",precio:"90,5"},
{codigo:"18196",descripcion :"Filtro Aire AI C 2493 Mann",precio:"7174"},
{codigo:"18197",descripcion :"Filtro Aire AI C 2496 Mann",precio:"713"},
{codigo:"18199",descripcion :"Filtro Aire AI C 25 100/1 Mann",precio:"4273"},
{codigo:"18200",descripcion :"Filtro Aire AI C 25 101/1 Mann",precio:"4465"},
{codigo:"18201",descripcion :"Filtro Aire AI C 25 114 Mann",precio:"8911"},
{codigo:"18202",descripcion :"Filtro Aire AI C 25 117/1 Mann",precio:"4483"},
{codigo:"18203",descripcion :"Filtro Aire AI C 25 124 Mann",precio:"8872"},
{codigo:"18204",descripcion :"Filtro Aire AI C 25 128 Mann",precio:"5168"},
{codigo:"18205",descripcion :"Filtro Aire AI C 25 135 Mann",precio:"6475"},
{codigo:"18206",descripcion :"Filtro Aire AI C 25 146 Mann",precio:"6788"},
{codigo:"18207",descripcion :"Filtro Aire AI C 25 153 Mann",precio:"448,2"},
{codigo:"18208",descripcion :"Filtro Aire AI C 2524/1 Mann",precio:"3909"},
{codigo:"18209",descripcion :"Filtro Aire AI C 2535/1 Mann",precio:"61,5"},
{codigo:"18210",descripcion :"Filtro Aire AI C 2537/1 Mann",precio:"4581"},
{codigo:"18211",descripcion :"Filtro Aire AI C 2537/2 Mann",precio:"6368"},
{codigo:"18212",descripcion :"Filtro Aire AI C 2542 Mann",precio:"4225"},
{codigo:"18213",descripcion :"Filtro Aire AI C 2543 Mann",precio:"302"},
{codigo:"18214",descripcion :"Filtro Aire AI C 2552/2 Mann",precio:"449"},
{codigo:"18215",descripcion :"Filtro Aire AI C 2555/2 Mann",precio:"2016"},
{codigo:"18216",descripcion :"Filtro Aire AI C 2558 Mann",precio:"748"},
{codigo:"18217",descripcion :"Filtro Aire AI C 2558/5 Mann",precio:"367,6"},
{codigo:"18218",descripcion :"Filtro Aire AI C 2562 Mann",precio:"4655"},
{codigo:"18219",descripcion :"Filtro Aire AI C 2564 Mann",precio:"4032"},
{codigo:"18220",descripcion :"Filtro Aire AI C 2565 Mann",precio:"89,6"},
{codigo:"18221",descripcion :"Filtro Aire AI C 2568 Mann",precio:"6103"},
{codigo:"18222",descripcion :"Filtro Aire AI C 2571 Mann",precio:"6851"},
{codigo:"18223",descripcion :"Filtro Aire AI C 2571/1 Mann",precio:"4635"},
{codigo:"18224",descripcion :"Filtro Aire AI C 2573 Mann",precio:"3792"},
{codigo:"18225",descripcion :"Filtro Aire AI C 2574 Mann",precio:"135,9"},
{codigo:"18227",descripcion :"Filtro Aire AI C 2598 Mann",precio:"863"},
{codigo:"18228",descripcion :"Filtro Aire AI C 26 100 Mann",precio:"3993"},
{codigo:"18229",descripcion :"Filtro Aire AI C 26 107 Mann",precio:"7220"},
{codigo:"18230",descripcion :"Filtro Aire AI C 26 109 Mann",precio:"4646"},
{codigo:"18231",descripcion :"Filtro Aire AI C 26 110/1 Mann",precio:"5865"},
{codigo:"18232",descripcion :"Filtro Aire AI C 26 111 Mann",precio:"2181"},
{codigo:"18233",descripcion :"Filtro Aire AI C 26 126 Mann",precio:"8694"},
{codigo:"18234",descripcion :"Filtro Aire AI C 26 138/1 Mann",precio:"2292"},
{codigo:"18235",descripcion :"Filtro Aire AI C 26 144 Mann",precio:"244"},
{codigo:"18236",descripcion :"Filtro Aire AI C 26 151 Mann",precio:"5359"},
{codigo:"18237",descripcion :"Filtro Aire AI C 26 168 Mann",precio:"4260"},
{codigo:"18238",descripcion :"Filtro Aire AI C 26 206 Mann",precio:"100"},
{codigo:"18239",descripcion :"Filtro Aire AI C 2619 Mann",precio:"3726"},
{codigo:"18240",descripcion :"Filtro Aire AI C 2624 Mann",precio:"613"},
{codigo:"18241",descripcion :"Filtro Aire AI C 2626 Mann",precio:"4341"},
{codigo:"18242",descripcion :"Filtro Aire AI C 2632 Mann",precio:"6376"},
{codigo:"18243",descripcion :"Filtro Aire AI C 2635/2 Mann",precio:"175,5"},
{codigo:"18244",descripcion :"Filtro Aire AI C 2637 Mann",precio:"97,8"},
{codigo:"18245",descripcion :"Filtro Aire AI C 2639 Mann",precio:"114,7"},
{codigo:"18246",descripcion :"Filtro Aire AI C 2645 Mann",precio:"1581"},
{codigo:"18247",descripcion :"Filtro Aire AI C 2645/1 Mann",precio:"3667"},
{codigo:"18248",descripcion :"Filtro Aire AI C 2646 Mann",precio:"3393"},
{codigo:"18249",descripcion :"Filtro Aire AI C 2648 Mann",precio:"2312"},
{codigo:"18250",descripcion :"Filtro Aire AI C 2648/10 Mann",precio:"196,2"},
{codigo:"18251",descripcion :"Filtro Aire AI C 2652 Mann",precio:"96,3"},
{codigo:"18252",descripcion :"Filtro Aire AI C 2656 Mann",precio:"669"},
{codigo:"18253",descripcion :"Filtro Aire AI C 2658/1 Mann",precio:"1810"},
{codigo:"18254",descripcion :"Filtro Aire AI C 2659 Mann",precio:"132,9"},
{codigo:"18255",descripcion :"Filtro Aire AI C 2663 HD Mann",precio:"1165"},
{codigo:"18256",descripcion :"Filtro Aire AI C 2664 Mann",precio:"2521"},
{codigo:"18257",descripcion :"Filtro Aire AI C 2666 Mann",precio:"2986"},
{codigo:"18258",descripcion :"Filtro Aire AI C 2667/1 Mann",precio:"2033"},
{codigo:"18259",descripcion :"Filtro Aire AI C 2675 Mann",precio:"68,1"},
{codigo:"18260",descripcion :"Filtro Aire AI C 2676 Mann",precio:"1184"},
{codigo:"18261",descripcion :"Filtro Aire AI C 2677 Mann",precio:"2485"},
{codigo:"18262",descripcion :"Filtro Aire AI C 2677/1 Mann",precio:"2762"},
{codigo:"18263",descripcion :"Filtro Aire AI C 2679 Mann",precio:"2950"},
{codigo:"18264",descripcion :"Filtro Aire AI C 2681 Mann",precio:"3759"},
{codigo:"18265",descripcion :"Filtro Aire AI C 2686 Mann",precio:"550"},
{codigo:"18266",descripcion :"Filtro Aire AI C 2693 Mann",precio:"2495"},
{codigo:"18267",descripcion :"Filtro Aire AI C 2694 Mann",precio:"546"},
{codigo:"18268",descripcion :"Filtro Aire AI C 27 103 Mann",precio:"3873"},
{codigo:"18269",descripcion :"Filtro Aire AI C 27 108 Mann",precio:"136,2"},
{codigo:"18270",descripcion :"Filtro Aire AI C 27 124 Mann",precio:"6475"},
{codigo:"18271",descripcion :"Filtro Aire AI C 27 154/1 Mann",precio:"3893"},
{codigo:"18272",descripcion :"Filtro Aire AI C 27 181 Mann",precio:"3803"},
{codigo:"18274",descripcion :"Filtro Aire AI C 2714 Mann",precio:"5418"},
{codigo:"18275",descripcion :"Filtro Aire AI C 2730 Mann",precio:"490"},
{codigo:"18276",descripcion :"Filtro Aire AI C 2731/1 Mann",precio:"118,1"},
{codigo:"18277",descripcion :"Filtro Aire AI C 2736/1 Mann",precio:"5105"},
{codigo:"18278",descripcion :"Filtro Aire AI C 2739 Mann",precio:"655"},
{codigo:"18279",descripcion :"Filtro Aire AI C 2747 Mann",precio:"106,5"},
{codigo:"18280",descripcion :"Filtro Aire AI C 2766 Mann",precio:"3446"},
{codigo:"18281",descripcion :"Filtro Aire AI C 2771 Mann",precio:"3402"},
{codigo:"18282",descripcion :"Filtro Aire AI C 2774 Mann",precio:"983"},
{codigo:"18283",descripcion :"Filtro Aire AI C 2776 Mann",precio:"2275"},
{codigo:"18284",descripcion :"Filtro Aire AI C 2788 Mann",precio:"4515"},
{codigo:"18285",descripcion :"Filtro Aire AI C 28 105 Mann",precio:"4137"},
{codigo:"18286",descripcion :"Filtro Aire AI C 28 107 Mann",precio:"134,9"},
{codigo:"18287",descripcion :"Filtro Aire AI C 28 131 Mann",precio:"2382"},
{codigo:"18288",descripcion :"Filtro Aire AI C 28 136/1 Mann",precio:"2857"},
{codigo:"18289",descripcion :"Filtro Aire AI C 28 136/2 Mann",precio:"2603"},
{codigo:"18290",descripcion :"Filtro Aire AI C 28 149 Mann",precio:"3422"},
{codigo:"18291",descripcion :"Filtro Aire AI C 28 150 Mann",precio:"5981"},
{codigo:"18292",descripcion :"Filtro Aire AI C 28 214/1 Mann",precio:"5260"},
{codigo:"18293",descripcion :"Filtro Aire AI C 2821 Mann",precio:"7225"},
{codigo:"18294",descripcion :"Filtro Aire AI C 2825 Mann",precio:"39,3"},
{codigo:"18295",descripcion :"Filtro Aire AI C 2825/1 Mann",precio:"81,8"},
{codigo:"18296",descripcion :"Filtro Aire AI C 2826 Mann",precio:"525"},
{codigo:"18297",descripcion :"Filtro Aire AI C 2840/10 Mann",precio:"459"},
{codigo:"18298",descripcion :"Filtro Aire AI C 2843/1 Mann",precio:"50,8"},
{codigo:"18299",descripcion :"Filtro Aire AI C 2850 Mann",precio:"750"},
{codigo:"18300",descripcion :"Filtro Aire AI C 2852/2 Mann",precio:"2048"},
{codigo:"18301",descripcion :"Filtro Aire AI C 2860 Mann",precio:"3785"},
{codigo:"18302",descripcion :"Filtro Aire AI C 2860/2 Mann",precio:"159"},
{codigo:"18303",descripcion :"Filtro Aire AI C 2868 Mann",precio:"2832"},
{codigo:"18304",descripcion :"Filtro Aire AI C 2873/1 Mann",precio:"3544"},
{codigo:"18305",descripcion :"Filtro Aire AI C 2874 Mann",precio:"3181"},
{codigo:"18306",descripcion :"Filtro Aire AI C 2884 HD Mann",precio:"617"},
{codigo:"18307",descripcion :"Filtro Aire AI C 2887 Mann",precio:"4382"},
{codigo:"18308",descripcion :"Filtro Aire AI C 29 105 Mann",precio:"6948"},
{codigo:"18309",descripcion :"Filtro Aire AI C 29 1055 Mann",precio:"27384"},
{codigo:"18310",descripcion :"Filtro Aire AI C 29 108. Mann Un",precio:"1467"},
{codigo:"18311",descripcion :"Filtro Aire AI C 29 108/1 Mann",precio:"3968"},
{codigo:"18312",descripcion :"Filtro Aire AI C 29 118 Mann",precio:"4986"},
{codigo:"18313",descripcion :"Filtro Aire AI C 29 122/1 Mann",precio:"5242"},
{codigo:"18315",descripcion :"Filtro Aire AI C 29 126/2 Mann",precio:"6156"},
{codigo:"18316",descripcion :"Filtro Aire AI C 29 126/3 Mann",precio:"503,4"},
{codigo:"18317",descripcion :"Filtro Aire AI C 29 127 Mann",precio:"4001"},
{codigo:"18318",descripcion :"Filtro Aire AI C 29 144 Mann",precio:"4402"},
{codigo:"18319",descripcion :"Filtro Aire AI C 29 198 Mann",precio:"7310"},
{codigo:"18320",descripcion :"Filtro Aire AI C 29 200 Mann",precio:"2701"},
{codigo:"18321",descripcion :"Filtro Aire AI C 2936 Mann",precio:"361"},
{codigo:"18322",descripcion :"Filtro Aire AI C 2942 Mann",precio:"788"},
{codigo:"18323",descripcion :"Filtro Aire AI C 2943 Mann",precio:"6535"},
{codigo:"18324",descripcion :"Filtro Aire AI C 2953/1 Mann",precio:"42,8"},
{codigo:"18325",descripcion :"Filtro Aire AI C 2963/1 Mann",precio:"664"},
{codigo:"18326",descripcion :"Filtro Aire AI C 2964 Mann",precio:"5144"},
{codigo:"18327",descripcion :"Filtro Aire AI C 2970 Mann",precio:"586"},
{codigo:"18328",descripcion :"Filtro Aire AI C 2973 Mann",precio:"3057"},
{codigo:"18329",descripcion :"Filtro Aire AI C 2974 Mann",precio:"4270"},
{codigo:"18330",descripcion :"Filtro Aire AI C 2982/1 Mann",precio:"3135"},
{codigo:"18331",descripcion :"Filtro Aire AI C 2991/1 Mann",precio:"3691"},
{codigo:"18332",descripcion :"Filtro Aire AI C 2991/2 Mann",precio:"4039"},
{codigo:"18333",descripcion :"Filtro Aire AI C 2998/5x Mann",precio:"3003"},
{codigo:"18334",descripcion :"Filtro Aire AI C 2999 Mann",precio:"4636"},
{codigo:"18335",descripcion :"Filtro Aire AI C 30 122 Mann",precio:"12225"},
{codigo:"18338",descripcion :"Filtro Aire AI C 30 189 Mann",precio:"11932"},
{codigo:"18339",descripcion :"Filtro Aire AI C 30 195/2 Mann",precio:"8031"},
{codigo:"18340",descripcion :"Filtro Aire AI C 3027/1 Mann",precio:"6361"},
{codigo:"18341",descripcion :"Filtro Aire AI C 3032/1 Mann",precio:"3129"},
{codigo:"18342",descripcion :"Filtro Aire AI C 3032/5 Mann",precio:"84,2"},
{codigo:"18343",descripcion :"Filtro Aire AI C 3034 Mann",precio:"2971"},
{codigo:"18344",descripcion :"Filtro Aire AI C 3042 Mann",precio:"4305"},
{codigo:"18345",descripcion :"Filtro Aire AI C 3042/1 Mann",precio:"2955"},
{codigo:"18346",descripcion :"Filtro Aire AI C 3061 Mann",precio:"277,1"},
{codigo:"18347",descripcion :"Filtro Aire AI C 3073 Mann",precio:"3843"},
{codigo:"18348",descripcion :"Filtro Aire AI C 3074 Mann",precio:"1803"},
{codigo:"18349",descripcion :"Filtro Aire AI C 3082 Mann",precio:"190,9"},
{codigo:"18350",descripcion :"Filtro Aire AI C 3087 Mann",precio:"1036"},
{codigo:"18351",descripcion :"Filtro Aire AI C 31 101/1 Mann",precio:"7457"},
{codigo:"18352",descripcion :"Filtro Aire AI C 31 104 Mann",precio:"95"},
{codigo:"18353",descripcion :"Filtro Aire AI C 31 126 Mann",precio:"6719"},
{codigo:"18354",descripcion :"Filtro Aire AI C 31 144 Mann",precio:"6221"},
{codigo:"18355",descripcion :"Filtro Aire AI C 31 152/1 Mann",precio:"4168"},
{codigo:"18356",descripcion :"Filtro Aire AI C 31 190 Mann",precio:"9678"},
{codigo:"18357",descripcion :"Filtro Aire AI C 3143 Mann",precio:"330"},
{codigo:"18358",descripcion :"Filtro Aire AI C 3146 Mann",precio:"264,2"},
{codigo:"18359",descripcion :"Filtro Aire AI C 3167/1 Mann",precio:"3033"},
{codigo:"18360",descripcion :"Filtro Aire AI C 3173 Mann",precio:"415"},
{codigo:"18361",descripcion :"Filtro Aire AI C 3177 Mann",precio:"461"},
{codigo:"18362",descripcion :"Filtro Aire AI C 3178 Mann",precio:"4543"},
{codigo:"18364",descripcion :"Filtro Aire AI C 32 102 Mann",precio:"50"},
{codigo:"18365",descripcion :"Filtro Aire AI C 32 120 Mann",precio:"4564"},
{codigo:"18366",descripcion :"Filtro Aire AI C 32 120/1 Mann",precio:"3670"},
{codigo:"18367",descripcion :"Filtro Aire AI C 32 123/1 Mann",precio:"7576"},
{codigo:"18368",descripcion :"Filtro Aire AI C 32 140/1 Mann",precio:"7774"},
{codigo:"18369",descripcion :"Filtro Aire AI C 32 1447 Mann",precio:"1884"},
{codigo:"18370",descripcion :"Filtro Aire AI C 32 154 Mann",precio:"6942"},
{codigo:"18371",descripcion :"Filtro Aire AI C 32 154/1 Mann",precio:"5144"},
{codigo:"18372",descripcion :"Filtro Aire AI C 32 338/1 Mann",precio:"5602"},
{codigo:"18363",descripcion :"Filtro Aire AI C 32 Mann Lt",precio:"2514"},
{codigo:"18373",descripcion :"Filtro Aire AI C 3221 Mann",precio:"987"},
{codigo:"18374",descripcion :"Filtro Aire AI C 3224 Mann",precio:"58,5"},
{codigo:"18375",descripcion :"Filtro Aire AI C 3234 Mann",precio:"185,9"},
{codigo:"18376",descripcion :"Filtro Aire AI C 3242 Mann",precio:"1326"},
{codigo:"18377",descripcion :"Filtro Aire AI C 3251 Mann",precio:"2329"},
{codigo:"18378",descripcion :"Filtro Aire AI C 3254 Mann",precio:"57"},
{codigo:"18379",descripcion :"Filtro Aire AI C 3260 Mann",precio:"4940"},
{codigo:"18380",descripcion :"Filtro Aire AI C 3261 Mann",precio:"4677"},
{codigo:"18381",descripcion :"Filtro Aire AI C 3277 Mann",precio:"41,9"},
{codigo:"18382",descripcion :"Filtro Aire AI C 3284/2 Mann",precio:"4772"},
{codigo:"18383",descripcion :"Filtro Aire AI C 33 102 Mann",precio:"4952"},
{codigo:"18384",descripcion :"Filtro Aire AI C 33 156 Mann",precio:"3269"},
{codigo:"18385",descripcion :"Filtro Aire AI C 33 256 Mann",precio:"8800"},
{codigo:"18386",descripcion :"Filtro Aire AI C 3327 Mann",precio:"669"},
{codigo:"18387",descripcion :"Filtro Aire AI C 3338 Mann",precio:"3739"},
{codigo:"18388",descripcion :"Filtro Aire AI C 3365 Mann",precio:"201,2"},
{codigo:"18389",descripcion :"Filtro Aire AI C 3377 Mann",precio:"4378"},
{codigo:"18390",descripcion :"Filtro Aire AI C 3388 Mann",precio:"116"},
{codigo:"18391",descripcion :"Filtro Aire AI C 3394 Mann",precio:"5615"},
{codigo:"18392",descripcion :"Filtro Aire AI C 34 109 Mann",precio:"2689"},
{codigo:"18393",descripcion :"Filtro Aire AI C 34 116/1 Mann",precio:"5068"},
{codigo:"18394",descripcion :"Filtro Aire AI C 34 175 Mann",precio:"6593"},
{codigo:"18395",descripcion :"Filtro Aire AI C 34 175/1 Mann",precio:"12861"},
{codigo:"18396",descripcion :"Filtro Aire AI C 34 200 Mann",precio:"6878"},
{codigo:"18397",descripcion :"Filtro Aire AI C 3468 Mann",precio:"76,5"},
{codigo:"18399",descripcion :"Filtro Aire AI C 3474 Mann",precio:"3267"},
{codigo:"18400",descripcion :"Filtro Aire AI C 3479 Mann",precio:"459"},
{codigo:"18401",descripcion :"Filtro Aire AI C 3483 Mann",precio:"75,1"},
{codigo:"18402",descripcion :"Filtro Aire AI C 3485 Mann",precio:"81"},
{codigo:"18403",descripcion :"Filtro Aire AI C 3485/1 Mann",precio:"79,7"},
{codigo:"18404",descripcion :"Filtro Aire AI C 3498 Mann",precio:"5892"},
{codigo:"18405",descripcion :"Filtro Aire AI C 35 134 Mann",precio:"7679"},
{codigo:"18406",descripcion :"Filtro Aire AI C 35 148 Mann",precio:"8416"},
{codigo:"18407",descripcion :"Filtro Aire AI C 35 156 Mann",precio:"149,6"},
{codigo:"18408",descripcion :"Filtro Aire AI C 35 215 Mann",precio:"5068"},
{codigo:"18409",descripcion :"Filtro Aire AI C 3534 Mann",precio:"245,9"},
{codigo:"18410",descripcion :"Filtro Aire AI C 3555 Mann",precio:"7508"},
{codigo:"18411",descripcion :"Filtro Aire AI C 3577 Mann",precio:"331"},
{codigo:"18413",descripcion :"Filtro Aire AI C 3594 Mann",precio:"9085"},
{codigo:"18414",descripcion :"Filtro Aire AI C 3594/1 Mann",precio:"6803"},
{codigo:"18415",descripcion :"Filtro Aire AI C 3599 Mann",precio:"218,9"},
{codigo:"18417",descripcion :"Filtro Aire AI C 3698/3-2 Mann Un",precio:"8866"},
{codigo:"18418",descripcion :"Filtro Aire AI C 37 107 Mann",precio:"11992"},
{codigo:"18419",descripcion :"Filtro Aire AI C 37 114 Mann",precio:"182,8"},
{codigo:"18420",descripcion :"Filtro Aire AI C 37 132 Mann Lt",precio:"3957"},
{codigo:"18421",descripcion :"Filtro Aire AI C 37 144 Mann",precio:"1432"},
{codigo:"18422",descripcion :"Filtro Aire AI C 37 145 Mann",precio:"15133"},
{codigo:"18423",descripcion :"Filtro Aire AI C 37 148 Mann",precio:"5210"},
{codigo:"18424",descripcion :"Filtro Aire AI C 37 153 Mann",precio:"1086"},
{codigo:"18425",descripcion :"Filtro Aire AI C 37 153/1 Mann",precio:"2590"},
{codigo:"18426",descripcion :"Filtro Aire AI C 3766 Mann",precio:"10911"},
{codigo:"18427",descripcion :"Filtro Aire AI C 3770 Mann",precio:"1337"},
{codigo:"18428",descripcion :"Filtro Aire AI C 38 145 Mann",precio:"13079"},
{codigo:"18429",descripcion :"Filtro Aire AI C 38 163/1 Mann",precio:"7644"},
{codigo:"18430",descripcion :"Filtro Aire AI C 3828 Mann",precio:"241,3"},
{codigo:"18431",descripcion :"Filtro Aire AI C 3842 Mann",precio:"941"},
{codigo:"18432",descripcion :"Filtro Aire AI C 3871 Mann",precio:"322,9"},
{codigo:"18433",descripcion :"Filtro Aire AI C 3874 Mann",precio:"6757"},
{codigo:"18434",descripcion :"Filtro Aire AI C 3875 Mann",precio:"2504"},
{codigo:"18435",descripcion :"Filtro Aire AI C 39 108 Mann",precio:"5339"},
{codigo:"18436",descripcion :"Filtro Aire AI C 39 160 Mann",precio:"439"},
{codigo:"18437",descripcion :"Filtro Aire AI C 39 161 Mann",precio:"4913"},
{codigo:"18438",descripcion :"Filtro Aire AI C 3993 Mann",precio:"411"},
{codigo:"18439",descripcion :"Filtro Aire AI C 40 107 Mann 1 Un",precio:"4086"},
{codigo:"18440",descripcion :"Filtro Aire AI C 40 124 Mann",precio:"10670"},
{codigo:"18441",descripcion :"Filtro Aire AI C 40 174 Mann",precio:"9293"},
{codigo:"18442",descripcion :"Filtro Aire AI C 40 193 Mann",precio:"20760"},
{codigo:"18443",descripcion :"Filtro Aire AI C 41 121 Mann",precio:"9997"},
{codigo:"18444",descripcion :"Filtro Aire AI C 41 135 Mann",precio:"5547"},
{codigo:"18445",descripcion :"Filtro Aire AI C 41 173 Mann",precio:"8976"},
{codigo:"18446",descripcion :"Filtro Aire AI C 4190 Mann",precio:"12606"},
{codigo:"18447",descripcion :"Filtro Aire AI C 4190/1 Mann",precio:"9888"},
{codigo:"18448",descripcion :"Filtro Aire AI C 42 098 Mann",precio:"1836"},
{codigo:"18449",descripcion :"Filtro Aire AI C 4287 Mann",precio:"87,1"},
{codigo:"18450",descripcion :"Filtro Aire AI C 4287/2 Mann",precio:"6278"},
{codigo:"18451",descripcion :"Filtro Aire AI C 47 109 Mann",precio:"6628"},
{codigo:"18452",descripcion :"Filtro Aire AI C 48 183 Mann",precio:"9311"},
{codigo:"18453",descripcion :"Filtro Aire AI C 58 185/1 Mann",precio:"9477"},
{codigo:"19166",descripcion :"Filtro aire AI CA-4354 Fram",precio:"809"},
{codigo:"19210",descripcion :"Filtro aire AI CA-5111 Fram",precio:"721"},
{codigo:"19219",descripcion :"Filtro aire AI CA-5156 Fram",precio:"529"},
{codigo:"19254",descripcion :"Filtro aire AI CA-5416 Fram",precio:"1284"},
{codigo:"19269",descripcion :"Filtro aire AI CA-5485 EE Fram",precio:"1675"},
{codigo:"19318",descripcion :"Filtro aire AI CA-5827 Fram Un",precio:"102,2"},
{codigo:"19319",descripcion :"Filtro aire AI CA-5837 Fram Lt",precio:"630"},
{codigo:"19438",descripcion :"Filtro aire AI CA-9391 Fram",precio:"94,9"},
{codigo:"19439",descripcion :"Filtro aire AI CA-9393 Fram",precio:"120"},
{codigo:"19486",descripcion :"Filtro aire AI CF-8838 Fram",precio:"273,7"},
{codigo:"19498",descripcion :"Filtro aire AI CF-9878 Fram",precio:"365"},
{codigo:"18539",descripcion :"Filtro Aire AI TA 100 Mann",precio:"583"},
{codigo:"18540",descripcion :"Filtro Aire AI TA 109 Mann",precio:"464"},
{codigo:"18541",descripcion :"Filtro Aire AI TA 112 Mann",precio:"152"},
{codigo:"18542",descripcion :"Filtro Aire AI TA 130 Mann",precio:"209"},
{codigo:"18543",descripcion :"Filtro Aire AI TA 136 Mann",precio:"327"},
{codigo:"18544",descripcion :"Filtro Aire AI TA 145 Mann",precio:"168"},
{codigo:"18545",descripcion :"Filtro Aire AI TA 150 Mann",precio:"155"},
{codigo:"18546",descripcion :"Filtro Aire AI TA 160 Mann",precio:"427"},
{codigo:"18547",descripcion :"Filtro Aire AI TA 163 Mann",precio:"476"},
{codigo:"18548",descripcion :"Filtro Aire AI TA 167 Mann",precio:"203"},
{codigo:"18549",descripcion :"Filtro Aire AI TA 170 Mann",precio:"454"},
{codigo:"18550",descripcion :"Filtro Aire AI TA 20 G Mann",precio:"1521"},
{codigo:"18551",descripcion :"Filtro Aire AI TA 226 Mann",precio:"384"},
{codigo:"18552",descripcion :"Filtro Aire AI TA 270 Mann Lt",precio:"503"},
{codigo:"18553",descripcion :"Filtro Aire AI TA 504 Mann",precio:"559"},
{codigo:"18554",descripcion :"Filtro Aire AI TA 505 Mann",precio:"44,7"},
{codigo:"18555",descripcion :"Filtro Aire AI TA 71 Mann",precio:"539"},
{codigo:"18556",descripcion :"Filtro Aire AI TAP 175 Mann",precio:"413"},
{codigo:"18557",descripcion :"Filtro Aire AI TAP 188 Mann",precio:"159"},
{codigo:"18558",descripcion :"Filtro Aire AI TAP 190 Mann Un",precio:"445"},
{codigo:"18559",descripcion :"Filtro Aire AI TAP 195 Mann",precio:"155"},
{codigo:"18560",descripcion :"Filtro Aire AI TAP 200 Mann",precio:"454"},
{codigo:"18561",descripcion :"Filtro Aire AI TAP 227 Mann",precio:"413"},
{codigo:"18562",descripcion :"Filtro Aire AI TAP 266 Mann",precio:"130"},
{codigo:"18563",descripcion :"Filtro Aire AI TAP 405 Mann Un",precio:"504"},
{codigo:"18564",descripcion :"Filtro Aire AI TAP 517 Mann",precio:"644"},
{codigo:"4011558084356",descripcion :"Filtro aire C 14 013 Mann 1 Un",precio:"2306"},
{codigo:"15468",descripcion :"Filtro aire C 15 008 Mann 1 Un",precio:"10486"},
{codigo:"15526",descripcion :"Filtro aire C 16 010 Mann 1 Un",precio:"4625"},
{codigo:"15356",descripcion :"Filtro aire C 16 134/1 Mann 1 Un",precio:"1191"},
{codigo:"15563",descripcion :"Filtro aire C 16 148 Mann 1 Un",precio:"15570"},
{codigo:"15402",descripcion :"Filtro aire C 18 004 Mann 1 Un",precio:"3977"},
{codigo:"18042",descripcion :"Filtro aire C 1858/2 Mann 1 Un",precio:"2008"},
{codigo:"18109",descripcion :"Filtro aire C 1944 Mann 1 Un",precio:"554"},
{codigo:"7790184751555",descripcion :"Filtro aire C 20 457 Mann 1 Un",precio:"8302"},
{codigo:"16233",descripcion :"Filtro aire C 21 002 Mann 1 Un",precio:"681"},
{codigo:"4011558088132",descripcion :"Filtro aire C 21 002/1 Mann 1 Un",precio:"3392"},
{codigo:"15139",descripcion :"Filtro AIRE C 21 004 Mann",precio:"3532"},
{codigo:"15979",descripcion :"Filtro aire C 21 014 Mann 1 Un",precio:"1851"},
{codigo:"4011558381004",descripcion :"Filtro Aire C 21 106 Mann 1 Un",precio:"6306"},
{codigo:"15420",descripcion :"Filtro aire C 22 024 Mann 1 Un",precio:"5336"},
{codigo:"15127",descripcion :"Filtro aire C 2240 Mann 1 Un",precio:"7102"},
{codigo:"18151",descripcion :"Filtro aire C 2256 Mann 1 Un",precio:"1052"},
{codigo:"18958",descripcion :"Filtro aire C 2295/2 Mann 1 Un",precio:"2170"},
{codigo:"15510",descripcion :"Filtro aire C 23 021 Mann 1 Un",precio:"2536"},
{codigo:"18931",descripcion :"Filtro aire C 23 107 Mann 1 Un",precio:"5481"},
{codigo:"18959",descripcion :"Filtro aire C 2324 Mann 1 Un",precio:"3050"},
{codigo:"4011558060053",descripcion :"Filtro aire C 24 017 Mann 1 Un",precio:"2842"},
{codigo:"16275",descripcion :"Filtro aire C 24 028/1 Mann 1 Un",precio:"2010"},
{codigo:"15550",descripcion :"Filtro aire C 24 034 Mann 1 Un",precio:"2072"},
{codigo:"15125",descripcion :"Filtro aire C 24 137/1 Mann 1 Un",precio:"6597"},
{codigo:"15165",descripcion :"Filtro Aire C 2420- Mann 1 Un",precio:"3362"},
{codigo:"4011558010560",descripcion :"Filtro aire C 2439 Mann 1 Un",precio:"4256"},
{codigo:"4011558043629",descripcion :"Filtro aire C 25 008/1 Mann 1 Un",precio:"6338"},
{codigo:"18932",descripcion :"Filtro aire C 25 118/1 Mann 1 Un",precio:"1283"},
{codigo:"18226",descripcion :"Filtro aire C 2585 Mann 1 Un",precio:"1439"},
{codigo:"18961",descripcion :"Filtro aire C 27 902 Mann 1 Un",precio:"12042"},
{codigo:"7893390204874",descripcion :"Filtro aire C 28 1012 Mann 1 Un",precio:"19405"},
{codigo:"15166",descripcion :"Filtro aire C 29 003 Mann 1 Un",precio:"334"},
{codigo:"4011558072872",descripcion :"Filtro aire C 29 003/1 Mann 1 Un",precio:"1933"},
{codigo:"4011558081447",descripcion :"Filtro aire C 30 100 Mann 1 Un",precio:"2071"},
{codigo:"18336",descripcion :"Filtro aire C 30 125/1 Mann 1 Un",precio:"404"},
{codigo:"4011558075606",descripcion :"Filtro aire C 30 125/4 Mann 1 Un",precio:"2461"},
{codigo:"4011558080624",descripcion :"Filtro aire C 30 904 Mann 1 Un",precio:"2335"},
{codigo:"4011558365608",descripcion :"Filtro aire C 3087/2 Mann 1 Un",precio:"4895"},
{codigo:"15169",descripcion :"Filtro aire C 31 003/1 Mann 1 Un",precio:"4892"},
{codigo:"15070",descripcion :"FILTRO AIRE C 31116 Mann",precio:"7869"},
{codigo:"15073",descripcion :"FILTRO AIRE C 32108 Mann",precio:"8143"},
{codigo:"15519",descripcion :"Filtro aire C 33 006 Mann 1 Un",precio:"3071"},
{codigo:"18962",descripcion :"Filtro aire C 3324 Mann 1 Un",precio:"6410"},
{codigo:"18416",descripcion :"Filtro aire C 3366 Mann 1 Un",precio:"1769"},
{codigo:"15345",descripcion :"Filtro aire C 3485/2 Mann 1 Un",precio:"2088"},
{codigo:"15065",descripcion :"Filtro aire C 35 154 Mann 1 Un",precio:"2894"},
{codigo:"15397",descripcion :"Filtro aire C 3585 Mann 1 Un",precio:"3002"},
{codigo:"15392",descripcion :"Filtro aire C 36 003 Mann 1 Un",precio:"4099"},
{codigo:"15496",descripcion :"Filtro aire C 36 013 Mann 1 Un",precio:"4609"},
{codigo:"15350",descripcion :"Filtro aire C 37 001/1 Mann Un",precio:"3020"},
{codigo:"15148",descripcion :"Filtro aire C 4151 Mann 1 Un",precio:"1880"},
{codigo:"18935",descripcion :"Filtro aire C 4292 Mann 1 Un",precio:"505"},
{codigo:"4011558365509",descripcion :"Filtro aire C 4371/1 Mann 1 Un",precio:"2770"},
{codigo:"18972",descripcion :"Filtro Aire C22113 Mann",precio:"2926"},
{codigo:"15061",descripcion :"FILTRO AIRE C2295/5 Mann",precio:"5069"},
{codigo:"15062",descripcion :"FILTRO AIRE C25116 Mann",precio:"3547"},
{codigo:"15064",descripcion :"FILTRO AIRE C2683 Mann",precio:"8536"},
{codigo:"15057",descripcion :"FILTRO AIRE C27192/1 Mann",precio:"9364"},
{codigo:"18927",descripcion :"FILTRO AIRE C3092 Mann",precio:"2500"},
{codigo:"15008",descripcion :"FILTRO AIRE C32199 Mann",precio:"3714"},
{codigo:"19114",descripcion :"Filtro aire CA 3280 Fram 1 Un",precio:"1950"},
{codigo:"19115",descripcion :"Filtro aire CA 3280 SY Fram 1 Un",precio:"1800"},
{codigo:"19117",descripcion :"Filtro aire CA 3291 Fram 1 Un",precio:"1250"},
{codigo:"19118",descripcion :"Filtro aire CA 3291 SY Fram 1 Un",precio:"1050"},
{codigo:"19143",descripcion :"Filtro aire CA 4202 Fram 1 Un",precio:"1420"},
{codigo:"19145",descripcion :"Filtro aire CA 4202 SY Fram 1 Un",precio:"895"},
{codigo:"19179",descripcion :"Filtro aire CA 4685 SY Fram 1 Un",precio:"1050"},
{codigo:"11022",descripcion :"Filtro aire CA 4822 Motorcraft 1 Un",precio:"248"},
{codigo:"19294",descripcion :"Filtro aire CA 5626 PU Fram 1 Un",precio:"1540"},
{codigo:"19296",descripcion :"Filtro aire CA 5626 SY PU Fram 1 Un",precio:"1080"},
{codigo:"19419",descripcion :"Filtro aire CA 9032 Fram 1 Un",precio:"2040"},
{codigo:"19420",descripcion :"Filtro aire CA 9033 Fram 1 Un",precio:"1305"},
{codigo:"15530",descripcion :"Filtro aire CU 24 006 Mann 1 Un",precio:"3373"},
{codigo:"16254",descripcion :"Filtro aire CU 25 007 Mann 1 Un",precio:"2918"},
{codigo:"15137",descripcion :"Filtro aire CU 2545 Mann 1 Un",precio:"625"},
{codigo:"7790184752309",descripcion :"Filtro aire CU 2621 Mann 1 Un",precio:"1147"},
{codigo:"15386",descripcion :"Filtro aire CU 2842 Mann 1 Un",precio:"3350"},
{codigo:"4011558308902",descripcion :"Filtro aire CU 2939 Mann 1 Un",precio:"4032"},
{codigo:"18507",descripcion :"Filtro aire CU 3448 Mann 1 Un",precio:"2021"},
{codigo:"4011558006600",descripcion :"Filtro aire CU 37 001 Mann 1 Un",precio:"4452"},
{codigo:"15014",descripcion :"Filtro aire CU 4251 Mann 1 Un",precio:"2436"},
{codigo:"16305",descripcion :"Filtro aire CUK 25 001 Mann 1 Un",precio:"3629"},
{codigo:"15346",descripcion :"Filtro aire CUK 2939 Mann 1 Un",precio:"3967"},
{codigo:"15743",descripcion :"Filtro aire WA48010 Wix Mann 1 Un",precio:"981"},
{codigo:"15744",descripcion :"Filtro aire WA48045 Wix Mann 1 Un",precio:"1538"},
{codigo:"15754",descripcion :"Filtro aire WA48845 Wix Mann 1 Un",precio:"1589"},
{codigo:"5050026351148",descripcion :"Filtro aire WA9567 Wix Mann 1 Un",precio:"2640"},
{codigo:"16296",descripcion :"Filtro aire WA9627 Wix Mann 1 Un",precio:"957"},
{codigo:"7790184003647",descripcion :"Filtro aire WA9644 Wix Mann 1 Un",precio:"4275"},
{codigo:"7790184003944",descripcion :"Filtro aire WA9763 Wix Mann 1 Un",precio:"3844"},
{codigo:"5904608980403",descripcion :"Filtro aire WA9804 Wix Mann 1 Un",precio:"2342"},
{codigo:"7893390209664",descripcion :"Filtro aire WP9166 Wix Mann 1 Un",precio:"2079"},
{codigo:"14986",descripcion :"Filtro C 5082 Mann Aire Un",precio:"247"},
{codigo:"15080",descripcion :"Filtro HA CU 2143 Mann",precio:"2673"},
{codigo:"15079",descripcion :"Filtro HA CU 3162 Mann",precio:"3683"},
{codigo:"15157",descripcion :"Filtro HAB CU 2629 Mann",precio:"2699"},
{codigo:"15111",descripcion :"Filtro HAB CU 3554 Mann",precio:"2757"},
{codigo:"15072",descripcion :"FILTRO HAB CU2882 Mann",precio:"2164"},
{codigo:"15086",descripcion :"Filtro HABIT CU 3054 Mann",precio:"3209"},
{codigo:"15009",descripcion :"FILTRO HABITACULO CU 2225 Mann",precio:"2920"},
{codigo:"15128",descripcion :"Filtro Habitaculo CU 2940 Mann",precio:"2862"},
{codigo:"15060",descripcion :"FILTRO HABITACULO CU 3037 Mann",precio:"3079"},
{codigo:"15136",descripcion :"Filtro Habitaculo CU 3337 Mann",precio:"2236"},
{codigo:"15129",descripcion :"Filtro Habitaculo CUK 2940 Mann",precio:"4618"},
{codigo:"15488",descripcion :"Filtro Mann Aire A1212 Un",precio:"119"},
{codigo:"18897",descripcion :"Filtro MANN aire C 11 102 Lt",precio:"6275"},
{codigo:"15511",descripcion :"Filtro Mann Aire C 2372 Un",precio:"2764"},
{codigo:"15489",descripcion :"Filtro Mann Aire C 24 011 Un",precio:"9130"},
{codigo:"15465",descripcion :"Filtro Mann Aire C 24 021 Un",precio:"6747"},
{codigo:"15491",descripcion :"Filtro Mann Aire C 24 032 Un",precio:"5602"},
{codigo:"15492",descripcion :"Filtro Mann Aire C 27 004 Un",precio:"6753"},
{codigo:"15490",descripcion :"Filtro Mann Aire C 27 014 Un",precio:"4231"},
{codigo:"14988",descripcion :"Filtro Mann Aire C 30 011 Un",precio:"5783"},
{codigo:"15506",descripcion :"Filtro Mann Aire C 3033 Un",precio:"7404"},
{codigo:"14990",descripcion :"Filtro Mann Aire C 36 145 Un",precio:"299"},
{codigo:"15500",descripcion :"Filtro Mann Aire C 36 188",precio:"11162"},
{codigo:"15515",descripcion :"Filtro Mann Aire C 4312/1",precio:"4011"},
{codigo:"14982",descripcion :"Filtro Mann Aire C27 161 Un",precio:"5367"},
{codigo:"15540",descripcion :"Filtro Mann Aire CU 1835 Un",precio:"2970"},
{codigo:"11012",descripcion :"Filtro aceite PH 2956 Motorcraft",precio:"308"},
{codigo:"15556",descripcion :"98FU/9155/AA Motorcraft 1 Un",precio:"231"},
{codigo:"15608",descripcion :"FIL 5S65 / 9155 / AA Motorcraft 1 Un",precio:"262"},
{codigo:"8717",descripcion :"FIL C P 11047 Fram 1 Un",precio:"3001"},
{codigo:"14928",descripcion :"FIL CO AB39/9B072/AC/ Motorcraft Un",precio:"823"},
{codigo:"14910",descripcion :"FIL CO AB3J/9176/AC Motorcraft comb Un",precio:"1447"},
{codigo:"14913",descripcion :"FIL CO AM55/9155/AA/ Motorcraft Un",precio:"617"},
{codigo:"14758",descripcion :"FIL CO C/10353/OPE Motorcraft Unidad 1 U",precio:"1141"},
{codigo:"16456",descripcion :"FIL CO C11723 Fram 1 Un",precio:"2509"},
{codigo:"8718",descripcion :"FIL CO E3BZ/9155/B/ Fram 1 Un",precio:"5930"},
{codigo:"14878",descripcion :"FIL CO FCS 710 Motorcraft Combustible Un",precio:"1040"},
{codigo:"14835",descripcion :"FIL CO FCS/704 Motorcraft Unidad Un",precio:"1056"},
{codigo:"14884",descripcion :"FIL CO G/3829// Motorcraft Combustible U",precio:"496"},
{codigo:"14837",descripcion :"FIL CO G/5540 Motorcraft Unidad Un",precio:"235"},
{codigo:"14753",descripcion :"FIL CO G/7367/OPE Un",precio:"586"},
{codigo:"14838",descripcion :"FIL CO G/7729 Motorcraft COMB Unidad Un",precio:"1841"},
{codigo:"14839",descripcion :"FIL CO G/9960 Motorcraft Un",precio:"363"},
{codigo:"14889",descripcion :"FIL CO P/10689/ Motorcraft Combustible U",precio:"2638"},
{codigo:"16471",descripcion :"FIL CO P/12462 Motorcraft 1 Un",precio:"7234"},
{codigo:"16464",descripcion :"FIL CO PS/12053 Motorcraft 1 Un",precio:"5537"},
{codigo:"14813",descripcion :"FIL CO RFG/92 Motorcraft Un",precio:"1156"},
{codigo:"7790184003722",descripcion :"FIL CO WF10281 Mann 1 Un",precio:"5195"},
{codigo:"16461",descripcion :"FIL CO WF33097 Mann 1 Un",precio:"588"},
{codigo:"16558",descripcion :"FIL COMB C 9990 Motorcraft 1 Un",precio:"1120"},
{codigo:"14834",descripcion :"FIL Comb C/10039//ECO Motorcraft Unidad",precio:"314"},
{codigo:"16561",descripcion :"FIL COMB G 10147 Motorcraft 1 Un",precio:"2279"},
{codigo:"16472",descripcion :"FIL COMB G12783 Fram 1 Un",precio:"1421"},
{codigo:"11044",descripcion :"FIL COMB MANN WK 57/2",precio:"59"},
{codigo:"11061",descripcion :"FIL COMB MANN WK 614/4",precio:"37"},
{codigo:"11062",descripcion :"FIL COMB MANN WK 614/5",precio:"37"},
{codigo:"11096",descripcion :"FIL COMB MANN WK 830/5",precio:"37"},
{codigo:"11108",descripcion :"FIL COMB MANN WK 845/5",precio:"30"},
{codigo:"11112",descripcion :"FIL COMB MANN WK 853/3",precio:"50"},
{codigo:"15566",descripcion :"FIL COMB P/9811// Motorcraft 1 Un",precio:"1266"},
{codigo:"4011558680305",descripcion :"FIL COMB PU 999/1 X Mann 1 Un",precio:"7046"},
{codigo:"4011558862305",descripcion :"FIL COMB WDK 962/16 Mann 1 Un",precio:"5671"},
{codigo:"7893390800991",descripcion :"FIL COMB WK 1050/1 Mann 1 Un",precio:"8059"},
{codigo:"4011558938505",descripcion :"FIL COMB WK 1149 Mann 1 Un",precio:"6334"},
{codigo:"4011558969806",descripcion :"FIL COMB WK 1156/1 Mann 1 Un",precio:"9829"},
{codigo:"14941",descripcion :"FIL COMBUSTIBLE C/11507 Motorcraft Un",precio:"1209"},
{codigo:"14945",descripcion :"FIL COMBUSTIBLE PS/9451 Motorcraft Un",precio:"1481"},
{codigo:"14900",descripcion :"FIL FRAM CO G/9291/ Motorcraft Combustib",precio:"630"},
{codigo:"14916",descripcion :"FIL MOTORCR CO 2M5Z/9155/AB/-N Un",precio:"907"},
{codigo:"14865",descripcion :"FIL MOTORCRAFT CO 90541151/00/37 Motorcr",precio:"1148"},
{codigo:"14868",descripcion :"FIL MOTORCRAFT CO G 10230 Motorcraft Uni",precio:"801"},
{codigo:"14897",descripcion :"FIL MOTORCRAFT CO G/3802// Unidad Un",precio:"280"},
{codigo:"14896",descripcion :"FIL MOTORCRAFT CO G/8018// Unidad Un",precio:"317"},
{codigo:"14843",descripcion :"FIL MOTORCRAFT CO P/10695 Motorcraft Un",precio:"3139"},
{codigo:"14849",descripcion :"FIL MOTORCRAFT CO PS/10042 Motorcraft Un",precio:"1195"},
{codigo:"14979",descripcion :"FIL PS/9420//OPE Motorcraft Un",precio:"556"},
{codigo:"15542",descripcion :"FIL R/FG/44/DM COMB Motorcraft 1 Un",precio:"860"},
{codigo:"16271",descripcion :"FIL WIX CO WF8302 Mann 1 Un",precio:"9899"},
{codigo:"11998",descripcion :"Filtro Comb 2S65 9155 BA Motorcraft Un",precio:"366"},
{codigo:"11930",descripcion :"Filtro comb C 11860 PL Motorcraft",precio:"143"},
{codigo:"11021",descripcion :"Filtro Comb C 8827 Motorcraft",precio:"964"},
{codigo:"14249",descripcion :"Filtro Comb C 9712 Motorcraft Un",precio:"1657"},
{codigo:"11956",descripcion :"Filtro comb CG 8953 Motorcraft",precio:"418"},
{codigo:"11872",descripcion :"Filtro comb CG/8673 Motorcraft",precio:"289"},
{codigo:"11790",descripcion :"Filtro Comb FG 877 Motorcraft",precio:"63,5"},
{codigo:"11015",descripcion :"Filtro comb G 12 Motorcraft",precio:"83"},
{codigo:"11903",descripcion :"Filtro comb G 5493 Motorcraft",precio:"877"},
{codigo:"14251",descripcion :"Filtro Comb G 5738 Motorcraft",precio:"1119"},
{codigo:"11863",descripcion :"Filtro comb G/7099 Motorcraft",precio:"268"},
{codigo:"11868",descripcion :"Filtro comb G/8078 Motorcraft",precio:"195,6"},
{codigo:"11843",descripcion :"Filtro Comb Motorcraft R/FG/88 Motorcraf",precio:"243,6"},
{codigo:"11915",descripcion :"filtro comb p 4836 Motorcraft",precio:"2314"},
{codigo:"11958",descripcion :"Filtro comb P 5162 Motorcraft",precio:"509"},
{codigo:"14176",descripcion :"Filtro comb P 5163 Motorcraft",precio:"309"},
{codigo:"14164",descripcion :"Filtro comb P 5652 Motorcraft",precio:"586"},
{codigo:"14250",descripcion :"Filtro Comb P 9903 Motorcraft",precio:"2182"},
{codigo:"11883",descripcion :"Filtro comb P/5173 Motorcraft",precio:"593"},
{codigo:"11999",descripcion :"Filtro Comb P/8043 Motorcraft",precio:"488"},
{codigo:"11965",descripcion :"Filtro comb PS 4922 Motorcraft",precio:"1438"},
{codigo:"14301",descripcion :"Filtro comb PS 8784 Motorcraft",precio:"964"},
{codigo:"11955",descripcion :"Filtro comb PS 8950 Motorcraft",precio:"1020"},
{codigo:"14161",descripcion :"Filtro comb R FG 82 Motorcraft",precio:"33,28"},
{codigo:"11943",descripcion :"Filtro Comb R/FG/41/OPE Motorcraft",precio:"130,29"},
{codigo:"11856",descripcion :"Filtro comb RE/FG/31/9 Motorcraft",precio:"494"},
{codigo:"11966",descripcion :"Filtro comb REFG 316 Motorcraft",precio:"427"},
{codigo:"11857",descripcion :"Filtro comb RFG 83 Motorcraft",precio:"416"},
{codigo:"11853",descripcion :"Filtro Comb RFG 874 Motorcraft",precio:"236"},
{codigo:"11940",descripcion :"Filtro comb RFG 90 motorcraft",precio:"647"},
{codigo:"11982",descripcion :"Filtro Comb RL/FG/43 Motorcraft",precio:"37"},
{codigo:"14773",descripcion :"Filtro Combustible P/10287/OPE",precio:"1038"},
{codigo:"15473",descripcion :"Filtro Fram Comb C/9927// Un",precio:"1018"},
{codigo:"15467",descripcion :"Filtro Fram Combustible C9766ECO Un",precio:"332"},
{codigo:"15495",descripcion :"Filtro Motorcraft Comb /1780195// Un",precio:"840"},
{codigo:"11786",descripcion :"Filtro Motorcraft Comb /FG/2/",precio:"118"},
{codigo:"14999",descripcion :"Filtro Motorcraft Comb 98fu/9155/aa Un",precio:"231"},
{codigo:"11799",descripcion :"Filtro Motorcraft Comb C-11861 PL",precio:"218"},
{codigo:"11802",descripcion :"Filtro Motorcraft Comb C-11909 PL",precio:"74,8"},
{codigo:"11805",descripcion :"Filtro Motorcraft Comb C-4661",precio:"298"},
{codigo:"11806",descripcion :"Filtro Motorcraft Comb C-5897",precio:"75,9"},
{codigo:"11807",descripcion :"Filtro Motorcraft Comb C-5940",precio:"171"},
{codigo:"11808",descripcion :"Filtro Motorcraft Comb C-8820",precio:"244"},
{codigo:"11809",descripcion :"Filtro Motorcraft Comb C-8837",precio:"678"},
{codigo:"15525",descripcion :"Filtro Motorcraft Comb CH 9713ECO Un",precio:"100"},
{codigo:"11795",descripcion :"Filtro Motorcraft Comb EFG 381 Un",precio:"964"},
{codigo:"11797",descripcion :"Filtro Motorcraft Comb EFG/316//",precio:"500"},
{codigo:"11788",descripcion :"Filtro Motorcraft Comb EFG/317//",precio:"108,2"},
{codigo:"11794",descripcion :"Filtro Motorcraft Comb EFG/48//",precio:"436"},
{codigo:"11787",descripcion :"Filtro Motorcraft Comb FG/873//",precio:"54,2"},
{codigo:"11812",descripcion :"Filtro Motorcraft Comb G-3727",precio:"279"},
{codigo:"11815",descripcion :"Filtro Motorcraft Comb G-3747",precio:"90"},
{codigo:"11817",descripcion :"Filtro Motorcraft Comb G-4143",precio:"63,8"},
{codigo:"11822",descripcion :"Filtro Motorcraft Comb G-5312",precio:"59,9"},
{codigo:"11823",descripcion :"Filtro Motorcraft Comb G-5355",precio:"294"},
{codigo:"14324",descripcion :"FILTRO MOTORCRAFT COMB G-5540",precio:"104,5"},
{codigo:"11824",descripcion :"Filtro Motorcraft Comb G-5561",precio:"451"},
{codigo:"11825",descripcion :"Filtro Motorcraft Comb G-5603",precio:"189,2"},
{codigo:"11826",descripcion :"Filtro Motorcraft Comb G-5607",precio:"659"},
{codigo:"11828",descripcion :"Filtro Motorcraft Comb G-5857",precio:"2255"},
{codigo:"11829",descripcion :"Filtro Motorcraft Comb G-5870",precio:"765"},
{codigo:"11830",descripcion :"Filtro Motorcraft Comb G-5995",precio:"646"},
{codigo:"11831",descripcion :"Filtro Motorcraft Comb G-6400",precio:"376"},
{codigo:"11832",descripcion :"Filtro Motorcraft Comb G-6459",precio:"38,1"},
{codigo:"11833",descripcion :"Filtro Motorcraft Comb G-6677",precio:"78,3"},
{codigo:"11835",descripcion :"Filtro Motorcraft Comb G-7393",precio:"204"},
{codigo:"11836",descripcion :"Filtro Motorcraft Comb G-7399",precio:"93,61"},
{codigo:"11837",descripcion :"Filtro Motorcraft Comb G-7599",precio:"3027"},
{codigo:"14313",descripcion :"FILTRO MOTORCRAFT COMB G-7649 Unidad",precio:"223"},
{codigo:"11839",descripcion :"Filtro Motorcraft Comb G-8835",precio:"140,4"},
{codigo:"11840",descripcion :"Filtro Motorcraft Comb P-3401",precio:"445"},
{codigo:"11841",descripcion :"Filtro Motorcraft Comb P-4178",precio:"409"},
{codigo:"11842",descripcion :"Filtro Motorcraft Comb P-4549 A",precio:"310"},
{codigo:"11844",descripcion :"Filtro Motorcraft Comb P-5537",precio:"1288"},
{codigo:"11845",descripcion :"Filtro Motorcraft Comb P-5653",precio:"105,29"},
{codigo:"11846",descripcion :"Filtro Motorcraft Comb P-5672",precio:"155,4"},
{codigo:"14311",descripcion :"FILTRO MOTORCRAFT COMB P-8935",precio:"751"},
{codigo:"11848",descripcion :"Filtro Motorcraft Comb PS-4886",precio:"1999"},
{codigo:"11850",descripcion :"Filtro Motorcraft Comb PS-5896",precio:"5005"},
{codigo:"11851",descripcion :"Filtro Motorcraft Comb R FG 32",precio:"143"},
{codigo:"11849",descripcion :"Filtro Motorcraft Comb R FG 89",precio:"654"},
{codigo:"11827",descripcion :"Filtro Motorcraft Comb R/FG//39",precio:"67,9"},
{codigo:"11820",descripcion :"Filtro Motorcraft Comb R/FG//6",precio:"188"},
{codigo:"11847",descripcion :"Filtro Motorcraft Comb R/FG//85",precio:"472,3"},
{codigo:"11838",descripcion :"Filtro Motorcraft Comb R/FG//87",precio:"195"},
{codigo:"11789",descripcion :"Filtro Motorcraft Comb R/FG/43/",precio:"86,8"},
{codigo:"11816",descripcion :"Filtro Motorcraft Comb R/FG/87/2",precio:"560"},
{codigo:"11854",descripcion :"Filtro Motorcraft Comb RE/FG/3/15",precio:"87"},
{codigo:"11792",descripcion :"Filtro Motorcraft Comb RFG/30//",precio:"556"},
{codigo:"11796",descripcion :"Filtro Motorcraft Comb RL/FG/41/",precio:"421"},
{codigo:"11784",descripcion :"Filtro Motorcraft Comb RL/FG/42/",precio:"256"},
{codigo:"11785",descripcion :"Filtro Motorcraft Comb RL/FG/45/",precio:"304"},
{codigo:"11793",descripcion :"Filtro Motorcraft Comb RL/FG/46/",precio:"420"},
{codigo:"11803",descripcion :"Filtro Motorcraft omb C-3 PL",precio:"85,4"},
{codigo:"11996",descripcion :"Filtro nafta G 8018 motorcraft",precio:"50,4"},
{codigo:"15537",descripcion :"FIL A 1751529 ACEITE Motorcraft 1 Un",precio:"233"},
{codigo:"16444",descripcion :"FIL AC CF/10892 Motorcraft 1 Un",precio:"313"},
{codigo:"14874",descripcion :"FIL AC CH 10246 Motorcraft Unidad Un",precio:"2712"},
{codigo:"16557",descripcion :"FIL AC CH 11120 Motorcraft 1 Un",precio:"1670"},
{codigo:"8882",descripcion :"FIL AC CH 11498 Fram 1 Un",precio:"1282"},
{codigo:"8881",descripcion :"FIL AC CH 9301 Fram 1 Un",precio:"820"},
{codigo:"14898",descripcion :"FIL AC CH/10047// Motorcraft Aceite Un",precio:"405"},
{codigo:"14930",descripcion :"FIL AC CH/10532//P Motorcraft Un",precio:"189,1"},
{codigo:"14929",descripcion :"FIL AC CH/10759 Motorcraft Un",precio:"1487"},
{codigo:"16235",descripcion :"FIL AC CH/11299/ECO Fram 1 Un",precio:"590"},
{codigo:"14917",descripcion :"FIL AC CH/11673// Motorcraft Un",precio:"921"},
{codigo:"16245",descripcion :"FIL AC CH/11724 Motorcraft 1 Un",precio:"1715"},
{codigo:"14727",descripcion :"FIL AC CH/9814/OPE Motorcraft Un",precio:"221"},
{codigo:"14777",descripcion :"FIL AC CH/9954/OPE Motorcraft Un",precio:"690"},
{codigo:"15981",descripcion :"FIL AC EM5G Motorcraft 1 Un",precio:"261"},
{codigo:"16555",descripcion :"FIL AC F PH 12482 Motorcraft 1 Un",precio:"610"},
{codigo:"16429",descripcion :"FIL AC FL/400/s Motorcraft 1 Un",precio:"339"},
{codigo:"7893390400481",descripcion :"FIL AC H 12 110/2 X Mann 1 Un",precio:"6173"},
{codigo:"4011558024680",descripcion :"FIL AC HU 7003 x Mann 1 Un",precio:"4741"},
{codigo:"7893390401136",descripcion :"FIL AC HU 718/1 X Mann 1 Un",precio:"7018"},
{codigo:"14840",descripcion :"FIL AC L/352 Motorcraft Unidad Un",precio:"238"},
{codigo:"14842",descripcion :"FIL AC L/418 Motorcraft Un",precio:"361"},
{codigo:"15579",descripcion :"FIL AC L/419// Motorcraft 1 Un",precio:"310"},
{codigo:"16255",descripcion :"FIL AC PH 10268 Motorcraft 1 Un",precio:"492"},
{codigo:"14887",descripcion :"FIL AC PH 10600 Motorcraft ACEITE Un",precio:"506"},
{codigo:"8883",descripcion :"FIL AC PH 11275 Fram 1 Un",precio:"744"},
{codigo:"8884",descripcion :"FIL AC PH 11440 Fram 1 Un",precio:"863"},
{codigo:"16276",descripcion :"FIL AC PH/10757 Motorcraft 1 Un",precio:"2638"},
{codigo:"14978",descripcion :"FIL AC PH/2852// Motorcraft Un",precio:"377"},
{codigo:"14847",descripcion :"FIL AC PH/5203 Motorcraft Unidad Un",precio:"232"},
{codigo:"16474",descripcion :"FIL AC PH/5548A Motorcraft 1 Un",precio:"1879"},
{codigo:"14747",descripcion :"FIL AC PH/5717/OPE Motorcraft Un",precio:"380"},
{codigo:"14848",descripcion :"FIL AC PH/9566 Motorcraft ACEITE Un",precio:"1794"},
{codigo:"14895",descripcion :"FIL AC R/FL/45 Motorcraft Unidad Un",precio:"396"},
{codigo:"4011558732707",descripcion :"FIL AC W 1170/7 Mann 1 Un",precio:"7139"},
{codigo:"4011558734107",descripcion :"FIL AC W 716/1 Mann 1 Un",precio:"441"},
{codigo:"15826",descripcion :"FIL AC WIX WA42492 Mann 1 Un",precio:"305"},
{codigo:"15839",descripcion :"FIL AC WIX WA42505 Mann 1 Un",precio:"201"},
{codigo:"15840",descripcion :"FIL AC WIX WA42506 Mann 1 Un",precio:"225"},
{codigo:"15969",descripcion :"FIL AC WIX WA43015 Mann 1 Un",precio:"92"},
{codigo:"7893390402607",descripcion :"FIL AC WIX WL57187 Mann 1 Un",precio:"1393"},
{codigo:"14940",descripcion :"FIL ACEITE CS/10145// Motorcraft Un",precio:"752"},
{codigo:"15560",descripcion :"FIL ACEITE EM5G/6731/AA AC Motorcraft 1",precio:"276"},
{codigo:"14931",descripcion :"FIL ACEITE PH/10044 Un",precio:"1620"},
{codigo:"14934",descripcion :"FIL ACEITE PH/2966 Motorcraft Un",precio:"116,7"},
{codigo:"14944",descripcion :"FIL ACEITE PH/5713 Motorcraft Un",precio:"580"},
{codigo:"14937",descripcion :"FIL ACEITE PH/5803// Un",precio:"666"},
{codigo:"9033",descripcion :"FIL AI CA 12097 Fram 1 Un",precio:"1879"},
{codigo:"14927",descripcion :"FIL AI CN15/9601/AB/ Motorcraft Un",precio:"611"},
{codigo:"16556",descripcion :"FIL AIR CA 12066 Motorcraft 1 Un",precio:"1192"},
{codigo:"16466",descripcion :"FIL KIT HILUX 2.5 TD/ 3.0 TDI-WA9644 + 5",precio:"1867"},
{codigo:"14841",descripcion :"FIL L358 ACEITE Motorcraft Un",precio:"93,1"},
{codigo:"14850",descripcion :"FIL MOTORCRAFT AC CH/9584// Motorcraft U",precio:"1314"},
{codigo:"14844",descripcion :"FIL MOTORCRAFT AC PH/10060 Motorcraft Un",precio:"956"},
{codigo:"14845",descripcion :"FIL MOTORCRAFT AC PH/2 Motorcraft Unidad",precio:"221"},
{codigo:"14846",descripcion :"FIL MOTORCRAFT AC PH/5123 Motorcraft Uni",precio:"2111"},
{codigo:"15499",descripcion :"Fil Motorcraft Aceite CH/9462 Un",precio:"1010"},
{codigo:"15561",descripcion :"FIL PH/11447 ACEITE Motorcraft 1 Un",precio:"529"},
{codigo:"14977",descripcion :"FIL PH/2821// Motorcraft Un",precio:"220,8"},
{codigo:"14271",descripcion :"Fil R/FL/44/OPE Motorcraft 1 Un",precio:"420"},
{codigo:"14876",descripcion :"FIL. AC CH 10358 Motorcraft Unidad Un",precio:"1274"},
{codigo:"14275",descripcion :"Filtro AC 1807516 Motorcraft",precio:"403"},
{codigo:"11880",descripcion :"Filtro AC/135941 Motorcraft Un",precio:"199,18"},
{codigo:"11562",descripcion :"Filtro Aceite /FL//20 Motorcraft",precio:"300"},
{codigo:"11020",descripcion :"Filtro aceite 2821 Motorcraft",precio:"324"},
{codigo:"14302",descripcion :"Filtro aceite AC PH 3600 Motorcraft",precio:"228"},
{codigo:"14354",descripcion :"Filtro aceite C 1191 Motorcraft Lt",precio:"176"},
{codigo:"11952",descripcion :"Filtro aceite CH 2930 Motorcraft",precio:"940"},
{codigo:"11961",descripcion :"Filtro aceite CH 5640 Motorcraft",precio:"665"},
{codigo:"11974",descripcion :"Filtro aceite CH 8158 Motorcraft",precio:"306"},
{codigo:"11565",descripcion :"Filtro Aceite CH 8530 Motorcraft",precio:"1186"},
{codigo:"11939",descripcion :"Filtro aceite CH 8814 motorcraft",precio:"46,6"},
{codigo:"11992",descripcion :"Filtro aceite CH 9305 motorcraft",precio:"876"},
{codigo:"11945",descripcion :"Filtro aceite ch 9443 Motorcraft",precio:"1078"},
{codigo:"11949",descripcion :"Filtro aceite ch 9580 Motorcraft",precio:"766"},
{codigo:"11001",descripcion :"Filtro aceite CH 9657 Motorcraft",precio:"1062"},
{codigo:"11545",descripcion :"Filtro Aceite EFL/257 Motorcraft",precio:"214"},
{codigo:"11554",descripcion :"Filtro Aceite EFL/295 (PH5796) Motorcraf",precio:"232"},
{codigo:"11555",descripcion :"Filtro Aceite EFL/600 Motorcraft Un",precio:"221"},
{codigo:"11601",descripcion :"Filtro Aceite FL 1 A Motorcraft",precio:"285"},
{codigo:"11954",descripcion :"Filtro aceite HPH 6349 Motorcraft",precio:"1517"},
{codigo:"18894",descripcion :"FILTRO ACEITE L 1068 PUROLATOR",precio:"90"},
{codigo:"11018",descripcion :"Filtro aceite P 3522 Motorcraft",precio:"104,1"},
{codigo:"11013",descripcion :"Filtro aceite P 4183 Motorcraft",precio:"101,1"},
{codigo:"11885",descripcion :"Filtro aceite P/3828 Motorcraft",precio:"667"},
{codigo:"11007",descripcion :"Filtro aceite PH 2801 B/OPE Motorcraft",precio:"589"},
{codigo:"14264",descripcion :"Filtro aceite PH 2870A. Motorcraft 1 Un",precio:"772"},
{codigo:"11008",descripcion :"Filtro aceite PH 3980 Motorcraft",precio:"211"},
{codigo:"11016",descripcion :"Filtro aceite PH 4479 Motorcraft",precio:"504"},
{codigo:"11014",descripcion :"Filtro aceite PH 4482 Motorcraft",precio:"406"},
{codigo:"11898",descripcion :"Filtro aceite PH 4847 Motorcraft",precio:"329,6"},
{codigo:"11867",descripcion :"Filtro aceite PH 4847 Motorcraft Un",precio:"502"},
{codigo:"11024",descripcion :"Filtro aceite PH 4887 Motorcraft",precio:"1072"},
{codigo:"11582",descripcion :"Filtro Aceite PH 4908 Motorcraft",precio:"345"},
{codigo:"11975",descripcion :"Filtro aceite PH 4952 Motorcraft",precio:"266"},
{codigo:"11905",descripcion :"Filtro aceite ph 5190 Motorcraft",precio:"2479"},
{codigo:"11916",descripcion :"Filtro aceite ph 5317 Motorcraft",precio:"185"},
{codigo:"11017",descripcion :"Filtro aceite PH 5443 Motorcraft",precio:"671"},
{codigo:"11023",descripcion :"Filtro aceite PH 5566 Motorcraft Un",precio:"643"},
{codigo:"11005",descripcion :"Filtro aceite PH 5592 Motorcraft",precio:"2569"},
{codigo:"11933",descripcion :"Filtro aceite PH 5594 Motorcraft",precio:"286"},
{codigo:"11947",descripcion :"Filtro aceite ph 5754 Motorcraft",precio:"900"},
{codigo:"11973",descripcion :"Filtro aceite PH 5796 Motorcraft",precio:"1846"},
{codigo:"11972",descripcion :"Filtro aceite PH 5831 Motorcraft",precio:"524"},
{codigo:"11918",descripcion :"Filtro aceite ph 5949 Motorcraft",precio:"1960"},
{codigo:"11917",descripcion :"Filtro aceite ph 6357 Motorcraft",precio:"274,8"},
{codigo:"11934",descripcion :"Filtro aceite PH 6811 Motorcraft",precio:"375"},
{codigo:"14252",descripcion :"Filtro Aceite PH 8E Motorcraft",precio:"321"},
{codigo:"11960",descripcion :"Filtro aceite PH 977 Motorcraft",precio:"498"},
{codigo:"11942",descripcion :"Filtro Aceite PH/3593/A/OPE Motorcraft",precio:"932"},
{codigo:"11890",descripcion :"Filtro aceite PH/3682 Motorcraft 1 Un",precio:"226"},
{codigo:"11870",descripcion :"Filtro aceite PH/5343 Motorcraft",precio:"134,7"},
{codigo:"11901",descripcion :"Filtro Aceite PH/5552// Motorcraft",precio:"745"},
{codigo:"11869",descripcion :"Filtro aceite PH/5594/A Motorcraft",precio:"111,2"},
{codigo:"11889",descripcion :"Filtro aceite PH/5885 Motorcraft",precio:"858"},
{codigo:"11981",descripcion :"Filtro Aceite PH/9503 Motorcraft Un",precio:"3150"},
{codigo:"11602",descripcion :"Filtro Aceite R/F 19/9 Motorcraft Aceite",precio:"184"},
{codigo:"11858",descripcion :"Filtro Aceite R/FL/200 Motorcraft Motorc",precio:"219"},
{codigo:"11553",descripcion :"Filtro aceite RFL 38 Motorcraft Un",precio:"300"},
{codigo:"11543",descripcion :"Filtro Aceite RFL/33// Motorcraft",precio:"258"},
{codigo:"4011558068271",descripcion :"Filtro aceite W 7050 Mann 1 Un",precio:"2665"},
{codigo:"11010",descripcion :"Filtro aire CA 5501 Motorcraft",precio:"228"},
{codigo:"14613",descripcion :"Filtro CF/9645//OPE Motorcraft Un",precio:"235"},
{codigo:"14618",descripcion :"Filtro CH/10075/OPE Aceite Motorcraft",precio:"329"},
{codigo:"14985",descripcion :"Filtro CH/10090 Motorcraft Aceite Un",precio:"717"},
{codigo:"14622",descripcion :"Filtro CH/8087/OPE Aceite Motorcraft",precio:"692"},
{codigo:"14980",descripcion :"Filtro CH/9382 Motorcraft Aceite Un",precio:"157"},
{codigo:"14615",descripcion :"Filtro CH/9911/OPE Aceite Motorcraft",precio:"1012"},
{codigo:"14614",descripcion :"Filtro CH-9461 Aceite Motorcraft",precio:"1445"},
{codigo:"11953",descripcion :"Filtro comb RE FG 25 A Motorcraft",precio:"564"},
{codigo:"14983",descripcion :"Filtro Fram Aceite C10194 Un",precio:"1181"},
{codigo:"14987",descripcion :"Filtro Fram Aceite Ch 11208 ECO Un",precio:"1012"},
{codigo:"15475",descripcion :"Filtro Fram Aceite CH/11475// Un",precio:"202"},
{codigo:"15478",descripcion :"Filtro Fram Aceite L/332 Un",precio:"238"},
{codigo:"15479",descripcion :"Filtro Fram Aceite L/470// Un",precio:"160"},
{codigo:"15480",descripcion :"Filtro Fram Aceite LS/386// Un",precio:"206"},
{codigo:"11929",descripcion :"Filtro Fram Aceite PH 6607 Un",precio:"1403"},
{codigo:"15462",descripcion :"Filtro Fram Aceite PH3569 ST",precio:"1002"},
{codigo:"15482",descripcion :"Filtro Fram Aceite R/FL/37/ Un",precio:"233"},
{codigo:"14307",descripcion :"FILTRO MOTORCRAFT AC PH-2846 Unidad",precio:"240"},
{codigo:"14308",descripcion :"FILTRO MOTORCRAFT AC PH-9 Unidad",precio:"921"},
{codigo:"15494",descripcion :"Filtro Motorcraft Aceite /1119421/ Un",precio:"145"},
{codigo:"11558",descripcion :"Filtro Motorcraft Aceite CH-4536",precio:"1071"},
{codigo:"11559",descripcion :"Filtro Motorcraft Aceite CH-5320",precio:"358"},
{codigo:"11560",descripcion :"Filtro Motorcraft Aceite CH-5679",precio:"78,7"},
{codigo:"11561",descripcion :"Filtro Motorcraft Aceite CH-5993",precio:"301"},
{codigo:"11563",descripcion :"Filtro Motorcraft Aceite CH-6848",precio:"617"},
{codigo:"11564",descripcion :"Filtro Motorcraft Aceite CH-8081",precio:"677"},
{codigo:"11566",descripcion :"Filtro Motorcraft Aceite CH-8776",precio:"47,3"},
{codigo:"11527",descripcion :"Filtro Motorcraft Aceite EFL/117//",precio:"245"},
{codigo:"11537",descripcion :"Filtro Motorcraft Aceite EFL/125//",precio:"316"},
{codigo:"11539",descripcion :"Filtro Motorcraft Aceite EFL/149//",precio:"385"},
{codigo:"11536",descripcion :"Filtro Motorcraft Aceite EFL/154//",precio:"360"},
{codigo:"11538",descripcion :"Filtro Motorcraft Aceite EFL/167//",precio:"292"},
{codigo:"11531",descripcion :"Filtro Motorcraft Aceite EFL/271//",precio:"68,5"},
{codigo:"11546",descripcion :"Filtro Motorcraft Aceite EFL/273//",precio:"226"},
{codigo:"11542",descripcion :"Filtro Motorcraft Aceite EFL/283//",precio:"214"},
{codigo:"11544",descripcion :"Filtro Motorcraft Aceite EFL/310//",precio:"257"},
{codigo:"11548",descripcion :"Filtro Motorcraft Aceite EFL/344//",precio:"300"},
{codigo:"11534",descripcion :"Filtro Motorcraft Aceite EFL/90//",precio:"183"},
{codigo:"11556",descripcion :"Filtro Motorcraft Aceite FL/1//",precio:"259"},
{codigo:"11557",descripcion :"Filtro Motorcraft Aceite FL/173//",precio:"73,2"},
{codigo:"11540",descripcion :"Filtro Motorcraft Aceite FL/814//",precio:"297"},
{codigo:"11568",descripcion :"Filtro Motorcraft Aceite P-967",precio:"280"},
{codigo:"15516",descripcion :"Filtro Motorcraft Aceite PH 10127 Un",precio:"425"},
{codigo:"15464",descripcion :"Filtro Motorcraft Aceite PH 5566/2 Un",precio:"372"},
{codigo:"11938",descripcion :"Filtro Motorcraft Aceite PH 9566 Un",precio:"788"},
{codigo:"14327",descripcion :"FILTRO MOTORCRAFT ACEITE PH-13 Unidad",precio:"219"},
{codigo:"11569",descripcion :"Filtro Motorcraft Aceite PH-2825",precio:"240"},
{codigo:"11570",descripcion :"Filtro Motorcraft Aceite PH-2849",precio:"64,9"},
{codigo:"11571",descripcion :"Filtro Motorcraft Aceite PH-2850",precio:"307"},
{codigo:"11572",descripcion :"Filtro Motorcraft Aceite PH-2861 B",precio:"284"},
{codigo:"11573",descripcion :"Filtro Motorcraft Aceite PH-2862 C",precio:"262"},
{codigo:"11574",descripcion :"Filtro Motorcraft Aceite PH-2863",precio:"325"},
{codigo:"11575",descripcion :"Filtro Motorcraft Aceite PH-2898",precio:"251"},
{codigo:"11576",descripcion :"Filtro Motorcraft Aceite PH-2951",precio:"1061"},
{codigo:"11577",descripcion :"Filtro Motorcraft Aceite PH-2954",precio:"267"},
{codigo:"11579",descripcion :"Filtro Motorcraft Aceite PH-3614",precio:"702"},
{codigo:"11580",descripcion :"Filtro Motorcraft Aceite PH-4751",precio:"1274"},
{codigo:"11581",descripcion :"Filtro Motorcraft Aceite PH-4854",precio:"481"},
{codigo:"11583",descripcion :"Filtro Motorcraft Aceite PH-4967 Un",precio:"655"},
{codigo:"11584",descripcion :"Filtro Motorcraft Aceite PH-4997",precio:"305"},
{codigo:"11585",descripcion :"Filtro Motorcraft Aceite PH-4998",precio:"269"},
{codigo:"11586",descripcion :"Filtro Motorcraft Aceite PH-5113",precio:"52,2"},
{codigo:"11587",descripcion :"Filtro Motorcraft Aceite PH-5114",precio:"48"},
{codigo:"11588",descripcion :"Filtro Motorcraft Aceite PH-5139",precio:"337"},
{codigo:"11589",descripcion :"Filtro Motorcraft Aceite PH-5230",precio:"60,9"},
{codigo:"11590",descripcion :"Filtro Motorcraft Aceite PH-5375",precio:"513"},
{codigo:"11591",descripcion :"Filtro Motorcraft Aceite PH-5426",precio:"59,8"},
{codigo:"11592",descripcion :"Filtro Motorcraft Aceite PH-5548",precio:"3353"},
{codigo:"11593",descripcion :"Filtro Motorcraft Aceite PH-5616",precio:"375,5"},
{codigo:"11594",descripcion :"Filtro Motorcraft Aceite PH-5645",precio:"117,2"},
{codigo:"11595",descripcion :"Filtro Motorcraft Aceite PH-5752",precio:"1115"},
{codigo:"11596",descripcion :"Filtro Motorcraft Aceite PH-6355",precio:"2184"},
{codigo:"11597",descripcion :"Filtro Motorcraft Aceite PH-6552",precio:"102,1"},
{codigo:"11598",descripcion :"Filtro Motorcraft Aceite PH-7317",precio:"960"},
{codigo:"11599",descripcion :"Filtro Motorcraft Aceite R FL 39",precio:"100,7"},
{codigo:"11603",descripcion :"Filtro Motorcraft Aceite R/FL//23",precio:"332"},
{codigo:"11578",descripcion :"Filtro Motorcraft Aceite R/FL//8",precio:"307"},
{codigo:"11604",descripcion :"Filtro Motorcraft Aceite R/FL/2/4",precio:"459"},
{codigo:"11605",descripcion :"Filtro Motorcraft Aceite R/FL/3/6",precio:"414"},
{codigo:"11606",descripcion :"Filtro Motorcraft Aceite R/FL/3/7",precio:"58,9"},
{codigo:"11533",descripcion :"Filtro Motorcraft Aceite RFL/15//",precio:"316"},
{codigo:"11535",descripcion :"Filtro Motorcraft Aceite RFL/18 Un",precio:"433"},
{codigo:"11550",descripcion :"Filtro Motorcraft Aceite RFL/31//",precio:"1024"},
{codigo:"11551",descripcion :"Filtro Motorcraft Aceite RL/FL/40/",precio:"238"},
{codigo:"11547",descripcion :"Filtro Motorcraft Aceite RL/FL/41/",precio:"204"},
{codigo:"11541",descripcion :"Filtro Motorcraft Aceite RL/FL/42/",precio:"278"},
{codigo:"11526",descripcion :"Filtro Motorcraft Aceite RL/FL/43/",precio:"82"},
{codigo:"11532",descripcion :"Filtro Motorcraft Aceite RL/FL/44/",precio:"266"},
{codigo:"11552",descripcion :"Filtro Motorcraft Aceite RL/FL/46/",precio:"214"},
{codigo:"11530",descripcion :"Filtro Motorcraft Aceite RL/FL/47/",precio:"389"},
{codigo:"11549",descripcion :"Filtro Motorcraft Aceite RL/FL/48/",precio:"73,9"},
{codigo:"14268",descripcion :"Filtro Motorcraft CH 9973 Aceite Un",precio:"2777"},
{codigo:"14682",descripcion :"Filtro PH /6017/A/OPE26 Aceite Motorcraf",precio:"147"},
{codigo:"14670",descripcion :"Filtro PH 9637/OPE26 Aceite Motorcraft",precio:"568"},
{codigo:"18970",descripcion :"Filtro PH/2809/A/OPE Motorcraft",precio:"30,4"},
{codigo:"14718",descripcion :"Filtro PH/4386/OPE26 Aceite Motorcraft",precio:"286"},
{codigo:"14669",descripcion :"Filtro PH/4722/OPE26 Aceite Motorcraft",precio:"224"},
{codigo:"14710",descripcion :"Filtro PH/5529/OPE26 Aceite Motorcraft",precio:"618"},
{codigo:"14635",descripcion :"Filtro PH/9648/OPE Aceite Motorcraft",precio:"139,65"},
{codigo:"11529",descripcion :"Filtro RF/1300 Motorcraft Aceite Motorcr",precio:"136"},
{codigo:"11924",descripcion :"Filtro RFL 10 Aceite Motorcraft",precio:"258"},
{codigo:"16469",descripcion :"KIT FIESTA KINETIC-WA9606 + WL7459 Mann",precio:"792"},
{codigo:"16467",descripcion :"KIT FIL Ranger 3.2 / 2.2-WA9763 + WL7508",precio:"3061"},
{codigo:"16468",descripcion :"KIT S-10 CD 2.8 CTDI-WA10456 + WL10121 +",precio:"4821"},
{codigo:"14965",descripcion :"CA/10197// Motorcraft Un",precio:"2020"},
{codigo:"14255",descripcion :"EFA/580// Motorcraft AIRE Un",precio:"235"},
{codigo:"14966",descripcion :"FiIL CA/10261// Motorcraft Un",precio:"811"},
{codigo:"15978",descripcion :"FIL A R/FA 01 DM Motorcraft 1 Un",precio:"527"},
{codigo:"14922",descripcion :"FIL AC /1343102// Motorcraft Un",precio:"171,4"},
{codigo:"7797954957704",descripcion :"FIL AC CA 12174 Fram 1 Un",precio:"2391"},
{codigo:"16563",descripcion :"FIL AC CH 12176 Motorcraft 1 Un",precio:"1563"},
{codigo:"14923",descripcion :"FIL AI /1418712// Motorcraft Unidad Un",precio:"492,8"},
{codigo:"14819",descripcion :"FIL AI A/1057 Motorcraft Unidad Un",precio:"409"},
{codigo:"14872",descripcion :"FIL AI A-1381 Motorcraft Unidad Un",precio:"420"},
{codigo:"14886",descripcion :"FIL AI AB3J/9601/AB Motorcraft AIRE Un",precio:"932"},
{codigo:"14893",descripcion :"FIL AI BE8Z/9601/A Motorcraft aire Un",precio:"493"},
{codigo:"8885",descripcion :"FIL AI C 16010 Fram 1 Un",precio:"1788"},
{codigo:"14875",descripcion :"FIL AI CA 10314 Motorcraft Unidad Un",precio:"1809"},
{codigo:"9020",descripcion :"FIL AI CA 10355 Fram 1 Un",precio:"1806"},
{codigo:"9031",descripcion :"FIL AI CA 10518 Fram 1 Un",precio:"1072"},
{codigo:"14880",descripcion :"FIL AI CA 10521 Aire Un",precio:"4266"},
{codigo:"9026",descripcion :"FIL AI CA 10653 Fram 1 Un",precio:"1202"},
{codigo:"9028",descripcion :"FIL AI CA 11501 Fram 1 Un",precio:"1438"},
{codigo:"9030",descripcion :"FIL AI CA 11503 Fram 1 Un",precio:"3451"},
{codigo:"9027",descripcion :"FIL AI CA 11652 Fram 1 Un",precio:"1222"},
{codigo:"9022",descripcion :"FIL AI CA 12003 Fram 1 Un",precio:"958"},
{codigo:"9032",descripcion :"FIL AI CA 12097 Fram 1 Un",precio:"1879"},
{codigo:"9029",descripcion :"FIL AI CA 12112 Fram 1 Un",precio:"2855"},
{codigo:"7797954005382",descripcion :"FIL AI CA 12180 Fram 1 Un",precio:"3492"},
{codigo:"9024",descripcion :"FIL AI CA 12242 Fram 1 Un",precio:"1564"},
{codigo:"9023",descripcion :"FIL AI CA 12344 Fram 1 Un",precio:"1434"},
{codigo:"14883",descripcion :"FIL AI CA 8243 Motorcraft Aire Un",precio:"477"},
{codigo:"9019",descripcion :"FIL AI CA 9329 FRAM Fram 1 Un",precio:"675"},
{codigo:"14816",descripcion :"FIL AI CA 9410 Motorcraft AIRE Un",precio:"3353"},
{codigo:"14882",descripcion :"FIL AI CA 9754 Motorcraft Un",precio:"200,8"},
{codigo:"14879",descripcion :"FIL AI CA 9764 Motorcraft Aire Un",precio:"114,2"},
{codigo:"14768",descripcion :"FIL AI CA/10085/OPE Motorcraft Unidad Un",precio:"1087"},
{codigo:"14759",descripcion :"FIL AI CA/10190/OPE Motorcraft Unidad Un",precio:"1312"},
{codigo:"14873",descripcion :"FIL AI CA/10234 Motorcraft Un",precio:"868"},
{codigo:"14820",descripcion :"FIL AI CA/10276 Motorcraft Unidad Un",precio:"1524"},
{codigo:"14894",descripcion :"FIL AI CA/10278// Motorcraft Aire Un",precio:"309"},
{codigo:"14888",descripcion :"FIL AI CA/10344// Motorcraft Unidad Un",precio:"1715"},
{codigo:"16277",descripcion :"FIL AI CA/10509 Motorcraft 1 Un",precio:"1569"},
{codigo:"14914",descripcion :"FIL AI CA/10516// Fram Un",precio:"615"},
{codigo:"14823",descripcion :"FIL AI CA/10650 Motorcraft Unidad Un",precio:"1304"},
{codigo:"16425",descripcion :"FIL AI CA/10651 Motorcraft 1 Un",precio:"1398"},
{codigo:"14821",descripcion :"FIL AI CA/10696 Motorcraft Unidad Un",precio:"983"},
{codigo:"14822",descripcion :"FIL AI CA/10697 Motorcraft Un",precio:"2495"},
{codigo:"14909",descripcion :"FIL AI CA/10739// Motorcraft Unidad Un",precio:"711"},
{codigo:"14920",descripcion :"FIL AI CA/10891 Fram Un",precio:"345"},
{codigo:"14899",descripcion :"FIL AI CA/11104// Motorcraft Un",precio:"958"},
{codigo:"16420",descripcion :"FIL AI CA/11113 Motorcraft 1 Un",precio:"464"},
{codigo:"16299",descripcion :"FIL AI CA/11458 Motorcraft 1 Un",precio:"1772"},
{codigo:"15551",descripcion :"FIL AI CA/11493// Motorcraft 1 Un",precio:"981"},
{codigo:"16463",descripcion :"FIL AI CA/11952 Motorcraft 1 Un",precio:"1270"},
{codigo:"16300",descripcion :"FIL AI CA/12055 Motorcraft 1 Un",precio:"1785"},
{codigo:"14824",descripcion :"FIL AI CA/2718 Motorcraft Unidad Un",precio:"175"},
{codigo:"14825",descripcion :"FIL AI CA/3167 Motorcraft Unidad Un",precio:"385"},
{codigo:"14826",descripcion :"FIL AI CA/4329 Motorcraft Unidad Un",precio:"344"},
{codigo:"14725",descripcion :"FIL AI CA/4974/OPE Motorcraft Unidad Un",precio:"674"},
{codigo:"14827",descripcion :"FIL AI CA/5229 Motorcraft Unidad Un",precio:"800"},
{codigo:"14828",descripcion :"FIL AI CA/5370 Motorcraft Unidad Un",precio:"282"},
{codigo:"14829",descripcion :"FIL AI CA/5485 Motorcraft Unidad Un",precio:"366"},
{codigo:"14830",descripcion :"FIL AI CA/5488 Motorcraft Unidad Un",precio:"485"},
{codigo:"14915",descripcion :"FIL AI CA/5513 Motorcraft Un",precio:"704"},
{codigo:"14617",descripcion :"FIL AI CA/5716/OPE Un",precio:"803"},
{codigo:"14831",descripcion :"FIL AI CA/5941 Motorcraft Unidad Un",precio:"988"},
{codigo:"14832",descripcion :"FIL AI CA/5967 Motorcraft Unidad Un",precio:"1271"},
{codigo:"15578",descripcion :"FIL AI CA/8736// Motorcraft 1 Un",precio:"990"},
{codigo:"14734",descripcion :"FIL AI CA/8996/OPE Unidad Un",precio:"1912"},
{codigo:"14735",descripcion :"FIL AI CA/9078/OPE Motorcraft 1 Un",precio:"284"},
{codigo:"14751",descripcion :"FIL AI CA/9113/OPE Motorcraft Un",precio:"333"},
{codigo:"14736",descripcion :"FIL AI CA/9284/OPE Unidad Un",precio:"1023"},
{codigo:"14761",descripcion :"FIL AI CA/9482/OPE Motorcraft Un",precio:"639"},
{codigo:"14738",descripcion :"FIL AI CA/9754/OPE Motorcraft Un",precio:"1305"},
{codigo:"14763",descripcion :"FIL AI CA/9849/OPE Motorcraft Un",precio:"1838"},
{codigo:"16658",descripcion :"FIL AI CA-12052 Fram 1 Un",precio:"7313"},
{codigo:"7893390201613",descripcion :"FIL AI CF 1550 Mann 1 Un",precio:"10320"},
{codigo:"7797954003302",descripcion :"FIL AI Cf/10285 Fram 1 Un",precio:"2086"},
{codigo:"14919",descripcion :"FIL AI CN11/9601/AD Motorcraft Un",precio:"263,2"},
{codigo:"9021",descripcion :"FIL AI FIL AI CA 5948 Fram 1 Un",precio:"2213"},
{codigo:"16560",descripcion :"FIL AIR CA 11654 Motorcraft 1 Un",precio:"1702"},
{codigo:"16562",descripcion :"FIL AIR CA 12342 Motorcraft 1 Un",precio:"1606"},
{codigo:"16559",descripcion :"FIL AIR CA 9991 Motorcraft 1 Un",precio:"1523"},
{codigo:"16500",descripcion :"FIL AIR CA/12315 Motorcraft Un",precio:"5297"},
{codigo:"16529",descripcion :"FIL AIR F CA 10131 Motorcraft 1 Un",precio:"1242"},
{codigo:"15567",descripcion :"FIL AIRE 98FU/9155/AA Motorcraft 1 Un",precio:"967"},
{codigo:"14902",descripcion :"FIL AIRE A/1056// Motorcraft Un",precio:"0"},
{codigo:"14981",descripcion :"Fil Aire A/1406//-P Motorcraft Un",precio:"370"},
{codigo:"14943",descripcion :"FIL AIRE CA/10115 Motorcraft Un",precio:"1806"},
{codigo:"14935",descripcion :"FIL AIRE CA/10236 Motorcraft Un",precio:"605"},
{codigo:"15569",descripcion :"FIL AIRE Ca/10879// Motorcraft 1 Un",precio:"1574"},
{codigo:"15527",descripcion :"FIL AIRE CA/11674 Motorcraft 1 Un",precio:"3659"},
{codigo:"15565",descripcion :"FIL AIRE CA/3333 Motorcraft 1 Un",precio:"236"},
{codigo:"15570",descripcion :"FIL AIRE CA/5377/D/ Motorcraft 1 Un",precio:"1320"},
{codigo:"14932",descripcion :"FIL AIRE CA/5456 Un",precio:"905"},
{codigo:"14903",descripcion :"FIL AIRE CA/5496// Fram Un",precio:"551"},
{codigo:"14939",descripcion :"FIL AIRE CA/5627 Un",precio:"726"},
{codigo:"14933",descripcion :"FIL AIRE CA/9493 Motorcraft Un",precio:"304"},
{codigo:"14936",descripcion :"FIL AIRE CA/9754 Un",precio:"203,51"},
{codigo:"15564",descripcion :"FIL AIRE EM5G/6714 AA Motorcraft 1 Un",precio:"276"},
{codigo:"14912",descripcion :"FIL AIRE FRAM CA/5164 Un",precio:"231"},
{codigo:"11231",descripcion :"FIL AIRE MANN C 1286/1",precio:"17"},
{codigo:"11245",descripcion :"FIL AIRE MANN C 14 177",precio:"50"},
{codigo:"11254",descripcion :"FIL AIRE MANN C 15 105",precio:"32"},
{codigo:"11292",descripcion :"FIL AIRE MANN C 2127",precio:"30"},
{codigo:"11317",descripcion :"FIL AIRE MANN C 24 650/3",precio:"104"},
{codigo:"11318",descripcion :"FIL AIRE MANN C 2426",precio:"30"},
{codigo:"11408",descripcion :"FIL AIRE MANN C 30 116",precio:"43"},
{codigo:"11443",descripcion :"FIL AIRE MANN C 34 105",precio:"32"},
{codigo:"11474",descripcion :"FIL AIRE MANN C 60 230",precio:"33"},
{codigo:"11477",descripcion :"FIL AIRE MANN H 1397X",precio:"33"},
{codigo:"14877",descripcion :"FIL CA 10293 Motorcraft Aire Un",precio:"1310"},
{codigo:"9025",descripcion :"FIL CA CA 11096 Fram 1 Un",precio:"1127"},
{codigo:"14871",descripcion :"FIL CA/10520 Motorcraft Unidad Un",precio:"561"},
{codigo:"14967",descripcion :"FIL CA/10947 Motorcraft Un",precio:"223"},
{codigo:"14901",descripcion :"FIL CA/10997// Motorcraft Aire Un",precio:"1900"},
{codigo:"14968",descripcion :"FIL CA/160//OPE Motorcraft Un",precio:"400"},
{codigo:"14969",descripcion :"FIL CA/4499//OPE Motorcraft Un",precio:"315"},
{codigo:"14970",descripcion :"FIL CA/5682// Motorcraft Un",precio:"200"},
{codigo:"14815",descripcion :"FIL CA/8747 Motorcraft Unidad Un",precio:"421"},
{codigo:"14972",descripcion :"FIL CA/9097//OPE Motorcraft AIRE Un",precio:"702"},
{codigo:"14973",descripcion :"FIL CA/9230//OPE Motorcraft Un",precio:"507"},
{codigo:"14974",descripcion :"FIL CA/9525//OPE Motorcraft Un",precio:"705"},
{codigo:"14975",descripcion :"FIL CA/9589 Motorcraft Un",precio:"1180"},
{codigo:"14976",descripcion :"FIL CA/9921 Motorcraft Un",precio:"653"},
{codigo:"7797954957735",descripcion :"FIL CA12430 Motorcraft Aire 1 Un",precio:"2792"},
{codigo:"14794",descripcion :"FIL CF/5551 Motorcraft Un",precio:"320"},
{codigo:"14904",descripcion :"FIL FRAM AI CA/11112// AIRE Un",precio:"1283"},
{codigo:"14925",descripcion :"FIL FRAM AI CA/5513 D Un",precio:"100,5"},
{codigo:"14787",descripcion :"FIL HAB CF/8838/OPE Motorcraft Un",precio:"339"},
{codigo:"14784",descripcion :"FIL HAB CF/9071/OPE Motorcraft Un",precio:"476"},
{codigo:"14795",descripcion :"FIL HAB CF/9294/OPE Motorcraft Un",precio:"357"},
{codigo:"14796",descripcion :"FIL HAB CF/9398/OPE Motorcraft Un",precio:"1033"},
{codigo:"14797",descripcion :"FIL HAB CF/9406/OPE Motorcraft Un",precio:"395"},
{codigo:"14938",descripcion :"FIL HABITA CF/9881// Motorcraft Un",precio:"516"},
{codigo:"14924",descripcion :"FIL MOTORCRAFT AI /1698684// Un",precio:"785"},
{codigo:"14809",descripcion :"FIL MOTORCRAFT AI 9N15/9601/AA Motorcraf",precio:"409"},
{codigo:"14867",descripcion :"FIL MOTORCRAFT AI CA 10085 Motorcraft Un",precio:"195"},
{codigo:"14921",descripcion :"FIL MOTORCRAFT AI CA/11077 Unidad Un",precio:"2588"},
{codigo:"14890",descripcion :"FIL MOTORCRAFT AI CA/8797 Unidad Un",precio:"664"},
{codigo:"14971",descripcion :"FIL Motorcraft AIRE CA/8768// Un",precio:"500"},
{codigo:"14911",descripcion :"FIL POLEN CF/10892//P Motorcraft Un",precio:"173,1"},
{codigo:"16246",descripcion :"FIL R/FA/17/dm Motorcraft 1 Un",precio:"277"},
{codigo:"14661",descripcion :"Filt AI CA/10130/OPE Motorcraft aire Un",precio:"681"},
{codigo:"14662",descripcion :"Filtro 10131/OPE26 Aire Motorcraft",precio:"451"},
{codigo:"14663",descripcion :"Filtro 10456/OPE26 Aire Motorcraft",precio:"278"},
{codigo:"14657",descripcion :"Filtro 5125/OPE Aire Motorcraft",precio:"611"},
{codigo:"14610",descripcion :"FILTRO AI CA/9711/OPE Motorcraft",precio:"1197"},
{codigo:"14810",descripcion :"Filtro Aire 1/708/877 Motorcraft 1 Un",precio:"381"},
{codigo:"11984",descripcion :"Filtro Aire 2N1U/9601/CB Motorcraft 1 Un",precio:"0"},
{codigo:"19428",descripcion :"Filtro aire AI CA-9283 Fram Un",precio:"260,2"},
{codigo:"14272",descripcion :"Filtro aire CA 10111 Motorcraft",precio:"2382"},
{codigo:"14270",descripcion :"Filtro aire CA 10112 Motorcraft",precio:"2283"},
{codigo:"11009",descripcion :"Filtro aire CA 192 Motorcraft",precio:"435"},
{codigo:"11019",descripcion :"Filtro aire CA 4202 Motorcraft",precio:"1149"},
{codigo:"11910",descripcion :"Filtro aire ca 4255 Motorcraft",precio:"2324"},
{codigo:"11123",descripcion :"Filtro aire CA 4692 SY Motorcraft",precio:"777"},
{codigo:"11862",descripcion :"Filtro aire CA 5058 Motorcraft",precio:"382"},
{codigo:"11997",descripcion :"Filtro aire CA 5156 G motorcraft",precio:"64,5"},
{codigo:"11026",descripcion :"Filtro aire CA 5229 Motorcraft",precio:"398"},
{codigo:"11911",descripcion :"Filtro aire ca 5304 Motorcraft",precio:"862"},
{codigo:"11959",descripcion :"Filtro aire CA 5309 Motorcraft",precio:"31,82"},
{codigo:"11935",descripcion :"Filtro aire CA 5776 Motorcraft",precio:"102,96"},
{codigo:"11865",descripcion :"Filtro aire CA 5776 Motorcraft 1 Un",precio:"248,8"},
{codigo:"14253",descripcion :"Filtro Aire CA 5827 Motorcraft",precio:"1250"},
{codigo:"11912",descripcion :"Filtro aire ca 5961 Motorcraft",precio:"2028"},
{codigo:"14159",descripcion :"Filtro aire CA 7432 Motorcraft",precio:"477"},
{codigo:"14254",descripcion :"Filtro Aire CA 7617 Motorcraft",precio:"390"},
{codigo:"14183",descripcion :"Filtro aire CA 7737 motorcraft",precio:"70"},
{codigo:"11003",descripcion :"Filtro aire CA 8675 D Motorcraft",precio:"919"},
{codigo:"11000",descripcion :"Filtro aire CA 8847 motorcraft Motorcraf",precio:"1164"},
{codigo:"11919",descripcion :"Filtro aire CA 8963 motorcraft",precio:"515"},
{codigo:"11906",descripcion :"Filtro aire CA 8995 Motorcraft",precio:"649"},
{codigo:"14269",descripcion :"Filtro aire CA 9003 Motorcraft",precio:"755"},
{codigo:"14265",descripcion :"Filtro aire CA 9074 Motorcraft Un",precio:"1319"},
{codigo:"11946",descripcion :"Filtro aire ca 9080 Motorcraft Motorcraf",precio:"1393"},
{codigo:"11995",descripcion :"Filtro aire CA 9082 motorcraft",precio:"524"},
{codigo:"11950",descripcion :"Filtro aire ca 9098 Motorcraft",precio:"492"},
{codigo:"11124",descripcion :"Filtro aire CA 9126 Motorcraft",precio:"353"},
{codigo:"11709",descripcion :"Filtro aire CA 9315 Motorcraft Un",precio:"2159"},
{codigo:"11913",descripcion :"Filtro aire ca 9375 Motorcraft",precio:"91,9"},
{codigo:"11994",descripcion :"Filtro Aire CA 9391 Motorcraft Un",precio:"1353"},
{codigo:"11993",descripcion :"Filtro aire CA 9393 motorcraft",precio:"1313"},
{codigo:"14239",descripcion :"Filtro aire CA 9411 Motorcraft",precio:"183"},
{codigo:"11957",descripcion :"Filtro aire CA 9475 Motorcraft",precio:"513"},
{codigo:"14259",descripcion :"Filtro Aire CA 9833 Motorcraft Un",precio:"1348"},
{codigo:"14258",descripcion :"Filtro Aire CA 9937 Motorcraft",precio:"1027"},
{codigo:"14769",descripcion :"Filtro Aire CA/10256/OPE",precio:"1732"},
{codigo:"11893",descripcion :"Filtro aire CA/2678 Motorcraft",precio:"44,49"},
{codigo:"11891",descripcion :"Filtro aire CA/3115 Motorcraft",precio:"702"},
{codigo:"11866",descripcion :"Filtro aire CA/3295 Motorcraft",precio:"1837"},
{codigo:"11878",descripcion :"Filtro aire CA/4320 Motorcraft",precio:"646"},
{codigo:"11887",descripcion :"Filtro aire CA/5630/A Motorcraft",precio:"241"},
{codigo:"11877",descripcion :"Filtro aire CA/7284 Motorcraft",precio:"123"},
{codigo:"11882",descripcion :"Filtro aire CA/7417 Motorcraft",precio:"168"},
{codigo:"11860",descripcion :"Filtro aire CA/7774 Motorcraft",precio:"458"},
{codigo:"11879",descripcion :"Filtro aire CA/8040 Motorcraft",precio:"445"},
{codigo:"11881",descripcion :"Filtro aire CA/8067 Motorcraft",precio:"63,9"},
{codigo:"11861",descripcion :"Filtro aire CA/8141 Motorcraft",precio:"671"},
{codigo:"11874",descripcion :"Filtro aire CA/8208 Motorcraft",precio:"515"},
{codigo:"11875",descripcion :"Filtro aire CA/8734 Motorcraft",precio:"553"},
{codigo:"11876",descripcion :"Filtro aire CA/8772 Motorcraft",precio:"784"},
{codigo:"11864",descripcion :"Filtro aire CA/8805 Motorcraft",precio:"458"},
{codigo:"14770",descripcion :"Filtro Aire CA/9022/OPE Motorcraft",precio:"2110"},
{codigo:"14668",descripcion :"Filtro Aire CA/9328/OPE Motorcraft",precio:"568"},
{codigo:"11944",descripcion :"Filtro Aire CA/9519//OPE Motorcraft",precio:"890"},
{codigo:"14318",descripcion :"FILTRO AIRE CA-8668 Motorcraft Un",precio:"50,8"},
{codigo:"11979",descripcion :"Filtro Aire CA-8919 Motorcraft",precio:"267"},
{codigo:"11125",descripcion :"Filtro aire PA 4418 Motorcraft",precio:"239"},
{codigo:"11991",descripcion :"Filtro aire RFA 43 Motorcraft",precio:"360"},
{codigo:"11990",descripcion :"Filtro CA 5981 Aire Un",precio:"700"},
{codigo:"14646",descripcion :"Filtro CA/10023/OPE Aire Motorcraft",precio:"1376"},
{codigo:"14685",descripcion :"Filtro CA/10086/OPE26 Aire Motorcraft",precio:"573"},
{codigo:"14638",descripcion :"Filtro CA/10118/OPE Aire Motorcraft",precio:"599"},
{codigo:"14671",descripcion :"Filtro CA/10165/OPE26 Aire Motorcraft",precio:"579"},
{codigo:"14639",descripcion :"Filtro CA/10192/OPE Aire Motorcraft",precio:"1843"},
{codigo:"14722",descripcion :"Filtro CA/10227/OPE26 Aire Motorcraft",precio:"1259"},
{codigo:"14672",descripcion :"Filtro CA/10233/OPE26 Aire Motorcraft",precio:"1506"},
{codigo:"14647",descripcion :"Filtro CA/10237/OPE Aire Motorcraft",precio:"1739"},
{codigo:"14626",descripcion :"Filtro CA/3916/OPE Aire Motorcraft",precio:"38,2"},
{codigo:"11643",descripcion :"Filtro CA/5461// Motorcraft Aire",precio:"397"},
{codigo:"14700",descripcion :"Filtro CA/6558/OPE26 Aire Motorcraft Mot",precio:"349"},
{codigo:"14715",descripcion :"Filtro CA/6900/OPE26 Aire Motorcraft",precio:"370"},
{codigo:"14708",descripcion :"Filtro CA/7344/OPE26 Aire Motorcraft",precio:"371"},
{codigo:"14701",descripcion :"Filtro CA/7368/OPE26 Aire Motorcraft Mot",precio:"499"},
{codigo:"14642",descripcion :"Filtro CA/8817/OPE Aire Motorcraft",precio:"939"},
{codigo:"14643",descripcion :"Filtro CA/9053/OPE Aire Motorcraft",precio:"424"},
{codigo:"14667",descripcion :"Filtro CA/9231/OPE26 Aire Motorcraft",precio:"1246"},
{codigo:"14609",descripcion :"Filtro CA/9409/OPE Aire Motorcraft",precio:"1749"},
{codigo:"14675",descripcion :"Filtro CA/9483/OPE26 Aire Motorcraft Un",precio:"155,7"},
{codigo:"14325",descripcion :"Filtro CA/9511 Motorcraft Un",precio:"919"},
{codigo:"14649",descripcion :"Filtro CA/9764/OPE Aire Motorcraft",precio:"293"},
{codigo:"14611",descripcion :"Filtro CA/9800/OPE Aire Motorcraft",precio:"1135"},
{codigo:"14629",descripcion :"Filtro CA/9902//OPE Aire Motorcraft",precio:"1848"},
{codigo:"14677",descripcion :"Filtro CA/9945/OPE26 Habitaculo Motorcra",precio:"685"},
{codigo:"14801",descripcion :"Filtro CF/10113/OPE Habitaculo Motorcraf",precio:"474"},
{codigo:"14802",descripcion :"Filtro CF/5475/OPE Habitaculo Motorcraft",precio:"559"},
{codigo:"14803",descripcion :"Filtro CF/5863/OPE Habitaculo Motorcraft",precio:"449"},
{codigo:"14806",descripcion :"Filtro CF/9495/OPE Habitaculo Motorcraft",precio:"505"},
{codigo:"15483",descripcion :"Filtro Fram Aceite R/FA/45 Un",precio:"994"},
{codigo:"15484",descripcion :"Filtro Fram Aire A/1227// Un",precio:"344"},
{codigo:"15486",descripcion :"Filtro Fram Aire A/1268// Un",precio:"347"},
{codigo:"15487",descripcion :"Filtro Fram Aire A/1406// Un",precio:"398"},
{codigo:"15463",descripcion :"Filtro Fram Aire ca/10879 Un",precio:"335"},
{codigo:"15474",descripcion :"Filtro Fram Aire CF/10569 Un",precio:"306"},
{codigo:"15476",descripcion :"Filtro Fram Aire CN11/9601/AC/ Un",precio:"302"},
{codigo:"11908",descripcion :"Filtro habitaculo CF 5663 Motorcraft",precio:"346"},
{codigo:"11907",descripcion :"Filtro habitaculo cf 5817 Motorcraft",precio:"430"},
{codigo:"14169",descripcion :"Filtro habitaculo CF 8331 Motorcraft",precio:"432"},
{codigo:"11977",descripcion :"Filtro habitaculo CF/5849 Motorcraft",precio:"334"},
{codigo:"11978",descripcion :"Filtro habitaculo CF/8869 Motorcraft",precio:"498"},
{codigo:"14779",descripcion :"Filtro Habitaculo CF/9084/OPE",precio:"350"},
{codigo:"14780",descripcion :"Filtro Habitaculo CF/9323/OPE",precio:"355"},
{codigo:"11661",descripcion :"Filtro Motorcraft Aire /FA/16/65",precio:"158,9"},
{codigo:"15466",descripcion :"Filtro Motorcraft Aire 2N1U/9601/CB/N Un",precio:"344"},
{codigo:"11617",descripcion :"Filtro Motorcraft Aire B/FA/13/1",precio:"67,9"},
{codigo:"15523",descripcion :"Filtro Motorcraft Aire CA 11222 Un",precio:"940"},
{codigo:"11662",descripcion :"Filtro Motorcraft Aire CA 8668",precio:"725"},
{codigo:"15513",descripcion :"Filtro Motorcraft Aire CA/10116",precio:"345"},
{codigo:"11611",descripcion :"Filtro Motorcraft Aire CA/3154// 1 Un",precio:"447"},
{codigo:"11927",descripcion :"Filtro Motorcraft Aire CA/4813//",precio:"431"},
{codigo:"15531",descripcion :"Filtro Motorcraft Aire CA/5325 Un",precio:"0"},
{codigo:"11989",descripcion :"Filtro Motorcraft Aire CA/8812",precio:"451"},
{codigo:"11922",descripcion :"Filtro Motorcraft Aire CA/8858//",precio:"515"},
{codigo:"11920",descripcion :"Filtro Motorcraft Aire CA/8964//",precio:"919"},
{codigo:"11668",descripcion :"Filtro Motorcraft Aire CA-1566 G",precio:"154"},
{codigo:"11669",descripcion :"Filtro Motorcraft Aire CA-2653",precio:"87,5"},
{codigo:"11670",descripcion :"Filtro Motorcraft Aire CA-2671 PL",precio:"81,9"},
{codigo:"11674",descripcion :"Filtro Motorcraft Aire CA-3164 G",precio:"360"},
{codigo:"11675",descripcion :"Filtro Motorcraft Aire CA-3165",precio:"89,18"},
{codigo:"11676",descripcion :"Filtro Motorcraft Aire CA-3167 G",precio:"196,5"},
{codigo:"11677",descripcion :"Filtro Motorcraft Aire CA-3168",precio:"100,21"},
{codigo:"11678",descripcion :"Filtro Motorcraft Aire CA-3174 B",precio:"632"},
{codigo:"11680",descripcion :"Filtro Motorcraft Aire CA-3333 G",precio:"282"},
{codigo:"11681",descripcion :"Filtro Motorcraft Aire CA-352",precio:"139,9"},
{codigo:"11682",descripcion :"Filtro Motorcraft Aire CA-353",precio:"309"},
{codigo:"11683",descripcion :"Filtro Motorcraft Aire CA-3559",precio:"175"},
{codigo:"11684",descripcion :"Filtro Motorcraft Aire CA-3660",precio:"629"},
{codigo:"11685",descripcion :"Filtro Motorcraft Aire CA-3901",precio:"444"},
{codigo:"11686",descripcion :"Filtro Motorcraft Aire CA-4239",precio:"74,5"},
{codigo:"11687",descripcion :"Filtro Motorcraft Aire CA-4260",precio:"953"},
{codigo:"11688",descripcion :"Filtro Motorcraft Aire CA-4284",precio:"445"},
{codigo:"11689",descripcion :"Filtro Motorcraft Aire CA-4309",precio:"626"},
{codigo:"11690",descripcion :"Filtro Motorcraft Aire CA-4329 G",precio:"177,5"},
{codigo:"11691",descripcion :"Filtro Motorcraft Aire CA-4336",precio:"306"},
{codigo:"11693",descripcion :"Filtro Motorcraft Aire CA-4354 G",precio:"125"},
{codigo:"11695",descripcion :"Filtro Motorcraft Aire CA-4556",precio:"39,91"},
{codigo:"11696",descripcion :"Filtro Motorcraft Aire CA-4563",precio:"78,7"},
{codigo:"11698",descripcion :"Filtro Motorcraft Aire CA-4597",precio:"231"},
{codigo:"11699",descripcion :"Filtro Motorcraft Aire CA-4598",precio:"73,9"},
{codigo:"11702",descripcion :"Filtro Motorcraft Aire CA-4932",precio:"112,9"},
{codigo:"11703",descripcion :"Filtro Motorcraft Aire CA-4950",precio:"58,3"},
{codigo:"11705",descripcion :"Filtro Motorcraft Aire CA-5108",precio:"452"},
{codigo:"11706",descripcion :"Filtro Motorcraft Aire CA-5111 G",precio:"88,8"},
{codigo:"11707",descripcion :"Filtro Motorcraft Aire CA-5140",precio:"255"},
{codigo:"11708",descripcion :"Filtro Motorcraft Aire CA-5144",precio:"368"},
{codigo:"11710",descripcion :"Filtro Motorcraft Aire CA-5272",precio:"106,9"},
{codigo:"11711",descripcion :"Filtro Motorcraft Aire CA-5301",precio:"148,4"},
{codigo:"11712",descripcion :"Filtro Motorcraft Aire CA-5331",precio:"92,6"},
{codigo:"11713",descripcion :"Filtro Motorcraft Aire CA-5350",precio:"517"},
{codigo:"11714",descripcion :"Filtro Motorcraft Aire CA-5358",precio:"378"},
{codigo:"11716",descripcion :"Filtro Motorcraft Aire CA-5371",precio:"354"},
{codigo:"11717",descripcion :"Filtro Motorcraft Aire CA-5377 G",precio:"78"},
{codigo:"11718",descripcion :"Filtro Motorcraft Aire CA-5400",precio:"329"},
{codigo:"11719",descripcion :"Filtro Motorcraft Aire CA-5416 G",precio:"86,9"},
{codigo:"11720",descripcion :"Filtro Motorcraft Aire CA-5447",precio:"155,9"},
{codigo:"11721",descripcion :"Filtro Motorcraft Aire CA-5463",precio:"196"},
{codigo:"11722",descripcion :"Filtro Motorcraft Aire CA-5466",precio:"711"},
{codigo:"11724",descripcion :"Filtro Motorcraft Aire CA-5488 G",precio:"175"},
{codigo:"14310",descripcion :"FILTRO MOTORCRAFT AIRE CA-5492 Unidad",precio:"331"},
{codigo:"11727",descripcion :"Filtro Motorcraft Aire CA-5495",precio:"246"},
{codigo:"11728",descripcion :"Filtro Motorcraft Aire CA-5522",precio:"573"},
{codigo:"11730",descripcion :"Filtro Motorcraft Aire CA-5554",precio:"305"},
{codigo:"11731",descripcion :"Filtro Motorcraft Aire CA-5555",precio:"68,1"},
{codigo:"11732",descripcion :"Filtro Motorcraft Aire CA-5567",precio:"998"},
{codigo:"11733",descripcion :"Filtro Motorcraft Aire CA-5595",precio:"68,8"},
{codigo:"11734",descripcion :"Filtro Motorcraft Aire CA-5611",precio:"507"},
{codigo:"11735",descripcion :"Filtro Motorcraft Aire CA-5613",precio:"634"},
{codigo:"11736",descripcion :"Filtro Motorcraft Aire CA-5627 G",precio:"115"},
{codigo:"11737",descripcion :"Filtro Motorcraft Aire CA-5657",precio:"337"},
{codigo:"11738",descripcion :"Filtro Motorcraft Aire CA-5671",precio:"895"},
{codigo:"11739",descripcion :"Filtro Motorcraft Aire CA-5673",precio:"329"},
{codigo:"11740",descripcion :"Filtro Motorcraft Aire CA-5680",precio:"355"},
{codigo:"11741",descripcion :"Filtro Motorcraft Aire CA-5718",precio:"472"},
{codigo:"11742",descripcion :"Filtro Motorcraft Aire CA-5781",precio:"463"},
{codigo:"11746",descripcion :"Filtro Motorcraft Aire CA-5854",precio:"427"},
{codigo:"11747",descripcion :"Filtro Motorcraft Aire CA-5901",precio:"902"},
{codigo:"11748",descripcion :"Filtro Motorcraft Aire CA-5944",precio:"390"},
{codigo:"11749",descripcion :"Filtro Motorcraft Aire CA-5945",precio:"73,5"},
{codigo:"11750",descripcion :"Filtro Motorcraft Aire CA-5970 Un",precio:"1197"},
{codigo:"11751",descripcion :"Filtro Motorcraft Aire CA-6362",precio:"497"},
{codigo:"11752",descripcion :"Filtro Motorcraft Aire CA-6377",precio:"133,31"},
{codigo:"11753",descripcion :"Filtro Motorcraft Aire CA-6395",precio:"1333"},
{codigo:"11755",descripcion :"Filtro Motorcraft Aire CA-6544",precio:"444"},
{codigo:"11757",descripcion :"Filtro Motorcraft Aire CA-6807",precio:"430"},
{codigo:"11759",descripcion :"Filtro Motorcraft Aire CA-6939",precio:"137,7"},
{codigo:"11760",descripcion :"Filtro Motorcraft Aire CA-7142",precio:"312"},
{codigo:"11761",descripcion :"Filtro Motorcraft Aire CA-7174",precio:"2824"},
{codigo:"11763",descripcion :"Filtro Motorcraft Aire CA-7420",precio:"554"},
{codigo:"11764",descripcion :"Filtro Motorcraft Aire CA-7421",precio:"359"},
{codigo:"11765",descripcion :"Filtro Motorcraft Aire CA-7440",precio:"143,95"},
{codigo:"11766",descripcion :"Filtro Motorcraft Aire CA-7764",precio:"800"},
{codigo:"11767",descripcion :"Filtro Motorcraft Aire CA-7775",precio:"280"},
{codigo:"11769",descripcion :"Filtro Motorcraft Aire CA-8069",precio:"458"},
{codigo:"11770",descripcion :"Filtro Motorcraft Aire CA-8162",precio:"494"},
{codigo:"11771",descripcion :"Filtro Motorcraft Aire CA-8748",precio:"421"},
{codigo:"11772",descripcion :"Filtro Motorcraft Aire CA-8774 Un",precio:"256"},
{codigo:"11773",descripcion :"Filtro Motorcraft Aire CA-8789",precio:"401"},
{codigo:"11774",descripcion :"Filtro Motorcraft Aire CA-8821",precio:"520"},
{codigo:"11776",descripcion :"Filtro Motorcraft Aire CAK-253",precio:"1275"},
{codigo:"15512",descripcion :"Filtro Motorcraft Aire CH 9713 Un",precio:"99"},
{codigo:"11614",descripcion :"Filtro Motorcraft Aire EFA/146//",precio:"366"},
{codigo:"11619",descripcion :"Filtro Motorcraft Aire EFA/227//",precio:"106,8"},
{codigo:"11667",descripcion :"Filtro Motorcraft Aire EFA/250//",precio:"418"},
{codigo:"11613",descripcion :"Filtro Motorcraft Aire EFA/263//",precio:"99,1"},
{codigo:"11623",descripcion :"Filtro Motorcraft Aire EFA/299//",precio:"149,7"},
{codigo:"11627",descripcion :"Filtro Motorcraft Aire EFA/489//",precio:"215"},
{codigo:"11625",descripcion :"Filtro Motorcraft Aire EFA/493//",precio:"522"},
{codigo:"11629",descripcion :"Filtro Motorcraft Aire EFA/532//",precio:"112,8"},
{codigo:"11631",descripcion :"Filtro Motorcraft Aire EFA/539//",precio:"268"},
{codigo:"11628",descripcion :"Filtro Motorcraft Aire EFA/541//",precio:"67,7"},
{codigo:"11633",descripcion :"Filtro Motorcraft Aire EFA/560//",precio:"379"},
{codigo:"11645",descripcion :"Filtro Motorcraft Aire EFA/571//",precio:"70,4"},
{codigo:"11609",descripcion :"Filtro Motorcraft Aire EFA/75//",precio:"66,2"},
{codigo:"15461",descripcion :"Filtro Motorcraft Aire FL/6801// Un",precio:"219"},
{codigo:"11779",descripcion :"Filtro Motorcraft Aire R/FA//19",precio:"403"},
{codigo:"11637",descripcion :"Filtro Motorcraft Aire R/FA//21",precio:"142,6"},
{codigo:"11780",descripcion :"Filtro Motorcraft Aire R/FA//22",precio:"1195"},
{codigo:"11783",descripcion :"Filtro Motorcraft Aire R/FA//6B",precio:"657"},
{codigo:"11777",descripcion :"Filtro Motorcraft Aire R/FA/1/3",precio:"100,7"},
{codigo:"11725",descripcion :"Filtro Motorcraft Aire R/FA/3/2",precio:"113,6"},
{codigo:"11775",descripcion :"Filtro Motorcraft Aire R/FA/30/",precio:"759"},
{codigo:"11671",descripcion :"Filtro Motorcraft Aire R/FA/33/",precio:"143,9"},
{codigo:"11782",descripcion :"Filtro Motorcraft Aire R/FA/6/A",precio:"116,6"},
{codigo:"11726",descripcion :"Filtro Motorcraft Aire RE/FA/1/5",precio:"378"},
{codigo:"11639",descripcion :"Filtro Motorcraft Aire REFA/18//",precio:"339"},
{codigo:"11620",descripcion :"Filtro Motorcraft Aire RFA/1//",precio:"342"},
{codigo:"11655",descripcion :"Filtro Motorcraft Aire RFA/18//",precio:"143"},
{codigo:"11630",descripcion :"Filtro Motorcraft Aire RFA/20//",precio:"612"},
{codigo:"11657",descripcion :"Filtro Motorcraft Aire RFA/27//",precio:"310"},
{codigo:"11665",descripcion :"Filtro Motorcraft Aire RFA/29//",precio:"220"},
{codigo:"11624",descripcion :"Filtro Motorcraft Aire RFA/3//",precio:"138,5"},
{codigo:"11610",descripcion :"Filtro Motorcraft Aire RFA/4//",precio:"408"},
{codigo:"11626",descripcion :"Filtro Motorcraft Aire RFA/5//",precio:"260"},
{codigo:"11658",descripcion :"Filtro Motorcraft Aire RFA/600//",precio:"378"},
{codigo:"11715",descripcion :"Filtro Motorcraft Aire RL FA 79",precio:"126,9"},
{codigo:"11621",descripcion :"Filtro Motorcraft Aire RL/FA/40/",precio:"360"},
{codigo:"11642",descripcion :"Filtro Motorcraft Aire RL/FA/42/",precio:"386"},
{codigo:"11646",descripcion :"Filtro Motorcraft Aire RL/FA/43/",precio:"216"},
{codigo:"11648",descripcion :"Filtro Motorcraft Aire RL/FA/44/",precio:"292"},
{codigo:"11635",descripcion :"Filtro Motorcraft Aire RL/FA/45/",precio:"275"},
{codigo:"11656",descripcion :"Filtro Motorcraft Aire RL/FA/46/",precio:"72,1"},
{codigo:"11644",descripcion :"Filtro Motorcraft Aire RL/FA/47/",precio:"150,5"},
{codigo:"11608",descripcion :"Filtro Motorcraft Aire RL/FA/48/",precio:"68,8"},
{codigo:"11647",descripcion :"Filtro Motorcraft Aire RL/FA/49/",precio:"267"},
{codigo:"11615",descripcion :"Filtro Motorcraft Aire RL/FA/50/",precio:"558"},
{codigo:"11638",descripcion :"Filtro Motorcraft Aire RL/FA/52/",precio:"288"},
{codigo:"11612",descripcion :"Filtro Motorcraft Aire RL/FA/53/",precio:"99,6"},
{codigo:"11652",descripcion :"Filtro Motorcraft Aire RL/FA/54/",precio:"266"},
{codigo:"11659",descripcion :"Filtro Motorcraft Aire RL/FA/56/",precio:"118,3"},
{codigo:"11616",descripcion :"Filtro Motorcraft Aire RL/FA/57/",precio:"182,8"},
{codigo:"11622",descripcion :"Filtro Motorcraft Aire RL/FA/58/",precio:"505"},
{codigo:"11649",descripcion :"Filtro Motorcraft Aire RL/FA/59/",precio:"340"},
{codigo:"11664",descripcion :"Filtro Motorcraft Aire RL/FA/61/",precio:"325"},
{codigo:"11641",descripcion :"Filtro Motorcraft Aire RL/FA/62/",precio:"314"},
{codigo:"11666",descripcion :"Filtro Motorcraft Aire RL/FA/64/",precio:"146,7"},
{codigo:"11618",descripcion :"Filtro Motorcraft Aire RL/FA/65/",precio:"521"},
{codigo:"11650",descripcion :"Filtro Motorcraft Aire RL/FA/66/",precio:"338"},
{codigo:"11634",descripcion :"Filtro Motorcraft Aire RL/FA/68/ 1 Un",precio:"92,9"},
{codigo:"11663",descripcion :"Filtro Motorcraft Aire RL/FA/69/",precio:"67"},
{codigo:"11640",descripcion :"Filtro Motorcraft Aire RL/FA/71/",precio:"329"},
{codigo:"11654",descripcion :"Filtro Motorcraft Aire RL/FA/72/",precio:"128,8"},
{codigo:"11636",descripcion :"Filtro Motorcraft Aire RL/FA/73/",precio:"272"},
{codigo:"11632",descripcion :"Filtro Motorcraft Aire RL/FA/74/",precio:"60"},
{codigo:"11660",descripcion :"Filtro Motorcraft Aire RL/FA/75/",precio:"327,4"},
{codigo:"11653",descripcion :"Filtro Motorcraft Aire RL/FA/76/",precio:"291,3"},
{codigo:"11651",descripcion :"Filtro Motorcraft RL/FA/41/ Un",precio:"249"},
{codigo:"20941",descripcion :"CAJA HERRAMIENTAS EXTRA VIDA 1 Un",precio:"0,01"},
{codigo:"15020",descripcion :"Cbio Filtro Comb (Mano de obra) Boxes",precio:"1000"},
{codigo:"5050026345765",descripcion :"FIL AC WIX WL7320 Mann 1 Un",precio:"2225"},
{codigo:"15616",descripcion :"FIL C 057127435D VW 1 Un",precio:"1270"},
{codigo:"15617",descripcion :"FIL C 1J0127401A VW 1 Un",precio:"615"},
{codigo:"15627",descripcion :"FIL C 1J0201511A VW 1 Un",precio:"329"},
{codigo:"15618",descripcion :"FIL C 1K0127434A VW 1 Un",precio:"793"},
{codigo:"15619",descripcion :"FIL C 1K0127434B VW 1 Un",precio:"925"},
{codigo:"15628",descripcion :"FIL C 1K0201051K VW 1 Un",precio:"626"},
{codigo:"15620",descripcion :"FIL C 2H0127401A VW 1 Un",precio:"638"},
{codigo:"15621",descripcion :"FIL C 3C0127434 VW 1 Un",precio:"854"},
{codigo:"15622",descripcion :"FIL C 6Q0127400H VW 1 Un",precio:"883"},
{codigo:"15630",descripcion :"FIL C 6QE201511C VW 1 Un",precio:"257"},
{codigo:"15631",descripcion :"FIL C 6X0201511B VW 1 Un",precio:"284"},
{codigo:"15623",descripcion :"FIL C 7M0127401A VW 1 Un",precio:"1289"},
{codigo:"15629",descripcion :"FIL C A6Q0201051J VW",precio:"775"},
{codigo:"15632",descripcion :"FIL C L5X201511 1 Un",precio:"282"},
{codigo:"15624",descripcion :"FIL C L6K127401G VW 1 Un",precio:"663"},
{codigo:"15625",descripcion :"FIL C L6N127401C VW",precio:"586"},
{codigo:"15626",descripcion :"FIL C RGG127177 VW 1 Un",precio:"271"},
{codigo:"16247",descripcion :"FIL C WF36165 Mann 1 Un",precio:"1242"},
{codigo:"16248",descripcion :"FIL C WF8034 Mann 1 Un",precio:"359"},
{codigo:"15788",descripcion :"FIL C WIX WF36220 Mann 1 Un",precio:"1209"},
{codigo:"16316",descripcion :"FIL CO F69208 PUROLATOR Mann 1 Un",precio:"468"},
{codigo:"15687",descripcion :"FIL CO G 11954 Motorcraft 1 Un",precio:"651"},
{codigo:"4011558552701",descripcion :"FIL CO P 939 Mann 1 Un",precio:"2565"},
{codigo:"15388",descripcion :"FIL CO PU 7002X Mann Unidad Un",precio:"3449"},
{codigo:"4011558044671",descripcion :"FIL CO PU 7004 z Mann 1 Un",precio:"12221"},
{codigo:"16284",descripcion :"FIL CO PU 7006 Mann 1 Un",precio:"20636"},
{codigo:"4011558063597",descripcion :"FIL CO PU 8008/1 Mann 1 Un",precio:"8390"},
{codigo:"15390",descripcion :"FIL CO PU 9001X Mann Unidad Un",precio:"7793"},
{codigo:"7790184753870",descripcion :"FIL CO PU 9008 z Mann 1 Un",precio:"3499"},
{codigo:"4011558064822",descripcion :"FIL CO PU 9009 z KIT Mann 1 Un",precio:"8936"},
{codigo:"4011558070250",descripcion :"FIL CO PU 9011 z KIT Mann 1 Un",precio:"8127"},
{codigo:"4011558338503",descripcion :"FIL CO PU 9023 z Mann 1 Un",precio:"3877"},
{codigo:"15870",descripcion :"FIL CO WA42667 Mann 1 Un",precio:"168"},
{codigo:"5904608846600",descripcion :"FIL CO WF 8466 Mann 1 Un",precio:"6616"},
{codigo:"16424",descripcion :"FIL CO WF10279 Mann 1 Un",precio:"2799"},
{codigo:"5904608846501",descripcion :"FIL CO WF8465 Mann 1 Un",precio:"4936"},
{codigo:"15670",descripcion :"FIL CO WIX 33509 Mann 1 Un",precio:"272"},
{codigo:"15863",descripcion :"FIL CO WIX WA42659 Mann 1 Un",precio:"1115"},
{codigo:"15864",descripcion :"FIL CO WIX WA42660 Mann 1 Un",precio:"250"},
{codigo:"15865",descripcion :"FIL CO WIX WA42661 Mann 1 Un",precio:"110"},
{codigo:"15866",descripcion :"FIL CO WIX WA42662 Mann 1 Un",precio:"190"},
{codigo:"15867",descripcion :"FIL CO WIX WA42663 Mann 1 Un",precio:"120"},
{codigo:"15868",descripcion :"FIL CO WIX WA42664 Mann 1 Un",precio:"266"},
{codigo:"15869",descripcion :"FIL CO WIX WA42665 Mann 1 Un",precio:"340"},
{codigo:"15871",descripcion :"FIL CO WIX WA42673 Mann 1 Un",precio:"88"},
{codigo:"15872",descripcion :"FIL CO WIX WA42674 1 Un",precio:"155"},
{codigo:"15873",descripcion :"FIL CO WIX WA42675 Mann 1 Un",precio:"87"},
{codigo:"15874",descripcion :"FIL CO WIX WA42676 Mann 1 Un",precio:"80"},
{codigo:"15875",descripcion :"FIL CO WIX WA42677 Mann 1 Un",precio:"155"},
{codigo:"15876",descripcion :"FIL CO WIX WA42678 Mann 1 Un",precio:"84"},
{codigo:"15877",descripcion :"FIL CO WIX WA42679 Mann 1 Un",precio:"84"},
{codigo:"15878",descripcion :"FIL CO WIX WA42680 Mann 1 Un",precio:"217"},
{codigo:"15986",descripcion :"FIL CO WIX WA43199 Mann 1 Un",precio:"95"},
{codigo:"15987",descripcion :"FIL CO WIX WA43200 Mann 1 Un",precio:"582"},
{codigo:"15988",descripcion :"FIL CO WIX WA43202 Mann 1 Un",precio:"675"},
{codigo:"15989",descripcion :"FIL CO WIX WA43205 Mann 1 Un",precio:"491"},
{codigo:"15991",descripcion :"FIL CO WIX WA43206 Mann 1 Un",precio:"466"},
{codigo:"15992",descripcion :"FIL CO WIX WA43207 Mann 1 Un",precio:"326"},
{codigo:"15993",descripcion :"FIL CO WIX WA43209 Mann 1 Un",precio:"466"},
{codigo:"15994",descripcion :"FIL CO WIX WA43210 Mann 1 Un",precio:"218"},
{codigo:"15995",descripcion :"FIL CO WIX WA43211 Mann 1 Un",precio:"302"},
{codigo:"15990",descripcion :"FIL CO WIX WA43213 Mann 1 Un",precio:"188"},
{codigo:"15996",descripcion :"FIL CO WIX WA43216 Mann 1 Un",precio:"396"},
{codigo:"15997",descripcion :"FIL CO WIX WA43217 Mann 1 Un",precio:"445"},
{codigo:"15998",descripcion :"FIL CO WIX WA43218 Mann 1 Un",precio:"536"},
{codigo:"15999",descripcion :"FIL CO WIX WA43219 Mann 1 Un",precio:"536"},
{codigo:"16000",descripcion :"FIL CO WIX WA43220 Mann 1 Un",precio:"176"},
{codigo:"16157",descripcion :"FIL CO WIX WA43224 Mann 1 Un",precio:"425"},
{codigo:"16158",descripcion :"FIL CO WIX WA43225 Mann 1 Un",precio:"378"},
{codigo:"16159",descripcion :"FIL CO WIX WA43226 Mann 1 Un",precio:"134"},
{codigo:"16160",descripcion :"FIL CO WIX WA43227 Mann",precio:"83"},
{codigo:"16161",descripcion :"FIL CO WIX WA43228 Mann 1 Un",precio:"121"},
{codigo:"16162",descripcion :"FIL CO WIX WA43229 Mann 1 Un",precio:"442"},
{codigo:"16163",descripcion :"FIL CO WIX WA43230 Mann 1 Un",precio:"377"},
{codigo:"16164",descripcion :"FIL CO WIX WA43231 Mann 1 Un",precio:"156"},
{codigo:"16165",descripcion :"FIL CO WIX WA43232 Mann 1 Un",precio:"108"},
{codigo:"16166",descripcion :"FIL CO WIX WA43234 Mann 1 Un",precio:"308"},
{codigo:"16167",descripcion :"FIL CO WIX WA43235 Mann 1 Un",precio:"144"},
{codigo:"16168",descripcion :"FIL CO WIX WA43236 Mann 1 Un",precio:"40"},
{codigo:"16169",descripcion :"FIL CO WIX WA43237 Mann 1 Un",precio:"126"},
{codigo:"16170",descripcion :"FIL CO WIX WA43238 Mann 1 Un",precio:"156"},
{codigo:"16171",descripcion :"FIL CO WIX WA43239 Mann 1 Un",precio:"236"},
{codigo:"16172",descripcion :"FIL CO WIX WA43240 Mann 1",precio:"236"},
{codigo:"16173",descripcion :"FIL CO WIX WA43241 Mann 1 Un",precio:"156"},
{codigo:"16174",descripcion :"FIL CO WIX WA43242 Mann 1 Un",precio:"193"},
{codigo:"16175",descripcion :"FIL CO WIX WA43243 Mann 1 Un",precio:"344"},
{codigo:"16176",descripcion :"FIL CO WIX WA43244 Mann 1 Un",precio:"193"},
{codigo:"16177",descripcion :"FIL CO WIX WA43245 Mann 1 Un",precio:"254"},
{codigo:"16178",descripcion :"FIL CO WIX WA43246 Mann 1 Un",precio:"156"},
{codigo:"16179",descripcion :"FIL CO WIX WA43247 Mann 1 Un",precio:"144"},
{codigo:"16180",descripcion :"FIL CO WIX WA43248 Mann 1 Un",precio:"131"},
{codigo:"16181",descripcion :"FIL CO WIX WA43250 Mann 1 Un",precio:"156"},
{codigo:"16182",descripcion :"FIL CO WIX WA43251 Mann 1 Un",precio:"239"},
{codigo:"16183",descripcion :"FIL CO WIX WA43261 Mann 1 Un",precio:"409"},
{codigo:"16184",descripcion :"FIL CO WIX WA43263 Mann 1 Un",precio:"264"},
{codigo:"16185",descripcion :"FIL CO WIX WA43267 Mann 1 Un",precio:"187"},
{codigo:"16186",descripcion :"FIL CO WIX WA43268 Mann 1 Un",precio:"555"},
{codigo:"16187",descripcion :"FIL CO WIX WA43269 Mann 1 Un",precio:"427"},
{codigo:"16188",descripcion :"FIL CO WIX WA43270 Mann 1 Un",precio:"534"},
{codigo:"16189",descripcion :"FIL CO WIX WA43271 Mann 1 Un",precio:"356"},
{codigo:"16190",descripcion :"FIL CO WIX WA43272 Mann 1 Un",precio:"405"},
{codigo:"16191",descripcion :"FIL CO WIX WA43273 Mann 1 Un",precio:"756"},
{codigo:"16192",descripcion :"FIL CO WIX WA43274 Mann 1 Un",precio:"1393"},
{codigo:"16193",descripcion :"FIL CO WIX WA43275 Mann 1 Un",precio:"695"},
{codigo:"16194",descripcion :"FIL CO WIX WA43276 Mann 1 Un",precio:"604"},
{codigo:"16195",descripcion :"FIL CO WIX WA43277 Mann 1 Un",precio:"933"},
{codigo:"16196",descripcion :"FIL CO WIX WA43278 Mann 1 Un",precio:"278"},
{codigo:"16197",descripcion :"FIL CO WIX WA43279 Mann 1 Un",precio:"308"},
{codigo:"16198",descripcion :"FIL CO WIX WA43280 Mann 1 Un",precio:"596"},
{codigo:"16199",descripcion :"FIL CO WIX WA43281 Mann 1 Un",precio:"569"},
{codigo:"16200",descripcion :"FIL CO WIX WA43282 Mann 1 Un",precio:"492"},
{codigo:"16224",descripcion :"FIL CO WIX WA43283 Mann 1 Un",precio:"484"},
{codigo:"13558",descripcion :"FIL CO WIX WF 10768 Mann 1 Un",precio:"1168"},
{codigo:"16287",descripcion :"FIL CO WIX WF10295 Mann 1 Un",precio:"1160"},
{codigo:"15661",descripcion :"FIL CO WIX WF10298 Mann 1 Un",precio:"5773"},
{codigo:"765809968622",descripcion :"FIL CO WIX WF10562A Mann 1 Un",precio:"3096"},
{codigo:"16320",descripcion :"FIL CO WIX WF36010 Mann 1 Un",precio:"1708"},
{codigo:"16309",descripcion :"FIL CO WIX WF8101 Mann 1 Un",precio:"1815"},
{codigo:"15665",descripcion :"FIL CO WIX WF8366 Mann 1 Un",precio:"3938"},
{codigo:"5904608849403",descripcion :"FIL CO WIX WF8494 Mann 1 Un",precio:"12834"},
{codigo:"4011558353834",descripcion :"FIL CO WK 10 034z Mann 1 Un",precio:"18588"},
{codigo:"4011558819705",descripcion :"FIL CO WK 10 046 z Mann 1 Un",precio:"16802"},
{codigo:"16267",descripcion :"FIL CO WK 1040 Mann 1 Un",precio:"7632"},
{codigo:"4011558957704",descripcion :"FIL CO WK 1140 Mann 1 Un",precio:"6636"},
{codigo:"4011558900120",descripcion :"FIL CO WK 31/2 Mann 1 Un",precio:"1046"},
{codigo:"4011558013967",descripcion :"FIL CO WK 5002 x Mann 1 Un",precio:"14272"},
{codigo:"15394",descripcion :"FIL CO WK 532/1 Mann Unidad Un",precio:"31686"},
{codigo:"15351",descripcion :"FIL CO WK 55/3. Mann Unidad Un",precio:"2635"},
{codigo:"4011558621636",descripcion :"FIL CO WK 58/6 Mann 1 Un",precio:"1253"},
{codigo:"15355",descripcion :"FIL CO WK 614/46 Mann Unidad Un",precio:"2644"},
{codigo:"15389",descripcion :"FIL CO WK 69 Mann Un",precio:"9550"},
{codigo:"4011558900809",descripcion :"FIL CO WK 712/2 Mann 1 Un",precio:"4638"},
{codigo:"16278",descripcion :"FIL CO WK 720/2 x Mann 1 Un",precio:"4852"},
{codigo:"16260",descripcion :"FIL CO WK 720/6 Mann 1 Un",precio:"26459"},
{codigo:"4011558901004",descripcion :"FIL CO WK 731 Mann 1 Un",precio:"2919"},
{codigo:"4011558011581",descripcion :"FIL CO WK 8019 Mann 1 Un",precio:"4615"},
{codigo:"16291",descripcion :"FIL CO WK 8105 Mann 1 Un",precio:"16274"},
{codigo:"15354",descripcion :"FIL CO WK 823/1 Mann Unidad Un",precio:"1239"},
{codigo:"18949",descripcion :"Fil CO WK 823/3 Mann Un",precio:"10432"},
{codigo:"15657",descripcion :"FIL CO WK 824/1 Mann 1 Un",precio:"754"},
{codigo:"15658",descripcion :"FIL CO WK 824/3 Mann 1",precio:"18356"},
{codigo:"15403",descripcion :"FIL CO WK 845/6 Mann Un",precio:"11358"},
{codigo:"16285",descripcion :"FIL CO WK 9007 Mann 1 Un",precio:"20761"},
{codigo:"16297",descripcion :"FIL CO WK 9046 z Mann 1 Un",precio:"16629"},
{codigo:"16259",descripcion :"FIL CO WK 933 x Mann 1 Un",precio:"24207"},
{codigo:"18952",descripcion :"FIL CO WK 939/6 Mann",precio:"14303"},
{codigo:"4011558919306",descripcion :"FIL CO WK 940/16 X Mann 1 Un",precio:"5249"},
{codigo:"4011558957308",descripcion :"FIL CO WK 941 Mann 1 Un",precio:"7027"},
{codigo:"16266",descripcion :"FIL CO WK 950/21 Mann 1 Un",precio:"4678"},
{codigo:"4011558943301",descripcion :"FIL CO WK513/3 Mann 1 Un",precio:"34625"},
{codigo:"15538",descripcion :"FIL COM P 917/3 x Mann 1 Un",precio:"1465"},
{codigo:"15645",descripcion :"FIL COM WK 6015 Mann 1 Un",precio:"9899"},
{codigo:"11093",descripcion :"FIL COMB MANN WK 828 x. Mann 1 Un",precio:"4885"},
{codigo:"4011558077464",descripcion :"FIL COMB PU 7010 z Mann 1 Un",precio:"8280"},
{codigo:"4011558080860",descripcion :"FIL COMB PU 7012 z Mann 1",precio:"10675"},
{codigo:"7893390600430",descripcion :"FIL COMB WA 940/1 Mann 1 Un",precio:"4256"},
{codigo:"7893390802070",descripcion :"FIL COMB WF10309 Mann 1 Un",precio:"1502"},
{codigo:"7893390802049",descripcion :"FIL COMB WF33097 Mann 1 Un",precio:"1712"},
{codigo:"5050026350592",descripcion :"FIL COMB WF8360 Mann 1 Un",precio:"8674"},
{codigo:"5904608846006",descripcion :"FIL COMB WF8460 Mann 1 Un",precio:"6046"},
{codigo:"5904608858009",descripcion :"FIL COMB WF8580 Mann 1 Un",precio:"14016"},
{codigo:"4011558955502",descripcion :"FIL COMB WK 1060/5 x Mann 1 Un",precio:"9372"},
{codigo:"15430",descripcion :"FIL COMB WK 522 Mann Un",precio:"16112"},
{codigo:"4011558025809",descripcion :"FIL COMB WK 6012 Mann 1 Un",precio:"3870"},
{codigo:"4011558962104",descripcion :"FIL COMB WK 716/2 x Mann 1 Un",precio:"7473"},
{codigo:"4011558970604",descripcion :"FIL COMB WK 929 x Mann 1 Un",precio:"13101"},
{codigo:"7790184002299",descripcion :"FIL COMB WK 940/24 Mann 1 Un",precio:"8819"},
{codigo:"4011558914509",descripcion :"FIL COMB WK 950/6 Mann 1 Un",precio:"6682"},
{codigo:"7893390800298",descripcion :"FIL COMB WK 962/7 Mann 1 Un",precio:"6728"},
{codigo:"15452",descripcion :"FIL COMBUSTIBLE F 1099 Un",precio:"217"},
{codigo:"15460",descripcion :"FIL COMBUSTIBLE F59249 Mann Un",precio:"153"},
{codigo:"15446",descripcion :"FIL COMBUSTIBLE PU 927 X Mann Un",precio:"8208"},
{codigo:"15439",descripcion :"FIL COMBUSTIBLE WK 720/4 Mann Un",precio:"15795"},
{codigo:"15435",descripcion :"FIL COMBUSTIBLE WK 853/19 Mann Un",precio:"7093"},
{codigo:"18938",descripcion :"Fil Mann CO PU 936/1 X",precio:"11662"},
{codigo:"18939",descripcion :"Fil Mann CO PU 936/2 X",precio:"8120"},
{codigo:"15509",descripcion :"Fil Mann Comb PU 1033 x Un",precio:"10153"},
{codigo:"16262",descripcion :"FIL PU 12 003 z Mann 1 Un",precio:"15225"},
{codigo:"15374",descripcion :"FIL PUROLATOR CO F 1097 Mann Unidad Un",precio:"194"},
{codigo:"15373",descripcion :"FIL PUROLATOR CO F 1103 Mann Unidad Un",precio:"126"},
{codigo:"16156",descripcion :"FIL WIX CO WA43223 Mann 1 Un",precio:"125"},
{codigo:"16269",descripcion :"FIL WIX CO WF10307 Mann 1 Un",precio:"1464"},
{codigo:"7893390802025",descripcion :"FIL WIX CO WF33654 Mann 1 Un",precio:"1507"},
{codigo:"16281",descripcion :"FIL WIX CO WF8373 Mann 1 Un",precio:"2743"},
{codigo:"15553",descripcion :"FIL WK 820/18 Mann 1 Un",precio:"20090"},
{codigo:"16244",descripcion :"FIL WK 940 CO Mann 1 Un",precio:"7395"},
{codigo:"16264",descripcion :"FIL WK 950/6 Mann 1 Un",precio:"725"},
{codigo:"15522",descripcion :"Filltro Mann Comb WK 9028 z 1 Un",precio:"16437"},
{codigo:"15163",descripcion :"Filtro CO P 716/1X Mann",precio:"1643"},
{codigo:"18957",descripcion :"FILTRO CO PU 723X Mann",precio:"6757"},
{codigo:"15151",descripcion :"Filtro CO PU 825 X Mann",precio:"7152"},
{codigo:"15087",descripcion :"Filtro CO WK 1162 Mann",precio:"5052"},
{codigo:"15159",descripcion :"Filtro CO WK 723 Mann",precio:"2851"},
{codigo:"15083",descripcion :"Filtro CO WK 842/23X Mann",precio:"13529"},
{codigo:"18123",descripcion :"FILTRO CO WK 846 Mann",precio:"7064"},
{codigo:"15146",descripcion :"Filtro CO WK 853/21 Mann",precio:"25007"},
{codigo:"15160",descripcion :"Filtro CO WK 939/2 z Mann",precio:"862"},
{codigo:"18968",descripcion :"FILTRO CO WK 939/5 Mann",precio:"16556"},
{codigo:"15142",descripcion :"Filtro CO WK 940/35 Mann",precio:"9784"},
{codigo:"15172",descripcion :"FILTRO CO WK857/1 Mann 1 Un",precio:"34099"},
{codigo:"8697",descripcion :"FILTRO COMB 1150 Unidad Un",precio:"5175"},
{codigo:"8698",descripcion :"FILTRO COMB 1170 Unidad Un",precio:"5265"},
{codigo:"8699",descripcion :"FILTRO COMB 1180 Unidad Un",precio:"5310"},
{codigo:"8700",descripcion :"FILTRO COMB 1190 Unidad Un",precio:"5355"},
{codigo:"8701",descripcion :"FILTRO COMB 1200 Unidad Un",precio:"5400"},
{codigo:"8702",descripcion :"FILTRO COMB 1250 Unidad Un",precio:"5625"},
{codigo:"8703",descripcion :"FILTRO COMB 1300 Unidad Un",precio:"5850"},
{codigo:"8704",descripcion :"FILTRO COMB 1350 Unidad Un",precio:"6075"},
{codigo:"8705",descripcion :"FILTRO COMB 1400 Unidad Un",precio:"6300"},
{codigo:"8706",descripcion :"FILTRO COMB 1450 Unidad Un",precio:"6525"},
{codigo:"8707",descripcion :"FILTRO COMB 1500 Unidad Un",precio:"6750"},
{codigo:"8708",descripcion :"FILTRO COMB 1550 Unidad Un",precio:"6975"},
{codigo:"8709",descripcion :"FILTRO COMB 1600 Unidad Un",precio:"7200"},
{codigo:"8710",descripcion :"FILTRO COMB 1650 Unidad Un",precio:"7425"},
{codigo:"8711",descripcion :"FILTRO COMB 1700 Unidad Un",precio:"7650"},
{codigo:"8712",descripcion :"FILTRO COMB 1750 Unidad Un",precio:"7875"},
{codigo:"8713",descripcion :"FILTRO COMB 1800 Unidad Un",precio:"8100"},
{codigo:"8714",descripcion :"FILTRO COMB 1850 Unidad Un",precio:"8325"},
{codigo:"8715",descripcion :"FILTRO COMB 1900 Unidad Un",precio:"8550"},
{codigo:"8716",descripcion :"FILTRO COMB 1950 Unidad Un",precio:"8775"},
{codigo:"19563",descripcion :"Filtro comb CO G-5188 Fram",precio:"111,8"},
{codigo:"19615",descripcion :"Filtro comb CO G-9412 Fram",precio:"931"},
{codigo:"18517",descripcion :"Filtro Comb CO P 1044/1 Mann",precio:"36,8"},
{codigo:"18518",descripcion :"Filtro Comb CO P 716 Mann",precio:"1803"},
{codigo:"18519",descripcion :"Filtro Comb CO P 716/1 Mann",precio:"76"},
{codigo:"18520",descripcion :"Filtro Comb CO P 732 Mann",precio:"900"},
{codigo:"18521",descripcion :"Filtro Comb CO P 733/1 Mann Lt",precio:"2213"},
{codigo:"18522",descripcion :"Filtro Comb CO P 735 Mann",precio:"2850"},
{codigo:"18523",descripcion :"Filtro Comb CO P 78 Mann",precio:"2179"},
{codigo:"18524",descripcion :"Filtro Comb CO P 826 Mann",precio:"35,9"},
{codigo:"18525",descripcion :"Filtro Comb CO P 915 Mann",precio:"412"},
{codigo:"18526",descripcion :"Filtro Comb CO P 917 Mann",precio:"106"},
{codigo:"18527",descripcion :"Filtro Comb CO P 917 x Mann Lt",precio:"1733"},
{codigo:"18529",descripcion :"Filtro Comb CO P 945 Mann",precio:"2907"},
{codigo:"18528",descripcion :"Filtro Comb CO P 945/2 Mann",precio:"2728"},
{codigo:"19660",descripcion :"Filtro comb CO P-5328 Fram",precio:"2613"},
{codigo:"18533",descripcion :"Filtro Comb CO PU 1021 Mann",precio:"2297"},
{codigo:"18534",descripcion :"Filtro Comb CO PU 742 Mann",precio:"9660"},
{codigo:"18535",descripcion :"Filtro Comb CO PU 822 Mann",precio:"1768"},
{codigo:"18536",descripcion :"Filtro Comb CO PU 830 Mann",precio:"4624"},
{codigo:"18537",descripcion :"Filtro Comb CO PU 839 Mann",precio:"8199"},
{codigo:"18538",descripcion :"Filtro Comb CO PU 922 Mann",precio:"3270"},
{codigo:"18695",descripcion :"Filtro Comb CO WK 31/5 Mann",precio:"2211"},
{codigo:"18696",descripcion :"Filtro Comb CO WK 31/80 Mann",precio:"196"},
{codigo:"18697",descripcion :"Filtro Comb CO WK 42/1 Mann",precio:"738"},
{codigo:"18698",descripcion :"Filtro Comb CO WK 42/10 Mann",precio:"1743"},
{codigo:"18699",descripcion :"Filtro Comb CO WK 42/11 Mann",precio:"78,5"},
{codigo:"18700",descripcion :"Filtro Comb CO WK 42/2 Mann",precio:"451"},
{codigo:"18701",descripcion :"Filtro Comb CO WK 42/5 Mann",precio:"1341"},
{codigo:"18702",descripcion :"Filtro Comb CO WK 42/81 Mann",precio:"1644"},
{codigo:"18703",descripcion :"Filtro Comb CO WK 42/83 Mann",precio:"79,5"},
{codigo:"18704",descripcion :"Filtro Comb CO WK 43/13 Mann",precio:"43,6"},
{codigo:"18705",descripcion :"Filtro Comb CO WK 44/6 Mann",precio:"159"},
{codigo:"18707",descripcion :"Filtro Comb CO WK 45 Mann",precio:"71,1"},
{codigo:"18708",descripcion :"Filtro Comb CO WK 47 Mann",precio:"2630"},
{codigo:"18709",descripcion :"Filtro Comb CO WK 48/1 Mann",precio:"339"},
{codigo:"18710",descripcion :"Filtro Comb CO WK 48/3 Mann",precio:"2197"},
{codigo:"18712",descripcion :"Filtro Comb CO WK 512 Mann Un",precio:"2570"},
{codigo:"18713",descripcion :"Filtro Comb CO WK 512/1 Mann",precio:"5048"},
{codigo:"18714",descripcion :"Filtro Comb CO WK 513 Mann",precio:"1990"},
{codigo:"18715",descripcion :"Filtro Comb CO WK 516 Mann",precio:"8752"},
{codigo:"18716",descripcion :"Filtro Comb CO WK 516/1 Mann",precio:"11225"},
{codigo:"18717",descripcion :"Filtro Comb CO WK 52 Mann",precio:"1876"},
{codigo:"18719",descripcion :"Filtro Comb CO WK 521/2 Mann",precio:"14589"},
{codigo:"18720",descripcion :"Filtro Comb CO WK 523 Mann",precio:"266,4"},
{codigo:"18721",descripcion :"Filtro Comb CO WK 55/1 Mann",precio:"4013"},
{codigo:"18723",descripcion :"Filtro Comb CO WK 57 Mann",precio:"295,3"},
{codigo:"18724",descripcion :"Filtro Comb CO WK 57/1 Mann",precio:"96,6"},
{codigo:"18725",descripcion :"Filtro Comb CO WK 57/2 Mann",precio:"345,9"},
{codigo:"18726",descripcion :"Filtro Comb CO WK 58 Mann",precio:"1442"},
{codigo:"18727",descripcion :"Filtro Comb CO WK 59 Mann",precio:"500"},
{codigo:"18729",descripcion :"Filtro Comb CO WK 611/4 Mann",precio:"144,9"},
{codigo:"18730",descripcion :"Filtro Comb CO WK 611/5 Mann",precio:"116,9"},
{codigo:"18733",descripcion :"Filtro Comb CO WK 612/2 Mann",precio:"4720"},
{codigo:"18734",descripcion :"Filtro Comb CO WK 612/3 Mann",precio:"7759"},
{codigo:"18735",descripcion :"Filtro Comb CO WK 612/4 Mann",precio:"3476"},
{codigo:"18736",descripcion :"Filtro Comb CO WK 613 Mann",precio:"5232"},
{codigo:"18737",descripcion :"Filtro Comb CO WK 613/1 Mann",precio:"5385"},
{codigo:"18738",descripcion :"Filtro Comb CO WK 613/2 Mann",precio:"135,5"},
{codigo:"18740",descripcion :"Filtro Comb CO WK 613/4 Mann",precio:"3181"},
{codigo:"18741",descripcion :"Filtro Comb CO WK 614/1 Mann",precio:"130,5"},
{codigo:"18742",descripcion :"Filtro Comb CO WK 614/10 Mann",precio:"5546"},
{codigo:"18743",descripcion :"Filtro Comb CO WK 614/11 Mann",precio:"1439"},
{codigo:"18744",descripcion :"Filtro Comb CO WK 614/12 Mann",precio:"402"},
{codigo:"18745",descripcion :"Filtro Comb CO WK 614/19 Mann",precio:"3449"},
{codigo:"18746",descripcion :"Filtro Comb CO WK 614/2 Mann",precio:"219,8"},
{codigo:"18747",descripcion :"Filtro Comb CO WK 614/3 Mann",precio:"329,1"},
{codigo:"18748",descripcion :"Filtro Comb CO WK 614/30 Mann",precio:"378,9"},
{codigo:"18749",descripcion :"Filtro Comb CO WK 614/31 Mann",precio:"253,3"},
{codigo:"18750",descripcion :"Filtro Comb CO WK 614/32 Mann",precio:"218,4"},
{codigo:"18751",descripcion :"Filtro Comb CO WK 614/34 Mann",precio:"133,2"},
{codigo:"18752",descripcion :"Filtro Comb CO WK 614/36 Mann",precio:"10303"},
{codigo:"18753",descripcion :"Filtro Comb CO WK 614/38 Mann",precio:"132,2"},
{codigo:"18754",descripcion :"Filtro Comb CO WK 614/4 Mann",precio:"167,5"},
{codigo:"18755",descripcion :"Filtro Comb CO WK 614/44 Mann",precio:"5677"},
{codigo:"18756",descripcion :"Filtro Comb CO WK 614/5 Mann",precio:"149,6"},
{codigo:"18757",descripcion :"Filtro Comb CO WK 614/6 Mann",precio:"277,2"},
{codigo:"18758",descripcion :"Filtro Comb CO WK 614/7 Mann",precio:"65,2"},
{codigo:"18759",descripcion :"Filtro Comb CO WK 614/9 Mann",precio:"1535"},
{codigo:"18760",descripcion :"Filtro Comb CO WK 618 Mann",precio:"722"},
{codigo:"18761",descripcion :"Filtro Comb CO WK 618/1 Mann",precio:"7871"},
{codigo:"18762",descripcion :"Filtro Comb CO WK 619 Mann",precio:"73,5"},
{codigo:"18764",descripcion :"Filtro Comb CO WK 66 Mann",precio:"7526"},
{codigo:"18767",descripcion :"Filtro Comb CO WK 67 Mann",precio:"664"},
{codigo:"18768",descripcion :"Filtro Comb CO WK 68 Mann",precio:"183"},
{codigo:"18769",descripcion :"Filtro Comb CO WK 68/1 Mann",precio:"155,3"},
{codigo:"18770",descripcion :"Filtro Comb CO WK 710 Mann",precio:"4998"},
{codigo:"18773",descripcion :"Filtro Comb CO WK 711 Mann",precio:"495"},
{codigo:"18774",descripcion :"Filtro Comb CO WK 711/1 Mann",precio:"18172"},
{codigo:"18775",descripcion :"Filtro Comb CO WK 712/4 Mann",precio:"2183"},
{codigo:"18776",descripcion :"Filtro Comb CO WK 713/2 Mann",precio:"7951"},
{codigo:"18778",descripcion :"Filtro Comb CO WK 718/1 Mann",precio:"2662"},
{codigo:"18779",descripcion :"Filtro Comb CO WK 718/2 Mann",precio:"8507"},
{codigo:"18780",descripcion :"Filtro Comb CO WK 719/5 Mann",precio:"119,2"},
{codigo:"18781",descripcion :"Filtro Comb CO WK 720 Mann",precio:"16547"},
{codigo:"18783",descripcion :"Filtro Comb CO WK 724/2 Mann",precio:"4304"},
{codigo:"18784",descripcion :"Filtro Comb CO WK 725 Mann",precio:"10348"},
{codigo:"18785",descripcion :"Filtro Comb CO WK 730/1 Mann",precio:"2961"},
{codigo:"18786",descripcion :"Filtro Comb CO WK 730/2 Mann",precio:"15847"},
{codigo:"18787",descripcion :"Filtro Comb CO Wk 730/5 Mann",precio:"10174"},
{codigo:"18788",descripcion :"Filtro Comb CO WK 758 Mann",precio:"4480"},
{codigo:"18789",descripcion :"Filtro Comb CO WK 76 Mann",precio:"1287"},
{codigo:"18790",descripcion :"Filtro Comb CO WK 78/1 Mann",precio:"357"},
{codigo:"18791",descripcion :"Filtro Comb CO WK 78/2 Mann",precio:"321"},
{codigo:"18792",descripcion :"Filtro Comb CO WK 78/3 Mann",precio:"166,3"},
{codigo:"18793",descripcion :"Filtro Comb CO WK 78/4 Mann",precio:"950"},
{codigo:"18794",descripcion :"Filtro Comb CO WK 79 Mann",precio:"3722"},
{codigo:"18795",descripcion :"Filtro Comb CO WK 808/1 Mann",precio:"558"},
{codigo:"18796",descripcion :"Filtro Comb CO WK 814/1 Mann",precio:"59,8"},
{codigo:"18797",descripcion :"Filtro Comb CO WK 815 Mann",precio:"17495"},
{codigo:"18798",descripcion :"Filtro Comb CO WK 817/3 Mann",precio:"3894"},
{codigo:"18799",descripcion :"Filtro Comb CO WK 821 Mann",precio:"62,1"},
{codigo:"18800",descripcion :"Filtro Comb CO WK 823 Mann",precio:"12390"},
{codigo:"18804",descripcion :"Filtro Comb CO WK 830/11 Mann",precio:"283,4"},
{codigo:"18805",descripcion :"Filtro Comb CO WK 830/3 Mann",precio:"12481"},
{codigo:"18806",descripcion :"Filtro Comb CO WK 830/5 Mann",precio:"354,8"},
{codigo:"18807",descripcion :"Filtro Comb CO WK 830/6 Mann",precio:"8979"},
{codigo:"18808",descripcion :"Filtro Comb CO WK 830/7 Mann",precio:"6861"},
{codigo:"18809",descripcion :"Filtro Comb CO WK 831 Mann",precio:"8456"},
{codigo:"18811",descripcion :"Filtro Comb CO WK 834/1 Mann",precio:"6786"},
{codigo:"18812",descripcion :"Filtro Comb CO WK 836 Mann",precio:"3512"},
{codigo:"18813",descripcion :"Filtro Comb CO WK 841 Mann",precio:"6951"},
{codigo:"18814",descripcion :"Filtro Comb CO WK 841/1 Mann",precio:"23148"},
{codigo:"18815",descripcion :"Filtro Comb CO WK 842 Mann",precio:"3924"},
{codigo:"18816",descripcion :"Filtro Comb CO WK 842/13 Mann",precio:"7925"},
{codigo:"18818",descripcion :"Filtro Comb CO WK 842/18 Mann Un",precio:"9648"},
{codigo:"18819",descripcion :"Filtro Comb CO WK 842/2 Mann",precio:"3033"},
{codigo:"18820",descripcion :"Filtro Comb CO WK 842/3 Mann",precio:"6391"},
{codigo:"18821",descripcion :"Filtro Comb CO WK 842/4 Mann",precio:"7012"},
{codigo:"18822",descripcion :"Filtro Comb CO WK 842/6 Mann",precio:"293"},
{codigo:"18823",descripcion :"Filtro Comb CO WK 842/7 Mann",precio:"497"},
{codigo:"18824",descripcion :"Filtro Comb CO WK 842/8 Mann",precio:"7259"},
{codigo:"18825",descripcion :"Filtro Comb CO WK 845 Mann",precio:"9867"},
{codigo:"18826",descripcion :"Filtro Comb CO WK 845/1 Mann",precio:"9609"},
{codigo:"18827",descripcion :"Filtro Comb CO WK 845/3 Mann",precio:"8258"},
{codigo:"18828",descripcion :"Filtro Comb CO WK 845/4 Mann",precio:"3863"},
{codigo:"18829",descripcion :"Filtro Comb CO WK 845/5 Mann",precio:"240,1"},
{codigo:"18831",descripcion :"Filtro Comb CO WK 849 Mann",precio:"13004"},
{codigo:"18832",descripcion :"Filtro Comb CO WK 850 Mann",precio:"9246"},
{codigo:"18833",descripcion :"Filtro Comb CO WK 850/1 Mann",precio:"2473"},
{codigo:"18834",descripcion :"Filtro Comb CO WK 850/2 Mann",precio:"5776"},
{codigo:"18835",descripcion :"Filtro Comb CO WK 853 Mann",precio:"9040"},
{codigo:"18836",descripcion :"Filtro Comb CO WK 853/1 Mann",precio:"6128"},
{codigo:"18837",descripcion :"Filtro Comb CO WK 853/11 Mann",precio:"21887"},
{codigo:"18838",descripcion :"Filtro Comb CO WK 853/12 Mann",precio:"6729"},
{codigo:"18839",descripcion :"Filtro Comb CO WK 853/13 Mann",precio:"13022"},
{codigo:"18840",descripcion :"Filtro Comb CO WK 853/14 Mann",precio:"6664"},
{codigo:"18841",descripcion :"Filtro Comb CO WK 853/15 Mann",precio:"7790"},
{codigo:"18842",descripcion :"Filtro Comb CO WK 853/3 Mann",precio:"10499"},
{codigo:"18843",descripcion :"Filtro Comb CO WK 853/7 Mann",precio:"12544"},
{codigo:"18844",descripcion :"Filtro Comb CO WK 853/8 Mann",precio:"7050"},
{codigo:"18845",descripcion :"Filtro Comb CO WK 854/1 Mann",precio:"9451"},
{codigo:"18846",descripcion :"Filtro Comb CO WK 854/6 Mann",precio:"8806"},
{codigo:"18847",descripcion :"Filtro Comb CO WK 880 Mann",precio:"4919"},
{codigo:"18848",descripcion :"Filtro Comb CO WK 917/1 Mann",precio:"598"},
{codigo:"18849",descripcion :"Filtro Comb CO WK 920/3 Mann",precio:"7669"},
{codigo:"18850",descripcion :"Filtro Comb CO WK 921 Mann",precio:"332"},
{codigo:"18851",descripcion :"Filtro Comb CO WK 921/1 Mann",precio:"93,6"},
{codigo:"18852",descripcion :"Filtro Comb CO WK 932/80 Mann",precio:"4643"},
{codigo:"18853",descripcion :"Filtro Comb CO WK 939 Mann",precio:"13961"},
{codigo:"18854",descripcion :"Filtro Comb CO WK 940/11 Mann",precio:"6669"},
{codigo:"18855",descripcion :"Filtro Comb CO WK 940/6 Mann",precio:"5095"},
{codigo:"18600",descripcion :"FILTRO COMB F 1049 PUROLATOR",precio:"157"},
{codigo:"18626",descripcion :"FILTRO COMB F 1050 PUROLATOR",precio:"178"},
{codigo:"18728",descripcion :"FILTRO COMB F 1052 PUROLATOR",precio:"197"},
{codigo:"18731",descripcion :"FILTRO COMB F 1053 PUROLATOR",precio:"38,3"},
{codigo:"18876",descripcion :"FILTRO COMB F 1061 PUROLATOR",precio:"88"},
{codigo:"18877",descripcion :"FILTRO COMB F 1069 PUROLATOR",precio:"87"},
{codigo:"18878",descripcion :"FILTRO COMB F 1070 PUROLATOR",precio:"43"},
{codigo:"18879",descripcion :"FILTRO COMB F 1071 PUROLATOR",precio:"187"},
{codigo:"18880",descripcion :"FILTRO COMB F 1072 PUROLATOR",precio:"193"},
{codigo:"18881",descripcion :"FILTRO COMB F 1073 PUROLATOR",precio:"67"},
{codigo:"18882",descripcion :"FILTRO COMB F 33144 PUROLATOR",precio:"174"},
{codigo:"18883",descripcion :"FILTRO COMB F 65277 PUROLATOR",precio:"218"},
{codigo:"18884",descripcion :"FILTRO COMB F 67221 PUROLATOR",precio:"253"},
{codigo:"15017",descripcion :"FILTRO COMB P 718/X Mann",precio:"2170"},
{codigo:"15074",descripcion :"FILTRO COMB PU 1018X Mann",precio:"7781"},
{codigo:"4011558055783",descripcion :"Filtro comb PU 8013 Z Mann 1 Un",precio:"5283"},
{codigo:"15055",descripcion :"FILTRO COMB WK 815/80 Mann",precio:"3571"},
{codigo:"15059",descripcion :"FILTRO COMB WK 853/17 Mann",precio:"27271"},
{codigo:"18899",descripcion :"Filtro comb WK 939/7 Mann",precio:"14303"},
{codigo:"4011558948801",descripcion :"Filtro comb WK 950/19 Mann 1 Un",precio:"7167"},
{codigo:"15069",descripcion :"FILTRO COMB WK 965/1 Mann",precio:"10441"},
{codigo:"15071",descripcion :"FILTRO COMB WK84221X Mann",precio:"18875"},
{codigo:"8600",descripcion :"FILTRO COMB. 1-",precio:"270"},
{codigo:"8609",descripcion :"FILTRO COMB. 10",precio:"675"},
{codigo:"8610",descripcion :"FILTRO COMB. 11",precio:"720"},
{codigo:"8611",descripcion :"FILTRO COMB. 12",precio:"765"},
{codigo:"8612",descripcion :"FILTRO COMB. 13",precio:"810"},
{codigo:"8613",descripcion :"FILTRO COMB. 14",precio:"855"},
{codigo:"8614",descripcion :"FILTRO COMB. 15",precio:"900"},
{codigo:"8619",descripcion :"FILTRO COMB. 16",precio:"945"},
{codigo:"8620",descripcion :"FILTRO COMB. 17",precio:"990"},
{codigo:"8621",descripcion :"FILTRO COMB. 18",precio:"1035"},
{codigo:"8622",descripcion :"FILTRO COMB. 19",precio:"1080"},
{codigo:"8601",descripcion :"FILTRO COMB. 2",precio:"315"},
{codigo:"8623",descripcion :"FILTRO COMB. 20",precio:"1125"},
{codigo:"8624",descripcion :"FILTRO COMB. 21",precio:"1170"},
{codigo:"8625",descripcion :"FILTRO COMB. 22-",precio:"1215"},
{codigo:"8626",descripcion :"FILTRO COMB. 23",precio:"1260"},
{codigo:"8627",descripcion :"FILTRO COMB. 24",precio:"1305"},
{codigo:"8628",descripcion :"FILTRO COMB. 25",precio:"1350"},
{codigo:"8629",descripcion :"FILTRO COMB. 26",precio:"1395"},
{codigo:"8630",descripcion :"FILTRO COMB. 27",precio:"1440"},
{codigo:"8631",descripcion :"FILTRO COMB. 28",precio:"1485"},
{codigo:"8632",descripcion :"FILTRO COMB. 29",precio:"1530"},
{codigo:"8602",descripcion :"FILTRO COMB. 3",precio:"360"},
{codigo:"8633",descripcion :"FILTRO COMB. 30",precio:"1575"},
{codigo:"8634",descripcion :"FILTRO COMB. 31",precio:"1620"},
{codigo:"8635",descripcion :"FILTRO COMB. 32",precio:"1665"},
{codigo:"8636",descripcion :"FILTRO COMB. 33",precio:"1710"},
{codigo:"8637",descripcion :"FILTRO COMB. 34",precio:"1755"},
{codigo:"8639",descripcion :"FILTRO COMB. 35",precio:"1800"},
{codigo:"8640",descripcion :"FILTRO COMB. 36",precio:"1845"},
{codigo:"8641",descripcion :"FILTRO COMB. 37",precio:"1890"},
{codigo:"8642",descripcion :"FILTRO COMB. 38",precio:"1935"},
{codigo:"8643",descripcion :"FILTRO COMB. 39",precio:"1980"},
{codigo:"8603",descripcion :"FILTRO COMB. 4",precio:"405"},
{codigo:"8645",descripcion :"FILTRO COMB. 40",precio:"2025"},
{codigo:"8646",descripcion :"FILTRO COMB. 41",precio:"2070"},
{codigo:"8647",descripcion :"FILTRO COMB. 42",precio:"2115"},
{codigo:"8648",descripcion :"FILTRO COMB. 43",precio:"2160"},
{codigo:"8649",descripcion :"FILTRO COMB. 44",precio:"2205"},
{codigo:"8650",descripcion :"FILTRO COMB. 45",precio:"2250"},
{codigo:"8651",descripcion :"FILTRO COMB. 46",precio:"2295"},
{codigo:"8652",descripcion :"FILTRO COMB. 47",precio:"2340"},
{codigo:"8653",descripcion :"FILTRO COMB. 48",precio:"2385"},
{codigo:"8654",descripcion :"FILTRO COMB. 49",precio:"2430"},
{codigo:"8604",descripcion :"FILTRO COMB. 5",precio:"450"},
{codigo:"8655",descripcion :"FILTRO COMB. 50",precio:"2475"},
{codigo:"8656",descripcion :"FILTRO COMB. 51",precio:"2520"},
{codigo:"8657",descripcion :"FILTRO COMB. 52",precio:"2565"},
{codigo:"8658",descripcion :"FILTRO COMB. 53",precio:"2610"},
{codigo:"8659",descripcion :"FILTRO COMB. 54",precio:"2655"},
{codigo:"8660",descripcion :"FILTRO COMB. 55",precio:"2700"},
{codigo:"8661",descripcion :"FILTRO COMB. 56",precio:"2745"},
{codigo:"8662",descripcion :"FILTRO COMB. 57",precio:"2790"},
{codigo:"8663",descripcion :"FILTRO COMB. 58",precio:"2835"},
{codigo:"8664",descripcion :"FILTRO COMB. 59",precio:"2880"},
{codigo:"8605",descripcion :"FILTRO COMB. 6",precio:"495"},
{codigo:"8665",descripcion :"FILTRO COMB. 60",precio:"2925"},
{codigo:"8666",descripcion :"FILTRO COMB. 61",precio:"2970"},
{codigo:"8667",descripcion :"FILTRO COMB. 62",precio:"3015"},
{codigo:"8668",descripcion :"FILTRO COMB. 63",precio:"3060"},
{codigo:"8669",descripcion :"FILTRO COMB. 64",precio:"3105"},
{codigo:"8670",descripcion :"FILTRO COMB. 65",precio:"3150"},
{codigo:"8671",descripcion :"FILTRO COMB. 66",precio:"3195"},
{codigo:"8672",descripcion :"FILTRO COMB. 67",precio:"3240"},
{codigo:"8673",descripcion :"FILTRO COMB. 68",precio:"3285"},
{codigo:"8674",descripcion :"FILTRO COMB. 69",precio:"3330"},
{codigo:"8606",descripcion :"FILTRO COMB. 7",precio:"540"},
{codigo:"8675",descripcion :"FILTRO COMB. 70",precio:"3375"},
{codigo:"8676",descripcion :"FILTRO COMB. 71",precio:"3420"},
{codigo:"8677",descripcion :"FILTRO COMB. 72",precio:"3465"},
{codigo:"8678",descripcion :"FILTRO COMB. 73",precio:"3510"},
{codigo:"8679",descripcion :"FILTRO COMB. 74",precio:"3555"},
{codigo:"8680",descripcion :"FILTRO COMB. 75",precio:"3600"},
{codigo:"8681",descripcion :"FILTRO COMB. 76",precio:"3690"},
{codigo:"8682",descripcion :"FILTRO COMB. 77",precio:"3780"},
{codigo:"8683",descripcion :"FILTRO COMB. 78",precio:"3870"},
{codigo:"8607",descripcion :"FILTRO COMB. 8",precio:"585"},
{codigo:"8685",descripcion :"FILTRO COMB. 80",precio:"3960"},
{codigo:"8686",descripcion :"FILTRO COMB. 81",precio:"4050"},
{codigo:"8687",descripcion :"FILTRO COMB. 82",precio:"4140"},
{codigo:"8688",descripcion :"FILTRO COMB. 83",precio:"4230"},
{codigo:"8689",descripcion :"FILTRO COMB. 84",precio:"4320"},
{codigo:"8690",descripcion :"FILTRO COMB. 85",precio:"4410"},
{codigo:"8691",descripcion :"FILTRO COMB. 86",precio:"4500"},
{codigo:"8692",descripcion :"FILTRO COMB. 87",precio:"4725"},
{codigo:"8693",descripcion :"FILTRO COMB. 88",precio:"4815"},
{codigo:"8694",descripcion :"FILTRO COMB. 89",precio:"4905"},
{codigo:"8608",descripcion :"FILTRO COMB. 9",precio:"630"},
{codigo:"8695",descripcion :"FILTRO COMB. 90",precio:"4995"},
{codigo:"8696",descripcion :"FILTRO COMB. 91",precio:"5085"},
{codigo:"19009",descripcion :"Filtro combustible C 11 860 PL Fram 1 Un",precio:"210"},
{codigo:"19011",descripcion :"Filtro combustible C 11861 PL Fram 1 Un",precio:"290"},
{codigo:"19623",descripcion :"Filtro combustible P 1104 Fram 1 Un",precio:"730"},
{codigo:"19644",descripcion :"Filtro combustible P 4105 Fram 1 Un",precio:"495"},
{codigo:"19649",descripcion :"Filtro combustible P 4182 Fram 1 Un",precio:"350"},
{codigo:"19650",descripcion :"Filtro combustible P 4183 Fram 1 Un",precio:"540"},
{codigo:"19668",descripcion :"Filtro combustible P 5797 Fram 1 Un",precio:"495"},
{codigo:"15399",descripcion :"Filtro combustible P 707/6 Mann 1 Un",precio:"1114"},
{codigo:"19673",descripcion :"Filtro combustible P 8043 Fram 1 Un",precio:"640"},
{codigo:"19677",descripcion :"Filtro combustible P 9454 Fram 1 Un",precio:"640"},
{codigo:"19845",descripcion :"Filtro combustible PS 7171 Fram 1 Un",precio:"1055"},
{codigo:"19852",descripcion :"Filtro combustible PS 8187 Fram 1 Un",precio:"950"},
{codigo:"15414",descripcion :"Filtro combustible PU 1046/1 x Mann 1 Un",precio:"4381"},
{codigo:"16234",descripcion :"Filtro combustible PU 7005 Mann 1 Un",precio:"15074"},
{codigo:"4011558076238",descripcion :"Filtro combustible PU 8015 Mann 1 Un",precio:"16305"},
{codigo:"18886",descripcion :"Filtro combustible PU 835 x Mann 1 Un",precio:"2663"},
{codigo:"765809302945",descripcion :"Filtro combustible WF10226 Wix Mann 1 Un",precio:"6766"},
{codigo:"7790184003616",descripcion :"Filtro combustible WF8429 Wix Mann 1 Un",precio:"2298"},
{codigo:"15436",descripcion :"Filtro combustible WK 1060 Mann 1 Un",precio:"9219"},
{codigo:"7893390801004",descripcion :"Filtro combustible WK 1060/4 Mann 1 Un",precio:"8772"},
{codigo:"18711",descripcion :"Filtro combustible WK 510 Mann 1 Un",precio:"1959"},
{codigo:"15424",descripcion :"Filtro combustible WK 58/3 Mann 1 Un",precio:"1581"},
{codigo:"15141",descripcion :"Filtro combustible WK 6002 Mann 1 Un",precio:"1581"},
{codigo:"18944",descripcion :"Filtro combustible WK 612/7 Mann 1 Un",precio:"1521"},
{codigo:"18739",descripcion :"Filtro combustible WK 613/3 Mann 1 Un",precio:"2372"},
{codigo:"18942",descripcion :"Filtro combustible WK 69/2 Mann 1 Un",precio:"8102"},
{codigo:"18817",descripcion :"Filtro combustible WK 842/14 Mann 1 Un",precio:"4720"},
{codigo:"15648",descripcion :"Filtro combustible WK 9016 Mann 1 Un",precio:"6172"},
{codigo:"4011558237707",descripcion :"Filtro combustible WK 940/1 Mann 1 Un",precio:"1874"},
{codigo:"4011558060565",descripcion :"Filtro combustible WK 950/14 Mann 1 Un",precio:"10372"},
{codigo:"4011558969301",descripcion :"Filtro combustible WK 950/26 x Mann 1 Un",precio:"7590"},
{codigo:"7893390801486",descripcion :"Filtro combustible WK 954/1 x Mann 1 Un",precio:"9252"},
{codigo:"18000",descripcion :"FILTRO MAN CO WK 829/3",precio:"18029"},
{codigo:"15520",descripcion :"Filtro Mann Comb WK 854/2",precio:"9903"},
{codigo:"15518",descripcion :"Filtro Mann Comb WK 9023 z Un",precio:"9439"},
{codigo:"15504",descripcion :"Filtro Mann Comb WK 9034 z Un",precio:"7724"},
{codigo:"7893390802605",descripcion :"Filtro WIX comb WF 33 521 Mann 1 Un",precio:"2473"},
{codigo:"15016",descripcion :"Hora Mano de Obra Boxes/Lubricentro",precio:"1000"}]*/

//console.log(productosServer(...productos));
// Expected output: 6
//productos(...productosServer)
//////////////////////ESTA FUNCION REFRESCA LA PAGINA////////////////////////////////////////////////////

function refrescarPagina() {
  location.reload();
}
/////////////////AGREGA FECHA Y HORA ACTUAL AL DOCUMENTO//////////////////////////////////////////////////////

function agregarFechayhora() {
const fechaHora = document.getElementById("fechaYhora");
const ahora = new Date();
const fechaHoraString = ahora.toLocaleString();
fechaHora.innerHTML = fechaHoraString;
}
agregarFechayhora()


/////////////////MOSTRAR TOAST///////////////////////////////////////////////////////
function mostrarToast() {
  Toastify({
    text: "Producto Agregado",
    duration: 300,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #0D39C1  , #092EA2)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}
function mostrarToasttotal() {
  Toastify({
    text: "Calculando presupuesto",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #0D39C1  , #092EA2)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}
/////////////FUNCIONES PARA STORAGE //////////////////////////////////////////////////
function agregarStorage() {
  let productosJSON = JSON.stringify(productos);
  localStorage.setItem("productos", productosJSON);
}
function obtenerStorage(){
let productosGuardados = localStorage.getItem('productos');
let productosJSON = JSON.parse(productosGuardados);
if (productosJSON) {
  productos = productosJSON;
}}

obtenerStorage()


///////////////////////AGREGAR NUEVOS PRODUCTOS AL ARRAY ////////////////////////

const botonAgregarProducto = document.getElementById('agregar-producto');
const modalAgregarProducto = document.getElementById('modal-agregar-producto');
botonAgregarProducto.addEventListener('click', () => {
  modalAgregarProducto.style.display = 'block';
});
const formularioAgregarProducto = document.getElementById('formulario-agregar-producto');
formularioAgregarProducto.addEventListener('submit', (event) => {
event.preventDefault()
let codigo = document.getElementById('codigox').value;
let descripcion = document.getElementById('descripcionx').value;
let precio = document.getElementById('preciox').value;
let nuevoProducto = {codigo,descripcion,precio};
productos.push(nuevoProducto); 
modalAgregarProducto.style.display = 'none';
formularioAgregarProducto.reset();
agregarStorage()
});    
//////////////////////////AGREGAR PRODUCTOS A LA TABLA (busca el código y devuelve precio y descripcion del array productos)/////////

function buscarCoincidencia(){
  const codigo = document.getElementById("inputBuscar").value
  const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
    }
    document.getElementById('descripcion').innerHTML=producto.descripcion
    if (producto.precio==0){
      document.getElementById("fila1").style.display = "none";
     }else
    document.getElementById ('precio').innerHTML=producto.precio
}
function buscarCoincidencia1(){
 const codigo = document.getElementById("inputBuscar1").value
 const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
  }
   document.getElementById('descripcion1').innerHTML=producto.descripcion
   if (producto.precio==0){
    document.getElementById("fila2").style.display = "none";
   }else   
   document.getElementById ('precio1').innerHTML=producto.precio
}
function buscarCoincidencia2(){
 const codigo = document.getElementById("inputBuscar2").value
 const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
  }
  document.getElementById('descripcion2').innerHTML=producto.descripcion
  if (producto.precio==0){
    document.getElementById("fila3").style.display = "none";
   }else 
  document.getElementById ('precio2').innerHTML=producto.precio
}
function buscarCoincidencia3(){
 const codigo = document.getElementById("inputBuscar3").value
 const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
  }
   document.getElementById('descripcion3').innerHTML=producto.descripcion
   if (producto.precio==0){
    document.getElementById("fila4").style.display = "none";
   }else
   document.getElementById ('precio3').innerHTML=producto.precio
}
function buscarCoincidencia4(){
 const codigo = document.getElementById("inputBuscar4").value
 const producto = productos.find(p => p.codigo === codigo);  
  if (!producto) {
    Swal.fire('código no encontrado')
  }
   document.getElementById('descripcion4').innerHTML=producto.descripcion
   if (producto.precio==0){
    document.getElementById("fila5").style.display = "none";
   }else  
   document.getElementById ('precio4').innerHTML=producto.precio
}
function buscarCoincidencia5(){
 const codigo = document.getElementById("inputBuscar5").value
 const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
  }
   document.getElementById('descripcion5').innerHTML=producto.descripcion
   if (producto.precio==0){
    document.getElementById("fila6").style.display = "none";
   }else  
   document.getElementById ('precio5').innerHTML=producto.precio
}
function buscarCoincidencia6(){
 const codigo = document.getElementById("inputBuscar6").value
 const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
  }
   document.getElementById('descripcion6').innerHTML=producto.descripcion
   if (producto.precio==0){
    document.getElementById("fila7").style.display = "none";
   }else
   document.getElementById ('precio6').innerHTML=producto.precio
}

/// AL CLICKEAR LOS BOTONES "AGREGAR" MUESTRA EL VALOR DE DESCRIPCION Y PRECIO DEL ARRAY PRODUCTOS VINCULADOS AL CODIGO SELECCIONADO///

let boton0 = document.getElementById("boton0")
boton0.addEventListener("click", () => {
buscarCoincidencia()
mostrarToast()
})

let boton1 = document.getElementById("boton1")
boton1.addEventListener("click", () => {
buscarCoincidencia1()
mostrarToast()
})

let boton2 = document.getElementById("boton2")
boton2.addEventListener("click", () => {
buscarCoincidencia2()
mostrarToast()
}) 
 
let boton3 = document.getElementById("boton3")
boton3.addEventListener("click", () => {
buscarCoincidencia3()
mostrarToast()
})

let boton4 = document.getElementById("boton4")
boton4.addEventListener("click", () => {
buscarCoincidencia4()
mostrarToast()
})

let boton5 = document.getElementById("boton5")
boton5.addEventListener("click", () => {
buscarCoincidencia5()
mostrarToast()
})

let boton6 = document.getElementById("boton6")
boton6.addEventListener("click", () => {
buscarCoincidencia6()
mostrarToast()
})

let boton7 = document.getElementById("boton7")
boton7.addEventListener("click", () => {
sumatodo()
mostrarToast()
})


let boton8 = document.getElementById("boton8")
boton8.addEventListener("click", () => {
buscarDescripcion()
mostrarToast()
})


////////////ESTAS FUNCIONES SUMAN TODOS LOS CODIGOS INGRESADOS LUEGO DE CLICKEAR EL BOTON TOTAL///////////////


 function sumarPrecios1() {
  const precios = [
    parseFloat(document.getElementById('precio').innerHTML) || 0,
    parseFloat(document.getElementById('precio1').innerHTML) || 0,
    parseFloat(document.getElementById('precio2').innerHTML) || 0,
    parseFloat(document.getElementById('precio3').innerHTML) || 0,
    parseFloat(document.getElementById('precio4').innerHTML) || 0,
    parseFloat(document.getElementById('precio5').innerHTML) || 0,
    parseFloat(document.getElementById('precio6').innerHTML) || 0
  ];
  let precioTotal2 = 0;
  for (let i = 0; i < precios.length; i++) {
    precioTotal2 += precios[i];
  }
  document.getElementById('sumaCompleto').innerHTML = '$' + precioTotal2;


 ocultarBotones()
 ocultarInputs()
}

function sumarPrecios2() {
  const precios = [
    parseFloat(document.getElementById('precio').innerHTML) || 0,
    parseFloat(document.getElementById('precio1').innerHTML) || 0,
    parseFloat(document.getElementById('precio2').innerHTML) || 0,
    parseFloat(document.getElementById('precio3').innerHTML) || 0,
    parseFloat(document.getElementById('precio4').innerHTML) || 0,
    parseFloat(document.getElementById('precio5').innerHTML) || 0,
    parseFloat(document.getElementById('precio6').innerHTML) || 0
  ];
  let precioTotal = 0;
  for (let i = 0; i < precios.length; i++) {
    precioTotal += precios[i];
  }
  precioTotal += PREMIUM;
  document.getElementById('sumaPremium').innerHTML = '$' + precioTotal;
  mostrarToasttotal()
  ocultarBotones();
  ocultarInputs();
}


function sumatodo() {
 document.getElementById("boton0").click();
 document.getElementById("boton1").click();
 document.getElementById("boton2").click();
 document.getElementById("boton3").click();
 document.getElementById("boton4").click();
 document.getElementById("boton5").click();
 document.getElementById("boton6").click();
 sumarPrecios1();
 sumarPrecios2();
}
   
  
///////ESTA FUNCION BUSCA UNA CADENA EN DESCRIPCION DEL ARRAY Y DEVUELVE LAS COINCIDENCIAS EN UNA LI MOSTRANDO CODIGO-DESCRIPCION//////

function buscarDescripcion() {
  const resultados = [];
  const busqueda = document.getElementById('buscarInput').value.toLowerCase();
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].descripcion.toLowerCase().includes(busqueda)) {
      resultados.push(`<li>${productos[i].codigo} - ${productos[i].descripcion}</li>`);
    }
  }
  document.getElementById('resultados').innerHTML = resultados.join('');
}

///ESTAS FUNCIONES OCULTAN LOS BOTONES, INPUTS Y MUESTRA EL CONTENEDOR DIAGNOSTICOS PARA GENERAR UN PRESUPUESTO LISTO PARA IMPRIMIR/////////////////// 
/////////////////LA PAGINA SE REFRESCA LUEGO DE 1.5 MINUTOS PARA GENERAR UN NUEVO PRESUPUESTO////////////////////////////////
function ocultarBotones(){  
  document.getElementById("boton0").style.display = "none";
  document.getElementById("boton1").style.display = "none";
  document.getElementById("boton2").style.display = "none";
  document.getElementById("boton3").style.display = "none";
  document.getElementById("boton4").style.display = "none";
  document.getElementById("boton5").style.display = "none";
  document.getElementById("boton6").style.display = "none";
  document.getElementById("boton7").style.display = "none";
  document.getElementById("diagnosticos_contenedor").style.display = "block";
  document.getElementById("contenedorCertificado").style.display = "block";  
} 
function ocultarInputs() {
  document.getElementById("boton8").style.display ="none";
  document.getElementById("buscarInput").style.display ="none";
  document.getElementById("resultados").style.display ="none";
  document.getElementById("inputBuscar").style.display = "none"; 
  document.getElementById("inputBuscar1").style.display = "none"; 
  document.getElementById("inputBuscar2").style.display = "none";  
  document.getElementById("inputBuscar3").style.display = "none"; 
  document.getElementById("inputBuscar4").style.display = "none"; 
  document.getElementById("inputBuscar5").style.display = "none"; 
  document.getElementById("inputBuscar6").style.display = "none"; 
  document.getElementById("icono_aceite").style.display = "flex";
  document.getElementById("icono_combustible").style.display = "flex";
  document.getElementById("icono_aire").style.display = "flex";
  document.getElementById("icono_elaion").style.display = "flex";
  document.getElementById("icono_elaion1").style.display = "flex";
  document.getElementById("icono_elaion2").style.display = "flex";
  document.getElementById("icono_elaion3").style.display = "flex";
  document.getElementById("agregarProductos").style.display = "none"; 
  document.getElementById("logo_aca").style.display = "flex"; 
  document.getElementById("logo_credito").style.display = "flex"; 
  document.getElementById("logo_escalonado").style.display = "flex"; 
  document.getElementById("logo_cosmetica").style.display = "flex";
  setTimeout (() => {
    refrescarPagina()
  },90000)
}

/////ACA VINCULO CON LOS INPUT HTML PARA QUE AL USAR USAR EL ELEMENTO SELECT AGREGUE LOS CODIGOS CORRESPONDIENTES A CADA VEHICULO/////

let campo1 = document.getElementById("inputBuscar");
let campo2 = document.getElementById("inputBuscar1");
let campo3 = document.getElementById("inputBuscar2");
let campo4 = document.getElementById("inputBuscar3");
let campo5 = document.getElementById("inputBuscar4");
let campo6 = document.getElementById("inputBuscar5");
let campo7 = document.getElementById("inputBuscar6");
let campo8 = document.getElementById("inputBuscar7");


function recargarPagina() {
  document.getElementById("autos").addEventListener('change', function() {
    
    
  location.reload();
  });
}



////ACA HICE OBJETOS CON CADA SELECCION DE AUTO CON SUS CODIGOS CORRESPONDIENTES Y SE AGREGUEN AL INPUT PARA LUEGO CLICKEAR TOTAL//////////////////////

document.getElementById("autos").addEventListener('change', function() {
  
  let valor_select = this.value;
 
  if (valor_select == "goltrend") {
    campo1.value ="172795";
    campo5.value = "18595";
    campo6.value = "18958";
    campo7.value = "15424";
    recargarPagina()
    
  }
  if (valor_select == "suran8v") {
    campo1.value ="172795";
    campo5.value = "18595";
    campo6.value = "18958";
    campo7.value = "18739";
    recargarPagina()
  }
  if (valor_select == "suran16v") {
    campo1.value ="172795";
    campo5.value = "15502";
    campo6.value = "15979";
    campo7.value = "18739";
    recargarPagina()
  }
  if (valor_select == "amarok20(2015>)") {
    campo1.value ="172795";
    campo2.value = "172795";
    campo5.value = "15407";
    campo6.value = "15169";
    campo7.value = "4011558353834";
    recargarPagina()
  }
  if (valor_select == "gol16") {
    campo1.value ="172795";
    campo5.value = "18622";
    campo6.value = "18310";
    campo7.value = "18739";
    recargarPagina()
  }
  if (valor_select == "prisma/onix1.4/spin1.8") {
    campo1.value ="171795";
    campo5.value = "4011558744502";
    campo6.value = "15550";
    recargarPagina()
    
  }
  if (valor_select == "corsaclassic") {
    campo1.value ="171795";
    campo5.value = "4011558744502";
    campo6.value = "18151";
    campo7.value = "18712";
    recargarPagina()
  }
  if (valor_select == "tracker18") {
    campo1.value ="171795";
    campo2.value = "171796";
    campo5.value = "15367";
    campo6.value = "15505";
    recargarPagina()
  }
  if (valor_select == "argo/cronos13") {
    campo1.value ="170995";
    campo5.value = "4011558758004";
    campo6.value = "4011558080624";
    campo7.value = "18711";
    recargarPagina()
  }
  if (valor_select == "focus2/31.6") {
    campo1.value ="171895";
    campo5.value = "15400";
    campo6.value = "4011558801830";
    campo7.value = "18726";
    recargarPagina()
  }
  if (valor_select == "golfmsi16") {
    campo1.value ="172795";
    campo5.value = "15502";
    campo6.value = "15979";
    recargarPagina()
    
  }
  if (valor_select == "20716") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "4011558365509";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "20714") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "15150";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "partner16") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "15345";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "fiestaka16") {
    campo1.value ="171895";
    campo5.value = "15400";
    campo6.value = "4011558352998";
    campo7.value = "18726";
    recargarPagina()
  }
  if (valor_select == "argo/cronos18") {
    campo1.value ="171895";
    campo2.value = "171896";
    campo5.value = "15353";
    campo6.value = "4011558081447";
    campo7.value = "18711";
   recargarPagina()
  }
  if (valor_select == "amarok20(2014-)") {
    campo1.value ="172795";
    campo2.value = "172795";
    campo5.value = "15407";
    campo6.value = "15169";
    campo7.value = "15648";
    recargarPagina()
  }
  if (valor_select == "aveog3") {
    campo1.value ="171795";
    campo5.value = "4011558744502";
    campo6.value = "18959";
    recargarPagina()
  }
  if (valor_select == "paliosiena14") {
    campo1.value ="171895";
    campo5.value = "18572";
    campo6.value = "4011558072872";
    campo7.value = "18711";
    recargarPagina()
  }
  if (valor_select == "ranger32") {
    campo1.value ="171895";
    campo2.value ="171895";
    campo3.value ="171896";
    campo4.value ="171896";
    campo5.value = "15404";
    campo6.value = "15420";
    campo7.value = "16424";
    recargarPagina()
  }
  if (valor_select == "ranger22d") {
    campo1.value ="171895";
    campo2.value ="171895";
    campo3.value ="171896";
    campo5.value = "15404";
    campo6.value = "15420";
    campo7.value = "16424";
    recargarPagina()
  }
  if (valor_select == "cruze14") {
    campo1.value ="170995";
    campo5.value = "4011558094072";
    campo6.value = "4011558084448"; 
    recargarPagina()
  }
  if (valor_select == "mobi") {
    campo1.value ="171895";
    campo5.value = "18572";
    campo6.value = "4011558072872"; 
    campo7.value = "4011558621636";
    recargarPagina()
  }
  if (valor_select == "clio12") {
    campo1.value ="104099";
    campo5.value = "18577";
    campo6.value = "18416"; 
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "oroch20") {
    campo1.value ="172995";
    campo2.value ="172996";
    campo3.value ="172996";
    campo5.value = "18624";
    campo6.value = "16252";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "celta") {
    campo1.value ="171795";
    campo5.value = "4011558744502";
    campo6.value = "18109"; 
    campo7.value = "18712";
    recargarPagina()
  }
  if (valor_select == "sonic") {
    campo1.value ="171795";
    campo2.value ="171796";
    campo5.value = "15367";
    campo6.value = "15550";  
    recargarPagina()
  }
  if (valor_select == "c3nafta") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "15345";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "c416nafta") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "4011558365509";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "c416thp") {
    campo1.value ="172895";
    campo2.value ="172896";
    campo5.value = "15067";
    campo6.value = "15392";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "30816thp") {
    campo1.value ="172895";
    campo2.value ="172896";
    campo5.value = "15067";
    campo6.value = "15392";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "30816vti") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "4011558365509";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "30816hdi") {
    campo1.value ="172995";
    campo5.value = "18484";
    campo6.value = "15397";
    campo7.value = "15504";
    recargarPagina()
  }
  if (valor_select == "up10") {
    campo1.value ="172795";
    campo5.value = "15502";
    campo6.value = "15501";
    campo7.value = "15424";
    recargarPagina()
   }
   if (valor_select == "torod") {
    campo1.value ="172695";
    campo2.value ="172696";
    campo5.value = "16229";
    campo6.value = "4011558088132";
    campo7.value = "16234";
    recargarPagina()
   }
  if (valor_select == "toron") {
    campo1.value ="171895";
    campo2.value ="171896";
    campo5.value = "15353";
    campo6.value = "4011558088132";
    campo7.value = "4011558621636";
    recargarPagina()
    }
   if (valor_select == "virtus16") {
    campo1.value ="172795";
    campo5.value = "15502";
    campo6.value = "15979"; 
    recargarPagina()
    }
   if (valor_select == "kangoon") {
    campo1.value ="172995";
    campo2.value ="172996";
    campo5.value = "18624";
    campo6.value = "18042";
    campo7.value = "15141";
    recargarPagina()
    }
   if (valor_select == "partnerhdi") {
    campo1.value ="172995";
    campo5.value = "18484";
    campo6.value = "15397";
    campo7.value = "15504";
    recargarPagina()
    }
  if (valor_select == "berlingohdi") {
    campo1.value ="172995";
    campo5.value = "18484";
    campo6.value = "15397";
    campo7.value = "15504";
    recargarPagina()
    }
   if (valor_select == "fiestakinetic") {
    campo1.value ="171895";
    campo5.value = "15400";
    campo6.value = "4011558352998";
    campo7.value = "18726";
    recargarPagina()
    }
   if (valor_select == "kwid") {
    campo1.value ="172995";
    campo5.value = "18577";
    campo6.value = "4011558338381";
    campo7.value = "15424";
    recargarPagina()
    }
    if (valor_select == "kangoostepwayn") {
     campo1.value ="172995";
     campo2.value ="172996";
     campo5.value = "18578";
     campo6.value = "16252";
     campo7.value = "15141";
     recargarPagina()
     }              
    if (valor_select == "etios") {
     campo1.value ="172895";
     campo5.value = "15524";
     campo6.value = "4011558086305";
     recargarPagina()                 
     }
     if (valor_select == "corolla2011") {
     campo1.value ="172895";
     campo5.value = "15521";
     campo6.value = "15372"; 
     recargarPagina()
     }
     if (valor_select == "hilux30") {
     campo1.value ="172695";
     campo2.value ="172695";
     campo5.value = "15143";
     campo6.value = "18931";
     campo7.value = "18886";
     recargarPagina()
     }
     if (valor_select == "sandero8v") {
     campo1.value ="172995";
     campo5.value = "18624";
     campo6.value = "15519";
     campo7.value = "15141";
     recargarPagina()
    }
    if (valor_select == "ecosport15") {
     campo1.value ="171895";
     campo5.value = "15400";
     campo6.value = "4011558340506";
     campo7.value = "18726";
    recargarPagina()
    }
    if (valor_select == "renegadenafta") {
     campo1.value ="171895";
     campo2.value ="171896";                              
     campo5.value = "15353";
     campo6.value = "4011558088132";
     campo7.value = "4011558621636";
    recargarPagina()
    }   
    if (valor_select == "208n") {
      campo1.value ="172995";                               
      campo5.value = "15067";
      campo6.value = "15345";
      campo7.value = "15141";
     recargarPagina()
     } 
     if (valor_select == "ecosportrocam") {
      campo1.value ="171895";                               
      campo2.value ="171896"; 
      campo5.value = "18617";
      campo6.value = "15148";
      campo7.value = "18944";
     recargarPagina()
     } 
     if (valor_select == "gol14") {
      campo1.value ="172795";                               
      campo5.value = "18622";
      campo6.value = "18310";
      campo7.value = "15424";
     recargarPagina()
     } 
     if (valor_select == "uppepper") {
      campo1.value ="172795";                               
      campo5.value = "15502";
      campo6.value = "4011558073350";
      campo7.value = "15424";
     recargarPagina()
     }
     if (valor_select == "cruze18") {
      campo1.value ="171795";                               
      campo2.value ="171796";
      campo5.value = "15367";
      campo6.value = "15352";
     recargarPagina()
     }      
     if (valor_select == "s10duramax") {
      campo1.value ="171795";                               
      campo2.value ="171795";
      campo5.value = "15980";
      campo6.value = "4011558061852";
      campo7.value = "765809302945";
     recargarPagina()
     }        
     if (valor_select == "paliosiena16") {
      campo1.value ="171895";                               
      campo2.value ="171896";
      campo5.value = "15353";
      campo6.value = "15350";
      campo7.value = "18711";
     recargarPagina()
     }  
     if (valor_select == "punto14") {
      campo1.value ="171895";                               
      campo5.value = "18572";
      campo6.value = "18927";
      campo7.value = "18711";
     recargarPagina()
     }  
     if (valor_select == "focus2/2.0") {
      campo1.value ="171895";                               
      campo2.value ="171896";
      campo5.value = "18597";
      campo6.value = "4011558801830";
      campo7.value = "18726";
     recargarPagina()
     }         
     if (valor_select == "ka2rocam") {
      campo1.value ="171895";                               
      campo2.value ="171896";
      campo5.value = "18617";
      campo6.value = "15148";
      campo7.value = "18775";
     recargarPagina()
     }      
     if (valor_select == "ranger30pe") {
      campo1.value ="171895";                               
      campo2.value ="171895";
      campo3.value ="171896";
      campo5.value = "18956";
      campo6.value = "18073";
      campo7.value = "18123";
     recargarPagina()
     } 
     if (valor_select == "hrv2") {
      campo1.value ="170995";                               
      campo5.value = "18572";
      campo6.value = "765809306356";      
     recargarPagina()
     } 
     if (valor_select == "fit15") {
      campo1.value ="170995";                               
      campo5.value = "18572";
      campo6.value = "15402";      
     recargarPagina()
     } 
     if (valor_select == "vento25") {
      campo1.value ="172795";                               
      campo2.value ="172796";
      campo3.value ="172796";
      campo5.value ="18482";
      campo6.value = "18936";
      campo7.value = "18942";      
     recargarPagina()
     } 
     if (valor_select == "golftsi14") {
      campo1.value ="172795";                               
      campo2.value ="172796";
      campo5.value ="15502";
      campo6.value = "15552";     
     recargarPagina()
     } 
     if (valor_select == "berlingo19") {
      campo1.value ="103899"; 
      campo2.value ="103896";                            
      campo5.value ="4011558076658";
      campo6.value ="18084";
      campo7.value = "18533";     
     recargarPagina()
     } 
     if (valor_select == "partner19") {
      campo1.value ="103899"; 
      campo2.value ="103896";                            
      campo5.value ="4011558076658";
      campo6.value ="18084";
      campo7.value = "18533";     
     recargarPagina()
     } 
     if (valor_select == "meriva18") {
      campo1.value ="171795";                           
      campo5.value ="4011558744502";
      campo6.value ="4011558075606";
      campo7.value = "18712";     
     recargarPagina()
     } 
     

})


































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
