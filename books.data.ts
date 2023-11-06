const books = [
	{
		title: 'To Kill a Mockingbird',
		author: 'Harper Lee',
		summary:
			"Set in the American South during the 1930s, 'To Kill a Mockingbird' is a classic novel that explores themes of racism, injustice, and moral growth.",
	},
	{
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		summary:
			"Set in the 1920s, 'The Great Gatsby' is a novel that delves into the opulent and decadent lifestyle of the Jazz Age.",
	},
	{
		title: '1984',
		author: 'George Orwell',
		summary:
			"George Orwell's '1984' is a dystopian novel that takes place in a totalitarian society ruled by the Party and its leader, Big Brother.",
	},
	{
		title: 'Pride and Prejudice',
		author: 'Jane Austen',
		summary:
			"Jane Austen's 'Pride and Prejudice' is a classic novel that explores themes of love, class, and societal expectations in 19th-century England.",
	},
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		summary:
			"Bilbo Baggins, a hobbit, embarks on an unexpected adventure in 'The Hobbit,' a fantasy novel filled with mythical creatures and epic quests.",
	},
	{
		title: 'The Catcher in the Rye',
		author: 'J.D. Salinger',
		summary:
			"'The Catcher in the Rye' follows the experiences of Holden Caulfield, a disenchanted teenager, as he navigates the challenges of growing up and dealing with the phoniness of the adult world.",
	},
	{
		title: 'Moby-Dick',
		author: 'Herman Melville',
		summary:
			"'Moby-Dick' tells the epic tale of Captain Ahab's obsessive quest to hunt down the elusive white whale, Moby Dick, a symbol of his own inner demons.",
	},
	{
		title: 'The Lord of the Rings',
		author: 'J.R.R. Tolkien',
		summary: 'A grand epic.',
	},
	{
		title: "Harry Potter and the Sorcerer's Stone",
		author: 'J.K. Rowling',
		summary:
			"The first book in the 'Harry Potter' series introduces the young wizard Harry as he discovers his magical abilities and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
	},
	{
		title: 'The Da Vinci Code',
		author: 'Dan Brown',
		summary:
			"In 'The Da Vinci Code,' Harvard symbologist Robert Langdon is called to the Louvre Museum to unravel a murder mystery with religious and historical implications.",
	},
	{
		title: 'The Alchemist',
		author: 'Paulo Coelho',
		summary:
			"Santiago, a shepherd, embarks on a journey to find his personal legend in 'The Alchemist,' a novel about following one's dreams and destiny.",
	},
	{
		title: 'Brave New World',
		author: 'Aldous Huxley',
		summary:
			"Aldous Huxley's 'Brave New World' depicts a dystopian future where societal stability is maintained through technology and the suppression of individuality.",
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		summary:
			"Homer's epic poem 'The Odyssey' follows the adventures of Odysseus as he strives to return home after the Trojan War.",
	},
	{
		title: 'Fahrenheit 451',
		author: 'Ray Bradbury',
		summary: "In a future society, firemen burn books to suppress dissenting ideas in Ray Bradbury's 'Fahrenheit 451.'",
	},
	{
		title: 'The Shining',
		author: 'Stephen King',
		summary:
			"Stephen King's 'The Shining' tells the story of Jack Torrance, who becomes the winter caretaker of the haunted Overlook Hotel.",
	},
	{
		title: 'The Road',
		author: 'Cormac McCarthy',
		summary:
			"'The Road' is a post-apocalyptic novel that follows a father and son as they navigate a desolate and dangerous world in search of safety.",
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		summary:
			"Homer's epic poem 'The Odyssey' follows the adventures of Odysseus as he strives to return home after the Trojan War.",
	},
	{
		title: 'The Hunger Games',
		author: 'Suzanne Collins',
		summary:
			"In a dystopian future, teenagers are forced to compete in a televised fight to the death in Suzanne Collins' 'The Hunger Games.'",
	},
	{
		title: 'Frankenstein',
		author: 'Mary Shelley',
		summary:
			"Mary Shelley's 'Frankenstein' tells the story of Victor Frankenstein and his creation of a monstrous being.",
	},
	{
		title: 'The Road',
		author: 'Cormac McCarthy',
		summary:
			"'The Road' is a post-apocalyptic novel that follows a father and son as they navigate a desolate and dangerous world in search of safety.",
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		summary:
			"Homer's epic poem 'The Odyssey' follows the adventures of Odysseus as he strives to return home after the Trojan War.",
	},
	{
		title: 'The Hunger Games',
		author: 'Suzanne Collins',
		summary:
			"In a dystopian future, teenagers are forced to compete in a televised fight to the death in Suzanne Collins' 'The Hunger Games.'",
	},
	{
		title: 'Frankenstein',
		author: 'Mary Shelley',
		summary:
			"Mary Shelley's 'Frankenstein' tells the story of Victor Frankenstein and his creation of a monstrous being.",
	},
	{
		title: 'The Road',
		author: 'Cormac McCarthy',
		summary:
			"'The Road' is a post-apocalyptic novel that follows a father and son as they navigate a desolate and dangerous world in search of safety.",
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		summary:
			"Homer's epic poem 'The Odyssey' follows the adventures of Odysseus as he strives to return home after the Trojan War.",
	},
	{
		title: 'The Hunger Games',
		author: 'Suzanne Collins',
		summary:
			"In a dystopian future, teenagers are forced to compete in a televised fight to the death in Suzanne Collins' 'The Hunger Games.'",
	},
	{
		title: 'Frankenstein',
		author: 'Mary Shelley',
		summary:
			"Mary Shelley's 'Frankenstein' tells the story of Victor Frankenstein and his creation of a monstrous being.",
	},
	{
		title: 'The Road',
		author: 'Cormac McCarthy',
		summary:
			"'The Road' is a post-apocalyptic novel that follows a father and son as they navigate a desolate and dangerous world in search of safety.",
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		summary:
			"Homer's epic poem 'The Odyssey' follows the adventures of Odysseus as he strives to return home after the Trojan War.",
	},
	{
		title: 'The Hunger Games',
		author: 'Suzanne Collins',
		summary:
			"In a dystopian future, teenagers are forced to compete in a televised fight to the death in Suzanne Collins' 'The Hunger Games.'",
	},
	{
		title: 'Frankenstein',
		author: 'Mary Shelley',
		summary:
			"Mary Shelley's 'Frankenstein' tells the story of Victor Frankenstein and his creation of a monstrous being.",
	},
	{
		title: 'The Road',
		author: 'Cormac McCarthy',
		summary:
			"'The Road' is a post-apocalyptic novel that follows a father and son as they navigate a desolate and dangerous world in search of safety.",
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		summary:
			"Homer's epic poem 'The Odyssey' follows the adventures of Odysseus as he strives to return home after the Trojan War.",
	},
	{
		title: 'The Hunger Games',
		author: 'Suzanne Collins',
		summary:
			"In a dystopian future, teenagers are forced to compete in a televised fight to the death in Suzanne Collins' 'The Hunger Games.'",
	},
	{
		title: 'Frankenstein',
		author: 'Mary Shelley',
		summary:
			"Mary Shelley's 'Frankenstein' tells the story of Victor Frankenstein and his creation of a monstrous being.",
	},
	{
		title: 'The Road',
		author: 'Cormac McCarthy',
		summary:
			"'The Road' is a post-apocalyptic novel that follows a father and son as they navigate a desolate and dangerous world in search of safety.",
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		summary:
			"Homer's epic poem 'The Odyssey' follows the adventures of Odysseus as he strives to return home after the Trojan War.",
	},
	{
		title: 'The Hunger Games',
		author: 'Suzanne Collins',
		summary:
			"In a dystopian future, teenagers are forced to compete in a televised fight to the death in Suzanne Collins' 'The Hunger Games.'",
	},
	{
		title: 'Frankenstein',
		author: 'Mary Shelley',
		summary:
			"Mary Shelley's 'Frankenstein' tells the story of Victor Frankenstein and his creation of a monstrous being.",
	},
	{
		title: 'The Catcher in the Rye',
		author: 'J.D. Salinger',
		summary:
			"'The Catcher in the Rye' follows the experiences of Holden Caulfield, a disenchanted teenager, as he navigates the challenges of growing up and dealing with the phoniness of the adult world.",
	},
	{
		title: 'Moby-Dick',
		author: 'Herman Melville',
		summary:
			"'Moby-Dick' tells the epic tale of Captain Ahab's obsessive quest to hunt down the elusive white whale, Moby Dick, a symbol of his own inner demons.",
	},
	{
		title: 'The Lord of the Rings',
		author: 'J.R.R. Tolkien',
		summary:
			'A grand epic fantasy trilogy that follows the journey of Frodo Baggins to destroy the One Ring and save Middle-earth from the dark lord Sauron.',
	},
	{
		title: "Harry Potter and the Sorcerer's Stone",
		author: 'J.K. Rowling',
		summary:
			"The first book in the 'Harry Potter' series introduces the young wizard Harry as he discovers his magical abilities and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
	},
	{
		title: 'The Da Vinci Code',
		author: 'Dan Brown',
		summary:
			"In 'The Da Vinci Code,' Harvard symbologist Robert Langdon is called to the Louvre Museum to unravel a murder mystery with religious and historical implications.",
	},
	{
		title: 'The Alchemist',
		author: 'Paulo Coelho',
		summary:
			"Santiago, a shepherd, embarks on a journey to find his personal legend in 'The Alchemist,' a novel about following one's dreams and destiny.",
	},
	{
		title: 'Brave New World',
		author: 'Aldous Huxley',
		summary:
			"Aldous Huxley's 'Brave New World' depicts a dystopian future where societal stability is maintained through technology and the suppression of individuality.",
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		summary:
			"Homer's epic poem 'The Odyssey' follows the adventures of Odysseus as he strives to return home after the Trojan War.",
	},
	{
		title: 'Fahrenheit 451',
		author: 'Ray Bradbury',
		summary: "In a future society, firemen burn books to suppress dissenting ideas in Ray Bradbury's 'Fahrenheit 451.'",
	},
	{
		title: 'The Shining',
		author: 'Stephen King',
		summary:
			"Stephen King's 'The Shining' tells the story of Jack Torrance, who becomes the winter caretaker of the haunted Overlook Hotel.",
	},
	{
		title: 'The Road',
		author: 'Cormac McCarthy',
		summary:
			"'The Road' is a post-apocalyptic novel that follows a father and son as they navigate a desolate and dangerous world in search of safety.",
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		summary:
			"Homer's epic poem 'The Odyssey' follows the adventures of Odysseus as he strives to return home after the Trojan War.",
	},
	{
		title: 'The Hunger Games',
		author: 'Suzanne Collins',
		summary:
			"In a dystopian future, teenagers are forced to compete in a televised fight to the death in Suzanne Collins' 'The Hunger Games.'",
	},
	{
		title: 'Frankenstein',
		author: 'Mary Shelley',
		summary:
			"Mary Shelley's 'Frankenstein' tells the story of Victor Frankenstein and his creation of a monstrous being.",
	},
	{
		title: 'The Road',
		author: 'Cormac McCarthy',
		summary:
			"'The Road' is a post-apocalyptic novel that follows a father and son as they navigate a desolate and dangerous world in search of safety.",
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		summary:
			"Homer's epic poem 'The Odyssey' follows the adventures of Odysseus as he strives to return home after the Trojan War.",
	},
	{
		title: 'The Hunger Games',
		author: 'Suzanne Collins',
		summary:
			"In a dystopian future, teenagers are forced to compete in a televised fight to the death in Suzanne Collins' 'The Hunger Games.'",
	},
	{
		title: 'Frankenstein',
		author: 'Mary Shelley',
		summary:
			"Mary Shelley's 'Frankenstein' tells the story of Victor Frankenstein and his creation of a monstrous being.",
	},
	{
		title: 'The Road',
		author: 'Cormac McCarthy',
		summary:
			"'The Road' is a post-apocalyptic novel that follows a father and son as they navigate a desolate and dangerous world in search of safety.",
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		summary:
			"Homer's epic poem 'The Odyssey' follows the adventures of Odysseus as he strives to return home after the Trojan War.",
	},
	{
		title: 'The Hunger Games',
		author: 'Suzanne Collins',
		summary:
			"In a dystopian future, teenagers are forced to compete in a televised fight to the death in Suzanne Collins' 'The Hunger Games.'",
	},
	{
		title: 'Frankenstein',
		author: 'Mary Shelley',
		summary:
			"Mary Shelley's 'Frankenstein' tells the story of Victor Frankenstein and his creation of a monstrous being.",
	},
]

export default books
