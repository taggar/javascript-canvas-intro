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

            setTimeout(function () {
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

            setTimeout(function () {
                var imageObj = new Image();
                let xPos = Math.floor(Math.random() * window.innerWidth);
                let yPos = Math.floor(Math.random() * window.innerHeight);

                imageObj.src = 'assets/becode-seal.png';

                imageObj.onload = function () {
                    ctx.drawImage(imageObj, xPos, yPos, 250, 250);  // DRAW THE IMAGE TO THE CANVAS.
                }

            }, 2000);

            setTimeout(function () {
                ctx.font = '50px serif';
                ctx.strokeStyle = 'green';
                ctx.fillStyle = 'orange';
                ctx.strokeText('Hello world', 50, 90);
                ctx.fillText('Hello world', 50, 90);
            }, 3000);

            setTimeout(function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);// do your drawing stuff here
            }, 4000);

            setTimeout(function () {
                ctx.beginPath();
                ctx.arc(100, 75, 50, 0, 2 * Math.PI);
                ctx.stroke();
            }, 5000);

            setTimeout(function () {
                setInterval(function () {
                    createRandomLine();
                }, 1000);
            }, 6000);

            setTimeout(function () {
                setInterval(function () {
                    createRandomLine();
                }, 10);
            }, 10000);

        }
    } else {
        // canvas-unsupported code here
    }

    function createRandomLine() {
        let xPos1 = Math.floor(Math.random() * window.innerWidth);
        let yPos1 = Math.floor(Math.random() * window.innerHeight);
        let xPos2 = Math.floor(Math.random() * window.innerWidth);
        let yPos2 = Math.floor(Math.random() * window.innerHeight);
        let rColour = Math.floor(Math.random() * 256);
        let gColour = Math.floor(Math.random() * 256);
        let bColour = Math.floor(Math.random() * 256);
        let alpha = Math.floor(Math.random() * 256);
        let lineWidth = Math.floor(Math.random() * 10);

        ctx.beginPath();
        ctx.fillStyle = `rgba(${rColour},${gColour},${bColour},${alpha})`;
        ctx.strokeStyle = `rgba(${rColour},${gColour},${bColour},${alpha})`;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(xPos1, yPos1);
        ctx.lineTo(xPos2, yPos2);
        ctx.fill();
        ctx.stroke();
    }


})();
