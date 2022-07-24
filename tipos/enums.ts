
(() => {
    enum AudioLevel {
        min,
        medium, 
        max
    }

    const currentAudio: AudioLevel = AudioLevel.max;

    console.log(AudioLevel);
    console.log(currentAudio);
})();