function ImgZoom(imgID, resultID) {
    const img = document.getElementById(imgID);
    const result = document.getElementById(resultID);

    result.style.display = 'none';
    result.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`;

    img.addEventListener('mousemove', function (e) {
        const imgRect = img.getBoundingClientRect();

        const x = e.clientX - imgRect.left;
        const y = e.clientY - imgRect.top;

        const lensWidth = 70;
        const lensHeight = 70;

        result.style.display = 'block';
        result.style.width = `${lensWidth}px`;
        result.style.height = `${lensHeight}px`;

        let posX = x - lensWidth / 2;
        let posY = y - lensHeight / 2; 

        if (posX < 0){
            posX = 0;
        }
        if (posY < 0){
            posY = 0;
        }
        if (posX + lensWidth > imgRect.width){
            posX = imgRect.width - lensWidth;
        }
        if (posY + lensHeight > imgRect.height){
            posY = imgRect.height - lensHeight;
        }
        result.style.left = `${imgRect.left + posX}px`;
        result.style.top = `${imgRect.top + posY}px`;


        const zoomLevel = 3;

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
