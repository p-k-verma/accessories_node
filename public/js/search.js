document.querySelector("#searchBox").addEventListener("input", async (e) => {
  if (e.target.value) {
    const res = await axios({
      method: "GET",
      url: `https://neeraj.onrender.com/api/v1/product/${e.target.value}`,
    });
    document.querySelector("body > table").innerHTML = res.data;
  } else {
    location.reload()
  }
});
