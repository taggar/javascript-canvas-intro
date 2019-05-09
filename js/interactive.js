(function () {
    var canvas1 = document.getElementById('canvas1');
    var canvas2 = document.getElementById('canvas2');
    var canvas3 = document.getElementById('canvas3');
    var canvases = document.querySelectorAll('canvas');

    var snapshot;
    var snapshotImage = new Image;
    var text = '';

    if (canvas1.getContext) {

        // if we have support for canvas then ... 
        resetCanvas(canvas1);
        resetCanvas(canvas2);
        resetCanvas(canvas3);
        window.addEventListener('beforeunload', saveCanvas);
        window.addEventListener('resize', restoreCanvas);
        window.addEventListener('load', restoreCanvas);
        window.addEventListener('keydown', keyDownHandler);
        window.addEventListener('keyup', keyUpHandler);
        window.addEventListener('mousemove', yellowCircle);

    } else {

        // canvas-unsupported code here

    }

    function yellowCircle(e) {
        let canvas = canvas1;
        let ctx = canvas.getContext('2d');
        //console.log('!');
        ctx.fillStyle = 'yellow';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 50, 0, 2 * Math.PI);
        ctx.fill();
        //requestAnimationFrame(yellowCircle);
    }

    function keyDownHandler(e) {
        console.log(e.keyCode);
        if (e.keyCode === 32) {
            let canvas = canvas2;
            let ctx = canvas.getContext('2d');
            console.log('Space key down');
            ctx.fillStyle = 'red';
            ctx.fillRect(100, 100, 200, 200);
        } else {
            let canvas = canvas3;
            let ctx = canvas.getContext('2d');
            text += e.key;
            console.log(text);
            ctx.font = '50px serif';
            ctx.strokeStyle = 'green';
            ctx.fillStyle = 'orange';
            ctx.strokeText(text, 50, 90);
            ctx.fillText(text, 50, 90);
        }

    }

    function keyUpHandler(e) {
        if (e.keyCode === 32) {
            let canvas = canvas2;
            let ctx = canvas.getContext('2d');
            console.log('Space key up');
            // remove the black box
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    function resetCanvas(canvas) {
        // resize the canvas to fill browser window dynamically
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(255,255,255,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }


    function restoreCanvas() {
        for (let canvas of canvases) {
            resetCanvas(canvas);
            let id = canvas.getAttribute('id');
            if (localStorage.getItem(`${id}-snapshot`)) {
                snapshot = localStorage.getItem(`${id}-snapshot`);
                drawDataURIOnCanvas(snapshot, canvas);
            }
        }
    }

    function saveCanvas() {
        for (let canvas of canvases) {
            let id = canvas.getAttribute('id');
            console.log(`Saving current state for ${id} ...`);
            window.localStorage.setItem(`${id}-snapshot`, canvas.toDataURL('image/png', 1.0));
        }
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
