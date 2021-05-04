window.onload = () => {
    const statuses_circles = document.querySelectorAll(".status-circle");

    statuses_circles.forEach(circle => {
        if (circle.getAttribute('data-size')) {
            const data_size = circle.getAttribute('data-size');
            if (isNaN(data_size)) {
                circle.setAttribute('style', `--size: ${data_size};`)
            } else {
                circle.setAttribute('style', `--size: ${data_size}px;`);
            }

            

            setInterval(() => {
                if (data_size === circle.getAttribute('data-size')) return;

                if (circle.getAttribute('data-size')) {
                    const data_size = circle.getAttribute('data-size');
                    if (isNaN(data_size)) {
                        circle.setAttribute('style', `--size: ${data_size};`)
                    } else {
                        circle.setAttribute('style', `--size: ${data_size}px;`);
                    }
                }
            }, 500);
        }
    })
}