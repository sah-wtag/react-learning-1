export default function useDisplayMessage() {
  function displayMessage() {
    console.log("This is a message");
  }
  return [displayMessage];
}
