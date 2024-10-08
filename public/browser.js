console.log("FrontEnd JS ishga tushdidididi");

const createField = document.getElementById("create-field");
const formElement = document.querySelector("#create-form");

formElement.addEventListener("submit", (e) => {
	e.preventDefault();

	axios
		.post("/create-item", { reja: createField.value })
		.then((res) => {
			document
				.getElementById("item-list")
				.insertAdjacentHTML("beforeend", itemTemplate(res.data));
			createField.value = "";
			createField.focus();
		})
		.catch((err) => console.log("Qaytadan harakat qiling", err));
});

function itemTemplate(item) {
	return `<li
					class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
				>
					<span class="item-text">${item.reja}</span>
					<div>
						<button
							data-id="${item._id}"
							class="edit-me btn btn-secondary btn-sm mr-1"
						>
							Ozgartirish
						</button>
						<button
							data-id="${item._id}"
							class="delete-me btn btn-danger btn-sm"
						>
							Ochirish
						</button>
					</div>
				</li>`;
}

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("delete-me")) {
		if (confirm("Aniq o'chirmoqchimisiz?")) {
			axios
				.post("/delete-item", {
					id: e.target.getAttribute("data-id"),
				})
				.then((res) => {
					e.target.parentElement.parentElement.remove();
				})
				.catch((err) => {
					console.log("Iltimos qaytadan harakat qiling");
				});
		}
	}

	if (e.target.classList.contains("edit-me")) {
		let userInput = prompt(
			"O'zgartirishni kiriting!",
			e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
		);
		if (userInput) {
			axios
				.post("/edit-item", {
					id: e.target.getAttribute("data-id"),
					newInput: userInput,
				})
				.then((response) => {
					e.target.parentElement.parentElement.querySelector(
						".item-text"
					).innerHTML = userInput;
				})
				.catch((err) => {
					console.log("Iltimos Qaytadan urinib koring");
				});
		}
	}
});

document.getElementById("clean-all").addEventListener("click", () => {
	axios
		.post("/delete-all", { delete_all: true })
		.then((res) => {
			alert(res.data.state);
			document.location.reload();
		})
		.catch((err) => {
			console.log(err);
		});
});
