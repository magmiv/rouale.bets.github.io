var wrapperOfRegister = document.getElementsByClassName('wrapper-of-forms')[0]
			var login = document.getElementsByClassName('login')[0]
			var password = document.getElementsByClassName('password')[0]
			var repeatPassword = document.getElementsByClassName('password')[1]
			var email = document.getElementsByClassName('email')[0]
			var passwordValue = ''


			var loginErrorText = document.createElement('p')
			loginErrorText.classList.add('error-text-active')

			var passwordErrorText = document.createElement('p')
			passwordErrorText.classList.add('error-text-active')

			var repeatPasswordErrorText = document.createElement('p')
			repeatPasswordErrorText.classList.add('error-text-active')
			var repeatError = false
			var passwordTrue = true

			var emailErrorText = document.createElement('p')
			emailErrorText.classList.add('error-text-active')

			login.oninput = function () {
				if (login.value.length >= 35) {
					loginErrorText.innerHTML = 'Слишком длинный логин'
					wrapperOfRegister.insertBefore(loginErrorText, login)
					login.classList.add('error')
				}
				if (login.value.length < 35) {
					loginErrorText.innerHTML = ''
					login.classList.remove('error')
				}
			}

			password.oninput = function () {
				passwordValue = password.value
				if (repeatPassword.value.length >= password.value.length && repeatPassword.value != passwordValue) {
					passwordTrue = false
					repeatPasswordErrorText.innerHTML = 'Пароли не совпадают'
					wrapperOfRegister.insertBefore(repeatPasswordErrorText, repeatPassword)
					repeatPassword.classList.add('error')
				}
				if (repeatPassword.value == passwordValue) {
					passwordTrue = false
					repeatPasswordErrorText.innerHTML = ''
					repeatPassword.classList.remove('error')
				}
				if (password.value.length >= 35) {
					passwordErrorText.innerHTML = 'Слишком длинный пароль'
					wrapperOfRegister.insertBefore(passwordErrorText, password)
					password.classList.add('error')
				}
				if (password.value.length < 35) {
					passwordErrorText.innerHTML = ''
					password.classList.remove('error')
				}
			}
			repeatPassword.oninput = function () {
				if (repeatPassword.value.length >= password.value.length && repeatPassword.value != passwordValue) {
					passwordTrue = false
					repeatPasswordErrorText.innerHTML = 'Пароли не совпадают'
					wrapperOfRegister.insertBefore(repeatPasswordErrorText, repeatPassword)
					repeatPassword.classList.add('error')
				}
				if (repeatPassword.value <= password.value.length) {
					repeatPasswordErrorText.innerHTML = ''
					repeatPassword.classList.remove('error')
				}
				if (repeatPassword.value == passwordValue) {
					passwordTrue = false
					repeatPasswordErrorText.innerHTML = ''
					repeatPassword.classList.remove('error')
				}
				if (repeatPassword.value.length >= 35 && passwordTrue) {
					repeatPasswordErrorText.innerHTML = 'Слишком длинный пароль'
					wrapperOfRegister.insertBefore(repeatPasswordErrorText, repeatPassword)
					repeatPassword.classList.add('error')
					repeatError = true
				}
				if (repeatPassword.value.length < 35 && repeatError) {
					repeatPasswordErrorText.innerHTML = ''
					repeatPassword.classList.remove('error')
				}
			}
			email.oninput = function () {
				if (email.value.length >= 40) {
					emailErrorText.innerHTML = 'Слишком длинная почта'
					wrapperOfRegister.insertBefore(emailErrorText, email)
					email.classList.add('error')
				}
				if (email.value.length < 40) {
					emailErrorText.innerHTML = ''
					email.classList.remove('error')
				}
			}