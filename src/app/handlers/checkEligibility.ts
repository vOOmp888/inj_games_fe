import config from "@/lib/config";

export async function checkEligibility(wallet: string): Promise<any> {
  const url = `${config.apiUrl}/check-eligibility?address=${wallet}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
