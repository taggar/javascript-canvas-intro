(function () {
    var canvas = document.getElementById('canvas');
    var snapshot;
    var snapshotImage = new Image;

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', restoreCanvas, false);
        window.addEventListener('load', restoreCanvas, false);

        function resetCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }


        function restoreCanvas() {
            resetCanvas();
            if (localStorage.getItem('snapshot')) {
                snapshot = localStorage.getItem('snapshot');
                drawDataURIOnCanvas(snapshot, canvas);
            }
            console.log(snapshot);
        }

        restoreCanvas();
        canvas.focus();

        function saveCanvas() {
            snapshot = canvas.toDataURL('image/jpeg', 1.0);
            window.localStorage.setItem('snapshot', snapshot);
        }

        canvas.addEventListener('mousemove', yellowCircle);
        canvas.addEventListener('keydown', keyDownHandler, true);

        function yellowCircle(e) {
            console.log('Yellow circle, ');

            ctx.beginPath();
            ctx.fillStyle = 'yellow';
            ctx.arc(e.clientX, e.clientY, 50, 0, 2 * Math.PI);
            ctx.fill();
            saveCanvas();
        }

        function keyDownHandler(e) {
            console.log(e.keyCode);

            if (e.keyCode === 32) {
                ctx.fillStyle = "black";
                ctx.fillRect(100, 100, 200, 200);
                console.log(canvas.toDataURL('image/jpeg', 1.0));
                saveCanvas();
            }
        }

        function keyUpHandler() {

        }



        function drawStuff(snapshot) {
            // draw stuff
            // ctx.drawImage(snapshotImage, 0, 0);
            // snapshotImage.src = snapshot;
        }

    } else {
        // canvas-unsupported code here
    }

    function drawDataURIOnCanvas(strDataURI, canvas) {
        "use strict";
        var img = new window.Image();
        img.addEventListener("load", function () {
            canvas.getContext("2d").drawImage(img, 0, 0);
        });
        img.setAttribute("src", strDataURI);
    }

})();
