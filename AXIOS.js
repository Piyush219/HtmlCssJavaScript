// AXIOS GLOBALS

axios.defaults.headers.common['X-Auth-Token'] = 'sometoken'

// GET REQUEST
function getTodos() {
  /* axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',
    params:{   // will limit the data to five
      _limit: 5
    }
  })
  .then(res => showOutput(res))  // csan also do res.data will only give data
  .catch(err => console.log(err))*/


  axios  // We don't have to put get by default it's get but for better understanding we writing get
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5',{ timeout: 5000})   // timeout used here to give maximum time to come back from server
    .then(res => showOutput(res))  // csan also do res.data will only give data
    .catch(err => console.log(err))
}


// POST REQUEST
function addTodo() {
  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: false
    })

    /* ({   // also write in this way 
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/todos',
      data:{  
        title: 'New Todo',
        completed: false
      }
    }) */

    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios({
    method: 'patch', // Id will stay the same //  also 'put' it will replace the user id
    url: 'https://jsonplaceholder.typicode.com/todos/1', // Need to write ID over here '1'
    data: {
      title: 'Updated Todo',
      completed: true
    }
  })
    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')    // Will return empty object in data
    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  ])
    .then(axios.spread((todos, posts) => showOutput(posts))




  /* (res => {
   console.log(res[0]);
   console.log(res[1]);
   showOutput(res[1])
 } */)
    .catch(err => console.log(err))
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'sometoken'
    }
  };

  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: false
    },
      config
    )
    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data
    })

  }
  axios(options).then(res => showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
  axios
    .get('https://jsonplaceholder.typicode.com/todooss',{
      validateStatus: function(status){
        return status < 500 ; // Reject only if status is greater or equal to 500
      }
    })
    .then(res => showOutput(res))
    .catch(err => {
      if (err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
        if (err.response.status === 404) {
          alert("Error: Page Not Found")
        }
      }
      else if (err.request) {
        console.log(err.request);
      }
      else {
        console.log(err.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();

  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      }
    });
  if (true) {
    source.cancel('Request Canceled')
  }
}

// INTERCEPTING REQUESTS & RESPONSES

axios.interceptors.request.use(config => {
  console.log(`${config.method.toUpperCase()} request sent to ${config.url} 
  at ${new Date().getTime()}`)
  return config;
},
  error => {
    return Promise.reject(error)

  })

// AXIOS INSTANCES

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

//axiosInstance.get('/comments').then(res => showOutput(res));


// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
