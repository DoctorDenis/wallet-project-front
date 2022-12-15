import instance from '../axios';

export async function getCategories() {
  const token = JSON.parse(
    JSON.parse(window.localStorage.getItem('persist:token')).accesToken
  );

  const { data } = await instance.get('/categories', {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}
