export async function checkEligibility(wallet: string): Promise<any> {
  console.log(wallet, "wallet from fetchData");
  const url = `http://localhost:8000/api/check-eligibility?address=${wallet}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
