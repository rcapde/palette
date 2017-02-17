import React, { Component } from 'react';
import '../css/Palette.css';
import Color from '../components/color';

class Palette extends Component {
  render() {
    return (
      <div className="palette">
        <div className="colorgallery">
          <Color colorcode={'#af111c'} colorname={'Blood'} fontcolor={'#222'} />
          <Color colorcode={'#d82020'} colorname={'Lipstick'} fontcolor={'#222'}/>
          <Color colorcode={'#f34a4a'} colorname={'Neon'} fontcolor={'#222'}/>
          <Color colorcode={'#ffdb5c'} colorname={'Banana'} fontcolor={'#222'}/>
          <Color colorcode={'#fcc875'} colorname={'Honey'} fontcolor={'#222'}/>
          <Color colorcode={'#f1d3bc'} colorname={'Crepe'} fontcolor={'#222'}/>
          <Color colorcode={'#f4f4ef'} colorname={'Paper'} fontcolor={'#222'}/>
          <Color colorcode={'#a1d6e2'} colorname={'Ice'} fontcolor={'#222'}/>
          <Color colorcode={'#7caa2d'} colorname={'Leaf'} fontcolor={'#222'}/>
          <Color colorcode={'#258039'} colorname={'Avocado'} fontcolor={'#222'}/>
          <Color colorcode={'#a0b084'} colorname={'Sage'} fontcolor={'#222'}/>
          <Color colorcode={'#257985'} colorname={'Sea'} fontcolor={'#222'}/>
          <Color colorcode={'#4897d8'} colorname={'Electric'} fontcolor={'#222'}/>
          <Color colorcode={'#138d90'} colorname={'Turquoise'} fontcolor={'#222'}/>
          <Color colorcode={'#063852'} colorname={'Blueberry'} fontcolor={'#222'}/>
          <Color colorcode={'#4c3f54'} colorname={'Fig'} fontcolor={'#777'}/>
          <Color colorcode={'#42313a'} colorname={'Mahogany'} fontcolor={'#777'}/>
          <Color colorcode={'#2d3033'} colorname={'Coal'} fontcolor={'#777'}/>
          <Color colorcode={'#20232a'} colorname={'Ink'} fontcolor={'#777'}/>
          <Color colorcode={'#1e1e20'} colorname={'Blackish'} fontcolor={'#777'}/>
        </div>
      </div>
    );
  }
}

export default Palette;
