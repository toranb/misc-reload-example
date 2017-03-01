import Ember from 'ember';

var x = 113;

export default Ember.Component.extend({
    yoyo: Ember.computed(function() {
        return x + 1;
    })
});
