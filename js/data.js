var seed = "X";

var index=-1;

var max=-1;

var commitbtn= "<button id='commit' class='btn inputs'>Next</button>"

var talevalue=false;

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
			["Human","You are just some puny human. But who knows, maybe there's something special about you.",0],
			["Superhuman","Some say you are better than humans. In reality, you are just another species.",1],
			["Lifebound","Humans tell legends about you. Not all of them are true, but does that mean you can't pretend?",2],
			["Werecreature","Shapechanging things seem creepy to some, fascinating to others. What would they say 'bout you?",3],
			["Spirit","Most people imagine spirits as transparent vaguely humanoid souls. You know better.",4],
			["Demon","Does living in hell have to mean that you are evil?",5],
			["Angel","Does living in heaven have to mean that you are good?",6]
		];

var n1 = [
		["As non of us is racist, just confirm that you are human.",
			["Human","You are human and you like it.",0]],
		["What type of blood flows through your veins?",
			["Orc","Not all Orcs are ugly. Also you don't know why they call you <span title='Mostly in one sentence.'>'heartless' or 'monster'.</span>",0],
			["Elb","You are a creature that lives in the woods. I mean, not a creature, more like a humanoid force of nature. Damn, forget what I just said. You are an elb.",1],
			["Half-Orc","Some ask you if you are an ugly human. Mainly Orcs ask these questions.",2],
			["Half-Elb","\"Hey, did it hurt when you fell from heaven?\" I wonder how often you've heard something like that.",3],
			["Dwarf","The first time you have seen sunlight was also the first time you did regret leaving the mountain of your ancestors. Stone has to be surounded by stone.",4],
			["Aetherian","You look human, but your soul isn't. Your kind can live much longer than most mortals, probably because of your purple blood.",5],
			["Celestial","Someone once told you that you are a god. Besides, you are a demi-god.",6]],
		["As a creature almost nobody has ever seen, you might have to explain what you exactly are.",
			["Pixie","There's always mischief where you live. Of course you don't have anything to do with it, do you?",0],
			["Dryad","Say, what is it like to be connected with nature? Do you hear whispers of trees or something?",1],
			["Nymph","Hey, I didn't bath in your water on purpose! I didn't know it's yours!",2],
			["Fairy","You are the kinder equivalent to the pixies. Doesn't mean there's no mischief to be done.",3],
			["Selkie","You hate that song about this drunken saylor. Do they even know what it's like to clean up their vomit?",4]],
		["What kind of werecreature are you? Just wanna know if I have to be scared patting you at night.",
			["Skin-Walker","How can others live with that few appearences? Do they even know what they are missing?",0],
			["Wolf","The common full-moon dog.",1],
			["<span title='Bear with me there'>Bear</span>","Your kind almost went extinct. The ones that survived proudly walk among other civilisations.",2],
			["Bunny","Who says all werecreatures have to look dangerous? In fact, you appearance isn't all that counts.",3],
			["Dragon","You look like a dragon, but you struggle making fire.",4]],
		["Some types of ghosts scare the hell out of people, others are just cute and adoreable. I'm not sure what you are, so ~~~",
			["Youkai","Technology weakened your magical powers. Or is it because you haven't eaten a mortal for a long time?",0],
			["Kitsune","As you are naturaly shy, almost nobody has ever seen your kind. There are tales about some reward for those considered worthy by your kind.",1],
			["Nekomimi","These catlike creatures aren't rare at all. They mostly behave like humans",2],
			["Banshee","Banshees aren't as bad as their reputation. Sure, they can kill people with a scream, but who does that anyways?",3],
			["Ghost","A dead human is normaly... well... dead. You forgot to do something, that's why you still wander around.",4]],
		["Are you born for or in hell?",
			["Succubus/Inkubus","The only pure blooded demons who ever leave hell. As aspects of Lust, they are always on the hunt for their kind of <span title='I guess you know what it is'>food</span>.",0],
			["Fallen","That's what happens if heaven's not metal enough for an angel.",1],
			["Half-Demon","A child of a human and an angel. Looks human tho.",2],
			["Nephilim","As they are children between angels and demons, nobody likes them. Some say they are more human than humans.",3]],
		["Have you ever seen something other than the heavens?",
			["Seraphim","You aren't born, you are created. Do you know your purpose?",0],
			["Arisen","Some demons don't like hellfire. Heaven is much more comfortable",1],
			["Half-Angel","Isn't it strange that there are angels who have kids with humans? They are worse than pigs, so to say. And their stupid questions! \"Did it hurt when you fell from heaven?\" It did. Thanks for asking.",2],
			["Nephilim","As they are children between angels and demons, nobody likes them. Some say they are more human than humans.",3]]
		];
		
var n2 = ["Careful! You almost bumped into that tree! So where did you come from?",["Another Universe","So you found a way to travel between Universes? Pretty cool",0],["Neonetima","Born and raised on these dangerous soils.",1],["A Space Civilisation","You survived a crashlanding on Neonetima. That's at least one good thing.",2],["An Advanced Civilisation","It's only a matter of time until your planet can travel space freely",3],["A Primitive Civilisation","Your planet hasn't got past throwing rocks yet.",4],["The Spirit World","Who says only spirits can live in the spirit world? It's a fantastic place of everlasting spring.",5]];

var n3 = ["You seem to have great knowledge of something! That's awesome! But I wonder what your profession is.",
			["Mage","The ways of Magic always fascinated you.",0],
			["Warrior","You are born to fight!",1],
			["Scientist","Knowledge is power!",2],
			["Craftsman","Creating stuff is so statisfying",3],
			["Adventurer","There's so much to be discovered!",4]
		];

var n4 = [
		["What's your specific mastery, <span onclick='aTrueMage()'>savant</span>? Just askin' cus there aren't many gods around nowadays.",
			["Bloodmage","Using blood for powerfull magic? Why don't all of us do this?",0],
			["Astralist","\"By the power of the stars, I will end you!\" Reality is much more fun, isn't it?",1],
			["Alchemist","Take a stone and turn it into gold. That's how it's done!",2],
			["Dystopist","You have the power to either doom or save everyone. It's on you to decide.",3],
			["Technomancer","Magic enhanced by technology.",4],
			["Priest","You think you are holy.",5],
			["Druid","Nature is full of magic! You just have to know how to find it!",6],
			["Lord","You command magic and minions. Besides, you can call yourself Lord. Isn't that great?",7]],
		["A warrior huh? Tell me what they call you and I'll guess what type of weapon you carry!",
			["Mercenary","You know how to use these weapons.",0],
			["Soldier","Smoke, guns, combat. That's what a soldier likes.",1],
			["Paladin","It doesn't matter if a weapon is holy or unholy if it is used for the right purpose.",2]],
		["Oh, a wise one! What is it you've studdied all these years?",
			["Astrologist","You are born for the endlessness of space!",0],
			["Magoteconist","Magic woven into technology, steel infused with wonders.",1],
			["Engineer","Trust him, he's an Engineer",2],
			["Industrialist","Steampunk? Steampunk.",3],
			["Cyberneticist","Who needs these organic limbs anyways?",4],
			["Geneticist","One can only unfold his true potential with modified dna.",5],
			["Mechanist","Huge and loud machines are the best, aren't they?",6],
			["Chemist","You know how the universe works, right?",7]],
		["Someone who does the dirty work? I appreciate that! So, what do you do for living?",
			["Architect","Building is your life.",0],
			["Enchanter","You once thought enchanting was random. Good ol' times, eh?",1],
			["Gardner","You know what can be eaten. You know what can be used for building. And you have a green thumb.",2],
			["Smith","The most noble mastery of them all. You won't stop until your work is done.",3],
			["Dragonsmith","The things a dead dragon offers are the ones with the highest quality.",4]],
		["There's no way to specify what you do all day, so just confirm your profession.",
			["Adventurer","Who needs a map anyways!",0]]
		];

var n5 = ["<span title='Someone has to teach you how to use the mods, even if you as a player already know how every bit of any mod works.'>You probably want to learn something other as well. What kind of things are you interested in?</span>",
			["Mage","The ways of magic always fascinated you.",0],
			["Warrior","You are born to fight!",1],
			["Scientist","Knowledge is power!",2],
			["Craftsman","Creating stuff is so statisfying",3],
			["Adventurer","There's so much to be discovered!",4]
		];

var desint="<span title='You won't be able to learn the mods of this specification!'>Pick a specification you aren't interested in.</span>";

var n6 = [
		[desint,
			["Blood Mage","",0],
			["Astrology","",1],
			["Alchemist","",2],
			["Dystopist","",3],
			["Technomancer","",4],
			["Priest","",5],
			["Druid","",6],
			["Lord","",7]],
		[desint,
			["Mercenary","",0],
			["Soldier","",1],
			["Paladin","",2]],
		[desint,
			["Astrologist","",0],
			["Magoteconist","",1],
			["Engineer","",2],
			["Industrialist","",3],
			["Cyberneticist","",4],
			["Geneticist","",5],
			["Mechanist","",6],
			["Chemist","",7]],
		[desint,
			["Architect","",0],
			["Enchanter","",1],
			["Gardner","",2],
			["Smith","",3],
			["Dragonsmith","",4]],
		["There's nothing you don't want to learn about adventuring. Please confirm that.",
			["Adventurer","",0]]
		];

var standard="The Betweenlands;Advanced Inventory;Akashic Tome;Animania;Battle Towers;Infernal Mobs;Auto Sapling;Back Tools;Baubles;Better Storage;Better with Mods;Better FPS;Biomes O' Plenty;Bloodmoon;AppleCore;AppleSkin;AutoRegLib;BdLib;Bookshelf;Brandon's Core;Cannibalism;Chameleon;Chicken Chunks;CodeChicken Core;CodeChicken Lib;Coffee Spawner;CoFH Core;Compat Layer;ConnectedTexturesMod;Corail Tombstone;CoralReef;CoroUtil;Cosmetic Armor;CraftStudio API;Creeper Nuggets;CustomMobSpawner;CXLibrary;Cyclic;Cyclops Core;D3Core;Deadly Monsters;Enchantment Descriptions;EnderCore;Enhanced Visuals;Eternal Winter;Extra Utils;Fanny Pack;Fast Leaf Decay;ForgeEndertech;Guide-API;Hardcore Darkness;Hardcore Wither;iChunUtil;Interaction Wheel;Inventory Tweaks;Iron Apples;IvToolkit;JourneyMap;JEI (And all dependet mods);Kore Sample L;Level Up!;LibVulpes;LLibrary;Lumberjack;Mantle;MCMultiPart;Minecraft Comes Alive;Mo' Creatures;ModUtilsLib;Morpheus;MusicCraft;NotEnoughIDs;OMLib;OpenModularPassiveDefense;Natura;Quark;RadixCore;ReAuth;Recurrent Complex;Rockhounding Mod: Core;Rockhounding Mod: Surface;Roguelike Dungeons;ShadowMC;Grimoire of Gaia;Backpacks;Silent Lib;NoMoreRecipeConflict;TamModized;The Spice of Life;ThutCore;UniDict;ValkyrieLib;WAILA (And all dependent mods);WanionLib;ZeroCore;Zombie Awareness;Ancient Trees L";
		
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
						"EvilCraft",
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
						"Blood Magic",
						"Signposts"
					],
					[
						"EvilCraft;Tails",
						"Angel of Vengance;Tails",
						"Blood Magic",
						"God-Weapons"
					],
					[
						"Angel of Vengance;Tails",
						"EvilCraft;Tails",
						"Reliquary",
						"God-Weapons"
					]
				],
				[
					"Mystical Agriculture",
					"Ashenwheat",
					"Advanced Rocketry",
					"Dr. Squids Gunmod",
					"Advanced Combat",
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
						"Blood Magic;Blood Arsenal;Animus",
						"Astral Sorcery;Basic Elements",
						"Project E;Refined Storage;Refined Exchange;Runes of Wizzardry (and Classic Dusts Pack)",
						"AbyssalCraft;EvilCraft",
						"Draconic Evolution;Embers",
						"Reliquary",
						"Druidry;Roots;Botania",
						"Lord Craft;Blocklings"
					],
					[
						"Advanced Swords;Just Jetpacks",
						"Dr. Squids Gunmod;Viescraft;Parachute",
						"God-Weapons;Valcyrian Warfare"
					],
					[
						"Advanced Rocketry",
						"Crossroads MC;Psi;Particle Man",
						"Immersive Engineering;Thermal Expansions;Thermal Foundation;Simply Jetpacks;Redstone Arsenal",
						"Industrial Craft;Minefactory Reloaded;Applied Energistics 2;AE2 Stuff;Extreme Reactors",
						"Cyberware;Modular Powersuit",
						"Genetics Reborn;Forestry",
						"Railcraft;Environmental Tech;Just Jetpacks",
						"Chemistry"
					],
					[
						"Advanced Chimneys;Chisel;SecretRoomsMod;Storage Drawers;BiblioCraft;ArchitectureCraft;FastLadder;Thuts Elevators;Chisel and Bits;Drawers and Bits; Extra Bit Manipulation;Immersive Craft",
						"Enchanting +;Enchantchanger",
						"Floricraft;Mystical Agriculture (and MFR Compatibility);Plants;Forestry;Ender Crop;Ashenwheat;Dynamic Trees;Pam's HarvestCraft",
						"Tinker's Construct;PlusTIC",
						"Ice and Fire;Dragon Realm"
					],
					[
						"Ropebridges;Nature's Compass;Hearthstone Mod;Advanced Hook Launchers;Antique Atlas;Daedalus' Labyrinth"
					]
				]
			];
			
var taleon="First of all, let me introduce myself again.<br> My name is Momo.<br> Archmage Momo. <br>I guess that explains why this was hidden in the 'mages' category of the character creation.<br><br>I'll tell you about the origins of Neonetima.<br> A long time ago I started writing stories. It was a great time, as people cared to pretend the stories were at least half-decent. I always wanted to write about some MMORPG and, you guessed it, I did. This MMORPG was called <a href='https://archmagestories.tumblr.com/post/158148616870/die-reisen-trilogie-neonetima'>Neonetima</a> and was the first story I almost scraped because of creativity issues.<br>I hesitated in releasing Neonetima, it wasn't as good as I wanted it to be. But I fell in love with the Universe. After half a year of not working with Neonetima, I felt guilty. I guess that guilt is why I ended up rewriting Neonetima and making it even worse than it already was. I released it as a part two of the \"Reisen Trilogie\", whitch translates into \"travel trilogy\". People seemed to like it, but that made me feel even more guilty. I ended up shunning Neonetima, didn't want to remember the slightest bit of it.<br>But I failed in forgetting it, so I returned to its very foundation, the rules of Neonetima, the core idea. I recreated it from there on.<br>So, why is this modpack called Neonetima? I felt like it.<br>Truth be told, it was a bad idea. Minecraft can't deliver what Neonetima is all about. Hell, even the words I write can't even describe the wonders of this Universe.<br><br>That was the story I had to tell. I am sorry for not being able to deliver the wonders Neonetima is made of. Maybe someday these wonders will be reality.<br><br>Thanks.<br><span title='Neot'>Momo</span>"