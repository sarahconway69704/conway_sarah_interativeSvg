(() => {

    const popOver = document.querySelector('.popover');
    mattes = document.querySelector('.solids');
    const infoButton = document.querySelectorAll('.info');
    shimmers = document.querySelector('.sparkle');
    
    const hmatte1 = document.getElementById("m-top-left");
    const hmatte2 = document.getElementById("m-top-right");
    const hmatte3 = document.getElementById("m-mid-left");
    const hmatte4 = document.getElementById("m-mid-right");
    const hmatte5 = document.getElementById("m-bot-mid");

    const hshimmer1 = document.getElementById("s-top-mid");
    const hshimmer2 = document.getElementById("s-mid-mid");
    const hshimmer3 = document.getElementById("s-bot-left");
    const hshimmer4 = document.getElementById("s-bot-right");

    const hudaLocations = 
    [
      {
        hmatte1: { topx: 100, topy: 100},
        hmatte2: { topx: 300, topy: 300},
        hmatte3: { topx: 400, topy: 400},
        hmatte4: { topx: 500, topy: 500},
        hmatte5: { topx: 600, topy: 600},
      }, 

      {
        hshimmer1: { topx: 100, topy: 100},
        hshimmer2: { topx: 300, topy: 300},
        hshimmer3: { topx: 400, topy: 400},
        hshimmer4: { topx: 500, topy: 500},
      }
    ]


    function buildPopover(makeup_stats, el) {
      popOver.querySelector(".image-palette").src = `images/${makeup_stats.imagepalette}`;
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

  
      popOver.addEventListener("click", toggle),
      infoButton.forEach(button => button.addEventListener("click", fetchData)),
      document.getElementById("mats1").addEventListener("mouseover", mouseOver),
      document.getElementById("mats1").addEventListener("mouseout", mouseOut),
      document.getElementById("shim1").addEventListener("mouseover", mouseOver2),
      document.getElementById("shim1").addEventListener("mouseout", mouseOut2);

})();