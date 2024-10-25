// 9 y 10
var pelotas = [document.getElementById("pelota"), document.getElementById("pelota2"), document.getElementById("pelota3")];

pelotas.forEach(function(pelota) {
    pelota.onmousedown = function(event) {
        let posX = event.clientX - pelota.getBoundingClientRect().left;
        let posY = event.clientY - pelota.getBoundingClientRect().top;

        pelota.style.position = 'absolute';
        pelota.style.zIndex = 1000;
        document.body.append(pelota);

        mover(event.pageX, event.pageY);

        function mover(pageX, pageY) {
            pelota.style.left = pageX - posX + 'px';
            pelota.style.top = pageY - posY + 'px';
        }

        function onMouseMove(event) {
            mover(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        pelota.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            pelota.onmouseup = null;
        };
    };

    pelota.ondragstart = function() {
        return false;
    };
});