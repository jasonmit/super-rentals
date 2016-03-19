import Ember from 'ember';

const communityPropertyType = [
  'Condo',
  'Townhouse',
  'Apertment'
];

export function rentalPropertyType([type]/*, hash*/) {
  if (communityPropertyType.contains(type)) {
    return 'Community';
  }

  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
