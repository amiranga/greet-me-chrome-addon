const defaultOptions = {
  name: "Stranger",
  frequency: 1,
  message:
    "This is just a reminder for you to Smile. You are a wonderful person",
};

function handleSubmit(e) {
  e.preventDefault();
  chrome.storage.sync.set({
    options: JSON.stringify({
      name: document.getElementById("addon-option-name").value,
      message: document.getElementById("addon-option-message").value,
    }),
  });
}

function constructOptions() {
  chrome.storage.sync.get(["options"], (data) => {
    const configs = data.options ? JSON.parse(data.options) : defaultOptions;
    const { name, frequency, message } = configs;

    document.getElementById("addon-option-name").value = name;
    document.getElementById("addon-option-message").value = message;

    const submitButton = document.getElementById(
      "addon-options-customize-button"
    );
    submitButton.addEventListener("click", handleSubmit);
  });
}

constructOptions();
