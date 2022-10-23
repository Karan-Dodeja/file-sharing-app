const dropZone = document.querySelector(".drop-zone");
const fileinput = document.querySelector("#fileinput");
const browserBtn = document.querySelector(".browserBtn");

const host = "https://innshare.herokuapp.com/";
const uploadURL = `${host}api/files`;

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    if(!dropZone.classList.contains("dragged")) {
        dropZone.classList.add("dragged");
    }
});

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragged");
});

dropZone.addEventListener("drop", () => {
    e.preventDefault();
    dropZone.classList.remove("dragged");
    const files = e.dataTransfer.files;
    if(files.length) {
        fileinput.files = files;
    }
});

fileinput.addEventListener("change", () => {
    uploadFile();
})

browserBtn.addEventListener("click", () => {
    fileinput.click();
})

const uploadFile = () => {
    const file = fileinput.files[0];
    const formData = new FormData();
    formData.append("myfile", file);
 
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    };

    xhr.upload.onprogress = updateProgress();

    xhr.open("POST", uploadURL);
    xhr.send(formData);

}

const updateProgress = (e) => {
console.log(e);
}