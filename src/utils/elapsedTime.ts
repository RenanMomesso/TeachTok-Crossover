import moment from 'moment';

export const formatElapsedTime = (elapsedTime: number) => {
  const duration = moment.duration(elapsedTime);
  const seconds = duration.seconds();
  const minutes = duration.minutes();

  if (minutes < 1) {
    return `${seconds}s`;
  } else {
    return `${minutes}m ${seconds}s`;
  }
};
