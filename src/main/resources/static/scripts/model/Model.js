const Model = (() => {
  const getLists = () => {
    const testList = {
      lists: [
        {
          id: 5,
          position: 0,
          title: "Morning checklist",
          user_id: 101
        },
        {
          id: 11,
          position: 1,
          title: "Supermarket",
          user_id: 43
        }
      ]
    }
    return testList;
  }

  return {
    getLists
  }
})();

export default Model;