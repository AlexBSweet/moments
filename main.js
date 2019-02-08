const bodyTag = document.querySelector('body')
const imageContainer = document.querySelector('div.lightbox-images')
const lightBoxItem = document.querySelectorAll('.lightbox-item')
const images = imageContainer.querySelectorAll('img')
const lightBox = document.querySelector('.lightbox')
const lightBoxContent = lightBox.querySelector('.lightbox-content')
const descriptionTag = lightBox.querySelector('div.description')
const lightBoxInner = document.querySelector('.lightbox-inner')
const lightBoxLeft = document.querySelector('div.lightbox-left')
const lightBoxRight = document.querySelector('div.lightbox-right')
const closeTag = document.querySelector('div.close')
const collectionTitle = document.querySelector('div.collection-title')
const pageTitle = document.querySelector('h1.title')
const navTag = document.querySelector('nav')
const infoTag = document.querySelector('div.info')
const hoverImage = document.querySelector('div.hover-images')
const hoverImages = document.querySelectorAll('.hover-images')




let captionNumber = 0

images.forEach(image=>{
    image.addEventListener('click', (event)=>{

            
            const arrayName = image.getAttribute('data-array')
            
            const sources = Images[arrayName]
            const captionSources = captions[arrayName]

            
            

            sources.map(src=>{

                
                const index = sources.indexOf(src)

                const newDiv = document.createElement('div')
                lightBoxInner.appendChild(newDiv)
                newDiv.classList.add('container-div')
                newDiv.setAttribute('data-num', `${index}`)
                
                const newImage = new Image();
                newImage.src = src
                newDiv.appendChild(newImage)

                newDiv.innerHTML += `<p class="caption"></p>`
                
                
    
                let num = newDiv.getAttribute('data-num') 

                
                const captionTags = newDiv.querySelectorAll('.caption')
                console.log(num)
                
                captionTags.forEach(tag=>{
                    tag.innerHTML = captionSources[num]
                })
                
                
            })

  
                    
                
      


            lightBox.classList.add('open')
            lightBoxLeft.classList.add('open')
            lightBoxRight.classList.add('open')
            closeTag.classList.add('open')

            if (lightBox.className == 'lightbox open'){
                pageTitle.classList.add('none')
                document.querySelector('nav.info-icon').classList.add('none')
            } 




            const descNumber = image.getAttribute('data-desc')
            const titleNumber = image.getAttribute('data-title')

            const captionSource = captions[arrayName]
            descriptionTag.innerHTML = `
            <h3>${titleList[titleNumber]}</h3>
            <p>${captionSource[0]}</p>
            `

    })

    const changeTitle = image.getAttribute('data-title-change')
    image.addEventListener('mouseenter', ()=>{
        pageTitle.innerHTML = changeTitle

       

    })

    image.addEventListener('mouseleave', ()=>{
        pageTitle.innerHTML = 'Moments'
    })


})



let currentSlide = 0


closeTag.addEventListener('click', function(event){
    

    currentSlide = 0
    lightBox.classList.remove('open')
    lightBoxInner.innerHTML = ""
    lightBoxInner.style.transform = ''
    lightBoxLeft.classList.remove('open')
    lightBoxRight.classList.remove('open')
    closeTag.classList.remove('open')
    pageTitle.classList.remove('none')
    document.querySelector('nav.info-icon').classList.remove('none')

})








lightBoxRight.addEventListener('click', ()=>{
    next()
})


lightBoxLeft.addEventListener('click', ()=>{
    prev()
})

const next = function(){
    captionNumber = captionNumber + 1
    const length = lightBoxInner.getElementsByTagName('div').length 
    currentSlide = currentSlide - 1 *90
    if (currentSlide <= (length*-90) ){
        currentSlide = 0
    }
    lightBoxInner.style.transform = `translateX(${currentSlide}vw)`
    
}

const prev = function (){
    captionNumber = captionNumber - 1
    currentSlide = currentSlide + 1 *90
    const length = lightBoxInner.getElementsByTagName('div').length - 1
    
    if(currentSlide > 0){
        currentSlide = (length * -90)
    }
    lightBoxInner.style.transform = `translateX(${currentSlide}vw)`
}


// background color change

images.forEach(image=>{
    const bgColor = image.getAttribute('data-bg-color')
    
    image.addEventListener('mouseenter', ()=>[
        bodyTag.style.backgroundColor = bgColor
    ])
    image.addEventListener('mouseleave', ()=>[
        bodyTag.style.backgroundColor = '#000'
    ])
    
})



navTag.addEventListener('click', ()=>{
    infoTag.classList.toggle('open')
})





lightBoxItem.forEach(item=>{

item.addEventListener('mouseover', ()=>{
    hoverImages.forEach(image=>{

        const x = (Math.random()*150)-75
        const y = (Math.random()*150)-75

        image.style.transform = `translate(${x}px, ${y}px)`
    })
})

})













const contentTag = document.querySelector('section.content')


const containerWidth = document.getElementById("content").offsetWidth

bodyTag.style.height = containerWidth + 'px'

document.addEventListener('scroll', ()=>{

    const pixels = window.pageYOffset * -1

    contentTag.style.left = pixels + 'px'

})
















