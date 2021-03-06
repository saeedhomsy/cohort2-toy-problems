/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/
//dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "EAST", "EAST"])
var dirReduc = function(directions){
	var result = [];
	for (var i = 0; i < directions.length; i++) {
		if(directions[i].toUpperCase() !== 'EAST' && directions[i].toUpperCase() !== 'WEST' && directions[i].toUpperCase() !== 'SOUTH' && directions[i].toUpperCase() !== 'NORTH'){
			return 'Not Valid Direction'
		}
		if (result.length===0) {
			result.push(directions[i].toUpperCase());
		}else{
			if (((directions[i].toUpperCase() === 'EAST' || directions[i].toUpperCase() === 'WEST') && (result[result.length-1].toUpperCase() === 'EAST' || result[result.length-1].toUpperCase() === 'WEST')) || ((directions[i].toUpperCase() === 'SOUTH' || directions[i].toUpperCase() === 'NORTH') && (result[result.length-1].toUpperCase() === 'SOUTH' || result[result.length-1].toUpperCase() === 'NORTH'))) {
				result.pop()
			}else{
				result.push(directions[i].toUpperCase());				
			}
		}
	}	
	return result
};

