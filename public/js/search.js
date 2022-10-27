document.querySelector("#searchBox").addEventListener("input", async (e) => {
  if (e.target.value) {
    const res = await axios({
      method: "GET",
      url: `http://127.0.0.1:7000/api/v1/product/${e.target.value}`,
    });
    document.querySelector("body > table").innerHTML = res.data;
  } else {
    location.reload()
  }
});
