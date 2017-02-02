var StateToggleBehavior = {
  toggleState : function(state) {
    var eles = this.querySelectorAll('[state]');
    var i, ele;
    for( var i = 0; i < eles.length; i++ ) {
      ele = eles[i];
      ele.style.display = (eles.getAttribute('state') === state) ? 'block' : 'none';
    }
  }
}