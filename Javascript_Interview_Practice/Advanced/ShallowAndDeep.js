//shallow copy -> creates a new object and copies the reference of the original object into the new object.
   
     const originalObject = {
         name: 'John', 
         age: 30,
         address: {city: 'New York',zip: '10001'}};
         
     const copiedObject = {...originalObject};
     copiedObject.name = 'Jane';
     copiedObject.address.city = 'San Francisco';   

     console.log(originalObject.name); // Output: John
     console.log(originalObject.address.city); // Output: San Francisco  
     //  why did it chnge? => // because the address property is an object, and when we copied the originalObject, we copied the reference to the address object, not a new object.
     console.log(copiedObject.name); // Output: Jane

// deep copy -> creates a new object and recursively copies the properties of the original object into the new object

        const deepCopiedObject = JSON.parse(JSON.stringify(originalObject));
        deepCopiedObject.name = 'Alice';
        deepCopiedObject.address.city = 'Los Angeles';

 console.log(originalObject.name); // Output: John
 console.log(originalObject.address.city); // Output: San Francisco
 console.log(deepCopiedObject.name); // Output: Alice
 console.log(deepCopiedObject.address.city); // Output: Los Angeles
 console.log(originalObject); // Output: { name: 'John', age: 30, address: { city: 'San Francisco', zip: '10001' } }
 console.log(deepCopiedObject); // Output: { name: 'Alice', age: 30, address: { city: 'Los Angeles', zip: '10001' } }
