// Mock API for /api/priority-nominate

export async function createPriorityNomination(email, storyId) {
  // Simulate Stripe Checkout + API call
  await new Promise(resolve => setTimeout(resolve, 1200));
  // Simulate success
  return { success: true };
}