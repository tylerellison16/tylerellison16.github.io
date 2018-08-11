// data structure holding made friends plus user inputs
var friendsArray = [
	{
		name: 'Eliza Thornberry',
		photo: 'https://vignette.wikia.nocookie.net/nickelodeon/images/5/58/Eliza_with_map.png/revision/latest?cb=20160804045705',
		scores: [
			'4',
			'3',
			'4',
			'1',
			'3',
			'3',
			'1',
			'2',
			'3',
			'1'
		]
	},
	{
		name: 'Marianne Thornberry',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi8l8Xx_eLcAhVJ9IMKHSXlBj0QjRx6BAgBEAU&url=http%3A%2F%2Fwildthornberrys.wikia.com%2Fwiki%2FMarianne_Hunter_Thornberry&psig=AOvVaw27rYenJz05K1BT7AxmaHZ4&ust=1534007625072765',
		scores: [
			'2',
			'4',
			'1',
			'4',
			'5',
			'3',
			'1',
			'2',
			'1',
			'5'
		]
	},
	{
		name: 'Nigel Thornberry',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi687GV_uLcAhUDQ6wKHSXPAJMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.redbubble.com%2Fpeople%2Ffreshprintsco%2Fworks%2F15310790-nigel-thornberry%3Fp%3Dcanvas-print&psig=AOvVaw3716Vg-P_rjRCu45mDvihC&ust=1534007691644184',
		scores: [
			'1',
			'2',
			'3',
			'4',
			'5',
			'4',
			'3',
			'2',
			'1',
			'1'
		]
	},
	{
		name: 'Debbie Thornberry',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjqxtWu_uLcAhVKYK0KHZEUBYcQjRx6BAgBEAU&url=http%3A%2F%2Fwildthornberrys.wikia.com%2Fwiki%2FDeborah_Thornberry&psig=AOvVaw35kVKFvkFpaCsrKIiI2-XC&ust=1534007757317685',
		scores: [
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2'
		]
	},
	{
		name: 'Darwin',
		photo: 'https://vignette.wikia.nocookie.net/nickelodeon/images/7/75/Darwin.png/revision/latest?cb=20150410055548',
		scores: [
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3'
		]
	},
	{
		name: 'Donnie',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjmh4Ta_uLcAhVDWqwKHRUbBocQjRx6BAgBEAU&url=http%3A%2F%2Fwildthornberrys.wikia.com%2Fwiki%2FDonald_Michael_Thornberry&psig=AOvVaw2hNFJ1bZ0WvtOGXqgFM6bB&ust=1534007849037761',
		scores: [
			'5',
			'1',
			'4',
			'2',
			'3',
			'3',
			'5',
			'1',
			'4',
			'2'
		]
	},
	{
		name: 'Kip O Donnel',
		photo: 'http://www.billboard.com/files/styles/article_main_image/public/media/beyonce-feb-2014-billboard-650.jpg',
		scores: [
			'2',
			'4',
			'4',
			'2',
			'4',
			'4',
			'3',
			'2',
			'3',
			'3'
		]
	},
	{
		name: 'Tyler Tucker',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj-7aqi_-LcAhUDlKwKHQA1CdYQjRx6BAgBEAU&url=https%3A%2F%2Fsharetv.com%2Fshows%2Fthe_wild_thornberrys%2Fcast%2Ftyler_tucker&psig=AOvVaw2zCbuTuI2AWGduft8AWjdF&ust=1534008000621988',
		scores: [
			'3',
			'2',
			'3',
			'1',
			'5',
			'1',
			'3',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Biederman',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiJ_5O5_-LcAhUDQK0KHaEbDvMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.behindthevoiceactors.com%2Ftv-shows%2FThe-Wild-Thornberrys%2FBiederman%2F&psig=AOvVaw1VOrPsn_UdUrEwxX6ULIPY&ust=1534008041886207',
		scores: [
			'3',
			'1',
			'2',
			'5',
			'4',
			'5',
			'3',
			'5',
			'4',
			'5'
		]
	},
	{
		name: 'Dr. Jomo',
		photo: 'https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/dr-jomo-the-wild-thornberrys-6.12.jpg',
		scores: [
			'1',
			'3',
			'1',
			'2',
			'3',
			'4',
			'3',
			'2',
			'2',
			'1'
		]
	}
];

module.exports = friendsArray;