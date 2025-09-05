const Model = (() => {
  const getLists = async () => {
    const URL = "/lists";
    let result;
    try {
      const response = await fetch(URL, 
        {
          method: "GET"
        });

        if (!response.ok) {
          throw new Error("Response status: "  + response.status);
        }

        result = await response.json();

    } catch (error) {
      console.error(error.message);
    }

    return result;
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