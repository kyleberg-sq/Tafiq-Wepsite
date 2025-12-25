let price = 0

function loadBooking() {
  const params = new URLSearchParams(window.location.search)
  const doc = params.get("doc")
  price = parseInt(params.get("price"))
  document.getElementById("docName").innerText = "Booking Dr. " + doc
  calcTotal()
}

function calcTotal() {
  const h = document.getElementById("hours").value
  document.getElementById("total").innerText = h * price
}
