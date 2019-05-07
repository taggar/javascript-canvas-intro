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

            let step2 = setTimeout(function () {
                var imageObj = new Image();
                let xPos = Math.floor(Math.random() * window.innerWidth);
                let yPos = Math.floor(Math.random() * window.innerHeight);

                imageObj.src = 'assets/becode-seal.png';

                imageObj.onload = function () {
                    ctx.drawImage(imageObj, xPos, yPos, 250, 250);  // DRAW THE IMAGE TO THE CANVAS.
                }

            }, 2000);

            let step3 = setTimeout(function () {
                ctx.font = '50px serif';
                ctx.strokeStyle = 'green';
                ctx.fillStyle = 'orange';
                ctx.strokeText('Hello world', 50, 90);
                ctx.fillText('Hello world', 50, 90);
            }, 3000);

            let step4 = setTimeout(function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);// do your drawing stuff here
            }, 4000);


        }
    } else {
        // canvas-unsupported code here
    }



})();
