const firstword = ["Sticky", "Wet", "Scaly", "Rough", "Twisted", "Rotund", "Quiet", "Cold", "Shivering", "Sick", "Swollen", "Pampered", "Scrumptious", "Gigantic", "Curious", "Vivacious", "Melancholic", "Relaxed", "Smelly", "Hairy", "Smooth", "Slimy", "Jolly", "Mischievous", "Military", "Anime", "Ugly", "Enchanted", "Crabby", "Eyeball", "Crying", "Otaku", "Gachi", "Sexy", "Scientific", "Borderlands Style", "Junji Ito Inspired", "JoJo", "Handicapped", "Soft", "Manly", "Androgynous", "Blood Elf", "Night Elf", "Pixelated", "Shimmering", "Japanese", "Mixed", "Big Boobed", "Intense", "Emotionless", "Wild", "Fake", "Resiliant", "Slim", "Animal Crossing style", "Chulip inspired", "Evolved", "Miserable", "Five Star", "Dancing", "Fire Resistant", "Plagued", "Yellow", "Purple", "Stylish", "Wholesome", "Holy", "Snowy", "Expired", "Australian", "Rushed", "Alien", "Crusty", "Absentminded", "Sweet", "Tactical", "Submerged","Scraggly", "Invested", "Retro", "Vintage", "Futuristic", "Cursed", "Bloody", "Yandere", "Tsundere", "Mini", "Forgetful", "Idiot", "Rare"];

const secondword = ["Bug", "Gundam", "Rodent", "Creature", "Building", "Friend", "Bulldog", "Shrimp", "Lady", "Stuffed Animal", "Warlock", "Ghost", "Angel", "Superhero", "Mimic", "Boat", "Stand", "Oracle", "Monk", "Candy", "Instrument", "Weapon", "Device", "Puzzle", "Game", "Illusion", "Ojisan", "Movie Scene", "Sushi", "Mask", "Beverage", "Emote", "Pokemon", "Digimon", "Jewelry", "Child", "Creepypasta", "Planet", "Spaceship", "Twins", "Campground", "Bones", "Sea Creature", "God/Goddess", "Fruit","Healer", "Mannequin", "Salesman", "Vending Machine", "Paladin", "Rockstar", "Self Portrait", "Homeless Man", "Zombie", "Puppet", "Pepe", "Girlfriend", "Meal", "Dwarf", "Hitman", "Succubus", "Clown", "Gemstone", "Artifact", "Mercenary", "King", "Caveman", "Mummy", "Cryptid", "Magic Wand", "Nightmare", "Soldier", "Grandma"]; 

const getRandomNumber = (max) => Math.floor(Math.random() * max); 

const getPrompt = () =>
`${firstword[getRandomNumber(firstword.length)]} ${secondword[getRandomNumber(secondword.length)]}`;

const setPrompt = () => {
document.getElementById('prompt-me').innerText = getPrompt();
}

document.getElementById('generate')
  .addEventListener('click', setPrompt);

setPrompt();