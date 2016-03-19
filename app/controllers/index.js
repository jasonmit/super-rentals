import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: null,

  actions: {
    autoComplete(param) {
      if (param !== "") {
        this.store.query('rental', { city: param }).then((result) => {
          this.set('filteredList', result.toArray());
        });
      } else {
        this.get('filteredList').clear();
      }
    },
    search(param) {
      if (param !== "") {
        this.store.query('rental', {city: param}).then((result) => {
          this.set('model', result.toArray());
        });
      } else {
        this.get('model').clear();
      }
    }
  }
});
