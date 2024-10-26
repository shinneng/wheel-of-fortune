const data = {
  response_code: {
    version: '1.2',
    termsofService: 'http://frontend.turing.io/projects/wheel-of-fortune.html',
    features: {
      wheel: 1,
      puzzles: 1
    },
  },
  wheel: [
    200,
    200,
    400,
    400,
    600,
    800,
  ],
  bonusWheel: [
  20000,
  3000,
  4000,
  5000,
  6000,
  7000
  ],
  puzzles: {
    one_word_answers: {
      date: 'Oct 07 2018',
      puzzle_bank: [
        {  
          category: 'Around The House',
          number_of_words: 1,
          total_number_of_letters: 8,
          first_word: 8, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Armchair',
        }
      ]
    },
    four_word_answers: {
      date: 'Nov 30 2024',
      puzzle_bank: [
        {  
          category: 'Around The House',
          number_of_words: 4,
          total_number_of_letters: 17,
          first_word: 4, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Roll Of Toilet Paper',
        },
        {  
          category: 'The 90s',
          number_of_words: 4,
          total_number_of_letters: 19,
          first_word: 4, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Mary Kate & Ashley Olsen',
        }
      ]
    },
    five_word_answers: {
      date: 'Nov 30 2024',
      puzzle_bank: [
        {  
          category: 'Around The House',
          number_of_words: 5,
          total_number_of_letters: 11,
          first_word: 1, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'I Am A Good Boy',
        }
      ]
    }
  }
};


export default data;