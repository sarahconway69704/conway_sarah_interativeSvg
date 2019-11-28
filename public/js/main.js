(() => {

    const infoButton = document.querySelectorAll('.info');
    popOver = document.querySelector('.popover');
    mattes = document.querySelector('.solids');
    shimmers = document.querySelector('.sparkle');



    function buildPopover(makeup_stats, el) {
        popOver.querySelector(".company-name").textContent = `Company Name: ${makeup_stats.company_name}`;
        popOver.querySelector(".palette-name").textContent = `Palette Name: ${makeup_stats.palette_name}`;
        popOver.querySelector(".colours").textContent = `Colours: ${makeup_stats.colours}`;
        popOver.querySelector(".mattes").textContent = `Mattes: ${makeup_stats.mattes}`;
        popOver.querySelector(".shimmers").textContent = `Shimmers: ${makeup_stats.shimmers}`;
        popOver.querySelector(".reviews").textContent = `Reviews: ${makeup_stats.reviews}`;
        popOver.querySelector(".five-stars").textContent = `5 Stars: ${makeup_stats.fivestars}`;
        popOver.querySelector(".four-stars").textContent = `4 Stars: ${makeup_stats.fourstars}`;
        popOver.querySelector(".three-stars").textContent = `3 Stars: ${makeup_stats.threestars}`;
        popOver.querySelector(".two-stars").textContent = `2 Stars: ${makeup_stats.twostars}`;
        popOver.querySelector(".one-star").textContent = `1 Star: ${makeup_stats.onestar}`;
        popOver.querySelector(".retail-price").textContent = `Retail Price: ${makeup_stats.retailprice}`;
        popOver.querySelector(".avg-rating").textContent = `Avg. Rating: ${makeup_stats.avgrating}`;
        popOver.querySelector(".image-palette").src = `images/${makeup_stats.imagepalette}`;

        popOver.classList.add('show-popover');
       
        el.appendChild(popOver);
      }
    
    function fetchData() {
        let targetEl = this, 
          url = `/makeup_db/${this.dataset.target}`;
      
            fetch(url)
            .then(res => res.json())
            .then(data => {
              console.log(data);
              buildPopover(data, targetEl);
            })
            .catch((err) => console.log(err));
      }


      function toggle() {
       popOver.classList.add('close');
       
     }

 

function mouseOver() {
  mattes.classList.add('show-solids');
}

function mouseOut() {
  mattes.classList.remove('show-solids');
}

function mouseOver2() {
  shimmers.classList.add('show-sparkle');
}

function mouseOut2() {
  shimmers.classList.remove('show-sparkle');
}

  

      infoButton.forEach(button => button.addEventListener("click", fetchData));
      popOver.addEventListener("click", toggle);
      document.getElementById("mats1").addEventListener("mouseover", mouseOver);
      document.getElementById("mats1").addEventListener("mouseout", mouseOut);
      document.getElementById("shim1").addEventListener("mouseover", mouseOver2);
      document.getElementById("shim1").addEventListener("mouseout", mouseOut2);

})();