import React from 'react';
import ReactDOM from 'react-dom';



class PokeExercice extends React.Component {
  constructor(props) {
    super(props);
      
    // on set à vide tous les attributs utilises plus tard
    this.state = {
      body: "",
      value: "",
      name: "", //name:"test",
      stats:"",
      types:"",
    };
//liaison du nouveau this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

// connexion api https://pokeapi.co/docs/v2.html#pokemon
  handleSubmit(event) {
    //alert('test envoie: ' + this.state.value);
    /*fetch(`http://pokeapi.co/api/v2/pokemon/{this.state.value}/`)
          .then(response => response.json())
          .then(data => { this.setState({
                body: response.body,
                name: response.body.name,
                stats: response.body.stats,
                types: response.body.types,
            });
          })
          .catch(err => console.log(err));
      }*/
        let url = "https://pokeapi.co/api/v2/pokemon/"+this.state.value;
//      récup infos souhaitées
        Request.get(url).then((response) => {
            this.setState({
                body: response.body,
                name: response.body.name,
                stats: response.body.stats,
                types: response.body.types,
            });
        });
        event.preventDefault();
  }

    
  render() {
    return (
        
        /* formulaire de recherche basique
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        
      </form>
      
      

//         liste affichage noms
//                <ul>
//                    {this.state.response.map(function(affiche) {              erreur sur le map de response->inconnu 
//                          return <li>{this.response.name}</li>
//                     })}
//               </ul>

      */
        <div>
        <div>
          <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Rechercher" />
          </form>
        </div>
        <div className="affichage">
          <h1>{this.state.name}</h1>
          <p>types:{this.state.types}</p>
          <p>Base stats:{this.state.stats}</p>
        </div>
        </div>
    );
      
  }
}

ReactDOM.render(
  <PokeExercice />,
  document.getElementById('root')
);