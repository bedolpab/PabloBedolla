const logFilePath = "../data/log.json";

fetch(logFilePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const logs = data.logs;
    for (l of logs) {
      var logItem = document.createElement("div");
      logItem.className = "log-item";

      var logItemHead = document.createElement("div");
      logItemHead.className = "log-item-head";

      var logHeader = document.createElement("a");
      logHeader.className = "log-item-title";
      logHeader.href = `${l.source}`;
      logHeader.textContent = `${l.title}`;

      var logYear = document.createElement("h4");
      logYear.textContent = `${l.year}`;

      var logItemContent = document.createElement("div");
      logItemContent.className = "log-item-content";

      var logBody = document.createElement("p");
      logBody.className = "log-item-description";
      logBody.textContent = l.description;

      logItemContent.appendChild(logBody);
      logItemHead.appendChild(logHeader);
      logItemHead.appendChild(logYear);
      logItem.appendChild(logItemHead);
      logItem.appendChild(logItemContent);

      document.getElementById("log").appendChild(logItem);
    }
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
