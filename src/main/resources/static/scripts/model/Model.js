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

  const getTodos = (listId) => {
    const testTodos = {
      list: [
        {
          id: 5,
          position: 0,
          content: "1x tin cat food",
          complete: true,
          todo_list_id: 11
        },
        {
          id: 88,
          position: 1,
          content: "2x 500g Butter",
          complete: false,
          todo_list_id: 11
        }
      ]
    };

    return testTodos;
  }

  return {
    getLists,
    getTodos
  }
})();

export default Model;