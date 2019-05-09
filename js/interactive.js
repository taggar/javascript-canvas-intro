(function () {
    var canvas = document.getElementById('canvas');
    var snapshot;
    var snapshotImage = new Image;

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        window.addEventListener('resize', restoreCanvas, false);
        window.addEventListener('load', restoreCanvas, false);
        window.addEventListener('beforeunload', saveCanvas);
        canvas.addEventListener('mousemove', yellowCircle);
        canvas.addEventListener('keydown', keyDownHandler, true);
        canvas.addEventListener('keyup', keyUpHandler, true);


        function resetCanvas() {
            // resize the canvas to fill browser window dynamically
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            canvas.focus();
        }


        function restoreCanvas() {
            resetCanvas();
            if (localStorage.getItem('snapshot')) {
                snapshot = localStorage.getItem('snapshot');
                drawDataURIOnCanvas(snapshot, canvas);
            }
            canvas.focus();
        }

        function saveCanvas() {
            console.log('Saving current state ...');
            snapshot = canvas.toDataURL('image/jpeg', 1.0);
            window.localStorage.setItem('snapshot', snapshot);
        }


        function yellowCircle(e) {
            ctx.beginPath();
            ctx.fillStyle = 'yellow';
            ctx.arc(e.clientX, e.clientY, 50, 0, 2 * Math.PI);
            ctx.fill();

            requestAnimationFrame(yellowCircle);
            canvas.focus();

        }

        function keyDownHandler(e) {
            console.log(e.keyCode);

            if (e.keyCode === 32) {
                console.log('Space key down');
                ctx.fillStyle = 'black';
                ctx.fillRect(100, 100, 200, 200);
            }
        }

        function keyUpHandler(e) {

            if (e.keyCode === 32) {
                console.log('Space key up');
                // remove the black box
            }
        }

    } else {
        // canvas-unsupported code here
    }

    function drawDataURIOnCanvas(strDataURI, canvas) {
        'use strict';
        var img = new window.Image();
        img.addEventListener('load', function () {
            canvas.getContext('2d').drawImage(img, 0, 0);
        });
        img.setAttribute('src', strDataURI);
    }

})();
