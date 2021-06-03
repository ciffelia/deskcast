const startButton = document.getElementById('startButton')

startButton.addEventListener('click', async () => {
  startButton.disabled = true

  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: true
  })

  const audioContext = new AudioContext()
  const source = audioContext.createMediaStreamSource(stream)
  source.connect(audioContext.destination)
})
