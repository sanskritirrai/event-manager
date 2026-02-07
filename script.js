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
function clearEvents() {
    eventList.innerHTML = `<p class="empty">No events yet. Add your first event!</p>`;
}
function addSampleEvents() {
    clearEvents();
    const samples = [
        { t: "Tech Conference", d: "2026-03-10", c: "Conference" },
        { t: "Web Workshop", d: "2026-03-15", c: "Workshop" }
    ];

    samples.forEach(e => {
        const div = document.createElement("div");
        div.className = "event";
        div.innerHTML = `
            <strong>${e.t}</strong><br>
            ${e.d} | ${e.c}
        `;
        removeEmptyText();
        eventList.appendChild(div);
    });
}
