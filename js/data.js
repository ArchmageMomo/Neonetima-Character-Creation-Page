var seed = "X";

var index=-1;

var max=-1;

var commitbtn= "<button id='commit' class='btn inputs'>Next</button>"

var ni = [
			"This page was created in order to help you creating your character and defining which of the mods in the modpack your character is allowed to use.<br>For further information consult our page on <a href=''>Curseforge</a>.",
			"<button class='btn inputs' onclick=\"initialize(0)\">Start the character creation</button>\
			<br><br>\
			<span title='This may or may not create a valid character. You are warned!'><button class='btn inputs' onclick='randomize()'>Get a random character</button></span>\
			<br><br>\
			Do you already have a character-seed? Put it here: \
			<input id='seedinput' class='inputs' placeholder='XXXXXXX' type='text' onkeydown = \"if (event.keyCode == 13){ seed=document.getElementById('seedinput').value; initialize(seed.length);}\"></input>\
			<button onclick=\"seed=document.getElementById('seedinput').value; initialize(seed.length);\" class='btn inputs'>Process</button>"
		];

var n0 = ["First of all, let me introduce myself. I am <a href='https://twitter.com/ErzmgMomo'>Momo</a>, but you may call me Momo. We have quite some way to walk, so let's talk about you for a bit. <br>So... how would you describe your kind?",
			["Human","Description",0],
			["Superhuman","Description",1],
			["Lifebound","Description",2],
			["Werecreature","Description",3],
			["Spirit","Description",4],
			["Demon","Description",5],
			["Angel","Description",6]
		];

var n1 = [
		["As non of us is racist, just confirm that you are human.",
			["Human","Description",0]],
		["What type of blood flows through your veins?",
			["Orc","Description",0],
			["Elb","Description",1],
			["Half-Orc","Description",2],
			["Half-Elb","Description",3],
			["Dwarf","Description",4],
			["Aetherian","Description",5],
			["Celestial","Description",6]],
		["As a creature almost nobody has ever seen, you might have to explain what you exactly are.",
			["Pixie","Description",0],
			["Dryad","Description",1],
			["Nymph","Description",2],
			["Fairy","Description",3],
			["Selkie","Description",4]],
		["What kind of werecreature are you? Just wanna know if I have to be scared patting you at night.",
			["Skin-Walker","Description",0],
			["Wolf","Description",1],
			["Bear","Description",2],
			["Bunny","Description",3],
			["Dragon","Description",4]],
		["Some types of ghosts scare the hell out of people, others are just cute and adoreable. I'm not sure what you are, so ~~~",
			["Youkai","Description",0],
			["Kitsune","Description",1],
			["Nekomimi","Description",2],
			["Banshee","Description",3],
			["Ghost","Description",4]],
		["Are you born for or in hell?",
			["Succubus/Inkubus","Description",0],
			["Fallen","Description",1],
			["Half-Demon","Description",2],
			["Nephilim","Description",3]],
		["Have you ever seen something other than the heavens?",
			["Seraphim","Description",0],
			["Arisen","Description",1],
			["Half-Angel","Description",2],
			["Nephilim","Description",3]]
		];
		
var n2 = ["Careful! You almost bumped into that tree! So where did you come from?",["Another Universe","Description",0],["Neonetima","Description",1],["A Space Civilisation","Description",2],["An Advanced Civilisation","Description",3],["A Primitive Civilisation","Description",4],["The Spirit World","Description",5]];

var n3 = ["You seem to have great knowledge of something! That's awesome! But I wonder what your profession is.",
			["Mage","Description",0],
			["Warrior","Description",1],
			["Scientist","Description",2],
			["Craftsman","Description",3],
			["Adventurer","Description",4]
		];

var n4 = [
		["What's your specific mastery, savant? Just askin' cus there aren't many gods around nowadays.",
			["Bloodmage","Description",0],
			["Astralist","Description",1],
			["Alchemist","Description",2],
			["Dystopist","Description",3],
			["Technomancer","Description",4],
			["Priest","Description",5],
			["Druid","Description",6],
			["Lord","Description",7]],
		["A warrior huh? Tell me what they call you and I'll guess what type of weapon you carry!",
			["Mercenary","Description",0],
			["Soldier","Description",1],
			["Paladin","Description",2]],
		["Oh, a wise one! What is it you've studdied all these years?",
			["Astrologist","Description",0],
			["Magoteconist","Description",1],
			["Engineer","Description",2],
			["Industrialist","Description",3],
			["Cyberneticist","Description",4],
			["Geneticist","Description",5],
			["Mechanist","Description",6],
			["Chemist","Description",7]],
		["Someone who does the dirty work? I appreciate that! So, what do you do for living?",
			["Architect","Description",0],
			["Enchanter","Description",1],
			["Gardner","Description",2],
			["Smith","Description",3],
			["Dragonsmith","Description",4]],
		["There's no way to specify what you do all day, so just confirm your profession.",
			["Adventurer","Description",0]]
		];

var n5 = ["<span title='Someone has to teach you how to use the mods, even if you as a player already know how every bit of any mod works.'>You probably want to learn something other as well. What kind of things are you interested in?</span>",
			["Mage","Description",0],
			["Warrior","Description",1],
			["Scientist","Description",2],
			["Craftsman","Description",3],
			["Adventurer","Description",4]
		];

var desint="<span title='You won't be able to learn the mods of this specification!'>Pick a specification you aren't interested in.</span>";

var n6 = [
		[desint,
			["Bloodmagic","Description",0],
			["Astrology","Description",1],
			["Alchemist","Description",2],
			["Dystopist","Description",3],
			["Technomancer","Description",4],
			["Priest","Description",5],
			["Druid","Description",6],
			["Lord","Description",7]],
		[desint,
			["Mercenary","Description",0],
			["Soldier","Description",1],
			["Paladin","Description",2]],
		[desint,
			["Astrologist","Description",0],
			["Magoteconist","Description",1],
			["Engineer","Description",2],
			["Industrialist","Description",3],
			["Cyberneticist","Description",4],
			["Geneticist","Description",5],
			["Mechanist","Description",6],
			["Chemist","Description",7]],
		[desint,
			["Architect","Description",0],
			["Enchanter","Description",1],
			["Gardner","Description",2],
			["Smith","Description",3],
			["Dragonsmith","Description",4]],
		["There's nothing you don't want to learn about adventuring. Please confirm that.",
			["Adventurer","Description",0]]
		];

var standard="TEMP;TEMP2";
		
var outbody=[
				[
					"Signposts",
					"Signposts",
					"",
					"Signposts",
					"Bonfires",
					"",
					""
				],
				[
					[
						"",
					],
					[
						"",
						"Astral Sorcery",
						"",
						"Druidry",
						"Tinker's Construct",
						"ProjectE",
						"God-Weapons",
					],
					[
						"Evilcraft",
						"Druidry",
						"",
						"Botania",
						"Valcyrian Warfare"
					],
					[
						"Metamorph",
						"Doggy Talents",
						"Animalium",
						"Tails",
						"Tails"
					],
					[
						"Astral Sorcery;Tails",
						"Tails",
						"Tails",
						"Bloodmagic",
						"Signposts"
					],
					[
						"Evilcraft",
						"Angel of Vengance",
						"Bloodmagic",
						"God-Weapons"
					],
					[
						"Angel of Vengance",
						"Evilcraft",
						"Reliquary",
						"God-Weapons"
					]
				],
				[
					"Mystical Agriculture",
					"Ashenweed",
					"Advanced Rocketry",
					"Dr. Squids Gunmod",
					"Advanced Swords",
					"Bonfires"
				],
				[
					"Recall Stones",
					"",
					"EnderIO;Compact Machines",
					"",
					""
				],
				[
					[
						"Bloodmagic;Blood Arsenal;Animus",
						"Astral Sorcery;Basic Elements",
						"Project E;Refined Storage;Refined Exchange;Runes of Wizzardry;Classic Rune pack",
						"Abyssalcraft;Evilcraft",
						"Draconic Evolution;TODO",
						"Reliquary",
						"Druidry;Roots;Botania",
						"Lordcraft;Blocklings"
					],
					[
						"Advanced Swords;Just Jetpacks",
						"Dr. Squids Gunmod;Viescraft;Parachute",
						"God-Weapons;Valcyrian Warfare"
					],
					[
						"Advanced Rocketry",
						"Crossroads;Psi;Particleman",
						"Immersive Engineering;Thermal Expansions;Thermal Foundation;Siply Jetpacks;Redstone Arsenal",
						"IC2;Minefactory Reloaded;Aplied Energistics 2;AE2 Stuff;Extreme Reactors",
						"Cyberware;Modular Powersuit",
						"Genetics Reborn;Forestry",
						"Railcraft;Environmental Tech;Just Jetpacks",
						"Chemistry"
					],
					[
						"Advanced Chimnys;Chisel;Secret Rooms;Storage Drawers;Bibliocraft;Architecturecraft;Fast Ladders;Thuts Elevators;Chisel and Bits;Drawers and Bits",
						"Enchanting +;Enchantchanger",
						"Floricraft;Mystical Agriculture;Plants;Forestry;Endercrop;Ashenweed;Dynamic Trees;Pams Hatvestcraft",
						"Tinker's Construct;PlusTIC",
						"Ice and Fire;Dragon Realm"
					],
					[
						"Ropebridges;Natures Compass;Hearthstones;Advanced Hookshots;Antique Atlas;Labyrinth"
					]
				]
			];