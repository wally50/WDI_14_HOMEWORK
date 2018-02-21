export default function calcScore(password) {
  let score = 0;
  if (password.length > 7) {
    score = score + 1;
  }
  return score;
}
