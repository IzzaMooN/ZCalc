function showTab(tabName) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(tabName).classList.add("active");
  document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add("active");
}

function append(value) {
  document.getElementById("expression").value += value;
}

function clearInput() {
  document.getElementById("expression").value = "";
  document.getElementById("calcResult").value = "";
}

function calculate() {
  try {
    let result = eval(document.getElementById("expression").value);
    document.getElementById("calcResult").value = result;
  } catch (e) {
    document.getElementById("calcResult").value = "Error!";
  }
}

function convert() {
  let value = parseFloat(document.getElementById("convValue").value);
  let unit = document.getElementById("convUnit").value;
  let result;

  if (unit === "g_to_kg") {
    result = value / 1000 + " kg";
  } else if (unit === "kg_to_g") {
    result = value * 1000 + " g";
  } else if (unit === "m_to_cm") {
    result = value * 100 + " cm";
  } else if (unit === "cm_to_m") {
    result = value / 100 + " m";
  } else {
    result = "Pilih unit yang valid!";
  }

  document.getElementById("convResult").value = result;
}
