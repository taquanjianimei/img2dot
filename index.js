window.onload = () => {
    var canvas = document.querySelector('#canvas')
    var ctx = canvas.getContext('2d')

    var img = new Image()
    img.src = './dragon.jpeg'
    img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        renderDot()
    }

    var renderDot = () => {
        var imgData = ctx.getImageData(0, 0, img.width, img.height).data
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, img.width, img.height)

        var gap = 4
        for(var h =0;h < img.height;h+=gap) {
            for(var w = 0;w < img.width;w+=gap) {
                var position = (img.width * h + w) * 4
                var r = imgData[position]
                    g = imgData[position + 1]
                    b = imgData[position + 2]
                if(r+g+b <= 90) {
                    ctx.fillStyle = '#000'
                    ctx.fillRect(w, h, 4, 4)
                }
            }
        }
    }
}