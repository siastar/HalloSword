"use strict";

const evilMapGen = {
		
			tileCoord : [],
			tileKind : "default tile",
			tileWalk : true,
			tileCode : null,
			tileProp1 : "tile prop 1",
			tileProp2 : "tile prop 2",
			tileProp3 : "tile prop 3",
			tileProp4 : "tile prop 4",
			tileProp5 : "tile prop 5",
			tileProp6 : "tile prop 6",
			tileProp7 : "tile prop 7",
			tileProp8 : "tile prop 8",
			tileProp9 : "tile prop 9",
			  						  									  						  									  						  												
			protoTile : function(){
			 				   console.log("#### protoTile now running ####");
							   let justAtile = Object.create(Object.prototype,
  													 {
														coord:{value : this.tileCoord,},    													
    													kind:{value : this.tileKind,},
    													walk:{value : this.tileWalk,},
														code:{value : this.tileCode,},
    													prop1:{value : this.tileProp1,},
    											    	prop2:{value : this.tileProp2,},
    											    	prop3:{value : this.tileProp3,},       
    											 		prop4:{value : this.tileProp4,},
    													prop5:{value : this.tileProp5,},
     											 	   prop6:{value : this.tileProp6,},
    											      prop7:{value : this.tileProp7,},
    											  	   prop8:{value : this.tileProp8,},
     											      prop9:{value : this.tileProp9,},											 													  
  													  });
  													  return(justAtile);					  
  													  },
  													  
			roomBoard : function (x, y) { 
			
								let newRoom = [];
							   for (let i = 0 ; i < x ; i++){
						         for (let j = 0 ; j < y ; j++ ){
							         let newTile = evilStuff.makeTile00(i,j);
										newTile.tileCoord = [i, j];								         
							         newRoom.push(newTile);								
								    };									
							   };
							 return(newRoom);										
			}, 
};

const evilDisplay = {
			//note arrays index start from 0
			
			
/*  about evilPrintRoom                                                     
https://stackoverflow.com/questions/39110260/creating-table-with-javascript-
and-add-id-and-class-to-each-td                                             
                                                                          */			
				displayRoom : function (xDim, yDim) {
										/*let last = roomBoard.length;
										console.log(last);					
										let roomSize = roomBoard[last -1].coord;
										xDim = roomSize[0] + 1;
										yDim = roomSize[1] + 1;	
				
										console.log("x dim is " + xDim + " y dim is " + yDim);
										console.log(roomSize);*/
                              				
                              let table = document.getElementById('board'); 
                              
                              for (let r = 0 ; r < yDim ; r++){
                                let row = table.insertRow(-1);
                                for (let c = 0 ; c < xDim ; c++){
                                  let cell = row.insertCell(-1);
                                  cell.setAttribute('id', [c,r]);
                                  cell.setAttribute('class', 'cell ' + ((c + r) % 2 ? 'odd' : 'even'));
  											};
										};      
									}, 

					displayDudes : function (sVsJ) {
											 let limit = sVsJ.length;
											 
											 for (let i = 0 ; i < limit ; i++){
												 let charCoord = sVsJ[i].evilDude.coord; 
/*                                      grab coord value from players, coord are at the 
                                     moment randomly set by deployDudes             */
												 
												 console.log("charCord ");
												 console.log(charCoord);
												 let charIdn = sVsJ[i].evilDude.idn;
												 let coord = charCoord.toString();
												 console.log("coordinates " + coord);
/*                                  charIdn is the identifier of the character, for example
                                    Z1 is zombie1 V2 is vampire2 G3 is ghost 3 etc       */  										       
  										       document.getElementById(coord).innerHTML = charIdn;
  										    };	
					}, 
};



/*
const evilMoves = {
	
						testControl : function (sVsJ) {
											
										     for (let i = 0 ; i < sVsJ.length ; i++ ){
										          let coord = sVsJ[i]evilDude.coord;
										          if (sVsJ[i].evilDude.nick == "Draculeo 0"){
										          	boardCoord = coord.toString();
														document.getElementById(boardCoord).innerHTML = "X";											             
										          } 
										         // else {console.log("nope!");
										         // }
										        };
						
						},
};						
*/
