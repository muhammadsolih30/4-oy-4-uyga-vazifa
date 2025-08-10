function capitalizeWords(input) {
  if (!input) return "";
  const lower = input.toLowerCase();

  const tokens = lower.split(/(\s+)/);

  const capitalized = tokens.map((token) => {

    if (/^\s+$/.test(token)) return token;

    const idx = token.search(/\p{L}/u);
    if (idx === -1) return token;

    return (
      token.slice(0, idx) + token[idx].toUpperCase() + token.slice(idx + 1)
    );
  });

  return capitalized.join("");
}

const inputEl = document.getElementById("input");
const previewEl = document.getElementById("preview");
const convertBtn = document.getElementById("convert");
const clearBtn = document.getElementById("clear");
const copyBtn = document.getElementById("copy");

function renderPreview() {
  const val = inputEl.value;
  const out = capitalizeWords(val);
  previewEl.textContent = out;
  return out;
}

convertBtn.addEventListener("click", () => {
  const out = renderPreview();
  inputEl.value = out;
  previewEl.textContent = out;
});

clearBtn.addEventListener("click", () => {
  inputEl.value = "";
  previewEl.textContent = "";
  inputEl.focus();
});

copyBtn.addEventListener("click", async () => {
  const text = renderPreview();
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Nusxalandi!";
    setTimeout(() => (copyBtn.textContent = "Natijani nusxalash"), 1400);
  } catch (e) {
    alert("Clipboardga nusxalash imkoni yoʻq — matnni qoʻlda nusxalang.");
  }
});

inputEl.addEventListener("input", () => {
  previewEl.textContent = capitalizeWords(inputEl.value);
});

inputEl.value = "O'zbEkiston BuYuk davlaT";
previewEl.textContent = capitalizeWords(inputEl.value);
