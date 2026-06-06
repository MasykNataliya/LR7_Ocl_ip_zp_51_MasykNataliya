const categoriesList = document.querySelectorAll("#categories .item");

console.log("Number of categories:", categoriesList.length);

categoriesList.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;

  console.log("Category:", title);
  console.log("Elements:", elementsCount);
});
