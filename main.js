$(document).on('ready', function() {
  
});


var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

for(var i = 0; i<4; i++){
	console.log(animals[i]);
}
console.log("\n");
for(var i = 0; i<5; i++)
{
	if ((i % 2) === 0 )
	{
	console.log(animals[i]);
	}
}
console.log("\n");

for(var i = 4; i >=0; i--){
	console.log(animals[i]);

}
console.log("\n");

for(var i = 0; i<5; i++)
{
	console.log(animals[i])
	if (i>=1 && i <=3){
		console.log(animals[i])
	}
}