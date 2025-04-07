document.getElementById("currentYear").textContent=new Date().getFullYear();
document.getElementById("lastModified").textContent="Last Updates:" + document.lastModified;
const productArray=[
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select=document.getElementById("product");
productArray.forEach(product=> {
  const option=document.createElement("option");
  option.value=product.name;
  option.textContent=product.name;
  select.appendChild(option);
})

let count = localStorage.getItem("review-count");
if (count==1)
  {
    count=1;
  }
  else{
    count=parseInt(count)+1;
  }
localStorage.setItem("review-count", count);
document.getElementById("review-count").textContent=
`You have submitted ${count} review(s).`;