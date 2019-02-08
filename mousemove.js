


document.addEventListener('mousemove', (event)=>{
    const x = event.pageX
    const y = event.clientY
    
    const midX = window.innerWidth / 2
    const midY = window.innerHeight / 2
    
    const diffX = midX - x
    const diffY = midY - y
    
    const transY = diffY / 40
    const transX = diffX / 40
    
    const title = document.querySelector('h1.title')
    const images = document.querySelectorAll('.lightbox-images div')
    const collectionTitle = document.querySelectorAll('.collection-title')

    
    
    images.forEach(image=>{
        image.style.transform = `translate(${transX}px, ${transY}px)`
    })
    collectionTitle.forEach(title=>{
        title.style.transform = `translate(${transX}px, ${transY}px)`
        
    })
 }) 