export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Promise resolved');
    } else {
      reject(new Error('Promise rejected'));
    }
  });
}
