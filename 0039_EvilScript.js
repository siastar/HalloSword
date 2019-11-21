"use strict";

/* about EvilScript:

                                    E V I L S C R I P T

                                           ytze

                                         May 2019

at the state of the art, the idea is to create a system of objects which contains all the
necessary properties and methods used in the app, everything is handled with interaction between
this objects.

Every part of the game is an object
weapons, items, armors and characters are objects.

a "zombie" with a "coat" and a "sword" will be an object "X" which contains objects zombie,
object coat and object sword.

during the game objects are built and erased by assembling properties and
methods from the Main object (evilBuilder))

the properties and methods are all declared at the beginning of the main object
the order should not be relevant, we don't want that kind of issues but gotta test and figure it
out this stuff.


                                                                                                                           */

/* about evilBuilder:

BEGIN OF evilBuilder OBJECT
evilBuilder is the object which defines and generates the other objects

ABOUT ADDING PROPERTIES TO CHARACTERS, WEAPONS, ARMORS AND ITEMS
to add properties to chars, wearpom armors and items:
1) add the property in evilBuilder es. charWeight : 0, by default all properties re set to 0 or "default property"
2) add the property in the relative prototype object (protoKind, protoWeapon, protoArmor, protoItem)
3) add the property in the relative evilStuff.js file, the property should be added to all the presets, that means that if
I add the "Weight" property to zombie it should be added to vampires, werwolf, heroes etc etc
                                                                                                                           */
const evilBuilder = {
//GAME STUFF

//CHARACTERS PROPERTIES
				chExist : null,
				chKind : "default kind",
     		chNick : "default nick",
				chJob : "default job",
     		chLevel : 0,
     		chAttack : 0,
     		chDefence : 0,
     		chInitiative : 0,
     		chSpeed : 0,
				chStepCounter : 0,
     		chHealth : 0,
     		chMagic : 0,
				chSide : "A", // Side is necessary to define enemies and allies and neutrals in the algorhythm
				chIdentifier : "X",
				chProp1 : 0,
				chProp2 : 0,
				chProp3 : 0,
				chProp4 : 0,
				chProp5 : 0,
				chCoord : ["room", 1, 1],

				//WEAPONS STUFF
				weaponNick : "default weapon name",
				weaponLevel : 1,
    		weaponDamage : 1,
				weaponRange : 1,
				weaponAttackMod : 0,
    		weaponProp1 : "default weapon property 1",
    		weaponProp2 : "default weapon property 2",
    		weaponProp3 : "default weapon property 3",
  			weaponDice : "default weapon property 4",

				//ARMORS STUFF
				armorNick : "default armor",
    		armorLevel : 0,
				armorProtection : 0,
				armorDefenceMod : 0,
    		armorProp1 : "default armor property 1",
    		armorProp2 : "default armor property 2",
  			armorProp3 : "default armor property 3",

				//ITEMS STUFF
				itemNick : "default item name",
				itemProp1 : "default item property 1",
				itemProp2 : "default item property 2",
				itemProp3 : "default item property 3",
				itemProp4 : "default item property 4",
				itemProp5 : "default item property 5",

/* about character prototype:

protoFolks
this function defines the typical guy you can meet in a dungeon, as an object made of objects
it actually has only methods which are used to build the component objects.

evilDude
calls a function which generates an object "zombie" or whatever with his
own preset stats, such as speed, health, attack, etc.

equippedArmor
calls a function which generates an object "coat" or whatever with its
own preset stats, such as protection, bonus, magic, etc.

equippedWeapon
calls a function which generates an object "axe" or whatever with its
own preset stats, such as damage, range, magic, etc.

// evilBuilder METHODS
in the end protoFolks returns an object which contains 3 objects
a preset of character
a preset of weapon
a preset of armor
eventually other can be added in the process
we will see...

the idea is to create objects with specific properties and methods grabbed from the main
object, whose values come from different presets stored in the evilStuff.js file.
*/

				protoFolks : function(){
										    console.log("#### protoFolks now running ####");
										    let aNewGuy = Object.create(Object.prototype,{
/*prototype of the generic char-*/ evilDude : {value: this.evilDude,},	              /*  links to generateGuy function   */
/*-acter which is made of objec-*/ equippedArmor :{value: this.equippedArmor,},       /*  links to generateGuy function   */
/*-ts such as kind, weapon,armo-*/ equippedWeapon : {value: this.equippedWeapon,},    /*  links to generateGuy function   */
/*-r and other eventual objects */
/*or methods                    */

											    sayHi:{value: this.sayHi(),},                         /* test method no actual porpuse */
    										  introduceYerself:{value: this.introduceYerself(),},	  /* test method no actual porpuse */
  											  });
  								  return(aNewGuy);
  								  },

                  /*about protokind:

protokind defines an object which defines a guy of the game with his owns specific stats
no weapon or armor are defined here. In this way we can generate a wolverine with a blue hat
and flip flops as well a the same wolverine with a diamond armor and a spitfire sword.
this is because the idea is to randomize the most possible in order to have different situations
in different games.

I had to specify the conditions
configurable: true, writable: true
it was impossible to modify values of created characters
due to misterious error
Type​Error: "x" is read-only and Type​Error: can't redefine non-configurable property "x"

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/
defineProperty#Writable_attribute

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/
Read-only?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/
Cant_redefine_property?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default
*/

				protoKind : function () {
									     console.log("#### protoKind now running ####");
											 let evilDudeGuy = Object.create(Object.prototype,{
												                  exist : {value: this.chExist, configurable: true, writable: true},
/*protoKind takes   preset values*/	      kind : {value: this.chKind, configurable: true, writable: true},              /*chKind refers to the properties of the main object evilBuilder      */
/*from makeZombie makeGhost etc  */	      nick : {value: this.chNick, configurable: true, writable: true},              /*chNick refers to the properties of the main object evilBuilder      */
/*the function is called by      */	      level : {value: this.chLevel, configurable: true, writable: true},            /*chLevel refers to the properties of the main object evilBuilder     */
/*generateGuy function and       */       health : {value: this.chHealth, configurable: true, writable: true},          /*chHealth refers to the properties of the main object evilBuilder    */
/*switched by buildIt function   */       attack : {value: this.chAttack, configurable: true, writable: true},          /*chAttack refers to the properties of the main object evilBuilder    */
/*returns an object which could  */       defence : {value: this.chDefence, configurable: true, writable: true},        /*chDefence refers to the properties of the main object evilBuilder   */
/*be a player or a zombie or a   */       initiative : {value: this.chInitiative, configurable: true, writable: true},  /*chInitiative refers to the properties of the main object evilBuilder*/
/*ghost etc etc                  */       side : {value: this.chSide, configurable: true, writable: true},
												                  speed : {value: this.chSpeed, configurable: true, writable: true},
												                  stepCounter : {value: this.chStepCounter, configurable: true, writable: true},
												                  coord :{value: this.chCoord, configurable: true, writable: true},
												                  idn :{value: this.chIdentifier, configurable: true, writable: true},
                                        });
                    return(evilDudeGuy);
				},

/* about protoWeapon:
protoWeapon works like protoKind but it generates weapons, sword, axe, dildo
*/
				protoWeapon : function(){
										     console.log("#### protoWeapon now running ####");
											   let aWeapon = Object.create(Object.prototype,{
/*as well as protoKind, protoWea-*/		    nick:{value : this.weaponNick,},
/*-pon defines an object weapon  */    	  damage:{value : this.weaponDamage,},
/*picking preset from makeSword, */    	  range:{value : this.weaponRange,},
														              attackMod:{value : this.weaponAttackMod,},
/*makeAxe etc.It is called by    */    	  prop1:{value : this.weaponProp1,},
/*generateGuy function and retur-*/    	  prop2:{value : this.weaponProp2,},
/*-ns an object sword, axe, etc  */    	  prop3:{value : this.weaponProp3,},
/*                               */ 		  dice:{value : this.weaponDice,},
  													           });
  										return(aWeapon);
  		},

/* about protoArmor:
protoArmor works like protoKind but it generates weapons, coat, jacket, BlueHat...
*/
				protoArmor : function(){
										    console.log("#### protoArmor now running ####");
										    let anArmor = Object.create(Object.prototype,{
/*same as previous*/					           nick:{value: this.armorNick,},
    													           protection:{value: this.armorProtection,},
    													           level:{value: this.armorLevel,},
														             defenceMod : {value: this.armorDefenceMod,},
    													           prop1:{value: this.armorProp1,},
    													           prop2:{value: this.armorProp2,},
    													           prop3:{value: this.armorProp3,},
  													          });
  									 return(anArmor);
  		},

/* about generateGuy()
generateGuy is a function which expect to receive something like "ghost" "sword" "coat" in order to pass
the values to prototype of the character protoFolks which will assemble an object containing the 3
objects like the following non-code example

container object = {
 							{kind = zombie; health = 32; attack = 12 etc etc }
 							{weapon = sword; damage = 9; range = 1; etc etc}
 							{armor = jacket; protection = 5; etc etc}
							{other stuff}
						 }
*/

				generateGuy : function(kind, weapon, armor){
									       console.log("#### generateGuy now running ####");
/*links to protoFolks */    this.evilDude = this.buildIt(kind);          /* buildIt grabs called kind presets              */
/*links to protoWeapon*/	  this.equippedWeapon = this.buildIt(weapon);  /* buildIt grabs called weapon presets            */
/*links to protoArmor */	  this.equippedArmor = this.buildIt(armor);    /* buildIt grabs called armor presets             */

								 	        let builtGuy = this.protoFolks(kind, weapon, armor);
								 	    return (builtGuy);  /* returns a new guy, with weapon and armor */
				},				 							          /*                                          */
				                                  /*     builtGuy GOES TO OBJECT setEvil      */
															            /*                                          */

/* about item builder buildIt()
ok this is not elegant at all but for the moment we go this way.
This function interacts with generateGuy which calles it.
GenerateGuy sends to buildIt its values like "ghost" "axe" "coat" and the switcher
calls the functions necessary to create such objects then returns them
to generateGuy which incapsulates such objects in the character objects.
(more or less)
generateGuy calls buildIt ans asks for a specific guy (zombie/ghost/vampire/etc)
buildIt returns a zombie/ghost/vampire with his presets.
generateGuy stores the zombie/ghost/vampire then asks buildIt for a weapon (sword/axe/mace/etc)
buildIt returns a sword/axe/mace/etc with its presets.
generateGuy stores the sword/axe/mace/etc nearby the zombie/ghost/vampire.
then calls buildIt for an armor(coat/jacket/bluehat/etc)
buildIt returns coat/jacket/bluehat to buildAguy
this could e extended to multiple objects, anyway when the process will be ended generateGuy
will have assembled all the objects in a bigger object which could be like a
zombie with a coat and a mace
ghost with a jacket ans a axe
a vampire with a bluehat and a sword

something like:

 |----------------------------------------------------------------|
 |--character object->| (es. a ghost with sword and iron coat)    |
 |                    |                                           |
 |                    |->typeChar->|(es. ghost)                   |
 |                    |            |                              |
 |                    |			     |-->speed: 10;                   |
 |                    |			     |-->health: 65;                  |
 |                    |			     |-->etc...   		                |
 |						        |                                           |
 |						        |->weapon--->|(es. sword)                   |
 |                    |            |                              |
 |                    | 			     |-->damage: 10;                |
 |                    | 			     |-->bonus: 3;                  |
 |                    | 			     |-->etc...                     |
 |                    |                                           |
 |                    |->armor---->|(es. iron coat)               |
 |                                 |                              |
 |                                 |-->defence: 12;               |
 |        	                       |-->stuff: 4;                  |
 |                 			           |-->etc...                     |
 |----------------------------------------------------------------|

NB ALL THE DEFINITIONS ARE IN A DIFFERENT FILE CALLED EvilStuff_****.js
*/
				buildIt : function (it) {
									   console.log("#### buildIt now running ####");
										 var select = it;
										 let build = {};
										 switch(select) {
                     // build kind
										    case "zombie" : build = evilStuff.makeZombie();break; /*object evilStuff is in another file*/
										    case "ghost" : build = evilStuff.makeGhost();break;
										    case "vampire" : build = evilStuff.makeVampire();break;
										 // build weapons
										    case "sword" : build = evilStuff.makeSword();break;
										    case "axe" : build = evilStuff.makeAxe();break;
										    case "knife" : build = evilStuff.makeKnife();break;
										 // build armors
										    case "jacket" : build = evilStuff.makeJacket();break;
										    case "coat" : build = evilStuff.makeCoat();break;
										    case "bluehat" : build = evilStuff.makeBlueHat();break;
										 // build other items
										    default : build = "we don't have this thing in our inventory";
										 }
										return(build);
				},

/* about test function at the moment not in use:
   //  GAME FUNCTIONS this are the game functions, dices, turns, movements etc

  this methods are not used anymore
                                                                                                                          */
				sayHi : function() {return " Hi ! I'm a character !!! I'm going to kill you, btw";
				},

				introduceYerself  : function() {return ("I'm a " + this.chKind + " and my name is " + this.chNick);
				},

    		deathMatch : function (guy1, guy2) {
												  let hP1 = guy1.evilDude.health;
												  let hP2 = guy2.evilDude.health;
												  let nP1 = guy1.evilDude.nick;
												  let nP2 =	guy2.evilDude.nick;

												  console.log(nP1 + " health is " + hP1 + " ; " + nP2 + " health is " + hP2);

			   							     while (hP1 > 0 && hP2 > 0) {

																console.log(nP1 + " attacks " + nP2);
																let attack1 = this.rollDice(1,10);
																hP2 = hP2 - attack1;
																console.log(nP1 + " dice says " + attack1);
																console.log(nP1 + " health is " + hP1 + " ; " + nP2 +" health is "+ hP2);
																if (hP2 <= 0) {console.log(nP1 + " wins");
																break;
																};

																console.log(nP2 + " attacks " + nP1);
																let attack2 = this.rollDice(1,10);
																hP1 = hP1 - attack2;
																console.log(nP2 + " dice says " + attack2);
																console.log(nP1 + " health is " + hP1 + " ; " + nP2 +" health is "+ hP2);
																if (hP1 <= 0) {console.log(nP2 + " wins");
																break;
																};
			   							     };
			   			},
};
/*END OF evilBuilder OBJECT
                                                                                                                          */
/*BEGIN OF evilTools OBJECT
                                                                                                                          */
/*about evilTools:

  evilTools receives the builtGuy, like a zombie with a sword and a jacket from evilBuilder
  the idea is to have the objects call evilBuilder and requires characters and objects to handle.
  We should have something like:

  Setup an array of enemies
  the array could be made of identical characters (such as 3 ghosts with axe and jacket) or could be made of
  mixed folks, weapon and armors

  Setup an array of players
  even if there is only 1 player (for the moment) it will be handled into "monodimension" array for
  to uniform the interactions with arrays of other stuff.

  Setup an array of items.

  once we got the required arrays it will time to make them interact.

  the next objective is:

  create an array of identical enemies (zombies with axe and blue hat) and make them fight with a guy
  following a turn logic:
  -set an order of actions;
  -complete a round of attacks;
  -all the characters have to attack;
                                                                                                                          */
const evilTools = {

/*about rollDice:
rollDice
es: rollDice(2,6) rolls 2 dice with 6 faces and returns the sum                                                        */


				rollDice : function (numberOfDice, diceFaces) {                                          // requires a number of dice of a kind, es: 2 dices 6 faces
											console.log("#### rollDice now running ####");
											let diceTable = [];				                                         //initialize array which contains the result of every roll
											for (let i=1 ; i <= numberOfDice ; i++){                               //rolls dice for the required times
											let roll = (Math.floor(Math.random() * Math.floor(diceFaces) + 1));    //return the result of a single roll
											diceTable.push(roll);                                                  //stores the return of single roll into array
											};
											let result = diceTable.reduce(add,0);  //returns the sum of all the rolls stored into array
													function add(accumulator, a) {   //clousure !!!  this is still black magic fuckery to me
    												return accumulator + a;          //https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
													};											//
											return result;
    		},
/*about teamBuilder:
teamBuilder(x, char, weapon, armor)
generates an array of x chars with weapon and armor (es. 3 vampires with knife and jacket)
                                                                                                                           */
				teamBuilder : function (qnt, kind, weapon, armor, side) {
													console.log("#### teamBuilder now running ####");
													let pack = [];
													let newGuyX ={};
											    for (let i = 1 ; i < qnt + 1 ; i ++){	// iterates to create a qnt number of characters
											    	newGuyX = evilBuilder.generateGuy(kind , weapon , armor); // builds a character as specified into the arguments
		  /*x=x+y === x+=y   */ newGuyX.evilDude.nick += (" " + (i-1)); // gives a id number to the characters in the pack
		        								newGuyX.evilDude.idn += ("" + (i-1));	//set the identifier for the board (Z1 = zombie 1, V3 = Vamire 3, etc)
		        								newGuyX.evilDude.side = side;	// set the side of the character, sith or jedi
											    	pack.push(newGuyX); // push the generated char into an array which will be returned
										      }
									    return(pack);
				},
/* about packThemAll
packThemAll merges sith and jedi in a single array called sithVsJedi
*/
				packThemAll : function(sithSide, jediSide){
											   console.log("#### packThemAll now running ####");
											   let sithVsJedi = [...sithSide, ...jediSide];
									       return(sithVsJedi);
				}, //merges arrays https://www.samanthaming.com/tidbits/49-2-ways-to-merge-arrays

/* about sortFolks:
sortFolks sorts characters in the array sithVsJedu by initiative value
*/
  				sortFolks : function (sithVsJedi) {
  											 console.log("#### sortFolks now running ####");
												 sithVsJedi.sort(function (a,b) {
											   return b.evilDude.initiative - a.evilDude.initiative
											   }); //http://www.javascriptkit.com/javatutors/arraysort2.shtml
					},
/* about setInitiative:
setInitiative sets the initiative value for every char in the array
                                                                                                                           */

					setInitiative : function (sithVsJedi) {
											       console.log("#### setInitiative now running ####");
											       let arrayLength = sithVsJedi.length;
             			    		 	 for (let i = 0 ; i < arrayLength ; i++){
   					   	 		 		        sithVsJedi[i].evilDude.initiative+=evilTools.rollDice(1,20)
   					   	 		 	       }; //x=x+y === x+=y
					},
};

/*  END OF evilTools OBJECT
                                                                                                                          */
/* BEGIN OF evilTurn Object
                                                                                                                          */

/* about evilTurn:
at the moment evilTurn is just a sequence of functions meant to run the code and test it
                                                                                                                          */

const evilTurn = {
				evilStarter : function () {
											  console.log("#### evilStarter now running ####");
												let side = "neutral";
												// side is a workaround - "side" assigns a team to each character

												//creates sithSide group
												side = "sith";
												let sithSide = evilTools.teamBuilder(2 , "vampire" , "knife" , "bluehat" , side);//(testing stuff)

												//creates jediSide group
												side = "jedi";
												let jediSide = evilTools.teamBuilder(7 , "zombie" , "axe" , "coat" , side);//(testing stuff)

                        /*origin of sithVsJedi   */
												//merge 2 Sides in a single array (sithVsJedi)
		                    let sithVsJedi = evilTools.packThemAll(sithSide, jediSide);

                  	   	//set a value of initiative in every evilDude object stored in sithVsJedi array
   										  evilTools.setInitiative(sithVsJedi);

   											//sort the array sithVsJedi according to initiative
   											evilTools.sortFolks(sithVsJedi);

												// sithVsJedi is the array which contains the sithVsJedi from both sides,
												// on this array will be based the turn system
		/* */ 							console.clear;
		/* */ 							console.log("***************************************************start a fight !!!!");
		/* */								let xDim = 5;//testing stuff: test room dimension
		/* */								let yDim = 10;//testing stuff: test room dimension
		/* */								let testRoom = evilMapGen.roomBoard(xDim,yDim);
		/* */								sithVsJedi = this.deployDudes(sithVsJedi, testRoom); //send sithVsJedi to roundLoop as argument
		/* */								console.log("dislocated - ccordinates assigned to chars");
		/* */								console.log(sithVsJedi);
		/* */								evilDisplay.displayRoom(xDim , yDim);
		/* */								evilDisplay.displayDudes(sithVsJedi, xDim, yDim);
												//evilMoves.testControl(sithVsJedi);
		/* */								//let startBrawl = this.roundLoop(sithVsJedi);
					      },

//random dislocation of characters in the map

				deployDudes : function(sVsJ, roomToPopulate){
					              let limit = sVsJ.length;      //number chars to dislocate
					              let roomDim = roomToPopulate.length; // number of available cells
								        let tileIndex = 0;//going to be the index of roomToPoulate
								        let tileCoord = [];

								        console.log(roomToPopulate);

									      for (let i = 0 ; i < limit ; i++){
										      tileIndex = evilTools.rollDice(1, roomDim) - 1;	  // return a random index value which has coordinates associated
										      console.log("tile index "+ tileIndex);
										      tileCoord = roomToPopulate[tileIndex].coord;            // return the coordinates associated with the indexed item (tile)
									        sVsJ[i].evilDude.coord = tileCoord;
										      console.log("tile coordinates " + tileCoord);
									        roomToPopulate.splice(tileIndex , 1); //remove from roomToPoulate array the just selected cell in order to avoid duplicates
										      roomDim--;	//keeps count of reduced roomToPopulare length after it has been spliced
										      console.log("room to populate");
									        console.log(roomToPopulate);
									        console.log("roomToPopulate new length (roomDim reduced) " + roomDim);
							          };
							      return(sVsJ); // at this point sith VsJedi contains the characters ready to play and with a starting position
				},

//at the beginning of the round it removes dead characters from the sithVsJedi Array

		  underTaker :  function (sVsJ){
											console.log("#### underTaker now running ####");
											sVsJ =  sVsJ.filter(function(alive) {
											return (alive.evilDude.exist == true);
											});
									  return(sVsJ);
			},
//at the beginning of the turn it checks if there are still enemies to fight

			engageAtWill : function (sVsJ) {
							          console.log("#### engageAtWill now running ####");
								        console.log(sVsJ);
								        let survivedSith = 0;
								        let survivedJedi = 0;
								        let fightNoMore = false
								        console.log(sVsJ);

								        for (let i = 0 ; i < sVsJ.length ; i++){
									        if (sVsJ[i].evilDude.exist == true && sVsJ[i].evilDude.side == "sith"){
									          survivedSith++;
									        };

									        if (sVsJ[i].evilDude.exist == true && sVsJ[i].evilDude.side == "jedi"){
										        survivedJedi++;
									        };
								        };

								          if (survivedSith == 0 || survivedJedi == 0) { fightNoMore = true }
								          else {fightNoMore = false}
								          return (fightNoMore);
			 },

/* about roundLoop:
roundLoop operates on the joined teams array sithVsJedi which has been previously ordered according to chars initiative
values. for the moment it just calls lookForTargets method for any char in the array in the order of set initiative,
but is supposed to handle "situation evaluation and decision making for any char in the array                            */

//SvSj and player01 are the local scope of "sithVsJedi" and "player";

			 roundLoop :  function (sVsJ) {
									    console.log("#### roundLoop now running ####");
											let round = 0;
											let counter = 0;
									  	let turn = 0;
										  let endFight = false;

											while (endFight == false){
						    			  endFight = this.engageAtWill(sVsJ); //check the players array for opponent chars, loop ends if the remaining player are of the same side
												sVsJ = this.underTaker(sVsJ);// it removes from the players array the ones marked as dead (existence=false)
						    				console.log(sVsJ);
												let counterLimit = sVsJ.length;     // the players array can vary turn by turn so the loop will be shorter (or longer in case of new enemies coming) and will need a different limit (length of the new array)
												console.log("#### this is turn [" + (counter + 1) + "] of round [" + (round +1) + "]");
/*origin of player_*/  	let player = sVsJ[counter]; // set the player in the array of chars, it will change at every turn																console.log(player);
												sVsJ = this.turnClock(sVsJ, player); //calls the turn loop which returns a modified array
												counter ++;
												if (counter == counterLimit){ // when thecounter reaches the limit it returns to 0, all players into array played and the round ends up, every round will be shorter due to dead player removed from array
												  round ++;
												  counter = 0;
												};
											};
											console.log("brawl finished");
				},//end of roundLoop

//evilClock receives arguments by roundLoop
			 turnClock :  function (sVsJ, player_){
											console.log("#### turnClock now running ####");
								 		  console.log("turn player_ is " + player_.evilDude.nick);
											console.log(player_);
/*array of suitable targets*/
                      let enemies = this.lookForTargets(sVsJ, player_);//send arguments to lookForTargets method
											let enemyReachable = null;
											let enemyReached = null;
											let enemyHit = null;
											console.log('\n turnplayer_ enemies are: \n', enemies)

//so now we have player_ and enemy, we can send them to fight
// the player_ must understand if there are reachable enemies around
/*origin of enemy*/   let enemy = this.evalTarget(enemies); //ok, for the moment this is totally random for the moment

											console.log('\n turnplayer enemy is: \n', enemy);

											enemyReachable = this.evalDistance(player_, enemy); //returns true or false

											if (enemyReachable == true) {
											  let enemyHit = this.attackEnemy(player_, enemy);//returns true or false
											}

											else {
													 		enemyReached = this.getCloser(player_, enemy);	//returns true or false
											}

											if (enemyReached == true) {
											 	enemyHit = this.attackEnemy(player_, enemy);
											} //repeated code, fix it

											if (enemyHit == true) {
													 	this.rainingBlood(player_, enemy);
											}

//sVsJ = this.underTaker(sVsJ);

						  				console.log("4th check " + sVsJ.length);
						  			  console.log(sVsJ);

					          return(sVsJ);
			 },

							/*about lookForTargets
lookForTargets
1) the active char (player) scans all the available chars (objects in the array called sithVsJedi)
2) discriminates between itself, allies and enemies by comparing its own nickname and side with all the others in the array
3) once found an available target player must understand if it is reachable or not
-3.1) if target is reachable -> attacks
-3.2) if target is not reachable -> player manages distance by target

*/

			 lookForTargets : function(sVsJ, player_){
													console.log("#### lookForTargets now running ####");
												  let playerNick = player_.evilDude.nick;  // var declared to simplify functions reading
												  let playerSide = player_.evilDude.side;  // var declared to simplify functions reading
												  let enemy = {};                         // declare an empty object enemy, it will be filled later on
													let enemies = [];                       //declare an empty array which will temporarily contain all suitable targets in order to evaluate the following action

													for (let j = 0 ; j < sVsJ.length ; j++) {

													  let playerTarget = sVsJ[j];												  //start to scan the array looking for anenemy
													 	let playerTargetNick = playerTarget.evilDude.nick;                    // var declared to simplify functions reading
													 	let playerTargetSide = playerTarget.evilDude.side;                    // var declared to simplify functions reading
													 	console.log("#### " + playerNick + " could attack " + playerTargetNick + " ####");

													  if ((playerNick == playerTargetNick) || (playerSide == playerTargetSide)){//discriminates if target is player himself or an ally
														  console.log(playerNick + " says he will not attack himself, or a friend");		// in case refuses to attack!!!
														}

														else {
														  enemy = playerTarget;
														  console.log(playerNick +" says: an enemy in the room !!! He's " + enemy.evilDude.nick);
														  enemies.push(enemy);
														}

													};
								    return(enemies);
				},//end of lookForTargets


				evalTarget :  function (enemies_) {//at the moment it just picks a random enemy (testing stuff)
												console.log("#### evalTarget now running ####");
												let qt = enemies_.length;
												let enemy = enemies_[evilTools.rollDice(1,qt)-1];
												console.log("ready to fight against... " + enemy.evilDude.nick);
											  return(enemy); //definition of enemy
											},

				evalDistance :  function (player, enemy) {
							            console.log("#### evalDistance now running ####");
													let reachable = false;
                          let playerPos = 0;
                          let enemyPos = 0;
													let targetDistance = 10;
                          /*(testing stuff notes), this will make zombie always reachable
													by vampires in a single turn due to speed 10 but on the other side
													zombies due to speed 6 needs 2 turns to reach vampires              */
													console.log("enemy is at " + targetDistance + " units");
													if (targetDistance <= player.equippedWeapon.range) {reachable = true}
													else if (targetDistance > player.equippedWeapon.range) {reachable = false}
												return (reachable);
				},

				getCloser : function (player, enemy) {
											console.log("#### getCloser now running ####");
											console.log(player.evilDude.nick + " is moving towards " + enemy.evilDude.nick);
											let stepCounter = player.evilDude.stepCounter;
											let stepLimit =  player.evilDude.speed;
											let reached = false;
											while (stepCounter <= stepLimit){
											  stepCounter++;
												console.log(player.evilDude.nick + " walks... " + stepCounter + " step");
												if (stepCounter == stepLimit){
													console.log("too distant !!!");
													reached = false;
													break;
												}
												else if (stepCounter == 10){
                        /*testing stuff - 10 is referred to value of
                        of distance set in evalDistance method	  */
													console.log(player.evilDude.nick + " reached " + enemy.evilDude.nick);
													reached = true;
													break;
												}
												//else {console.log("something wrong into getCloser")}
											};
											console.log("end of getCloser");
									return (reached);
				},

				attackEnemy : function(player_, enemy_){
											  console.log("#### attackEnemy now running ####");
												let playerAttackBonus = player_.evilDude.attack + evilTools.rollDice(1,20);
												let playerWeaponMod = player_.equippedWeapon.attackMod;
                        let totAttack = playerAttackBonus + playerWeaponMod;
												let enemyHit_ = null;
												console.log(player_.evilDude.nick + " attack is: " + totAttack);

											  let enemyDefence = enemy_.evilDude.defence;
											  let enemyArmorProtection = enemy_.equippedArmor.protection;
											  let enemyArmorMod = enemy_.equippedArmor.defenceMod;
											  let totDefence = enemyDefence + enemyArmorProtection + enemyArmorMod;
											  console.log(enemy_.evilDude.nick + " defence is: " + totDefence);

											  console.log(player_.evilDude.nick + " attack bonus is " + playerAttackBonus);
											  console.log(player_.equippedWeapon.nick + " weapon bonus is " + playerWeaponMod);
											  console.log(enemy_.evilDude.nick + " defence bonus is " + enemyDefence);
											  console.log(enemy_.equippedArmor.nick + " armor protection is " + enemyArmorProtection);

											  if (totAttack < totDefence){console.log("[[[ DODGED !!! ]]]");
												  enemyHit_ = false;
												}

                        else if (totAttack >= totDefence){console.log("[[[ HIT !!! ]]]");
												  enemyHit_ = true;
												}

                        else {
												  console.log("something wrong in attackEnemy");
												};

											return(enemyHit_);
				},

				rainingBlood :  function	(player_, enemy_){
													console.log("#### rainingBlood now running ####");
													//rolls "dice[0]" dice with "dice[1]" faces (weapon property)
											    let diceDamage = evilTools.rollDice(player_.equippedWeapon.dice[0],player_.equippedWeapon.dice[1]);
													let weaponDamage = player_.equippedWeapon.damage;
													let damage = diceDamage + weaponDamage;
												 	console.log(player_.equippedWeapon.dice[0] + " dices with  " + player_.equippedWeapon.dice[1] + " faces");
												 	console.log("this is the total damage: " + damage);

											  	enemy_.evilDude.health-=damage; //x=x+y === x+=y	(remove damage amount from enemy health)
											  	console.log(enemy_.evilDude.nick + " health is now " + enemy_.evilDude.health);

										      if (enemy_.evilDude.health <= 0){//check if enemy is still alive
												    console.log(enemy_.evilDude.nick + " dies");
												    enemy_.evilDude.exist = false;
												  };
				},
};


//






console.clear;
//
/*
let testRoom = evilMapGen.roomBoard(9,7);
console.log (testRoom);
evilDisplay.evilPrintRoom(testRoom);
*/

evilTurn.evilStarter();	//
