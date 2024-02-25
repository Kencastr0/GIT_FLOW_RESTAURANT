const contCards = document.querySelector(".content-cards")

const data = [
  {
    urlImg:
      "https://imgs.search.brave.com/8BNlOgXIz1PTPwAaNAxfRMfswk9sTTZtfkyn2TJ7VUQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGVsYXNh/YmFuYS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDkv/UHVudGEtZGUtQW5j/YS0yLnBuZz9maXQ9/MTA4MCwxMDgwJnNz/bD0x",
    name: "Punta de Anca",
    price: "28.000",
  },
  {
    urlImg:
      "https://imgs.search.brave.com/qca0HsVbRhpTQzZ17qmtzsgtGynCriG5EFZTBY2I6D0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcm92/ZWVkb3JkZXJlc3Rh/dXJhbnRlc2Vsc2Fs/dmFkb3IuZmlsZXMu/d29yZHByZXNzLmNv/bS8yMDIwLzA5L2Nv/cnRlcy1kZS1jYXJu/ZS5qcGc_dz02ODg",
    name: "Costillas BBQ",
    price: "25.000",
  },
  {
    urlImg:
      "https://imgs.search.brave.com/TDndpNW7afuel7kk-bsNPDVzq8YD9YJqc-WEDAMxCNY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9zYWxt/b24tdmVyZHVyYXMt/cGxhdG8tZWxsZS1n/b3VybWV0LTY1YzQ3/YTU1OGYyOTUuanBn/P2Nyb3A9MC43Mjd4/dzoxLjAweGg7MC4x/Nzh4dywwJnJlc2l6/ZT0zNjA6Kg",
  name:"Salmon en finas hierbas",
  price:"30.000"
  
    },
];

data.forEach((element)=>{
contCards.innerHTML += `
<div class="card">
          <div class="img">
            <div class="save">
              <svg
                class="svg"
                width="683"
                height="683"
                viewBox="0 0 683 683"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_993_25)">
                  <mask
                    id="mask0_993_25"
                    style="mask-type: luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="683"
                    height="683"
                  >
                    <path
                      d="M0 -0.00012207H682.667V682.667H0V-0.00012207Z"
                      fill="white"
                    ></path>
                  </mask>
                  <g mask="url(#mask0_993_25)">
                    <path
                      d="M148.535 19.9999C137.179 19.9999 126.256 24.5092 118.223 32.5532C110.188 40.5866 105.689 51.4799 105.689 62.8439V633.382C105.689 649.556 118.757 662.667 134.931 662.667H135.039C143.715 662.667 151.961 659.218 158.067 653.09C186.451 624.728 270.212 540.966 304.809 506.434C314.449 496.741 327.623 491.289 341.335 491.289C355.045 491.289 368.22 496.741 377.859 506.434C412.563 541.074 496.752 625.242 524.816 653.348C530.813 659.314 538.845 662.667 547.308 662.667C563.697 662.667 576.979 649.395 576.979 633.019V62.8439C576.979 51.4799 572.48 40.5866 564.447 32.5532C556.412 24.5092 545.489 19.9999 534.133 19.9999H148.535Z"
                      stroke="#CED8DE"
                      stroke-width="40"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_993_25">
                    <rect width="682.667" height="682.667" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
           
            </div>
               <img src="${element.urlImg}"/>
          </div>

          <div class="text">
            <p class="h3">${element.name}</p>
            <p class="p">$ ${element.price}</p>

            <div class="icon-box">
              
              Ordenar
            </div>
          </div>
        </div>
`;
})

