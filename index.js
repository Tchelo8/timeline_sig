
alert("Bonjour Messieurs , Il se pourrait que mon code Javascript ne fonctionne pas correctement sur votre machine. Au cas ou le défilement des box ne fonctionne pas c'est qu'il n'a pas réagit. Merci !!!");
const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = TweenMax.from(allBoxes[i], 0.5, {opacity: 0, y: -50, ease:Power1.easeOut});
            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: false
            })
            .setTween(tween)
            //.addIndicators()
            .addTo(controller)
        }
    }
});
