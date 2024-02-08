function sliceElements(givenArray) {
    let arrLength = givenArray.length;
      for (i = arrLength; i > arrLength - 3; i--) {
        let result =+ givenArray[i];
      }
      return result;
    }
    
    
    
    console.log(sliceElements([1, 2, "MIT Certificate", 4, 5])); // should return ["MIT Certificate", 4, 5]
    console.log(sliceElements([1, 2, [3, 4], "JavaScript"])); // should return [2, [3, 4], "JavaScript"]