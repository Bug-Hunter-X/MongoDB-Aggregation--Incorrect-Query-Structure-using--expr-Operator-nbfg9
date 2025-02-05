```javascript
const query = {  //Incorrect query structure
  $expr: { $eq: [ "$field1", "$field2"]}
};

//Correct query structure
const query = {
  $expr: { $eq: [ '$field1', '$field2'] }
};

db.collection.find(query);
```