import instance from '../axios';

export async function getStatiscticsData(month = 11, year = 2022) {
  const token = JSON.parse(
    JSON.parse(window.localStorage.getItem('persist:token')).accesToken
  );
  //   console.log('token-getStatistics:', token);

  const { data } = await instance.get(
    `/statistics/?month=${month}&year=${year}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  console.log("'data-getStatistics:':", data);
  return data;
}
