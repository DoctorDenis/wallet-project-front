import instance from '../axios';

export async function getStatiscticsData(month, year) {
  const token = JSON.parse(
    JSON.parse(window.localStorage.getItem('persist:token')).accesToken
  );

  const { data } = await instance.get(
    `/statistics/?month=${month + 1}&year=${year}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return data;
}
