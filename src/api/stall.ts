/**
 * Simulates latency on a network.
 */
async function stall(seconds: number = 3): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
}

export default stall;
