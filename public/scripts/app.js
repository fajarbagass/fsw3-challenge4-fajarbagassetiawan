const filterDriver = () => {
  let selectDriver = document.getElementById('select-driver').value;
  console.log('input Tipe Driver:', selectDriver);
  return selectDriver;
}

const filterDate = () => {
  let date = document.getElementById('date').value;
  console.log('input Tanggal:', date);
  return date;
}

const filterTime = () => {
  let time = document.getElementById('time').value;
  console.log('input Waktu Jemput/Ambil:', time);
  return time;
}

const filterCapacity = () => {
    let capacity = document.getElementById('capacity').valueAsNumber;
    console.log('input Jumlah Penumpang:', capacity);
    return capacity;
  }
  
const filterBtn = document.getElementById('filter-btn')
filterBtn.addEventListener('click', (e) => {
  filterCar(
    // filterDriver(),
    // filterDate(),
    // filterTime(),
    filterCapacity()
    )
  e.preventDefault    
})
  