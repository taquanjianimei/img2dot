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

        var container = document.createDocumentFragment()

        var gap = 16
        var scale = 1
        for(var h =0;h < img.height;h+=gap) {
            for(var w = 0;w < img.width;w+=gap) {
                var position = (img.width * h + w) * 4
                var r = imgData[position]
                    g = imgData[position + 1]
                    b = imgData[position + 2]
                if(r+g+b <= 20) {
                    var bubble = document.createElement('img')
                    bubble.src= './bubble.png'
                    bubble.setAttribute('class', 'bubble')

                    const bubbleSize = Math.random() * 6 + 10
                    bubble.style.left = (w * scale - bubbleSize / 2) + 'px'
                    bubble.style.top = (h * scale - bubbleSize / 2) + 'px'
                    bubble.style.width = bubble.style.height = bubbleSize + 'px'

                    if(Math.random() > 0.8) {
                        bubble.style.animationName = 'breathe'
                        bubble.style.animationDuration = (Math.random() * 4 + 6) + 's'
                    }

                    container.appendChild(bubble)
                }
            }
        }

        document.querySelector('.container').appendChild(container)
    }
}