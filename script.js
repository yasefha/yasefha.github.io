const form = document.getElementById("quizForm");
const result = document.getElementById("result");
const retryBtn = document.getElementById("retryBtn");

const correctAnswers = {
  q1: "01/05/2025",
  q2: "yasef hatam",
  q3: "01/09/2002"
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userAnswers = {
    q1: document.getElementById("q1").value.trim(),
    q2: document.getElementById("q2").value.trim().toLowerCase(),
    q3: document.getElementById("q3").value.trim()
  };

  let allCorrect = true;

  if (userAnswers.q1 !== correctAnswers.q1) allCorrect = false;
  if (userAnswers.q2 !== correctAnswers.q2) allCorrect = false;
  if (userAnswers.q3 !== correctAnswers.q3) allCorrect = false;

  if (allCorrect) {
    result.innerHTML = `
      Selamat 01 yang ke 1 bulan ya sayanggg!<br><br>
      Terima kasih buat bapak dan ibu kamu yg telah bikin kamu, terutama ibu kamu yang udah lahirin kamu ke dunia.<br><br>
      Terima kasih juga buat kamu yg udah survive sampe sekarang dan akhirnya kita bisa kenal sampe jadi kaya sekarang.<br><br>
      Terima kasih buat semua perasaan dan kasih sayang kamu.<br><br>
      Semoga ada banyak hal - hal baik kedepannya buat kita yaaaaa. Iya gak weeee? Hahaahahaha.<br><br>
      I love u. Aku selalu bahagia bareng kamu &lt;3
    `;
    result.style.color = "green";
    retryBtn.style.display = "none";
  } else {
    result.textContent = "😥 Ada jawaban yang masih salah. Coba lagi ya!";
    result.style.color = "red";
    retryBtn.style.display = "inline-block";
  }
});

retryBtn.addEventListener("click", function () {
  result.textContent = "";
  retryBtn.style.display = "none";
});
