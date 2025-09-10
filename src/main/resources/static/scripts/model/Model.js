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

  const getTodos = async (listId) => {
    const URL = `/lists/${listId}`;
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

  const deleteTodos = async (todoId) => {
    const URL = `/lists/todo/${todoId}`;

    try {
      const response = await fetch(URL, {method: "DELETE"});

        if (!response.ok) {
          throw new Error("Response status: "  + response.status);
        }
    } catch (error) {
      console.error(error.message);
    }
  }

  return {
    getLists,
    getTodos,
    deleteTodos
  }
})();

export default Model;