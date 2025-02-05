```javascript
const query = {
  $expr: { $eq: [ '$field1', '$field2'] }
};

db.collection.find(query);
```