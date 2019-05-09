(function () {
    const canvas1 = document.getElementById('canvas1');
    const canvas2 = document.getElementById('canvas2');
    const canvas3 = document.getElementById('canvas3');
    const canvases = document.querySelectorAll('canvas');

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
        window.addEventListener('keypress', keyPressHandler);
        window.addEventListener('keyup', keyUpHandler);
        window.addEventListener('mousemove', yellowCircle);
        document.querySelector('button').addEventListener('click', wipeSlate);

    } else {

        // canvas-unsupported code here

    }

    // Draw a yellow circle and make it follow mouse movement
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

    // If Space is pressed, draw a black box, otherwise add text
    function keyPressHandler(e) {
        console.log(e.code);
        if (e.code === 'Space') {
            let canvas = canvas2;
            let ctx = canvas.getContext('2d');
            console.log('Space key down');
            ctx.fillStyle = 'black';
            ctx.fillRect(100, 100, 200, 200);
        } else {
            let canvas = canvas3;
            let ctx = canvas.getContext('2d');
            if (e.code != 'undefined') {
                text += e.key;
                console.log(text);
                ctx.font = '50px serif';
                ctx.strokeStyle = 'green';
                ctx.fillStyle = 'orange';
                ctx.strokeText(text, 50, 90);
                ctx.fillText(text, 50, 90);
            }
        }
    }

    // When we release space, the black box should disappear, i.e. we clear the layer
    function keyUpHandler(e) {
        if (e.code === 'Space') {
            let canvas = canvas2;
            let ctx = canvas.getContext('2d');
            console.log('Space key up');
            // remove the black box
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    // To reset a canvas, we redraw it, making sure the backgrund is transparent so lower layers can be seen
    function resetCanvas(canvas) {
        // resize the canvas to fill browser window dynamically
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(255,255,255,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // To restore a canvas to its saved state, we first reset it and then read the imagedata from localstorage and redraw it
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

    // To save a canvas' state, we save its imagedata to localstorage
    function saveCanvas() {
        for (let canvas of canvases) {
            let id = canvas.getAttribute('id');
            console.log(`Saving current state for ${id} ...`);
            window.localStorage.setItem(`${id}-snapshot`, canvas.toDataURL('image/png', 1.0));
        }
    }

    // Read the imagedata for a canvas from localstorage and redraw it
    function drawDataURIOnCanvas(strDataURI, canvas) {
        'use strict';
        var img = new window.Image();
        img.addEventListener('load', function () {
            canvas.getContext('2d').drawImage(img, 0, 0);
        });
        img.setAttribute('src', strDataURI);
    }

    // To wipe the slate clean, we dump stored imagedata and then reset each canvas
    function wipeSlate() {
        for (let canvas of canvases) {
            let id = canvas.getAttribute('id');
            localStorage.removeItem(`${id}-snapshot`);
            resetCanvas(canvas);
        }

    }

})();
