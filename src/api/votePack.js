// Mock API for /api/create-vote-pack-session and /api/vote-pack-status

export async function createVotePackSession(pack) {
  // Simulate Stripe Checkout for $2
  await new Promise(resolve => setTimeout(resolve, 1200));
  // Success stub
  return { success: true };
}

export async function getVotePackStatus(userId) {
  // Simulate fetching current vote pack credits
  await new Promise(resolve => setTimeout(resolve, 800));
  // Always return 5 credits for demo
  return { credits: 5 };
}