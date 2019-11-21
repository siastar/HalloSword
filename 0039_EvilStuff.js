"use strict";

/* about:evilStuff                                                                                           
                                                                                                             
the object evilStuff contains game elements presets, such as characters, weapons, armors and items           
is in external file to easy access and modification                                                          
                                                                                                           */ 

const evilStuff = {
	
   //       KIND DEFINITION - defines players, enemie (sombies ghosts) and eventual NPC             
   
/*                                                                                                           
the functions in this section are actually the game presets and define the stats of the objects in the game  
the functions are called by the related prototypes and give them the presets for the item to create          
makeZombie will pass to the protoKind prototype the values to assemble a zombie                              
makeGhost will pass to the protoKind prototype the values to assemble a ghost                                
makeAxe will pass to the protoWeapon prototype the values to assemble an axe                                 
etc etc etc                                                                                                  
                                                                                                           */
                                                                                                                    	
				makeHero : function () {  
												  evilBuilder.chKind = "Human";
												  evilBuilder.chExist = true;												  
												  evilBuilder.chNick = "Conan";
												  evilBuilder.chLevel = 10;
												  evilBuilder.chAttack = 10;
												  evilBuilder.chDefence = 23;
												  evilBuilder.chInitiative = 8;
												  evilBuilder.chSpeed = 6;
												  evilBuilder.chStepCounter = 0;
												  evilBuilder.chHealth = 74;
												  evilBuilder.chMagic = 0;
												  evilBuilder.chSide = "neutral";
												  evilBuilder.chCoord = [666,666];
												  evilBuilder.chIdentifier = "H";
												  return (evilBuilder.protoKind());
				},   		
   					
				
				makeZombie : function () {
												  evilBuilder.chKind = "Zombie";
												  evilBuilder.chExist = true;	
												  evilBuilder.chNick = "Dead Man Walking";
												  evilBuilder.chLevel = 10;
												  evilBuilder.chAttack = 12;
												  evilBuilder.chDefence = 23;
												  evilBuilder.chInitiative = 6;
												  evilBuilder.chSpeed = 6;
												  evilBuilder.chStepCounter = 0;												  
												  evilBuilder.chHealth = 50;
												  evilBuilder.chMagic = 0;
												  evilBuilder.chSide = "neutral";
												  evilBuilder.chCoord = [666,666];
												  evilBuilder.chIdentifier = "Z";												  
												  return (evilBuilder.protoKind());
				},   		
   	
				makeGhost : function () { 
												  evilBuilder.chKind = "Ghost";
												  evilBuilder.chExist = true;	
												  evilBuilder.chNick = "Mortal Rag";
												  evilBuilder.chLevel = 11;
												  evilBuilder.chAttack = 13;
												  evilBuilder.chDefence = 26;
												  evilBuilder.chInitiative = 12;
												  evilBuilder.chSpeed = 8;
												  evilBuilder.chStepCounter = 0;												  
												  evilBuilder.chHealth = 41;
												  evilBuilder.chMagic = 0;
												  evilBuilder.chSide = "neutral";
												  evilBuilder.chCoord = [666,666];
												  evilBuilder.chIdentifier = "G";												  
												  return (evilBuilder.protoKind());
				},   		

				makeVampire : function () {
												  evilBuilder.chKind = "Vampire";
												  evilBuilder.chExist = true;	 
												  evilBuilder.chNick = "Draculeo";
												  evilBuilder.chLevel = 14;
												  evilBuilder.chAttack = 1000;
										   	  evilBuilder.chDefence = 29
												  evilBuilder.chInitiative = 12;
												  evilBuilder.chSpeed = 12;
												  evilBuilder.chStepCounter = 0;												   
											     evilBuilder.chHealth = 50;
												  evilBuilder.chMagic = 0;
												  evilBuilder.chSide = "neutral";
												  evilBuilder.chCoord = [666,666];
												  evilBuilder.chIdentifier = "V";							 					  
							 					  return (evilBuilder.protoKind());
	         },


   //       WEAPONS DEFINITION - defines weapons such as swords axes etc    

				makeSword : function(){
											  evilBuilder.weaponNick = "a simple sword";
											  evilBuilder.weaponLevel = 1;
											  evilBuilder.weaponDamage = 5;
											  evilBuilder.weaponRange = 1;	
											  evilBuilder.weaponAttackMod = 0;											
											  evilBuilder.weaponProp1 = "sword prop1";
											  evilBuilder.weaponProp2 = "sword prop2";
											  evilBuilder.weaponProp3 = "sword prop3";
											  evilBuilder.weaponDice = [1,10];
											  return (evilBuilder.protoWeapon());												
				},
							
				makeAxe : function(){
											  evilBuilder.weaponNick = "a solid Axe";
											  evilBuilder.weaponLevel = 1;
											  evilBuilder.weaponDamage = 6;
											  evilBuilder.weaponRange = 1;
											  evilBuilder.weaponAttackMod = 0;												
											  evilBuilder.weaponProp1 = "axe prop1";
											  evilBuilder.weaponProp2 = "axe prop2";
											  evilBuilder.weaponProp3 = "axe prop3";
											  evilBuilder.weaponDice = [2,6];
											  return (evilBuilder.protoWeapon());												
				},				

				makeKnife : function(){evilBuilder.weaponNick = "a simple knife";
											  evilBuilder.weaponLevel = 1;
											  evilBuilder.weaponDamage = 940;
											  evilBuilder.weaponRange = 1;
											  evilBuilder.weaponAttackMod = 6;												
											  evilBuilder.weaponProp1 = "knife prop1";
											  evilBuilder.weaponProp2 = "knife prop2";
											  evilBuilder.weaponProp3 = "knife prop3";
											  evilBuilder.weaponDice = [2,4];
											  return (evilBuilder.protoWeapon());												
				},

				makeHammer : function(){evilBuilder.weaponNick = "a war hammer";
											  evilBuilder.weaponLevel = 1;
											  evilBuilder.weaponDamage = 11;
											  evilBuilder.weaponRange = 1;
											  evilBuilder.weaponAttackMod = 0;												
											  evilBuilder.weaponProp1 = "war hammer prop1";
											  evilBuilder.weaponProp2 = "war hammer prop2";
											  evilBuilder.weaponProp3 = "war hammer prop3";
											  evilBuilder.weaponDice = [1,12];
											  return (evilBuilder.protoWeapon());												
				},

   //       ARMOR DEFINITION	defines armors such as jackets coats etc   
										
				makeJacket : function(){evilBuilder.armorNick = "a leather jacket";
											   evilBuilder.armorLevel = 1;
											   evilBuilder.armorProtection = 5;
											   evilBuilder.armorDefenceMod = 0;											
											   evilBuilder.weaponProp1 = "armor prop1";
											   evilBuilder.weaponProp2 = "armor prop2"
											   evilBuilder.weaponProp3 = "armor prop3";
											   return (evilBuilder.protoArmor());												
				},				
						
				makeCoat :   function(){evilBuilder.armorNick = "a rusty coat";
											   evilBuilder.armorLevel = 1;
											   evilBuilder.armorProtection = 4;
											   evilBuilder.armorDefenceMod = 0;											
											   evilBuilder.weaponProp1 = "axe prop1";
											   evilBuilder.weaponProp2 = "axe prop2"
											   evilBuilder.weaponProp3 = "axe prop3";
											   return (evilBuilder.protoArmor());												
				},				

				makeBlueHat : function(){evilBuilder.armorNick = "a blue hat";
											    evilBuilder.armorLevel = 1;
											    evilBuilder.armorProtection = 6;
											    evilBuilder.armorDefenceMod = 0;											
											    evilBuilder.weaponProp1 = "bluehat prop1";
											    evilBuilder.weaponProp2 = "bluehat prop2"
											    evilBuilder.weaponProp3 = "bluehat prop3";
							 		  		    return (evilBuilder.protoArmor());												
				},	

				makeBlackArmor : function(){evilBuilder.armorNick = "a black armor";
											    evilBuilder.armorLevel = 1;
											    evilBuilder.armorProtection = 8;
											    evilBuilder.armorDefenceMod = 0;											
											    evilBuilder.weaponProp1 = "black armor prop1";
											    evilBuilder.weaponProp2 = "black armor prop2"
											    evilBuilder.weaponProp3 = "black armor prop3";
							 		  		    return (evilBuilder.protoArmor());												
				},	

   //       TILE DEFINITION	defines MAP TILES 

				makeTile00 : function (xDim,yDim){
                               evilMapGen.tileCoord = [xDim,yDim];
                               evilMapGen.tileWalk = null;								
										 evilMapGen.tileCode = 0;
										 evilMapGen.tileProp1 = "default tile prop 1";
										 evilMapGen.tileProp2 = "default tile prop 2";
										 evilMapGen.tileProp3 = "default tile prop 3";
										 evilMapGen.tileProp4 = "default tile prop 4";
										 evilMapGen.tileProp5 = "default tile prop 5";
										 evilMapGen.tileProp6 = "default tile prop 6";
										 evilMapGen.tileProp7 = "default tile prop 7";
										 evilMapGen.tileProp8 = "default tile prop 8";
										 evilMapGen.tileProp9 = "default tile prop 9";
										 return(evilMapGen.protoTile());										 			
				},
};   		

