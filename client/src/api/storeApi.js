const api = async (path, options = {}) => {
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Request failed");
  }

  return response.json();
};

export const getProducts = () => api("/api/products");
export const getFeaturedProducts = () => api("/api/products/featured");
export const getUsers = () => api("/api/users");
export const getOrders = () => api("/api/orders");
export const createOrder = (payload) =>
  api("/api/orders", {
    method: "POST",
    body: JSON.stringify(payload)
  });
