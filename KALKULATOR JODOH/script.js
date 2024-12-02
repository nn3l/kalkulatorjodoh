document.getElementById("start-button").addEventListener("click", () => {
  // Tampilkan form dan sembunyikan intro
  document.getElementById("intro-section").style.display = "none";
  document.getElementById("form-section").style.display = "block";
});

document.getElementById("calculate-button").addEventListener("click", () => {
  const yourName = document.getElementById("your-name").value.trim();
  const partnerName = document.getElementById("partner-name").value.trim();

  if (yourName === "" || partnerName === "") {
    alert("Harap isi kedua nama!");
    return;
  }

  // Hitung kecocokan (persentase random untuk simulasi)
  const compatibility = Math.floor(Math.random() * 101);

  // Tentukan kecocokan berdasarkan presentase
  let description = "";
  let message = "";

  if (compatibility >= 90) {
    description = "Soulmate";
    message =
      "Wow! Presentase kecocokan kalian sangat luar biasa, kemungkinan orang yang kamu cintai juga sangat mencintai kamu!";
  } else if (compatibility >= 70) {
    description = "Bulan dan Langit";
    message =
      "Kecocokan kalian sangat baik! Hubungan ini berpotensi berkembang jauh lebih dalam!";
  } else if (compatibility >= 50) {
    description = "wow kalian cocok";
    message =
      "Kecocokan kalian cukup baik! Mungkin ada beberapa tantangan, tetapi bisa saling melengkapi.";
  } else if (compatibility >= 30) {
    description = "Langit dan bumi";
    message =
      "Kecocokan kalian cukup rendah, tetapi cinta bisa berkembang seiring waktu!";
  } else {
    description = "Nt wak🗿";
    message =
      "Kecocokan kalian sedikit rendah. Mungkin kalian perlu saling memahami lebih dalam.";
  }

  // Tampilkan hasil
  document.getElementById("compatibility-description").textContent =
    description;
  document.getElementById("compatibility-message").textContent = message;
  document.getElementById(
    "compatibility-percentage"
  ).textContent = `${compatibility}%`;

  // Sembunyikan form dan tampilkan hasil
  document.getElementById("form-section").style.display = "none";
  document.getElementById("result-section").style.display = "block";
});

document.getElementById('reset-button').addEventListener('click', () => {
    // Reset semua input
    document.getElementById('your-name').value = '';
    document.getElementById('partner-name').value = '';
  
    // Tampilkan intro kembali
    document.getElementById('result-section').style.display = 'none';
    document.getElementById('intro-section').style.display = 'block';
  });