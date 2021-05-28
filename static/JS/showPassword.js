const togglePassword2 = document.querySelector('#togglePassword2');
		const togglePassword3 = document.querySelector('#togglePassword3');

		const password2 = document.querySelector('#password2');
		const password3 = document.querySelector('#password3');


		togglePassword2.addEventListener('click', function (e) {
			// toggle the type attribute
			const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
			password2.setAttribute('type', type);
			// toggle the eye slash icon
			this.classList.toggle('fa-eye-slash');
		});
		togglePassword3.addEventListener('click', function (e) {
			// toggle the type attribute
			const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
			password3.setAttribute('type', type);
			// toggle the eye slash icon
			this.classList.toggle('fa-eye-slash');
		});

