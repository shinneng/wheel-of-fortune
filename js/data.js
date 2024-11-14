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
    three_word_answers: {
      date: 'Nov 30 2024',
      puzzle_bank: [
        {  
          category: 'Praise',
          number_of_words: 3,
          total_number_of_letters: 15,
          first_word: 7, 
          description:'Song title by Planershaker',
          correct_answer: 'Running After You',
        },
        {  
          category: 'Praise Song',
          number_of_words: 3,
          total_number_of_letters: 13,
          first_word: 4, 
          description:'Song title by Hillsong Worship',
          correct_answer: 'King Of Majesty',
        }
      ]
    },
    four_word_answers: {
      date: 'Nov 30 2024',
      puzzle_bank: [
        {  
          category: 'Praise Song',
          number_of_words: 4,
          total_number_of_letters: 17,
          first_word: 2, 
          description:'Chorus of a Camp Song.',
          correct_answer: 'We Will Stand Strong',
        },
        {  
          category: 'Bible verse',
          number_of_words: 4,
          total_number_of_letters: 17,
          first_word: 6, 
          description:'Bible verse in Galations',
          correct_answer: 'Fruits Of The Spirit',
        }
      ]
    },
    five_word_answers: {
      date: 'Nov 30 2024',
      puzzle_bank: [
        {  
          category: 'Bible verse',
          number_of_words: 5,
          total_number_of_letters: 23,
          first_word: 4, 
          description:'Part of the Lord Prayer',
          correct_answer: 'Lead Us Not Into Temptation',
        }
      ]
    },
    six_word_answers: {
      date: 'Nov 30 2024',
      puzzle_bank: [
        {  
          category: 'Worship Song',
          number_of_words: 6,
          total_number_of_letters: 16,
          first_word: 3, 
          description:'Lyrics with Jesus, Lamb of God',
          correct_answer: 'You Are My All in All',
        },
        {  
          category: 'Praise Song',
          number_of_words: 6,
          total_number_of_letters: 24,
          first_word: 5, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Whose Side Are You Leaning On',
        }
      ]
    }
  }
};


export default data;