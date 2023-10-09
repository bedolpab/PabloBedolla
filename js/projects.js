const jsonFilePath = "../data/projects.json";

fetch(jsonFilePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const project = data.projects;
    for (p of project) {
        var projectItem = document.createElement("div");
        projectItem.className = "project-item";

        var projectItemHead = document.createElement("div");
        projectItemHead.className = "project-item-head";

        var header = document.createElement("a");
        header.className = "project-item-title";
        header.href = `${p.link}`;
        header.textContent = `${p.title}`;

        var year = document.createElement("h4");
        year.textContent = `${p.year}`;

        var projectItemContent = document.createElement("div");
        projectItemContent.className = "project-item-content";

        var body = document.createElement("p");
        body.className = "project-item-source";
        body.textContent = p.description;

        projectItemContent.appendChild(body);
        projectItemHead.appendChild(header);
        projectItemHead.appendChild(year);
        projectItem.appendChild(projectItemHead);
        projectItem.appendChild(projectItemContent);

      document.getElementById("projects").appendChild(projectItem);
    }
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
