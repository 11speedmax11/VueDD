const urlPart = "http://45.12.239.156:8081/api/";
const urlPartBase = "http://45.12.239.156:8081/";
let headers = {
  'Authorization': `Bearer ${localStorage.getItem('tokenUser')}`,
  'Content-Type': 'application/json'
}
import axios from 'axios';

export const  updateHeaders = () => {
  headers['Authorization'] = `Bearer ${localStorage.getItem('tokenUser')}`;
}

export const requests = {
  getTasks: (data) => {
    const url = urlPart + `tasks/search`;
    return axios({
      method: 'post',
      url: url,
      data: data,
      headers: headers
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });

  },
  getUser: ({ login, password }) => {
    const url = urlPart + `login`;
    return axios({
      method: 'post',
      url: url,
      data: {
        login: login,
        password: password,
      }
    })
      .then(({ data }) => {
        return data
      })
      .catch(( data ) => {
        return data && data.response && data.response.data && data.response.data.message || 'Ошибка авторизации'
      });
  },
  getCurrentUser: () => {
    const url = urlPart + `users/current`;
    return axios({
      method: 'get',
      url: url,
      headers: headers
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  getAvatar(picture) {
    return urlPartBase + (picture || "09a5dbef-32ff-43df-b3f9-01855899ee74.jpg")
  },

  deleteUser: (data) => {
    const url = urlPart + `users/status`;
    return axios({
      method: 'put',
      url: url,
      headers: headers,
      data: data
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  addUser: ({
    name,
    login,
    password
  }) => {
    const url = urlPart + `registration`;
    return axios({
      method: 'post',
      url: url,
      data: {
        name: name,
        login: login,
        password: password,
      }
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  editUser: ({
    _id,
    name,
    description,
    roles
  }) => {
    const url = urlPart + `users`;
    return axios({
      method: 'put',
      url: url,
      headers: headers,
      data: {
        _id: _id,
        name: name,
        description: description,
        roles: roles,
      }
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  addPhoto: (data) => {
    const url = urlPart + `users/picture`;
    return axios({
      method: 'put',
      url: url,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('tokenUser')}`,
      },
      data: data
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  getStatus: () => {
    const url = urlPart + `statuses`;
    return axios({
      method: 'get',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  getUserList: (data) => {
    const url = urlPart + `users/search`;
    return axios({
      method: 'post',
      url: url,
      headers: headers,
      data: data,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  editPass: (data) => {
    const url = urlPart + `users/password`;
    return axios({
      method: 'put',
      url: url,
      headers: headers,
      data: data,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  addTask: (data) => {
    const url = urlPart + `tasks`;
    return axios({
      method: 'post',
      url: url,
      headers: headers,
      data: data,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  editTask: (data) => {
    const url = urlPart + `tasks`;
    return axios({
      method: 'put',
      url: url,
      headers: headers,
      data: data,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  addProject: (data) => {
    const url = urlPart + `projects`;
    return axios({
      method: 'post',
      url: url,
      headers: headers,
      data: data,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  editProject: (data) => {
    const url = urlPart + `projects`;
    return axios({
      method: 'put',
      url: url,
      headers: headers,
      data: data,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  deleteProject: (id) => {
    const url = urlPart + `projects/${id}`;
    return axios({
      method: 'delete',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  getProjectList: (data) => {
    const url = urlPart + `projects/search`;
    return axios({
      method: 'post',
      url: url,
      headers: headers,
      data: data,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  getProjectById: (id) => {
    const url = urlPart + `projects/${id}`;
    return axios({
      method: 'get',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },

  deleteTask: (id) => {
    const url = urlPart + `tasks/${id}`;
    return axios({
      method: 'delete',
      url: url,
      headers: headers,
    })
      .then(() => {
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  getTask: (id) => {
    const url = urlPart + `tasks/${id}`;
    return axios({
      method: 'get',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  getHistory: (id) => {
    const url = urlPart + `hystory/${id}`;
    return axios({
      method: 'get',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  getComments: (id) => {
    const url = urlPart + `/comments/${id}`;
    return axios({
      method: 'get',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  addComment: (data) => {
    const url = urlPart + `comments`;
    return axios({
      method: 'post',
      url: url,
      headers: headers,
      data
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  editComment: (data) => {
    const url = urlPart + `comments`;
    return axios({
      method: 'put',
      url: url,
      headers: headers,
      data
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  deleteComment: (id) => {
    const url = urlPart + `comments/${id}`;
    return axios({
      method: 'delete',
      url: url,
      headers: headers,
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
  addTime: (data) => {
    const url = urlPart + `times`;
    return axios({
      method: 'put',
      url: url,
      headers: headers,
      data
    })
      .then(({ data }) => {
        return data
      })
      .catch(error => {
        console.error('Возникла проблема:', error);
      });
  },
}

