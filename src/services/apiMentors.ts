export async function getMentors() {
  const res = await fetch("https://radwan.up.railway.app/listMentors");
  const data = await res.json();
  return data;
}
