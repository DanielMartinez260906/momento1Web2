const API_BASE_URL = "http://localhost:8080/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("authToken");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};


export const fetchGet = async (endpoint) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "GET",
    headers: getAuthHeaders(),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error || `Error ${res.status}`);
  }
  return res.json();
};


export const fetchPost = async (endpoint, data) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error || `Error ${res.status}`);
  }
  return res.json();
};

export const fetchPut = async (endpoint, data) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error || `Error ${res.status}`);
  }
  return res.json();
};

export const fetchDelete = async (endpoint, data = null) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
    ...(data ? { body: JSON.stringify(data) } : {}),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error || `Error ${res.status}`);
  }
  return res.json();
};

export default API_BASE_URL;
