const eventList = document.getElementById("eventList");

function addEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (!title || !date) return;

    removeEmptyText();

    const div = document.createElement("div");
    div.className = "event";
    div.innerHTML = `
        <strong>${title}</strong><br>
        ${date} | ${category}<br>
        <small>${description}</small>
    `;

    eventList.appendChild(div);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}
