document.querySelector(".submitbtn").addEventListener("click", async (e) => {
  e.preventDefault();

  console.log("im clicked", document.getElementById("input_file").files[0]);

  const form = new FormData();
  form.append('excel', document.getElementById("input_file").files[0]);
  console.log('form is here',form.entries());

  const res = await axios({
    method: "POST",
    url: "http://127.0.0.1:7000/api/v1/product",
    data: form
  });
  console.log(res);
  if (res.data.status === "success") {
    alert("File has been uploaded")
    window.location.replace("http://localhost:7000")
  }
});
