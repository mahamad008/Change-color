const refreshbtn =document.querySelector(".refresh-btn")
const continer =document.querySelector(".continer")
const maxplaetteboxes =32

const generaretPalte =()=>{
    continer.innerHTML ='';
    for(let i =0; i<maxplaetteboxes ; i++){
        let randomeHex =Math.floor(Math.random() * 0xffffff).toString(16)
        randomeHex =`#${randomeHex.padStart(6,"0")}`;
        
    const Color =document.createElement('li')
    Color.classList.add('color')
    Color.innerHTML =` <div class="rect-box" style ="background:${randomeHex}"></div>
    <span class="hex-value">${randomeHex}</span>`;
    
    
    Color.addEventListener("click",()=>copyColor(Color,randomeHex));
    continer.appendChild(Color)
    }

}
generaretPalte()


refreshbtn.addEventListener('click',generaretPalte)
