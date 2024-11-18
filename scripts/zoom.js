function ImgZoom(imgID, resultID) {
    const img = document.getElementById(imgID);
    const result = document.getElementById(resultID);

    result.style.display = 'none';
    result.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`;

    img.addEventListener('mousemove', function (e) {
        const imgRect = img.getBoundingClientRect();

        const x = e.clientX - imgRect.left;
        const y = e.clientY - imgRect.top;

        const lensWidth = 100;
        const lensHeight = 100;

        result.style.display = 'block';
        result.style.width = `${lensWidth}px`;
        result.style.height = `${lensHeight}px`;
        result.style.left = `${x - lensWidth / 2}px`;
        result.style.top = `${y - lensHeight / 2}px`;


        const zoomLevel = 2;

        const bgPosX = (x * zoomLevel - lensWidth / 2);
        const bgPosY = (y * zoomLevel - lensHeight / 2);


        result.style.backgroundImage = `url('${img.src}')`;
        result.style.backgroundPosition = `-${bgPosX}px -${bgPosY}px`;

        result.style.backgroundSize = `${img.width * zoomLevel}px ${img.height * zoomLevel}px`;
    });


    img.addEventListener('mouseleave', function () {
        result.style.display = 'none';
    });
}

ImgZoom('mapimage2', 'myresult');
