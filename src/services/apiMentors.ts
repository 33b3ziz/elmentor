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

export async function getMockMentors() {
  try {
    const response = await fetch("https://radwan.up.railway.app/mockInterview");
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
export async function getConsultMentors() {
  try {
    const response = await fetch("https://radwan.up.railway.app/consultation");
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
export async function getMentoringMentors() {
  try {
    const response = await fetch("https://radwan.up.railway.app/mentoring");
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

export async function getMentorAvailablity(values) {
  try {
    console.log(values);
    const response = await fetch(
      `https://ali.up.railway.app/api/v1/availability/check`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch mentor's time slots");
    }
    const data = await response.json();
    return data.dta;
  } catch (error) {
    console.error("Error fetching mentor's time slots:", error);
    throw error;
  }
}
