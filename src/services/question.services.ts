export const API_URL = 'https://cross-platform.rp.devfactory.com';

export const revealCorrectAnswer = async (questionId: string) => {
  const response = await fetch(`${API_URL}/reveal?id=${questionId}`);
  const data = await response.json();
  const correctAnswer = data?.correct_options?.[0]?.id || null;
  return correctAnswer;
};

export const getQuestion = async () => {
  const response = await fetch(`${API_URL}/for_you`);
  const data = await response.json();
  return data;
};
