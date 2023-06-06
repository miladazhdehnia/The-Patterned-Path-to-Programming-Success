class Instrumental {
    play() {
      return '...';
    }
  }
  
  class Guitar extends Instrumental {
    play() {
      return '🎸🎵🤘';
    }
  }
  
  class Drums extends Instrumental {
    play() {
      return '🥁🎵🤘';
    }
  }
  
  class Bass extends Instrumental {
    play() {
      return '🎸(bass)🎵🤘';
    }
  }
  
  class Song extends Instrumental {
    constructor() {
      super();
      this.instrumentals = [];
    }
  
    addInstrumental(instrumental) {
      this.instrumentals.push(instrumental);
    }
  
    play() {
      let song = '';
      this.instrumentals.forEach((instrumental) => {
        song += `${instrumental.play()} `;
      });
      return song;
    }
  }
  
  // Usage:
  const guitar = new Guitar();
  const drums = new Drums();
  const bass = new Bass();
  
  const verse = new Song();
  verse.addInstrumental(guitar);
  verse.addInstrumental(drums);
  verse.addInstrumental(bass);
  
  const chorus = new Song();
  chorus.addInstrumental(guitar);
  chorus.addInstrumental(drums);
  
  const song = new Song();
  song.addInstrumental(verse);
  song.addInstrumental(chorus);
  
  console.log(song.play()); // Output: 🎸🎵🤘 🥁🎵🤘 🎸(bass)🎵🤘 🎸🎵🤘 🥁🎵🤘