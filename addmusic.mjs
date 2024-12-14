export function addMusic() {
  const videos = [];

  const input = document.querySelector("input[type=file].add-songs__input");
  const video = document.querySelector("video");

  const songs = document.querySelector(".songs");

  input.onchange = (e) => {
    // console.log(e.target.files);
    for (let file of e.target.files) {
      const p = document.createElement("p");

      p.innerText = file.name;
      const reader = new FileReader();
      p.onclick = () => {
        video.src = window.URL.createObjectURL(file);

        p.classList.toggle("playing");
      };
      songs.append(p);

      // reader.readAsDataURL(file);
      // reader.onload = (e) => {
      //   p.onclick = () => {
      //     video.src = e.target.result;

      //     p.classList.toggle("playing");
      //   };
      //   songs.append(p);
      // };
    }
  };
  const button = document.querySelector(".add-songs__btn");
  button.addEventListener("click", () => {
    input.click();
  });
}
