import Ember from 'ember';

export default Ember.Component.extend({
  isBedroomsShowing: false,

  actions: {
    imageShow() {
      this.set('isBedroomsShowing', true);
    },

    imageHide() {
      this.set('isBedroomsShowing', false);
    }
  }
});
