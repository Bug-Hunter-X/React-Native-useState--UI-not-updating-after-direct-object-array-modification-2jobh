The correct approach is to create a new object or array and assign it to the state using the setter function. This can be achieved efficiently using the spread syntax (...) or functional updates.

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [myArray, setMyArray] = useState([1, 2, 3]);

  const addElement = () => {
    // Correct way to update state using spread syntax:
    setMyArray([...myArray, 4]); 
    //Alternative using functional update:
    // setMyArray(prevArray => [...prevArray, 4]);
  };

  return (
    <View>
      <Text>{JSON.stringify(myArray)}</Text> 
      <Button title="Add Element" onPress={addElement} />
    </View>
  );
}
```
This ensures React detects the change in state reference, triggering a re-render and updating the UI.