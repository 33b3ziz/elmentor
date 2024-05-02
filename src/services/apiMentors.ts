export async function getMentors() {
  try {
    const response = await fetch("https://radwan.up.railway.app/listMentors");
    if (!response.ok) {
      throw new Error("Failed to fetch mentors");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching mentors:", error);
    throw error;
  }
}
export async function getMentorsList() {
  try {
    const response = await fetch("https://radwan.up.railway.app/listMentors");
    if (!response.ok) {
      throw new Error("Failed to fetch mentors");
    }
    const data = await response.json();
    return data.mentorsData;
  } catch (error) {
    console.error("Error fetching mentors:", error);
    throw error;
  }
}
