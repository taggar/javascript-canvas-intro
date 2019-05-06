(function () {
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff();
        }
        resizeCanvas();

        function drawStuff() {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);// do your drawing stuff here

            let step1 = setTimeout(function () {
                ctx.beginPath();
                ctx.fillStyle = "red";
                ctx.strokeStyle = "red";
                ctx.lineWidth = "5";
                ctx.moveTo(15, 60);
                ctx.lineTo(50, 150);
                // ctx.closePath(); // redundant as fill als closes path
                ctx.fill();
                ctx.stroke();
            }, 1000);
        }

    } else {
        // canvas-unsupported code here
    }



})();
