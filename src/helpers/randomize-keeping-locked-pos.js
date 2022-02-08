export const randomizeKeepingLockedPos = (array) =>{
  let newState = array.filter(item=>item.locked);
  let unlockedGifs = array.filter(item=>!item.locked);
  let availablePositions = unlockedGifs.map(item=>item.position);

  const randomizer = () => {
    if (availablePositions.length !== 0) {
      let newPosition = Math.ceil(Math.random() * Math.max(...availablePositions));
      if (availablePositions.includes(newPosition)) {
        let gifToTransfer = unlockedGifs.shift();
        availablePositions.splice(availablePositions.indexOf(newPosition), 1)
        newState = [...newState, {...gifToTransfer, position:newPosition}];
      }
      randomizer();
    } else {
      return;
    }
  }
  randomizer();

  return newState.sort(
    (item1, item2) => item1.position - item2.position
  );
}
