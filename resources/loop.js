window.onload = () => {
    const loopOption = document.querySelector("input#loopOption");
    const label = document.querySelector('label[for="loopOption"]');

    if (localStorage.getItem('loop')) {
        window.loop = localStorage.getItem('loop');
    } else {
        localStorage.setItem('loop', window.loop);
    }

    loopOption.checked = window.loop;
    if (loopOption.checked) {
        label.classList.add('checked');
    } else {
        label.classList.remove('checked');
    }

    loopOption.onchange = (e) => {
        console.dir(e.target.checked);
        localStorage.setItem(`loop`, e.target.checked);
        window.loop = e.target.checked;

        if (e.target.checked) {
            label.classList.add('checked');
            if (song.currentTime === song.duration) song.play();
        } else {
            label.classList.remove('checked');
        }

        localStorage.setItem('loop', window.loop);
    }
}