const defaultOptions = {
  name: "Stranger",
  frequency: 1,
  message:
    "This is just a reminder for you to Smile. You are a wonderful person",
};

function displayPopup() {
  const wrapper = document.createElement("div");
  wrapper.setAttribute(
    "style",
    `position: absolute;
  left: 0px;
  top: 0px;
  background-color: rgb(255, 255, 255);
  opacity: 0.5;
  z-index: 2000;
  height: 1083px;
  width: 100%;`
  );

  const modalDialog = document.createElement("div");
  modalDialog.setAttribute(
    "style",
    `position: fixed;
  width: 350px;
  border: 1px solid rgb(51, 102, 153);
  padding: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 50px 10px #0ff;
  z-index: 2001;
  overflow: visible;
  text-align: center;
  top: 149px;
  left: 497px;`
  );

  chrome.storage.sync.get(["options"], (data) => {
    const configs = data.options ? JSON.parse(data.options) : defaultOptions;
    const { name, message } = configs;

    modalDialog.innerHTML = `<div style='text-align:center'><div><strong>Hi ${name}!!!</strong></div><div><i>${message}.</i></div></div>`;
    modalDialog.appendChild(modalDialogCloseButton);
  });

  const modalDialogCloseButton = document.createElement("span");
  modalDialogCloseButton.setAttribute(
    "style",
    `position: absolute;
  right: -5px;
  top: -5px;
  border: 1px solid;
  display: block;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 17px;
  font-family: monospace;
  cursor: pointer;`
  );
  modalDialogCloseButton.innerHTML = "&times";
  modalDialogCloseButton.addEventListener("click", async () => {
    document.body.removeChild(modalDialog);
  });

  document.body.appendChild(modalDialog);
  document.body.appendChild(modalDialog);
}

function tick() {
  var mins = new Date().getMinutes();
  if (mins == "00") {
    displayPopup();
  }
}

setInterval(tick, 30000);
