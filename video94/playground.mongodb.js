
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "price": 20000,
    "instructor": "Harry",
    "duration": "3 months",
    "rating": 4.5
  },
  {
    "name": "Python for Beginners",
    "price": 15000,
    "instructor": "Anjali",
    "duration": "2.5 months",
    "rating": 4.7
  },
  {
    "name": "Web Development",
    "price": 25000,
    "instructor": "Raj",
    "duration": "4 months",
    "rating": 4.6
  },
  {
    "name": "Data Structures & Algorithms",
    "price": 18000,
    "instructor": "Neha",
    "duration": "3.5 months",
    "rating": 4.8
  },
  {
    "name": "Machine Learning",
    "price": 30000,
    "instructor": "Dr. Kumar",
    "duration": "5 months",
    "rating": 4.9
  }
]
);



console.log(`Done inserting data`);

