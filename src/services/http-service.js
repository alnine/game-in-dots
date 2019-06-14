const baseUrl = "http://starnavi-frontend-test-task.herokuapp.com";

export function getSettings() {
  const apiEndPoint = baseUrl + "/game-settings";
  return fetch(apiEndPoint).then(function(response) {
    return response.json();
  });
}

export function getLeaders() {
  const apiEndPoint = baseUrl + "/winners";
  return fetch(apiEndPoint).then(function(response) {
    return response.json();
  });
}
