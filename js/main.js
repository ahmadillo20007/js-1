// let elNavList = document.querySelector('.nav__list');
// let elHeroInner = document.querySelector('.hero__inner');
// let elLengSel = document.querySelector('.lang__select')
// let elLangOpt = document.querySelectorAll('.len__opt')

// console.log(data.hero);

// function etitLangeage(leng){
//     window.localStorage.setItem('long', leng)
//     elHeroInner.innerHTML = ''
//     elNavList.innerHTML = ''

//     data.nav.map((item) => {
       
//         let newLI = document.createElement('li')
//         newLI.textContent = item[`title${leng}`]
//         elNavList.appendChild(newLI)
//       })
      
//       let newP = document.createElement('b');
//       newP.textContent = data.hero[0][`title${leng}`]
//       elHeroInner.appendChild(newP);
      
//       let newH2 = document.createElement('h2');
//       newH2.textContent = data.hero[1][`title${leng}`]
//       elHeroInner.appendChild(newH2);
//       let newA = document.createElement('a');
//       newA.textContent = data.hero[2][`title${leng}`]
//       newA.href = '#'
//       elHeroInner.appendChild(newA);
// }
// let logalLong = window.localStorage.getItem('long')
// if(logalLong){
//     etitLangeage(logalLong )
// }else{
//     etitLangeage('UZ')
// }

// elLengSel.addEventListener('change',(e)=>{

//     etitLangeage(e.target.value)

// })
// elLangOpt.forEach((item)=>{
//    (item.value);
// if(logalLong == item.value){
//   item.setAttribute('selected', true)
// }
// })





