awnser = prompt("You find yourself in a dungeon what will you do? \n1> Take a torch and light it?\n2> Walk further without light \n\n Type 1 or 2 to continue...");

var door1 = true;

if(awnser == 1){
    backToTheDoor();
}else if(awnser == 2){    
    alert("You didn't know were you were walking and a monster killed you\nYou are died!");
}


function backToTheDoor(){

    awnser = prompt("You walked futher and now see 3 doors infront of you.\n1> Open the door with a skull above it.\n2> Open the door with light comming from it.\n3> Open the door coverd with flowers.\n\n Type 1, 2 or 3 to continue...");

    //#region doorWithSkull
    if(awnser == 1 && door1 ==true){ //door 1
        alert("There are 2 buttons in this room and a door.\n carved in the door is written: 'Push the right 2 cypher button combination to open this door.'");
        
        awnser = prompt("\n1> Press the combination 1,2. \n2> Press the combination 2,1 \n3> Press the combination 2,2 \n4> Press the combination 1,1. \n\n Type 1, 2, 3 or 4 to continue...");
    
        if(awnser == 1){
            alert("Arrows were shot at you and some have hit you in the head.\n You died!");
        }else if(awnser == 2){
            alert("The door opens, but also a an enemy has been released. What will you do?");
            awnser = prompt("1>Fight the enemy (success 2/3) \n 2>Flee (success rate: 1/1)");

            if(awnser == 1){
                random = Math.floor(Math.random() * 3) + 1 ;
                if(random != 2){
                    alert("You have defeated the enemy and you can go furter.");
                    awnser = prompt("You see an altar. The altar has a place where you can put your hand. \nWhat wil you do? \n1>Put your hand on the altar.\n2>Ignore the altar and move on.");
                    
                    if(awnser == 1){
                        alert("You placed your hand on the altar and you were teleported to a room with letters made out of stone.\n Tip:'type the letters in the correct order!'");
                        awnser = prompt("Al the letter: a, d, c, b\n1> a b d c\n2> d a b c\n3> a b c d\n4> d c a b\n5> d c b a");
                        if(awnser == 5){
                        alert("A gate made out of stone opens to the outside world.\n\n You are free!(you have won!)")
                        }else{
                            alert("The room colapsed!\nYou died!");
                        }
                        
                    }else if(awnser == 2){
                        alert("When you walked further you fell trough the floor. Now you find yourself in a big room with a big enemy! \n\nWhat will you do?");
                        awnser = prompt("1> Fight(success rate: 1/2) \n2> Flee to a small path on your left (success rate: 3/4)");

                        if(awnser == 1){
                        random = Math.floor(Math.random() * 2) + 1 ;
                        if(random =1){
                        alert("You won the fight!");
                        alert("The iron gate that was behind the enemy opens to the outside world! \n\n You are free!(you have won!)");
                        }else{
                            alert("The enemy won the fight!\nYou died!")
                        }

                        }else if(awnser == 2){
                            random = Math.floor(Math.random() * 4) + 1 ;
                            if(random != 3){
                                alert("You made it!\n The big enemy can't follow you.");
                                awnser = prompt("You walked futher and now see a door. What will you do?\n1> Open the door/.\n2> Go back and fight the enemy(success rate: 1/2)");
                                if(awnser == 1){
                                    alert("when you opened the door lava started to flow throu the door.\n you died!");
                                }else if(awnser == 2){
                                    random = Math.floor(Math.random() * 2) + 1 ;
                                    if(random =1){
                                    alert("You won the fight!");
                                    alert("The iron gate that was behind opens to the outside world! \n\n You are free!(you have won!)");
                                    }else{
                                        alert("The enemy won the fight!\nYou died!")
                                    }
                                }
                            }else{
                                alert("You runned to slow.\n You died!")
                            }
                        }
                    }
                }else{
                    alert("The enemy won the fight! \n You died!");
                }
            }else if(awnser == 2){
                alert("The enemy was to slow for you but the door with the skull is now closed for ever");
                backToTheDoor();
                door1 = false;
            }

        }else if(awnser == 3){
            alert("You teleported back to the many doors");
            backToTheDoor();
        }else if(awnser == 4){
            alert("You teleported back to the many doors");
            backToTheDoor();        }
    }
    //#endregion

    //#region DoorWithLight
    else if(awnser == 2){
        alert("Behind the door is a really small room with a torch in it.\n There is nothing there so you decide to go back.")
        backToTheDoor();
    }
    //#endregion

    //#region doorWithFlowers
    else if(awnser == 3){
        alert("The door opens to a room that looks like a scary dark forest.");
        awnser = prompt("What will you do?\n1> go into the forrest\n>2 go back\n\n type 1 or 2 to continue");

        if(awnser == 1){
            alert("There are 3 paths in this forrest. path 1 has a house on the end, but you can't see the end of path 2.");
            awnser = prompt("which path will you follow?\n1>path 1\n2>path 2");
            if(awnser == 1){
                alert("When you got inside the house there was nothing what sould you do?\n1>look better\n>1 go back to the doors");
                if(awnser == 1){
                    alert("You took a closer look and found a trapdoor\nThe trapdoor leads to a room with 3 switches what will you do");
                    awnser = prompt("1>interact with the switches\n2>Move further");
                    if(awnser == 1){
                        alert("When you fliped a switch the room started to fall apart, you didn't survive it.\n\nYou died!");
                    }else if (awnser == 2){
                        alert("at the end of the path is a door.\nYou decided to open the door.");
                        alert("The door opens to the outside world.\n\n You are free! (You won!)");
                    }
                }

            }else if(awnser == 2){
                awnser = prompt("you have found a gate protected by a scary monster. what will you do? \n1> Fight the enemy(success rate: 3/4)\n2> Get back and pick an other door.");
                if(awnser == 1){
                    random = Math.floor(Math.random() * 3) + 1 ;
                    if(random != 1){
                        alert("You won the fight! But there is no way to open the gate so you head back to the many doors.");
                        backToTheDoor();
                    }
                }else{
                    alert("The enemy was to strong for you.\nYou died!");
                }
            }

        }else if (awnser == 2){
            backToTheDoor();
        }
    }
    //#endregion
    else if(door1 == false){
        alert("You can't open this door");
        backToTheDoor();
    }
}