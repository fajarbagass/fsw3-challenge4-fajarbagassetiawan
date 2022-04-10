var allCar = null;

const getAllcar = () => {
	fetch('/getcar')
	.then((response) => response.json())
	.then((hasil) => {
	    const card = document.getElementById('cars-output');
        for (let i = 0; i < hasil.length; i++) {
            const car = document.createElement('div');
			car.className = "car";
            car.innerHTML = `<div class="card mx-3 mb-3">
								<img src="${hasil[i].image}" class="card-img-top" alt="..." style="height:250px; widht: 100px;">
								<div class="card-body p-4">
									<h5>${hasil[i].manufacture}</h5>
									<h5>Rp ${hasil[i].rentPerDay} / hari</h5>
									<p class="text-cars">${hasil[i].description}</p>
									<div class="user">
										<img src="./img/fi_users.svg" alt="fi_users">
										<label class="text-cars">${hasil[i].capacity}</label>
									</div>
									<div class="setting">
										<img src="./img/fi_settings.svg" alt="fi_settings">
										<label class="text-cars">${hasil[i].transmission}</label>
									</div>
									<div class="tahun">
										<img src="./img/fi_calendar.svg" alt="fi_calendar">
										<label class="text-cars">${hasil[i].year}</label>
									</div>
										<button type="button" class="button button4 mt-3">Pilih Mobil</button>
								</div>
							</div>`;
            card.appendChild(car);
        }
        allCar = hasil;
		card.innerHTML = '';
    })
}
getAllcar();

// filter capacity = jumlah penumpang
const filterCar = (capacity) => {
    let newFilter = allCar.filter(car =>
        {
			return car.capacity >= capacity;
        }
    );
    console.log(newFilter);
    const card = document.getElementById('cars-output');
    card.innerHTML = '';
    newFilter.forEach((element) => {
    	const car1 = document.createElement('div');
		car1.innerHTML =`<div class="card mx-3 mb-3">
							<img src="${element.image}" class="card-img-top" alt="..." style="height:250px; widht: 100px;">
							<div class="card-body p-4">
								<h5>${element.manufacture}</h5>
								<h5>Rp ${element.rentPerDay} / hari</h5>
								<p class="text-cars">${element.description}</p>
								<div class="user">
									<img src="./img/fi_users.svg" alt="fi_users">
									<label class="text-cars">${element.capacity}</label>
								</div>
								<div class="setting">
									<img src="./img/fi_settings.svg" alt="fi_settings">
									<label class="text-cars">${element.transmission}</label>
								</div>
								<div class="tahun">
									<img src="./img/fi_calendar.svg" alt="fi_calendar">
									<label class="text-cars">${element.year}</label>
								</div>
									<button type="button" class="button button4 mt-3">Pilih Mobil</button>
							</div>
						</div>`;
        card.appendChild(car1);
    });
}