const form = document.getElementsByTagName("form")[0];
const list = document.querySelector("#todo-list");
const template = document.querySelector("#todo-template");
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');

const api = "https://crud-express-app-api.vercel.app/api/todos";

async function request(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error || "Request failed");
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

function renderTodos(todos) {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const item = template.content.firstElementChild.cloneNode(true);
    const checkbox = item.querySelector('input[type="checkbox"]');
    const title = item.querySelector(".edit-title");
    const description = item.querySelector(".edit-description");
    const updateBtn = item.querySelector(".update");
    const deleteBtn = item.querySelector(".delete");

    item.classList.toggle("done", todo.is_complete);
    checkbox.checked = todo.is_complete;
    title.value = todo.title;
    description.value = todo.description || "";

    checkbox.addEventListener("change", async () => {
      await updateTodo(todo.id, { is_complete: checkbox.checked });
    });

    updateBtn.addEventListener("click", async () => {
      await updateTodo(todo.id, {
        title: title.value,
        description: description.value,
      });
    });

    deleteBtn.addEventListener("click", async () => {
      await deleteTodo(todo.id);
    });

    list.appendChild(item)
  });
}

async function createTodo(event){
    event.preventDefault();

    try {
        await request(api, {
            method: 'POST',
            body: JSON.stringify({
                title: titleInput.value,
                description: descriptionInput.value
            })
        });

        form.reset();
        await loadTodos();
    }catch(error) {

    }
}

async function loadTodos() {
  try {
    const todos = await request(api);
    renderTodos(todos);
  } catch (error) {}
}

async function updateTodo(id, updates) {
  try {
    await request(`${api}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });

    await loadTodos();
  } catch (error) {}
}

async function deleteTodo(id) {
  try {
    await request(`${api}/${id}`, {
      method: "DELETE",
    });

    await loadTodos();
  } catch (error) {}
}


form.addEventListener('submit', createTodo);
loadTodos();