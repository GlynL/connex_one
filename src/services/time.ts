export function getEpochTime() {
  const now = Date.now();
  const epochTime = Math.floor(now / 1000);
  return epochTime;
}
