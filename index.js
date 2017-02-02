var StateToggleBehavior = {
  ready : function() {
    var eles = this.querySelectorAll('[state]');
    for( var i = 0; i < eles.length; i++ ) {
      eles[i].style.display = 'none';
    }
  },

  toggleState : function(state) {
    var eles = this.querySelectorAll('[state]');
    var i, ele;
    for( i = 0; i < eles.length; i++ ) {
      ele = eles[i];
      ele.style.display = (ele.getAttribute('state') === state) ? 'block' : 'none';
    }
  }
}