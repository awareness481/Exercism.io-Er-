class Transcriptor {
  toRna(x) {
    this.DNA = x;

    const trKeys = {
      G: 'C',
      C: 'G',
      A: 'U',
      T: 'A',
    };

    for (let i = 0; i < x.length; i++) {
      if (!Object.keys(trKeys).includes(x[i])) throw ('Invalid input DNA.');
    }

    // const re = /C|G|A|T/g;

    this.DNA = [...this.DNA]
      .map(i => trKeys[i] || i).join('');

    return this.DNA;
  }
}

export default Transcriptor;
