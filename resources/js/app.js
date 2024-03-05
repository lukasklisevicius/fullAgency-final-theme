// Navigation toggle
window.addEventListener('load', function () {
      let main_navigation = document.querySelector('#primary-menu');
      document.querySelector('#primary-menu-toggle').addEventListener('click', function (e) {
            e.preventDefault();
            main_navigation.classList.toggle('hidden');
      });
      let links = this.document.querySelectorAll('.menu-item');
      links.forEach(link =>{
            link.addEventListener('click',()=>{
                  main_navigation.classList.add('hidden')
            })
      })


});


window.addEventListener('load',()=>{

      const nav = document.getElementById('sticky')
const videoD = document.getElementById('videoD')
const videoM = document.getElementById('videoM')
const menu = document.getElementById('full-menu')
const menuItems = document.querySelectorAll('.full-menu-item')
const menuLogos = document.querySelectorAll('.menu-logo')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const contactItems = document.querySelectorAll('.contact-item')
const projectsVideos = document.querySelectorAll('.project-video')
const navItems = document.querySelectorAll('.menu-item')

function callbackFunction(entries){
      entries.forEach(entry => {
            if(entry.isIntersecting){
                        // if(entry.target.classList.contains('menu-item')){
                        //       entry.target.classList.add('appear-nav')
                        //       observer.unobserve(entry.target)
                        // }

                        if(entry.target.id === "videoD"){
                              entry.target.classList.add('appear')
                              entry.target.play()
                        }
                        if(entry.target.id === "videoM"){
                              entry.target.classList.add('appear')
                              entry.target.play()
                        }

                        if(entry.target.id === "full-menu"){
                              entry.target.classList.add('appear-from-bottom')
                              observer.unobserve(entry.target)
                        }
                        if(entry.target.classList.contains('full-menu-item')){
                              entry.target.classList.add('appear-from-bottom')
                              observer.unobserve(entry.target)
                        }
                        if(entry.target.classList.contains('menu-logo')){
                              entry.target.classList.add('appear-from-bottom')
                              observer.unobserve(entry.target)
                        }

                        if(entry.target.id === "projects"){
                              entry.target.classList.add('appear-from-right')
                              observer.unobserve(entry.target)
                        }
                        if(entry.target.id === "contact"){
                              entry.target.classList.add('appear-from-bottom')
                              observer.unobserve(entry.target)
                        }
                        if(entry.target.classList.contains('contact-item')){
                              entry.target.classList.add('appear-from-bottom')
                              observer.unobserve(entry.target)
                        }
                  
                
            }
            if(!entry.isIntersecting){
                  if(entry.target.id === "videoD"){
                        entry.target.pause()
                  }
                  if(entry.target.id === "videoM"){
                        entry.target.pause()
                  }
            }
            
      });
}

function callbackFunction2(entries){
      entries.forEach(entry => {
            if(entry.isIntersecting){

                  if(entry.intersectionRatio == 1){
                        if(entry.target.classList.contains('project-video')){
                              entry.target.play()
                        }            
                  }    
            }
            if(!entry.isIntersecting){

                  if(entry.intersectionRatio == 1){
                        if(entry.target.classList.contains('project-video')){
                              entry.target.pause()
                        }            
                  }    
            }
            
      });
}

const options = {
      rootMargin:'0px',
      threshold:0.2

}
const options2 = {
      rootMargin:'0px',
      threshold:1

}

const observer = new IntersectionObserver(
      callbackFunction,
      options
)
const observer2 = new IntersectionObserver(
      callbackFunction2,
      options2
)



// observer.observe(nav)
observer.observe(videoD)
observer.observe(videoM)
observer.observe(menu)

observer.observe(projects)
observer.observe(contact)
menuItems.forEach((i)=>{
      observer.observe(i)
})
menuLogos.forEach((i)=>{
      observer.observe(i)
})
contactItems.forEach((i)=>{
      observer.observe(i)
})
projectsVideos.forEach((i)=>{
      observer2.observe(i)
})
navItems.forEach((i)=>{
      observer.observe(i)
})
})



class Slideshow {
      constructor(galleryId) {
        this.galleryId = galleryId;
        this.initSlides();
        this.initSlideshow();
      }
    
      initSlides() {
        this.container = $(`[data-slideshow="${this.galleryId}"]`);
        this.slides = this.container.find('img');
        this.slides.each((idx, slide) => $(slide).attr('data-slide', idx));
      }
    
      initSlideshow() {
        this.imagesLoaded = 0;
        this.currentIndex = 0;
        this.setNextSlide();
        this.slides.each((idx, slide) => {
          $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
        });
      }
    
      loadImage() {
        this.imagesLoaded++;
        if (this.imagesLoaded >= this.slides.length) { this.playSlideshow() }
      }
    
      playSlideshow() {
        this.slideshow = window.setInterval(() => { this.performSlide() }, 3500);
      }
    
      performSlide() {
        if (this.prevSlide) { this.prevSlide.removeClass('prev fade-out') }
    
        this.nextSlide.removeClass('next');
        this.prevSlide = this.nextSlide;
        this.prevSlide.addClass('prev');
    
        this.currentIndex++;
        if (this.currentIndex >= this.slides.length) { this.currentIndex = 0 }
    
        this.setNextSlide();
    
        this.prevSlide.addClass('fade-out');
      }
    
      setNextSlide() {
        this.nextSlide = this.container.find(`[data-slide="${this.currentIndex}"]`).first();
        this.nextSlide.addClass('next');
      }
    }
    
    $(document).ready(function() {
      // Inicializuojame skaidrių rodymą kiekvienai galerijai su unikaliu ID
      $('[data-slideshow]').each(function() {
        new Slideshow($(this).data('slideshow'));
      });
    });
