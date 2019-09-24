name = prompt("What is your name?");
awnser = prompt("welcome " + name + "\n You find yourself in a dungeon what will you do? \n1> Take a torch and light it?\n2> Walk further without light \n\n Type 1 or 2 to continue...");

if(awnser == 1){

    awnser = prompt("You walked futher and now see 3 doors infront of you.\n1> Open the door with a skull above it.\n2> Open the door with light comming from it.\n3> Open the door coverd with flowers.\n\n Type 1, 2 or 3 to continue...");

    if(awnser == 1){ //door 1
        awnser = prompt("There are 2 buttons in this room and a door.\n carved in the door is written: 'Push the right 2 cypher buttons to open this door.'\n1> Press the combination 1,2. \n2> Press the combination 2,1 \n3> Press the combination 2,2 \n4> Press the combination 1,1. \n\n Type 1, 2, 3 or 4 to continue...");
    
        if(awnser == 1){

        }else if(awnser == 2){
            
        }
    }
}else if(awnser == 2){
    random = Math.floor(Math.random() * 6) + 1 ;
    
    alert("You didn't know were you were walking and a monster killed you\nyou are dead!");
}