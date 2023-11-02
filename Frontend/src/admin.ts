document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form")as HTMLFormElement;
    const table = document.querySelector("table tbody") as HTMLTableElement;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        console.log("hehehe");
        
        const name = (form.querySelector("input[name='name']") as HTMLInputElement).value;
        const user = (form.querySelector("input[name='user']") as HTMLInputElement).value;
        const description = (form.querySelector("textarea[name='description']") as HTMLTextAreaElement).value;
        const startDate = (form.querySelector("input[name='start_date']") as HTMLInputElement).value;
        const endDate = (form.querySelector("input[name='end_date']") as HTMLInputElement).value;
        const priority = (form.querySelector("select[name='priority']") as HTMLSelectElement).value;
        const status = (form.querySelector("select[name='status']") as HTMLSelectElement).value;

        // the new row where our data will be stored after we submit it
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${startDate} - ${endDate}</td>
            <td>0%</td>
            <td>${status}</td>
            <td>
                <div class="dropdown dropstart">
                    <a href="#!" class="btn-icon btn btn-ghost btn-sm rounded-circle"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i data-feather="more-vertical" class="icon-xs"></i>
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item d-flex align-items-center" href="#!">
                            <i class="dropdown-item-icon" data-feather="edit"></i>Edit Details
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#!">
                            <i class="dropdown-item-icon" data-feather="trash"></i>Delete Project
                        </a>
                    </div>
                </div>
            </td>
        `;

        table.appendChild(newRow);

        const offcanvas = document.getElementById("offcanvasRight");
        const offcanvasInstance = new bootstrap.Offcanvas(offcanvas as HTMLElement);
        offcanvasInstance.hide();
    });
});
