export function formatDuration(seconds: number) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  let roundedSeconds = Math.round(remainingSeconds / 15) * 15;

  // Adjust minutes if rounding up seconds exceeds 60
  if (roundedSeconds === 60) {
    minutes += 1;
    roundedSeconds = 0;
  }

  if (roundedSeconds === 0) {
    return `${minutes} min`;
  }

  if (minutes >= 1) {
    return `${minutes} min ${roundedSeconds} sec`;
  }

  return `${roundedSeconds} sec`;
}
