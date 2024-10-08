const animatedModal = {
    
    data() {
        return {
          msg: "Welcome to Your Vue.js App",
        enterAnimation:'bounceIn',
        exitAnimation:'flipOutX',
          animate: false,
          active: false,
          animationList: [
            "bounce",
            "flash",
            "flip",
            "headShake",
            "hinge",
            "jello",
            "pulse",
            "rubberBand",
            "shake",
            "swing",
            "tada",
            "wobble",
            "bounceIn",
            "bounceInDown",
            "bounceInLeft",
            "bounceInRight",
            "bounceInUp",
            "fadeIn",
            "fadeInDown",
            "fadeInDownBig",
            "fadeInLeft",
            "fadeInLeftBig",
            "fadeInRight",
            "fadeInRightBig",
            "fadeInUp",
            "fadeInUpBig",
            "flipInX",
            "flipInY",
            "lightSpeedIn",
            "rollIn",
            "rotateIn",
            "rotateInDownLeft",
            "rotateInDownRight",
            "rotateInUpLeft",
            "rotateInUpRight",
            "slideInDown",
            "slideInLeft",
            "slideInRight",
            "slideInUp",
            "zoomIn",
            "zoomInDown",
            "zoomInLeft",
            "zoomInRight",
            "zoomInUp",
            "bounceOut",
            "bounceOutDown",
            "bounceOutLeft",
            "bounceOutRight",
            "bounceOutUp",
            "fadeOut",
            "fadeOutDown",
            "fadeOutDownBig",
            "fadeOutLeft",
            "fadeOutLeftBig",
            "fadeOutRight",
            "fadeOutRightBig",
            "fadeOutUp",
            "fadeOutUpBig",
            "flipOutX",
            "flipOutY",
            "lightSpeedOut",
            "rollOut",
            "rotateOut",
            "rotateOutDownLeft",
            "rotateOutDownRight",
            "rotateOutUpLeft",
            "rotateOutUpRight",
            "slideOutDown",
            "slideOutLeft",
            "slideOutRight",
            "slideOutUp",
            "slideOutRight",
            "zoomOut",
            "zoomOutDown",
            "zoomOutLeft",
            "zoomOutRight",
            "zoomOutUp"
          ]
        };
      },
      methods: {
       isActive(path) {
     this.animate = path
     document.getElementById("mod").className = `modal-dialog ${path} animated`
     },
     close() {
    
     document.getElementById("mod").className = `modal-dialog ${this.exitAnimation} animated`
     },
      },
      computed: {
        enterClass() {
          return `animated ${this.enterAnimation}`;
        }
      }
   
}
  
  export default animatedModal