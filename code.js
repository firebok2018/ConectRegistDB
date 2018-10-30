// JavaScript Document

$(document).ready(function(){
	
	$('#re').click(function(){
		
		 var email=$('#email').val();
		var pwd = $('#pwd').val();
		firebase.auth().createUserWithEmailAndPassword(email, pwd).then(function (){
			verificarRegistro()
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
			console.log(errorCode, errorMessage)
		  // ...
		});
		console.log(email, pwd)
	});
	$('#in').click(function(){
		var email=$('#email').val();
		var pwd = $('#pwd').val();
		firebase.auth().signInWithEmailAndPassword(email, pwd).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		   var errorCode = error.code;
		  var errorMessage = error.message;
			console.log(errorCode, errorMessage)
			//error.preventDefault()
		});
	})
	
	
	function OnlineView(){
		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
			  console.log('exite usuario activo')
			// User is signed in.
			  estado(user);
			var displayName = user.displayName;
			var email = user.email;
			var emailVerified = user.emailVerified;
			var photoURL = user.photoURL;
			var isAnonymous = user.isAnonymous;
			var uid = user.uid;
			var providerData = user.providerData;
			// ...
			  
			  //console.log(user)
			  console.log(user.email)
			  console.log(user.emailVerified);
		  } else {
			// User is signed out.
			// ...
			  console.log('noexite usuario activo')
		  }
		});
	}
	
	OnlineView();
	function estado(user){
		
		if(user.emailVerificated){
			$('#up').html('<input type="button" value="salir" id="cerrar">')
			$('#cerrar').click(function(){
			firebase.auth().signOut().then(function() {
				  console.log('cerrando sesion')
			}).catch(function(error) {
				  console.log(error)
				});
				//alert('sad')
			})
		}
		
		
	}
	
	function verificarRegistro(){
		var user = firebase.auth().currentUser;

		user.sendEmailVerification().then(function() {
		  // Email sent.
			console.log('enviando correo')
		}).catch(function(error) {
		  // An error happened.
			console.log(error)
		});
	}
	
	
	
		

})