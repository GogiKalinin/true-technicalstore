  
 export const prepareTitle = (array) => {
    return array.length < 2 ? (
      <h1>{array.length}item in card</h1>
    ) : (
      <h1>{array.length}items in card</h1>
    );
  };