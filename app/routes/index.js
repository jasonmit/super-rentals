import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  setupController(controller) {
    this._super(...arguments);

    controller.set('filteredList', Ember.A());
  }
});
